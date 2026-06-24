"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function B2BHero() {
  const { ref, className } = useScrollFadeIn();

  return (
    <section
      id="hero"
      ref={ref}
      // ⚡ 핵심: 강제 높이 제거. 모바일(pt-24), 노트북(pt-28), 데스크톱(pt-36) 패딩 세분화
      className={`w-full bg-[#0F172A] text-white relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-12 xl:pt-36 xl:pb-16 flex flex-col justify-center box-border ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full flex flex-col relative z-10">
        {/* 상단: 텍스트 & 영상 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 xl:gap-16 w-full">
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 font-extrabold text-[10px] sm:text-xs xl:text-sm tracking-wide mb-4 md:mb-5 xl:mb-6 shadow-sm">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-sky-500"></span>
              </span>
              기업 전담 B2B 특화 유지보수 솔루션
            </div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-white leading-[1.3] md:leading-[1.25] tracking-tight mb-4 md:mb-6 break-keep">
              호흡기를 위협하는 곰팡이, <br />
              <span className="text-sky-400">완전 분해 세척</span>이 답입니다.
            </h1>

            <p className="text-slate-400 text-sm sm:text-base xl:text-lg max-w-2xl leading-relaxed mb-6 md:mb-8 break-keep font-medium">
              관공서, 지식산업센터, 상가 등 대규모 시설에 최적화된 공정.
              <br className="hidden md:block" />
              업무 지장 없이 빠르고 완벽한 쾌적함을 약속드립니다.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 xl:px-10 xl:py-4 bg-sky-500 hover:bg-sky-600 text-white font-black rounded-xl shadow-xl shadow-sky-900/50 hover:scale-105 active:scale-95 transition-all text-center text-sm xl:text-base tracking-wide"
              >
                B2B 전담팀 견적 문의 ➔
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg md:max-w-2xl lg:max-w-none mt-4 lg:mt-0">
            <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-sky-500/20 shadow-sky-900/40">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=tjOr-MBFc-k&controls=0&modestbranding=1"
                className="absolute top-0 left-0 w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                title="모두홈케어 B2B 세척 공정"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 하단: 3단 지표 (모바일에서도 깨지지 않게 폰트 미세 조정) */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4 xl:gap-8 w-full mt-10 sm:mt-12 lg:mt-14 xl:mt-20 border-t border-slate-800/80 pt-6 sm:pt-8 xl:pt-10">
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight mb-1">
              대량 특화
            </div>
            <div className="text-[10px] sm:text-xs xl:text-sm text-slate-400 font-medium break-keep">
              수십 대 동시 작업
            </div>
          </div>
          <div className="text-center border-x border-slate-800/80 px-1 sm:px-2">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-black text-sky-400 tracking-tight mb-1">
              정석 규격
            </div>
            <div className="text-[10px] sm:text-xs xl:text-sm text-slate-400 font-medium break-keep">
              대기업 매뉴얼 이수
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight mb-1">
              사후 관리
            </div>
            <div className="text-[10px] sm:text-xs xl:text-sm text-slate-400 font-medium break-keep">
              철저한 이력 데이터화
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
