'use client';

import { useState } from 'react';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';
import Image from 'next/image';
import beforeImage from '@/public/before.jpg';
import afterImage from '@/public/after.jpg';

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const { ref, className } = useScrollFadeIn(); 

  return (
    <section 
      id="before-after" 
      ref={ref} 
      className={`w-full bg-white py-16 md:py-24 box-border ${className}`} 
    >
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
        
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            백문이 불여일견, <br className="md:hidden"/>
            <span className="text-blue-600">압도적인 세척 결과</span>
          </h2>
          <p className="text-slate-500 mt-3 md:mt-4 text-sm md:text-base break-keep">
            슬라이더를 좌우로 움직여 보이지 않는 내부 오염이 제거된 모습을 확인해 보세요.
          </p>
        </div>

        {/* 메인 이미지 컨테이너 (비율 유지) */}
        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200 bg-slate-100 select-none mx-auto">
          
          {/* ⚡ 1. 깨끗한 세척 후 (After) 이미지 - 가장 밑바닥에 깔립니다. */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={afterImage} 
              alt="세척 후 깨끗한 상태"
              fill
              sizes="(max-w-768px) 100vw, 1024px"
              className="object-cover"
              priority // 첫 화면의 핵심 이미지이므로 우선 로딩
            />
          </div>

          {/* ⚡ 2. 오염된 세척 전 (Before) 이미지 - 위에 덮어씌워지고 clipPath로 잘려나갑니다. */}
          <div 
            className="absolute inset-0 w-full h-full border-r-2 border-white/80 shadow-[2px_0_10px_rgba(0,0,0,0.1)] z-10"
            style={{ 
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
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

          <div className="absolute top-3 md:top-5 left-3 md:left-5 bg-slate-900/70 text-white px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold backdrop-blur-sm z-20">
            세척 전
          </div>
          <div className="absolute top-3 md:top-5 right-3 md:right-5 bg-blue-600/90 text-white px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold backdrop-blur-sm shadow-md z-20">
            세척 후
          </div>

          {/* 중앙 드래그 조절 핸들 바 */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none z-30"
            style={{ left: `calc(${sliderValue}% - 1px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200 text-slate-400">
              <svg className="w-5 h-5 md:w-6 md:h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
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

        <div className="text-center mt-5 md:mt-6">
          <p className="text-slate-400 text-xs md:text-sm flex items-center justify-center gap-1.5 font-medium">
            <svg className="w-4 h-4 md:w-5 md:h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            이미지 중앙의 바를 좌우로 움직여 보세요
          </p>
        </div>

      </div>
    </section>
  );
}