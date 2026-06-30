import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import B2BMain from "@/components/home/B2BMain";

import SideScrollNav from "@/components/common/SideScrollNav";

// 1. 워드프레스에서 넘어오는 개별 포트폴리오 데이터의 타입을 정의합니다.
export interface PortfolioNode {
  slug: string;
  title: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export default async function Home() {
  return (
    <div className="relative w-full">
      <Navbar />

      <B2BMain />
    </div>
  );
}
