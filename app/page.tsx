
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import B2BMain from '@/components/home/B2BMain';

import {fetchAPI} from '../lib/api';
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
    <main className="min-h-screen flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />

      <div className="flex-1 flex flex-col">
        {/* 3. 가져온 portfolios 데이터를 자식 컴포넌트(B2BMain)로 넘겨줍니다 (Props) */}
        <B2BMain portfolios={portfolios} />
      </div>
    </main>
  );
}