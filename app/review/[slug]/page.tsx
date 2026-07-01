import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import PageHeader from "@/components/common/PageHeader";
import Navbar from "@/components/common/Navbar";

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
      <main className="min-h-screen bg-white pt-24 pb-16">
        <Navbar />
        <PageHeader title="작업 후기" subtitle="Cleaning Service Review" />
        <div className="min-h-screen flex items-center justify-center">
          게시글을 찾을 수 없습니다.
        </div>
      </main>
    );
  }

  // 3. 상세 페이지 렌더링
  return (
    <main className="min-h-screen bg-white pb-16">
      <Navbar />
      <PageHeader title="작업 후기" subtitle="Cleaning Service Review" />
      <article className="max-w-3xl mx-auto px-6">
        {/* 상단: 뒤로가기 버튼 및 날짜 */}
        <div className="mb-8 flex items-center justify-between text-sm text-slate-500">
          <Link
            href="/review"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          >
            <span>&larr;</span> 목록으로 돌아가기
          </Link>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("ko-KR")}
          </time>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* 썸네일 이미지 (있을 경우) */}
        {post.featuredImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.sourceUrl}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* 워드프레스 본문 (HTML 렌더링) */}
        {/* ⚡ 워드프레스 에디터에서 작성한 이미지와 글씨가 모두 여기에 들어갑니다. */}
        <div
          className="prose prose-slate prose-lg max-w-none 
                     prose-img:rounded-xl prose-img:shadow-sm prose-headings:font-bold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
