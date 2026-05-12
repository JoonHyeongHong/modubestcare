export default function information() {
    return (
        <div>
        <section 
              id="hero" 
              className="relative bg-[#0F172A] text-white flex items-center pt-16 md:flex-[1.5] min-h-[450px]"
            >
              
            
        <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-8 py-6 md:py-0">
                        <div className="flex-[1.2] text-center md:text-left z-10">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight break-keep">
                            호흡기를 위협하는 곰팡이,<br />
                            <span className="text-[#FBBF24]">완전 분해 세척</span>이 답입니다.
                          </h1>
                          <p className="text-base md:text-lg opacity-90 mb-6 break-keep">
                            인천 서구/김포 지역 관공서, 상가, 사무실 대량 세척 전문
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <a href="#contact" className="bg-white text-[#0F172A] px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transition shadow-lg text-center">
                              견적 문의하기
                            </a>
                          </div>
                        </div>
        
                        <div className="flex-1 w-full max-w-md md:max-w-none">
                          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-blue-400/20">
                            <iframe
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=tjOr-MBFc-k&controls=0&modestbranding=1"
                              className="absolute top-0 left-0 w-full h-full"
                              allow="autoplay; encrypted-media"
                            ></iframe>
                          </div>
                        </div>
                      </div>
</section>
                      {/* 2. 서비스 소개 섹션: md:flex-1로 남은 공간 차지 */}
                    <section id="services" className="bg-white border-b border-gray-50 flex items-center md:flex-1 min-h-[160px] py-6 md:py-0">
                      <div className="max-w-6xl mx-auto px-8 w-full">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {[
                            { icon: '🏢', title: '대량 세척 특화' },
                            { icon: '🛡️', title: '사후 관리 보장' },
                            { icon: '⚡', title: '당일 작업 완료' }
                          ].map((item, i) => (
                            <div key={i} className="group">
                              <div className="text-2xl md:text-3xl mb-1">{item.icon}</div>
                              <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.title}</h3>
                              <p className="text-[10px] md:text-xs text-gray-500 hidden sm:block mt-1">비즈니스 환경 최적화</p>
                            </div>
                          ))}
                        </div>
                      </div>
</section>
        </div>
    )
};
