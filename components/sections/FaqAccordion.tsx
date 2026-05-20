'use client';

import { useState } from 'react';

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

  return (
    <section id="faq" className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 pb-12 box-border">
      <div className="max-w-2xl w-full mx-auto px-4 flex flex-col justify-center h-full min-h-0">
        
        <div className="text-center mb-5 flex-shrink-0">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${viewMode === 'b2b' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
            FAQ
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-950 mt-2">자주 묻는 질문</h2>
        </div>

        {/* 아코디언 리스트 */}
        <div className="space-y-2 flex-1 md:flex-none overflow-y-auto max-h-[50vh] mb-4 pr-1">
          {currentFaq.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-xs overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-4 py-3.5 text-left font-bold text-xs md:text-sm text-gray-900 flex justify-between items-center bg-white hover:bg-gray-50 outline-none"
                >
                  <span className="break-keep pr-4">{faq.question}</span>
                  <span className={`text-xs text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-gray-600 bg-gray-50/50 border-t border-gray-50 leading-relaxed break-keep animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 하단 유도 캡션 */}
        <div className="text-center bg-white p-3.5 rounded-xl border border-gray-200/60 flex-shrink-0 shadow-xs">
          <p className="text-xs text-gray-600 font-medium break-keep">
            💡 더 궁금하신 점은 하단의 <span className={`font-bold ${viewMode === 'b2b' ? 'text-blue-600' : 'text-emerald-600'}`}>지원 및 문의하기</span> 섹션을 이용해 주세요!
          </p>
        </div>

      </div>
    </section>
  );
}