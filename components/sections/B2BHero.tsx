"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function B2BHero() {
  const { ref, className } = useScrollFadeIn();

  return (
    <section
      id="hero"
      ref={ref}
      // ⚡ h-screen(100vh)을 강제로 고정하고, flex 컨테이너에서 찌그러지지 않도록 shrink-0을 추가했습니다.
      // 화면이 너무 작을 때 겹치지 않도록 min-h-[650px]로 최소 높이 방어선을 쳤습니다.
      className={`relative w-full h-screen min-h-[650px] shrink-0 flex items-center justify-center overflow-hidden bg-slate-900 md:snap-start ${className}`}
    >
      {/* 1. 유튜브 배경 영상 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-slate-900">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=tjOr-MBFc-k&controls=0&modestbranding=1&playsinline=1&disablekb=1"
          className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] sm:w-[150vw] sm:h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-70"
          allow="autoplay; encrypted-media"
          title="모두홈케어 B2B 세척 공정"
        ></iframe>
      </div>

      {/* 2. 가독성을 위한 다크 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80 z-10"></div>

      {/* 3. 메인 콘텐츠 */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-6 flex flex-col items-center text-center mt-10">
        {/* ⚡ 텍스트 밸런스 조정: 수식어는 작게, 메인 솔루션은 압도적으로 크게 변경 */}
        <h1 className="flex flex-col gap-2 sm:gap-4 font-black leading-[1.2] tracking-tight mb-6 drop-shadow-2xl break-keep">
          <span className="text-xl sm:text-3xl md:text-4xl text-slate-200 font-bold drop-shadow-md">
            깨끗한 공기, 숨쉬는 공간
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            모두홈케어
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed mb-10 md:mb-12 break-keep font-medium drop-shadow-md">
          업무 지장 없는 신속한 공정. <br className="hidden sm:block" />
          가전세척에 최적화된 전문가의 케어를 경험하세요.
        </p>
      </div>

      {/* 마우스 애니메이션 아이콘 (버튼과 겹치지 않게 바닥에 고정) */}
      <a
        href="#why-us"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1.5 bg-white/80 rounded-full"></div>
        </div>
      </a>
    </section>
  );
}
