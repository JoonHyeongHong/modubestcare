'use client';

import { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="max-w-5xl mx-auto my-24 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">
          백문이 불여일견, <span className="text-[#2563EB]">압도적인 세척 결과</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          가운데 화살표를 좌우로 드래그하여 세척 전후의 극적인 차이를 확인해보세요.
        </p>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none group">
        
        {/* 1. 세척 후 이미지 (After) - 테스트용 청록색 가상 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://placehold.co/1200x600/10B981/FFFFFF?text=AFTER%5Cn(Clean+State)')" 
          }}
        ></div>

        {/* 2. 세척 전 이미지 (Before) - 테스트용 어두운 회색 가상 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center border-r-2 border-white/50"
          style={{ 
            backgroundImage: "url('https://placehold.co/1200x600/374151/FFFFFF?text=BEFORE%5Cn(Dirty+State)')",
            clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
          }}
        ></div>

        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-md text-sm font-bold backdrop-blur-sm shadow-md">
          세척 전 (Before)
        </div>
        <div className="absolute top-4 right-4 bg-[#2563EB]/90 text-white px-3 py-1.5 rounded-md text-sm font-bold backdrop-blur-sm shadow-md">
          세척 후 (After)
        </div>

        {/* 드래그 핸들 */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none transition-all duration-75"
          style={{ left: `calc(${sliderValue}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>

        {/* 슬라이더 입력창 */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 m-0"
        />
      </div>
    </div>
  );
}