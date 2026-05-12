'use client';

export default function EduHero() {
  return (
    <section id="hero" className="w-full h-screen flex flex-col items-center justify-center bg-[#064E3B] text-white pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-[1.2] text-center md:text-left z-10">
          <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
            2026년 상반기 교육생 모집 중
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight break-keep">
            기술이 곧 자산입니다.<br />
            <span className="text-emerald-400">에어컨 세척 창업</span>의 모든 것.
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 break-keep text-emerald-50">
            이론만 가르치지 않습니다. 현장에서 바로 돈이 되는<br />
            실전 압축 기술과 영업 노하우를 1:1로 전수합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#curriculum" className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition shadow-lg text-center">
              교육과정 보기
            </a>
            <a href="#contact" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg text-center">
              상담 신청하기
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md md:max-w-none">
          {/* 교육 현장 느낌의 영상이나 고퀄리티 이미지 배치 */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-400/30">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0"
              className="absolute top-0 left-0 w-full h-full pointer-events-none scale-105"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}