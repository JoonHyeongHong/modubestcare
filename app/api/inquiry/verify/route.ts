import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { postId, phone } = await request.json();

    let realNumericId = postId;
    // Base64 글로벌 ID 처리 로직 (기존 유지)
    if (isNaN(Number(postId))) {
      const decodedString = Buffer.from(postId, "base64").toString("utf-8");
      realNumericId = decodedString.split(":")[1];
    }

    // 1. 해당 포스트의 실제 ACF 연락처 정보를 워드프레스 백엔드에서 직접 가져옵니다.
    const token = btoa(
      `user:${process.env.NEXT_PUBLIC_WORDPRESS_API_APPLICATION_PASSWORD}`,
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_POSTS_URL}/${postId}`,
      {
        headers: { Authorization: `Basic ${token}` },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { authenticated: false, message: "글을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    const post = await res.json();
    const realPhoneNumber = post.acf?.phone;

    const clientPhoneStr = phone ? phone.replace(/-/g, "") : "";
    const serverPhoneStr = realPhoneNumber
      ? realPhoneNumber.replace(/-/g, "")
      : "";

    if (clientPhoneStr === serverPhoneStr && serverPhoneStr !== "") {
      return NextResponse.json({
        authenticated: true,
        acfData: post.acf,
      });
    } else {
      return NextResponse.json(
        {
          authenticated: false,
          message: "연락처 정보가 일치하지 않습니다.",
        },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("비밀번호 확인 API 에러:", error);
    return NextResponse.json(
      { authenticated: false, message: "서버 에러가 발생했습니다." },
      { status: 500 },
    );
  }
}
