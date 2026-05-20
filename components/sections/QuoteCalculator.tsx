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
    // 1. 모바일 뷰포트에서 내용 유실 방지를 위한 min-h-screen 및 pt-20 헤더 가림 방지
    <section 
      id="calculator" 
      className="w-full min-h-screen md:h-screen flex flex-col bg-white overflow-hidden box-border pt-20 scroll-mt-20"
    >
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 flex flex-col justify-center min-h-0 py-2 md:py-6">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-4 md:mb-6 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">실시간 B2B 예상 견적</h2>
          <p className="text-gray-500 mt-1 text-xs md:text-sm">10대 이상 단체 의뢰 시 수량별 자동 할인이 적용됩니다.</p>
        </div>

        {/* 2. [모바일 전용 최적화 퀵 바]: 
            결과판이 아래로 밀리는 모바일 환경에서, 사용자가 수량을 누를 때마다 맨 위에 누적 금액을 실시간으로 노출해 주는 안전장치 
        */}
        <div className="md:hidden w-full bg-blue-600 text-white px-4 py-3 rounded-xl mb-3 flex items-center justify-between shadow-sm flex-shrink-0">
          <div className="flex flex-col">
            <span className="text-[10px] text-blue-200">선택한 총 수량</span>
            <span className="text-sm font-bold">{totalQuantity}대</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-blue-200">실시간 예상 금액</span>
            <span className="text-base font-black text-yellow-300">{finalTotal.toLocaleString()}원</span>
          </div>
        </div>

        {/* 메인 계산기 베이스 바디 박스 */}
        <div className="bg-gray-50 p-3 md:p-6 rounded-2xl border border-gray-200 shadow-inner flex-1 min-h-0 max-h-[75vh] md:max-h-[70vh] flex flex-col overflow-y-auto md:overflow-hidden">
          {/* 모바일에서는 flex-col로 수직 정렬하되, 복잡한 레이아웃 유지를 위해 md:grid 작동 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 items-stretch h-full">
            
            {/* 왼쪽 파트: 수량 입력기 */}
            <div className="space-y-2 md:overflow-y-auto md:pr-2 custom-scrollbar">
              {(Object.keys(PRICING) as AcType[]).map((type) => (
                <div key={type} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="leading-tight">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">{PRICING[type].name}</h3>
                    <p className="text-[11px] md:text-xs text-gray-400 font-medium">{PRICING[type].price.toLocaleString()}원 / 대</p>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-2 py-1 border border-gray-100 select-none">
                    <button 
                      onClick={() => handleCount(type, -1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-blue-600 font-black text-lg transition-colors active:scale-95"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-gray-700 font-bold text-sm md:text-base">{counts[type]}</span>
                    <button 
                      onClick={() => handleCount(type, 1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-blue-600 font-black text-lg transition-colors active:scale-95"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽 파트: 상세 결과 요약판 */}
            <div className="bg-blue-600 text-white p-5 md:p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-lg mt-2 md:mt-0 flex-shrink-0">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
              
              <div className="relative z-10 space-y-3.5">
                <div className="flex justify-between items-center border-b border-blue-400/60 pb-3">
                  <span className="text-blue-100 text-xs md:text-sm font-medium">총 세척 대수</span>
                  <span className="text-lg md:text-2xl font-bold">{totalQuantity}대</span>
                </div>
                
                <div className="space-y-1.5 text-xs md:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">기본 합계 금액</span>
                    <span className="text-sm line-through opacity-60 font-light">{baseTotal.toLocaleString()}원</span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex justify-between items-center text-yellow-300 font-bold animate-pulse">
                      <span>단체 대량 할인 ({discountRate * 100}%)</span>
                      <span>- {discountAmount.toLocaleString()}원</span>
                    </div>
                  )}
                </div>

                {/* 최종 견적 표기 블록 */}
                <div className="pt-3.5 border-t border-blue-400/60 mt-1">
                  <div className="flex justify-between items-end">
                    <span className="text-blue-100 text-sm md:text-base font-bold">최종 예상 견적</span>
                    <span className="text-2xl md:text-4xl font-black text-yellow-300 md:text-white transition-colors duration-200">
                      {finalTotal.toLocaleString()}원
                    </span>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-blue-200 text-right mt-2.5 break-keep leading-tight">
                    * 해당 금액은 부가세 별도이며 현장 오염도, 층고(3.5m 이상)에 따라 일부 조정될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="h-2 md:h-8 flex-shrink-0"></div>
      </div>
    </section>
  );
}