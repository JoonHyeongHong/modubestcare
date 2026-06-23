'use client';

import { useState } from 'react';
// ⚡ 1. 커스텀 훅 임포트
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

interface FaqProps {
  viewMode?: 'b2b' | 'edu';
}

const FAQ_DATA = {
  b2b: [
    { question: "대량 세척 시 작업 일정 조율이 가능한가요?", answer: "네, 가능합니다. 기업 및 관공서의 업무 공백을 최소화하기 위해 주말, 야간, 공휴일 등 원하시는 시간대에 맞춰 유연하게 투입 일정을 조율해 드립니다." },
    { question: "계산서 발행 및 사후 A/S 보장이 되나요?", answer: "물론입니다. 정식 세금계산서 발행은 물론, 세척 후 문제 발생 시 대기업 규격에 준하는 확실한 사후 A/S 처리를 보장합니다." },
    { question: "인천/김포 외에 타 지역도 대량 세척이 가능한가요?", answer: "기본적으로 인천 서구와 김포 전역을 메인 거점으로 활동하지만, 수량 및 일정에 따라 수도권 전 지역 협의 후 출장 지원이 가능합니다." }
  ],
  edu: [
    { question: "정말 초보자나 비전공자도 지원해서 일할 수 있나요?", answer: "네, 전공이나 기존 경력은 전혀 무관합니다. 모두베스트케어의 정석 완전 분해 교육과 사수 밀착 현장 실습을 거치면 누구나 베테랑 기사로 자립할 수 있습니다." },
    { question: "에어컨 외에 다른 가전 교육도 비용을 따로 내나요?", answer: "아닙니다. 당사의 소속 기사로 활동하실 크루를 양성하는 과정이므로, 에어컨 성수기 이후 비수기(가을·겨울)를 대비한 세탁기, 냉장고, 공기청정기 마스터 교육까지 올인원으로 전폭 지원합니다." },
    { question: "차량이 무조건 있어야 지원이 가능한가요?", answer: "가전 세척 특성상 고압 세척기 등 개인 장비를 적재하고 현장 이동을 해야 하므로, 차량 보유 및 운전이 가능하신 분을 우선적으로 선발하고 있습니다." }
  ]
};

export default function FaqAccordion({ viewMode = 'b2b' }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentFaq = FAQ_DATA[viewMode];
  
  // ⚡ 2. 훅 실행
  const { ref, className } = useScrollFadeIn();

  return (
    // ⚡ 3. 강제 높이 제한(min-h-screen, h-screen) 해제 후 패딩 적용 및 애니메이션 결합
    <section 
      id="faq" 
      ref={ref}
      className={`w-full bg-slate-50 py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="max-w-3xl w-full mx-auto px-6 flex flex-col justify-center">
        
        {/* 헤더 */}
        <div className="text-center mb-10 md:mb-12">
          {/* viewMode에 따른 색상 테마 유지 및 패딩 넉넉하게 수정 */}
          <span className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-full tracking-wide ${viewMode === 'b2b' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            자주 묻는 질문
          </h2>
        </div>

        {/* ⚡ 4. 아코디언 리스트: 내부 스크롤을 막던 max-h-[50vh]와 overflow-y-auto를 완전히 제거했습니다. */}
        <div className="space-y-3 md:space-y-4 mb-8 w-full">
          {currentFaq.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  isOpen ? 'border-blue-300 shadow-md' : 'border-slate-200/60 hover:border-blue-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 md:px-6 md:py-5 text-left font-bold text-sm md:text-base text-slate-900 flex justify-between items-center bg-white hover:bg-slate-50 outline-none transition-colors"
                >
                  <span className="break-keep pr-6 leading-relaxed">{faq.question}</span>
                  {/* 텍스트(▼) 대신 깔끔한 SVG 아이콘으로 교체하여 회전 애니메이션 적용 */}
                  <svg 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 md:px-6 md:pb-6 md:pt-2 text-sm md:text-base text-slate-600 bg-slate-50 border-t border-slate-100 leading-relaxed break-keep animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 하단 유도 캡션 */}
        <div className="text-center bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
          <p className="text-sm md:text-base text-slate-600 font-medium break-keep">
            💡 더 궁금하신 점은 하단의 <span className={`font-bold ${viewMode === 'b2b' ? 'text-blue-600' : 'text-emerald-600'}`}>{viewMode === "b2b"? "견적 문의" : "지원"}하기</span> 섹션을 이용해 주세요!
          </p>
        </div>

      </div>
    </section>
  );
}