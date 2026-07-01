import B2BMain from "@/components/home/B2BMain";
import FloatingButtons from "@/components/common/FloatingButtons";

// 1. 워드프레스에서 넘어오는 개별 포트폴리오 데이터의 타입을 정의합니다.
export interface PortfolioNode {
  slug: string;
  title: string;
  date: Date;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  acfPortfolios?: {
    category: string;
    workDate?: Date;
    workerName?: string;
  };
}

export default async function Home() {
  return (
    <div className="relative w-full">
      <B2BMain />
      <FloatingButtons />
    </div>
  );
}
