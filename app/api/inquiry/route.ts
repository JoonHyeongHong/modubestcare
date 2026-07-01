import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, clientName, phone, address, quantity, details } = body;

    // 💡 1. 워드프레스 API 엔드포인트 및 인증 정보
    const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_POSTS_URL as string;

    // 관리자 아이디와 발급받은 '애플리케이션 비밀번호'를 조합
    const token = btoa(
      `user:${process.env.NEXT_PUBLIC_WORDPRESS_API_APPLICATION_PASSWORD}`,
    );

    // 💡 2. 워드프레스 본문(Content)에 들어갈 내용 조립 (HTML 형식)
    const contentHtml = `
      <p><strong>업체/기관명:</strong> ${companyName}</p>
      <p><strong>담당자:</strong> ${clientName}</p>
      <p><strong>연락처:</strong> ${phone}</p>
      <p><strong>주소:</strong> ${address}</p>
      <p><strong>예상 수량:</strong> ${quantity}</p>
      <hr />
      <p><strong>상세 내용:</strong></p>
      <p>${details.replace(/\n/g, "<br/>")}</p>
    `;

    // 💡 3. 워드프레스로 전송
    const res = await fetch(wpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        // 게시글 제목 조합 (예: [견적문의] 모두홈케어 - 홍길동)
        title: `[견적문의] ${companyName} - ${clientName}`,
        content: contentHtml,
        status: "publish", // 즉시 공개
        categories: [4], // ⚠️ 중요: 워드프레스의 '문의게시판' 카테고리 ID 숫자로 변경하세요.
        acf: {
          company_name: companyName,
          client_name: clientName,
          phone: phone,
          address: address,
          quantity: quantity,
          details: details,
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("WordPress Error:", errorData);
      return NextResponse.json(
        { error: "워드프레스 등록 실패" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "서버 에러가 발생했습니다." },
      { status: 500 },
    );
  }
}
