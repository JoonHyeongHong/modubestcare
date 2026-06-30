import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import B2BMain from "@/components/home/B2BMain";

import { fetchAPI } from "../lib/api";
import SideScrollNav from "@/components/common/SideScrollNav";
const GET_PORTFOLIOS_QUERY = `
  query GetPortfolios {
    posts(first: 6, where: { categoryName: "portfolio" }) {
      nodes {
        slug    # <- 추가된 부분
        title 
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }   
    }
  }
`;

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
  // 1. API 통신으로 워드프레스 데이터 패칭
  const data = await fetchAPI(GET_PORTFOLIOS_QUERY);

  // 2. 혹시 데이터가 없을 경우를 대비해 빈 배열([]) 처리
  const portfolios: PortfolioNode[] = data?.posts?.nodes || [];

  return (
    <div className="relative w-full">
      <Navbar />
      <SideScrollNav />
      <B2BMain />
    </div>
  );
}
