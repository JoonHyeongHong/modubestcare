'use client';

import { useState } from 'react';

const FAQ_LIST = [
  { q: "세척 시간은 얼마나 걸리나요?", a: "기종에 따라 다르지만 통상 벽걸이는 1시간, 천장형 4Way는 1시간 30분 내외가 소요됩니다." },
  { q: "B2B 대량 세척 시 야간 작업도 가능한가요?", a: "네, 관공서나 사무실 등 업무 시간을 피해야 하는 경우 야간 및 주말 작업 일정을 조율해 드립니다." },
  { q: "세척 후 AS 기간은 어떻게 되나요?", a: "세척 후 작동 이상에 대해 3개월간 무상 AS를 보장해 드립니다." },
  { q: "카드 결제나 세금계산서 발행이 가능한가요?", a: "네, 모든 결제는 카드 가능하며 법인 사업자 세금계산서 발행도 당연히 가능합니다." },
  { q: "인천 외 지역도 방문하시나요?", a: "현재 인천 전 지역과 김포 지역을 주력으로 서비스하고 있으며, 대량 세척의 경우 경기권까지 협의 가능합니다." },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-6 flex flex-col h-full py-8">
        
        <div className="text-center mb-8 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">자주 묻는 질문</h2>
          <p className="text-gray-500 mt-2 text-sm">궁금하신 점을 빠르게 확인해보세요.</p>
        </div>

        {/* FAQ 리스트 영역 */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar space-y-3">
          {FAQ_LIST.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-sm md:text-base">
                  <span className="text-blue-600 mr-2">Q.</span> {item.q}
                </span>
                <span className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3 bg-blue-50/30">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 추가 안내 (선택사항) */}
        <div className="mt-6 p-4 bg-blue-600 rounded-xl text-center flex-shrink-0">
          <p className="text-white text-sm font-medium">더 궁금하신 점은 문의하기를 통해 남겨주세요!</p>
        </div>
      </div>
    </section>
  );
}