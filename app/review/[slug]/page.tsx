import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import PageHeader from "@/components/common/PageHeader";
import Header from "@/components/common/Header";
// ⚡ 특정 slug를 가진 단일 포스트만 가져오는 GraphQL 쿼리
const GET_SINGLE_PORTFOLIO = `
  query GetSinglePortfolio($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

// params 객체로 URL의 [slug] 값을 받아옵니다.
export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. 워드프레스 데이터 패칭
  const resolvedParams = await params;

  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const uriPath = `/${decodedSlug}`; // 워드프레스는 URI 형태로 슬러그를 인식합니다.
  const data = await fetchAPI(GET_SINGLE_PORTFOLIO, {
    variables: { id: uriPath },
  });

  const post = data?.post;

  // 2. 글이 없을 경우 에러 처리 (404)
  if (!post) {
    return (
      <main className="min-h-screen bg-white pb-16">
        <Header />
        <PageHeader title="작업 후기" subtitle="Cleaning Service Review" />
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-slate-500">게시글을 찾을 수 없습니다.</span>
          <br />
          <Link href="/review" className="ml-4 text-blue-600 hover:underline">
            목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  // 3. 상세 페이지 렌더링
  return (
    <main className="w-full pb-24 bg-white min-h-screen">
      {/* 상단 헤더 영역 (기존 PageHeader 등 유지) */}
      <Header />
      <PageHeader title="작업 후기" subtitle="Cleaning Service Review" />

      <article className="max-w-4xl mx-auto px-5 sm:px-6 mt-10 sm:mt-16">
        {/* 1. 네비게이션 & 메타 정보 영역 */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
          <Link
            href="/review"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#1E3A8A] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            목록으로 돌아가기
          </Link>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-medium">
              작업 완료
            </span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* 2. 타이틀 영역 */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* 3. 본문 & 이미지 갤러리 영역 (워드프레스 HTML 렌더링) */}
        <div
          className="
            prose prose-lg max-w-none text-slate-700 leading-loose
            /* ⚡ 핵심: 워드프레스에서 넘어온 이미지들을 갤러리처럼 예쁘게 꾸밉니다 */
            [&_img]:w-full [&_img]:rounded-2xl [&_img]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] [&_img]:mb-12 [&_img]:border [&_img]:border-slate-100
            /* 텍스트 단락 스타일링 */
            [&_p]:mb-8 [&_p]:text-base sm:[&_p]:text-lg
            /* 소제목 스타일링 */
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-800 [&_h2]:mt-12 [&_h2]:mb-6
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 4. 하단 콜투액션 (CTA) 영역 - 문의 유도 */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center bg-slate-50 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            이 작업과 비슷한 세척이 필요하신가요?
          </h3>
          <p className="text-slate-500 mb-8">
            사진 속 오염도가 고객님의 기기와 비슷하다면, 지금 바로 무료 견적을
            받아보세요.
          </p>
          <Link
            href="/inquiry"
            className="inline-block bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            간편 견적 문의하기
          </Link>
        </div>
      </article>
    </main>
  );
}
