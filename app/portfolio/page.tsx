import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";

// params 객체로 URL의 [slug] 값을 받아옵니다.
export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 2. 글이 없을 경우 에러 처리 (404)
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  // 3. 상세 페이지 렌더링
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        {/* 상단: 뒤로가기 버튼 및 날짜 */}
        <div className="mb-8 flex items-center justify-between text-sm text-slate-500">
          <Link
            href="/"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          >
            <span>&larr;</span> 목록으로 돌아가기
          </Link>
        </div>

        {/* 메인 타이틀 */}
      </article>
    </main>
  );
}
