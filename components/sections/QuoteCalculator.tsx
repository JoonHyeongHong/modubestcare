'use client';

import { useState } from 'react';
// ⚡ 1. 커스텀 애니메이션 훅 임포트
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

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

  // ⚡ 2. 훅 실행하여 ref와 className 가져오기
  const { ref, className } = useScrollFadeIn();

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
    // ⚡ 3. 강제 높이(h-screen) 및 스크롤 제한(overflow-hidden) 제거 후 패딩 적용
    // ref와 className을 씌워 애니메이션 적용
    <section 
      id="calculator" 
      ref={ref}
      className={`w-full bg-white py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-8 md:mb-12">
          {/* ⚡ 폰트 크기와 색상 톤(slate)을 이전 섹션들과 일치시켰습니다. */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            실시간 B2B 예상 견적
          </h2>
          <p className="text-slate-500 mt-3 md:mt-4 text-sm md:text-base break-keep">
            10대 이상 단체 의뢰 시 수량별 자동 할인이 적용됩니다.
          </p>
        </div>

        {/* 모바일 전용 최적화 퀵 바 */}
        <div className="md:hidden w-full bg-blue-600 text-white px-5 py-3.5 rounded-xl mb-4 flex items-center justify-between shadow-md">
          <div className="flex flex-col">
            <span className="text-[11px] text-blue-200">선택한 총 수량</span>
            <span className="text-base font-bold">{totalQuantity}대</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-blue-200">실시간 예상 금액</span>
            <span className="text-lg font-black text-yellow-300">{finalTotal.toLocaleString()}원</span>
          </div>
        </div>

        {/* 메인 계산기 베이스 바디 박스 */}
        {/* ⚡ 4. 내부 스크롤 꼬임을 막기 위해 max-h-[75vh]와 overflow-y-auto를 완전히 삭제했습니다. */}
        <div className="bg-slate-50 p-4 md:p-8 rounded-2xl border border-slate-200 shadow-inner flex flex-col w-full">
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-stretch h-full">
            
            {/* 왼쪽 파트: 수량 입력기 */}
            <div className="flex flex-col gap-3">
              {(Object.keys(PRICING) as AcType[]).map((type) => (
                <div key={type} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all hover:border-blue-200">
                  <div className="leading-tight">
                    <h3 className="font-bold text-slate-800 text-base">{PRICING[type].name}</h3>
                    <p className="text-[12px] md:text-sm text-slate-400 font-medium mt-0.5">
                      {PRICING[type].price.toLocaleString()}원 / 대
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-slate-50 rounded-lg px-2 py-1.5 border border-slate-100 select-none">
                    <button 
                      onClick={() => handleCount(type, -1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white rounded-md font-black text-xl transition-all active:scale-90"
                      aria-label="수량 감소"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-slate-800 font-bold text-base md:text-lg">
                      {counts[type]}
                    </span>
                    <button 
                      onClick={() => handleCount(type, 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white rounded-md font-black text-xl transition-all active:scale-90"
                      aria-label="수량 증가"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽 파트: 상세 결과 요약판 */}
            <div className="bg-blue-600 text-white p-6 md:p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-xl mt-2 md:mt-0">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500 rounded-full opacity-40 blur-3xl"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center border-b border-blue-400/60 pb-4">
                  <span className="text-blue-100 text-sm md:text-base font-medium">총 세척 대수</span>
                  <span className="text-xl md:text-2xl font-bold">{totalQuantity}대</span>
                </div>
                
                <div className="space-y-2 text-sm md:text-base pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">기본 합계 금액</span>
                    <span className="line-through opacity-70 font-light">{baseTotal.toLocaleString()}원</span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex justify-between items-center text-yellow-300 font-bold animate-pulse pt-1">
                      <span>단체 대량 할인 ({discountRate * 100}%)</span>
                      <span>- {discountAmount.toLocaleString()}원</span>
                    </div>
                  )}
                </div>

                {/* 최종 견적 표기 블록 */}
                <div className="pt-5 border-t border-blue-400/60 mt-4">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-blue-100 text-base md:text-lg font-bold">최종 예상 견적</span>
                    <span className="text-3xl md:text-4xl font-black text-yellow-300 md:text-white tracking-tight transition-colors duration-300">
                      {finalTotal.toLocaleString()}원
                    </span>
                  </div>
                  <p className="text-[10px] md:text-xs text-blue-200 text-right mt-3 break-keep leading-relaxed opacity-80">
                    * 해당 금액은 부가세 별도이며 현장 오염도, 층고(3.5m 이상)에 따라 일부 조정될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}