"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Image from "next/image";

import beforeImage1 from "@/public/before.jpg";
import afterImage1 from "@/public/after.jpg";
import beforeImage2 from "@/public/before2.jpg";
import afterImage2 from "@/public/after2.jpg";

export default function BeforeAfterSlider() {
  const { ref, className } = useScrollFadeIn();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const imagePairs = [
    {
      id: 1,
      title: "천장형 시스템 에어컨",
      before: beforeImage1,
      after: afterImage1,
    },
    {
      id: 2,
      title: "스탠드 에어컨 열교환기",
      before: beforeImage2,
      after: afterImage2,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
    setSliderValue(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
    setSliderValue(50);
  };

  const currentPair = imagePairs[currentIndex];

  return (
    <section
      id="before-after"
      ref={ref}
      className={`w-full bg-white py-16 lg:py-20 xl:py-24 box-border ${className} md:snap-start`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
        {/* 상단 타이틀 레이어 */}
        <div className="text-center mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-black text-slate-900 leading-snug tracking-tight">
            직접 확인해볼 수 있는
            <br className="md:hidden" />
            <span className="text-[#1E3A8A]"> 세척 결과</span>
          </h2>
          <p className="text-slate-500 mt-3 xl:mt-5 text-sm xl:text-lg break-keep font-medium">
            슬라이더를 좌우로 움직여 보이지 않는 내부 오염이 제거된 모습을
            확인해 보세요.
          </p>
        </div>

        {/* ⚡ 레이아웃 수정: 화살표와 이미지가 절대 겹치지 않도록 전체를 감싸는 flex 컨테이너 구성 */}
        <div className="flex items-center justify-between w-full gap-4 max-w-5xl mx-auto relative">
          {/* 👈 좌측 네비게이션 버튼: 외부 배치 */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex shrink-0 bg-slate-50 hover:bg-slate-100 text-slate-800 p-3 lg:p-4 rounded-xl shadow-sm border border-slate-200 active:scale-95 transition-all"
            aria-label="이전 세척 사례"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* ⚡ 메인 이미지 컨테이너 (화살표가 빠져나가 온전히 100% 뷰포트 확보) */}
          <div className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-100 bg-slate-50 select-none">
            {/* 현재 기종 안내 뱃지 */}

            {/* 1. 깨끗한 세척 후 (After) 이미지 */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                key={`after-${currentPair.id}`}
                src={currentPair.after}
                alt={`${currentPair.title} 세척 후`}
                fill
                sizes="(max-w-1024px) 100vw, 1024px"
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
                key={`before-${currentPair.id}`}
                src={currentPair.before}
                alt={`${currentPair.title} 세척 전`}
                fill
                sizes="(max-w-1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>

            {/* 전/후 텍스트 배지 */}
            <div className="absolute bottom-4 left-4 bg-slate-800/80 text-white px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm z-20 border border-white/10 pointer-events-none">
              세척 전
            </div>
            <div className="absolute bottom-4 right-4 bg-sky-500/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm shadow-md z-20 border border-white/20 pointer-events-none">
              세척 후
            </div>

            {/* 중앙 조절 핸들 바 */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-30"
              style={{ left: `calc(${sliderValue}% - 1px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200 text-sky-500">
                <svg
                  className="w-5 h-5 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
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

          {/* 👉 우측 네비게이션 버튼: 외부 배치 */}
          <button
            onClick={handleNext}
            className="hidden sm:flex shrink-0 bg-slate-50 hover:bg-slate-100 text-slate-800 p-3 lg:p-4 rounded-xl shadow-sm border border-slate-200 active:scale-95 transition-all"
            aria-label="다음 세척 사례"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* 모바일 화면용 하단 스와이프 버튼 가이드 (레이아웃 붕괴 방지) */}
        <div className="flex sm:hidden justify-center gap-4 mt-4 w-full px-2">
          <button
            onClick={handlePrev}
            className="flex-1 bg-slate-50 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700"
          >
            ◀ 이전 사례
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-slate-50 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700"
          >
            다음 사례 ▶
          </button>
        </div>

        {/* ⚡ 하단 내비게이션 칩 탭 (유저가 다른 사진들의 존재를 인지하기 가장 쉬운 구조) */}
        <div className="flex flex-col items-center mt-8 xl:mt-10 gap-5">
          <p className="text-slate-400 text-xs xl:text-sm flex items-center justify-center gap-1.5 font-medium select-none">
            <svg
              className="w-4 h-4 animate-pulse text-sky-500"
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
            중앙의 바를 움직여 내부 오염도를 비교할 수 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
