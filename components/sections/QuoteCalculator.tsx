"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const PRICING = {
  wall: { name: "벽걸이형", price: 131000 },
  stand: { name: "스탠드형", price: 198000 },
  way1: { name: "천장형 1Way", price: 158000 },
  way4: { name: "천장형 4Way", price: 198000 },
};

type AcType = keyof typeof PRICING;

export default function QuoteCalculator() {
  const [counts, setCounts] = useState<Record<AcType, number>>({
    wall: 0,
    stand: 0,
    way1: 0,
    way4: 0,
  });

  const { ref, className } = useScrollFadeIn();

  const handleCount = (type: AcType, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const totalQuantity = Object.values(counts).reduce((a, b) => a + b, 0);
  const baseTotal = Object.entries(counts).reduce(
    (sum, [type, count]) => sum + PRICING[type as AcType].price * count,
    0,
  );

  let discountRate = 0;
  if (totalQuantity >= 30) discountRate = 0.2;
  else if (totalQuantity >= 20) discountRate = 0.15;
  else if (totalQuantity >= 10) discountRate = 0.1;

  const discountAmount = baseTotal * discountRate;
  const finalTotal = baseTotal - discountAmount;

  return (
    <section
      id="calculator"
      ref={ref}
      // ⚡ 이전 섹션(white)과 시각적 분리를 위해 slate-50 사용, 여백 스케일링 동기화
      className={`w-full bg-slate-50 py-16 lg:py-20 xl:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        {/* 헤더 섹션 */}
        <div className="text-center mb-10 lg:mb-12 xl:mb-16">
          {/* ⚡ B2B 테마 컬러 및 반응형 폰트 사이즈 적용 */}
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-black text-b2b-primary leading-tight tracking-tight">
            실시간 예상 견적
          </h2>
          <p className="text-slate-500 mt-3 xl:mt-5 text-sm xl:text-lg break-keep font-medium">
            10대 이상 단체 의뢰 시 수량별 자동 할인이 적용됩니다.
          </p>
        </div>

        {/* 모바일 전용 최적화 퀵 바 */}
        {/* ⚡ 배경을 네이비(b2b-primary)로, 포인트를 옐로우/클리어블루로 변경 */}
        <div className="md:hidden w-full bg-b2b-primary text-white px-5 py-4 rounded-2xl mb-6 flex items-center justify-between shadow-lg shadow-b2b-primary/20">
          <div className="flex flex-col">
            <span className="text-[11px] text-slate-300">선택한 총 수량</span>
            <span className="text-base font-bold text-white">
              {totalQuantity}대
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-slate-300">실시간 예상 금액</span>
            <span className="text-lg font-black text-b2b-accent">
              {finalTotal.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* 메인 계산기 베이스 바디 박스 */}
        <div className="bg-white p-5 md:p-8 xl:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 xl:gap-12 items-stretch h-full">
            {/* 왼쪽 파트: 수량 입력기 (7칸 차지) */}
            <div className="flex flex-col gap-3 xl:gap-4 md:col-span-7">
              {(Object.keys(PRICING) as AcType[]).map((type) => (
                <div
                  key={type}
                  className="flex items-center justify-between p-4 xl:p-5 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-b2b-accent/40 hover:shadow-md group"
                >
                  <div className="leading-tight">
                    <h3 className="font-bold text-b2b-primary text-base xl:text-lg group-hover:text-b2b-accent transition-colors">
                      {PRICING[type].name}
                    </h3>
                    <p className="text-xs xl:text-sm text-slate-400 font-medium mt-1">
                      {PRICING[type].price.toLocaleString()}원 / 대
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 bg-white rounded-xl px-2 py-1.5 border border-slate-200 shadow-sm select-none">
                    <button
                      onClick={() => handleCount(type, -1)}
                      className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center text-slate-400 hover:text-b2b-accent hover:bg-b2b-secondary/50 rounded-lg font-black text-xl transition-all active:scale-90"
                      aria-label="수량 감소"
                    >
                      -
                    </button>
                    <span className="w-8 xl:w-10 text-center text-b2b-primary font-bold text-base xl:text-xl">
                      {counts[type]}
                    </span>
                    <button
                      onClick={() => handleCount(type, 1)}
                      className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center text-slate-400 hover:text-b2b-accent hover:bg-b2b-secondary/50 rounded-lg font-black text-xl transition-all active:scale-90"
                      aria-label="수량 증가"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 오른쪽 파트: 상세 결과 요약판 (5칸 차지) */}
            {/* ⚡ B2B 테마 네이비 바탕에 클리어 블루 빛번짐 효과로 고급스러운 영수증 연출 */}
            <div className="bg-b2b-primary text-white p-6 xl:p-10 rounded-2xl xl:rounded-3xl flex flex-col justify-center relative overflow-hidden shadow-2xl md:col-span-5">
              {/* 은은한 우측 상단 빛 효과 */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-b2b-accent rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 space-y-4 xl:space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 xl:pb-6">
                  <span className="text-slate-300 text-sm xl:text-base font-medium">
                    총 세척 대수
                  </span>
                  <span className="text-xl xl:text-2xl font-bold">
                    {totalQuantity}대
                  </span>
                </div>

                <div className="space-y-3 xl:space-y-4 text-sm xl:text-base pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">기본 합계 금액</span>
                    <span className="line-through opacity-60 font-light text-slate-300">
                      {baseTotal.toLocaleString()}원
                    </span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex justify-between items-center text-b2b-accent font-bold animate-pulse pt-1">
                      <span>단체 대량 할인 ({discountRate * 100}%)</span>
                      <span>- {discountAmount.toLocaleString()}원</span>
                    </div>
                  )}
                </div>

                {/* 최종 견적 표기 블록 */}
                <div className="pt-6 xl:pt-8 border-t border-white/10 mt-4 xl:mt-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-300 text-base xl:text-lg font-bold">
                      최종 예상 견적
                    </span>
                    <span className="text-3xl xl:text-4xl font-black text-white tracking-tight transition-all duration-300">
                      {finalTotal.toLocaleString()}원
                    </span>
                  </div>
                  <p className="text-[11px] xl:text-xs text-slate-400 text-right mt-3 break-keep leading-relaxed font-medium">
                    * 부가세 별도 금액이며, 현장 오염도 및 층고(3.5m 이상)에
                    따라 일부 조정될 수 있습니다.
                  </p>
                </div>

                {/* 하단 유도 버튼 (옵션) */}
                <div className="mt-6 xl:mt-8 pt-4">
                  <a
                    href="/inquiry"
                    className="flex items-center justify-center w-full py-4 xl:py-5 bg-b2b-accent hover:brightness-110 text-white rounded-xl font-bold text-sm xl:text-base transition-all shadow-lg shadow-b2b-accent/20 active:scale-95"
                  >
                    문의하러 가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
