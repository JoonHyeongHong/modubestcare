"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import beforeImage from "@/public/before.jpg";
import afterImage from "@/public/after.jpg";

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const { ref, className } = useScrollFadeIn();

  return (
    <section
      id="before-after"
      ref={ref}
      // ⚡ 이전 섹션(slate-50)과 구분되도록 순백색(white) 배경 유지, 여백은 이전 섹션들과 통일
      className={`w-full bg-white py-16 lg:py-20 xl:py-24 box-border ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
        {/* 상단 타이틀 레이어 */}
        <div className="text-center mb-10 lg:mb-12 xl:mb-16">
          {/* ⚡ B2B 테마 폰트 컬러 및 크기 스케일링 적용 */}
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-black text-b2b-primary leading-snug tracking-tight">
            백문이 불여일견, <br className="md:hidden" />
            <span className="text-b2b-accent">압도적인 세척 결과</span>
          </h2>
          <p className="text-slate-500 mt-3 xl:mt-5 text-sm xl:text-lg break-keep font-medium">
            슬라이더를 좌우로 움직여 보이지 않는 내부 오염이 제거된 모습을
            확인해 보세요.
          </p>
        </div>

        {/* 메인 이미지 컨테이너 */}
        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 bg-slate-50 select-none mx-auto">
          {/* 1. 깨끗한 세척 후 (After) 이미지 */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={afterImage}
              alt="세척 후 깨끗한 상태"
              fill
              sizes="(max-w-768px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>

          {/* 2. 오염된 세척 전 (Before) 이미지 */}
          <div
            className="absolute inset-0 w-full h-full border-r-2 border-white/90 shadow-[2px_0_15px_rgba(0,0,0,0.15)] z-10"
            style={{
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
            }}
          >
            <Image
              src={beforeImage}
              alt="세척 전 오염된 상태"
              fill
              sizes="(max-w-768px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>

          {/* ⚡ 배지(Badge) 스타일링: B2B 테마에 맞춘 색상 및 둥글기 조절 */}
          <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-slate-800/80 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm font-bold backdrop-blur-md z-20 shadow-sm border border-white/10">
            세척 전
          </div>
          <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-b2b-accent/90 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm font-bold backdrop-blur-md shadow-lg shadow-b2b-accent/20 z-20 border border-white/20">
            세척 후
          </div>

          {/* 중앙 드래그 조절 핸들 바 */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-30"
            style={{ left: `calc(${sliderValue}% - 1px)` }}
          >
            {/* ⚡ 핸들 디자인: 호버 시 b2b-accent 색상으로 포인트를 주고 그림자를 강화 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-slate-100 text-b2b-accent group transition-transform duration-200">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 m-0"
            aria-label="세척 전후 비교 슬라이더"
          />
        </div>

        {/* 하단 헬퍼 텍스트 */}
        <div className="text-center mt-5 xl:mt-8">
          <p className="text-slate-400 text-xs xl:text-sm flex items-center justify-center gap-1.5 font-medium">
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5 animate-pulse text-b2b-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            이미지 중앙의 바를 좌우로 움직여 보세요
          </p>
        </div>
      </div>
    </section>
  );
}
