// import {fetchAPI} from '../lib/api';

'use client';

import { useState } from 'react';

import ContactForm from '../components/ContactForm';
import QuoteCalculator from '../components/QuoteCalculator';
import Navbar from '../components/Navbar';
import KakaoButton from '@/components/KakaoButton';
import FaqAccordion from '@/components/FaqAccordion';
import ProcessTabs from '@/components/ProcessTabs';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';


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

  const portfolios: any[] = [];
  const posts: any[] = [];

  return (
    <main className="min-h-screen bg-gray-50 pt-16"> 
      {/* pt-16: 네비게이션 바 높이만큼 메인 콘텐츠를 아래로 밀어줍니다 */}
      
      {/* 0. 스티키 헤더 삽입 */}
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />

      {/* 🟢 화면 전환 영역 (헤더가 덮지 않도록 pt-28 로 상단 여백 추가) */}
      <div className="pb-20 transition-opacity duration-500 ease-in-out">
        {viewMode === 'b2b' ? (

          <div className="animate-fadeIn">

        {/* 1. 헤더 섹션 (id="hero") */}
            <section id="hero" className="bg-[#0F172A] text-white py-16 md:py-24 px-8 scroll-mt-16 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
      {/* 왼쪽: 텍스트 카피 */}
                    <div className="flex-1 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight break-keep">
        호흡기를 위협하는 곰팡이,<br />
        <span className="text-[#FBBF24]">완전 분해 세척</span>이 답입니다.
      </h1>
      <p className="text-xl md:text-2xl opacity-90 mb-8 break-keep">
        인천 서구/김포 지역 관공서, 상가, 사무실 대량 세척 전문
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a href="#calculator" className="bg-white text-[#2563EB] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg text-center">
          예상 견적 확인
        </a>
        <a href="#contact" className="bg-[#2563EB] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1D4ED8] transition shadow-lg text-center border border-[#2563EB]">
          무료 방문 견적
        </a>
      </div>
    {/* 오른쪽: 유튜브 영상 플레이어 */}
    <div className="flex-1 w-full max-w-2xl">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400/30">
        <iframe
          // src의 VIDEO_ID 부분을 실제 유튜브 영상 ID로 교체하세요.
          // 파라미터 설명: autoplay=1(자동재생), mute=1(음소거), loop=1(반복), playlist=VIDEO_ID(반복을 위한 필수값), controls=0(컨트롤바 숨김)
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=tjOr-MBFc-k&controls=0&modestbranding=1"
          title="에어컨 완전 분해 세척 과정"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  </div>
          </div>
</section>



<section id="before-after" className="bg-white py-10">
      <BeforeAfterSlider />
    </section>

{/* 2. 세척 프로세스 탭 섹션 (id="process") */}
        <section id="process" className="px-8 mt-12 scroll-mt-24">
          <ProcessTabs />
        </section>

        {/* 2. 견적 계산기 섹션 (id="calculator") */}
        <section id="calculator" className="px-8 mt-12 scroll-mt-24">
          <QuoteCalculator />
        </section>

        {/* 3. 견적 문의 폼 섹션 (id="contact") */}
        <section id="contact" className="px-8 mt-12 scroll-mt-24">
          <ContactForm />
        </section>

        {/* 4. 워드프레스 포트폴리오 섹션 (id="portfolio") */}
        <section id="portfolio" className="max-w-4xl mx-auto p-8 mt-12 scroll-mt-24">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-3xl font-bold text-gray-800">최근 작업 포트폴리오</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* {portfolios?.map((item, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <div 
                className="text-gray-600 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: item.content }} 
              />
            </div>
          ))} */}
          </div>
        </section>

        {/* 5. FAQ 섹션 (id="faq") */}
        <section id="faq" className="px-8 mt-12 scroll-mt-24">
          <FaqAccordion />
        </section>

      </div>

        ) : (

        /* =========================================
           [ 교육 모드 ] 예비 창업자 교육생용 화면
           ========================================= */
        <div className="animate-fadeIn">
          {/* 1. 교육 모드 메인 히어로 섹션 */}
          <section className="bg-[#10B981] text-white py-16 px-6 rounded-3xl mx-4 md:mx-auto max-w-6xl shadow-2xl mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="bg-white text-[#10B981] px-3 py-1 rounded-full font-bold text-sm mb-6 inline-block shadow-md">제 1기 소수 정예 모집</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight break-keep">
                LG 천장형 시스템 에어컨<br />완전 분해 실무 마스터반
              </h1>
              <p className="text-teal-50 text-lg mb-8 break-keep">
                단순 보조가 아닌, 수료 직후 즉시 1인 창업이 가능한 핵심 기술과 현장 대처 능력을 전수합니다.
              </p>
            </div>
          </section>

          {/* 임시 교육 커리큘럼 안내 영역 */}
          <div className="max-w-5xl mx-auto px-6 text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 mx-4 md:mx-auto">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🧰</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 break-keep">실전 압축 커리큘럼 준비 중입니다.</h2>
            <p className="text-gray-500 break-keep">
              보양 작업부터 프론트 판넬, 드레인판 분해 조립, 130bar 고압 세척기 컨트롤까지<br />
              현장의 깐깐한 문제들을 해결하는 노하우가 곧 업데이트됩니다.
            </p>
          </div>
        </div>

        )}
        </div>

        {/* 6. 간단한 푸터(바닥글) */}
        <footer className="bg-gray-800 text-gray-400 text-center py-8 mt-20">
          <p>© 2026 모두홈케어. All rights reserved.</p>
          <p className="text-sm mt-2"> 에어컨 세척 전문 업체 | 대표번호: 010-0000-0000</p>
        </footer>
        <KakaoButton />
        
    </main>
  );
}

