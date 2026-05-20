'use client';

import { useState } from 'react';

const FAQ_DATA = [
  { q: "세척 시간은 얼마나 걸리나요?", a: "기종에 따라 다르지만 통상 벽걸이는 1시간, 천장형 4Way는 1시간 30분 내외가 소요됩니다." },
  { q: "B2B 대량 세척 시 야간 작업도 가능한가요?", a: "네, 관공서나 사무실 등 업무 시간을 피해야 하는 경우 야간 및 주말 작업 일정을 조율해 드립니다." },
  { q: "세척 후 AS 기간은 어떻게 되나요?", a: "세척 후 작동 이상에 대해 3개월간 무상 AS를 보장해 드립니다." },
  { q: "카드 결제나 세금계산서 발행이 가능한가요?", a: "네, 모든 결제는 카드 가능하며 법인 사업자 세금계산서 발행도 당연히 가능합니다." },
  { q: "인천 외 지역도 방문하시나요?", a: "현재 인천 전 지역과 김포 지역을 주력으로 서비스하고 있으며, 대량 세척의 경우 경기권까지 협의 가능합니다." },
];

export default function FaqAccordion() {
  // ⚡ 초깃값을 null로 주어 처음엔 모든 질문이 단정하게 닫혀 있도록 설정
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 pb-12 box-border">
      <div className="max-w-2xl w-full mx-auto px-4 flex flex-col justify-center h-full min-h-0">
        
        <div className="text-center mb-4 flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-950">자주 묻는 질문</h2>
        </div>

        {/* 아코디언 리스트 */}
        <div className="space-y-2 flex-1 md:flex-none overflow-y-auto max-h-[50vh] mb-4 pr-1">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-xs overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 py-3 text-left font-bold text-xs md:text-sm text-gray-900 flex justify-between items-center bg-white hover:bg-gray-50"
                >
                  <span>{faq.q}</span>
                  <span className={`text-xs text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {/* 열릴 때만 자연스럽게 노출 */}
                {isOpen && (
                  <div className="px-4 pb-3 pt-1 text-xs md:text-sm text-gray-600 bg-gray-50/50 border-t border-gray-50 leading-relaxed break-keep">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ⚡ 하단 안내문 레이어 (여백 축소로 모바일 가시성 100% 확보) */}
        <div className="text-center bg-blue-50/60 p-3.5 rounded-xl border border-blue-100/50 flex-shrink-0">
          <p className="text-xs text-gray-600 font-medium">
            💡 더 궁금하신 점은 <span className="text-blue-600 font-bold">문의하기</span>를 통해 남겨주세요!
          </p>
        </div>

      </div>
    </section>
  );
}