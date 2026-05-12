'use client';

import { useState } from 'react';

const PRICING = {
  wall: { name: '벽걸이형', price: 120000 },
  stand: { name: '스탠드형', price: 180000 },
  way1: { name: '천장형 1Way', price: 150000 },
  way4: { name: '천장형 4Way', price: 180000 },
};

type AcType = keyof typeof PRICING;

export default function QuoteCalculator() {
  const [counts, setCounts] = useState<Record<AcType, number>>({
    wall: 0,
    stand: 0,
    way1: 0,
    way4: 0,
  });

  const handleCount = (type: AcType, delta: number) => {
    setCounts((prev) => ({
      ...prev, [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const totalQuantity = Object.values(counts).reduce((a, b) => a + b, 0);
  const baseTotal = Object.entries(counts).reduce((sum, [type, count]) => sum + PRICING[type as AcType].price * count, 0);

  let discountRate = 0;
  if (totalQuantity >= 30) discountRate = 0.2;
  else if (totalQuantity >= 20) discountRate = 0.15;
  else if (totalQuantity >= 10) discountRate = 0.1;

  const discountAmount = baseTotal * discountRate;
  const finalTotal = baseTotal - discountAmount;

  return (
    // 1. 전체 높이를 꽉 채우되 Navbar 공간(pt-20) 확보
    <section 
      id="calculator" 
      className="w-full h-screen flex flex-col bg-white overflow-hidden box-border"
    >
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center min-h-0">
        
        {/* 헤더 섹션: 간격 축소 */}
        <div className="text-center mb-4 md:mb-6 flex-shrink-0">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight">실시간 B2B 예상 견적</h2>
         
        </div>

        {/* 메인 계산기 박스: 내부 패딩 축소 및 max-height 제어 */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm flex-1 min-h-0 max-h-[70vh] flex flex-col">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch h-full">
            
            {/* 왼쪽: 수량 입력기 (항목 간 간격 축소) */}
            <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
              {(Object.keys(PRICING) as AcType[]).map((type) => (
                <div key={type} className="flex items-center justify-between p-2 md:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="leading-tight">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">{PRICING[type].name}</h3>
                    <p className="text-[11px] md:text-xs text-gray-500">{PRICING[type].price.toLocaleString()}원 / 대</p>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-2 py-1 border border-gray-100">
                    <button 
                      onClick={() => handleCount(type, -1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-blue-600 font-bold text-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-gray-700 font-bold text-sm md:text-base">{counts[type]}</span>
                    <button 
                      onClick={() => handleCount(type, 1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-blue-600 font-bold text-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽: 결과 요약판 (내부 폰트 및 여백 최적화) */}
            <div className="bg-blue-600 text-white p-6 md:p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-lg">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center border-b border-blue-400 pb-3">
                  <span className="text-blue-100 text-sm md:text-base font-medium">총 세척 대수</span>
                  <span className="text-xl md:text-2xl font-bold">{totalQuantity}대</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">기본 견적</span>
                    <span className="text-base line-through opacity-60 font-light">{baseTotal.toLocaleString()}원</span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex justify-between items-center text-yellow-300 font-bold text-sm md:text-base animate-pulse">
                      <span>대량 할인 ({discountRate * 100}%)</span>
                      <span>- {discountAmount.toLocaleString()}원</span>
                    </div>
                  )}
                </div>

                <div className="bg-blue-600 text-white p-5 md:p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                  <div className="flex justify-between items-end">
                    <span className="text-blue-100 text-base md:text-lg">최종 견적</span>
                    <span className="text-3xl md:text-4xl font-extrabold">{finalTotal.toLocaleString()}원</span>
                  </div>
                  <p className="text-[10px] text-blue-200 text-right mt-3 break-keep leading-tight">
                    * 현장 오염도 및 층고에 따라 실제 견적은 달라질 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-4 md:h-8 flex-shrink-0"></div>
      </div>
    </section>
  );
}