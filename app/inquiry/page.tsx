import InquiryBoard from "@/components/sections/InquiryBoard";
import InquiryForm from "@/components/sections/InquiryForm";
import PageHeader from "@/components/common/PageHeader";

// 1. 서버 측에서 GraphQL을 통해 게시글 목록을 가져오는 함수
async function getInquiryPosts() {
  const query = `
    query GetInquiries {
      posts(where: {categoryName: "inquiry"}) {
        nodes {
          databaseId
          title
          date
          acfInquiry {
            companyName
            clientName
            address
            quantity
            details
          }
        }
      }
    }
  `;
  const url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    // 문의 게시판은 글을 쓰자마자 목록에 바로 떠야 하므로 캐시를 사용하지 않습니다.
    cache: "no-store",
  });

  const json = await res.json();
  const nodes = json.data?.posts?.nodes || [];

  // 2. 서버에서 데이터를 안전하게 가공 (이름 마스킹, 날짜 포맷)
  return nodes.map((post: any) => {
    const rawName = post.acfInquiry?.clientName || "익명";

    // 이름 마스킹 로직 (홍길동 -> 홍*동, 김철 -> 김*)
    const maskedName =
      rawName.length > 2
        ? rawName[0] + "*" + rawName.slice(2)
        : rawName[0] + "*";

    // 날짜 포맷 (예: 2026. 7. 1.)
    const formattedDate = new Date(post.date).toLocaleDateString("ko-KR");

    return {
      id: post.databaseId,
      title: post.title,
      date: formattedDate,
      name: maskedName,
    };
  });
}

// 3. 메인 페이지 컴포넌트
export default async function InquiryPage() {
  // 서버에서 데이터 페칭 및 가공 완료
  const posts = await getInquiryPosts();

  return (
    <main className="w-full pb-20 bg-gray-50 min-h-screen">
      {/* 이전에 만든 페이지 헤더 재사용 */}
      <PageHeader title="문의 게시판" subtitle="Inquiry Board" />
      <InquiryForm />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">문의 내역</h3>
          <span className="text-sm font-medium text-slate-500">
            총 <span className="text-[#1E3A8A] font-bold">{posts.length}</span>
            건
          </span>
        </div>

        {/* 불러온 데이터를 InquiryBoard로 전달 */}
        <InquiryBoard posts={posts} />
      </div>
    </main>
  );
}
