// import {fetchAPI} from '../lib/api';

'use client';

import { useState } from 'react';


import Navbar from '@/components/common/Navbar';

import EduMain from '@/components/home/EduMain';
import B2BMain from '@/components/home/B2BMain';
import Footer from '@/components/common/Footer';

const GET_PORTFOLIOS_QUERY = `
  query GetPortfolios {
    portfolios {
      nodes {
      title 
      content
      }   
    }
  }
`;




// 1. 워드프레스에서 넘어오는 개별 포트폴리오 데이터의 타입을 정의합니다.
interface PortfolioNode {
  title: string;
  content: string;
}

// 2. GraphQL 전체 응답 구조의 타입을 정의합니다.
interface PortfoliosData {
  portfolios: {
    nodes: PortfolioNode[];
  };
}

export default function Home() {
  //fetchAPI의 결과값이 PortfoliosData 타입이라고 지정해줍니다.
  //const data: PortfoliosData = await fetchAPI(GET_PORTFOLIOS_QUERY);
  //const portfolios = data?.portfolios?.nodes || [];

  const [viewMode, setViewMode] = useState<'b2b' | 'edu'>('b2b');

  return (
    // md: 즉, 데스크톱 환경(768px 이상)에서만 h-screen 및 스냅 작동
    <main className="relative min-h-screen md:h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-gray-50">
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />

      <div className="flex-1 flex flex-col">
        {viewMode === 'b2b' ? <B2BMain /> : <EduMain />}
      </div>
      <Footer/>
    </main>
  );
}

