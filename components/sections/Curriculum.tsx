'use client';

import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const COURSES = [
  { 
    step: "01", 
    title: ["벽걸이부터","2in1까지"], 
    // ⚡ 설명을 배열 형태로 나누어 핵심만 짚어줍니다.
    desc: [
      "벽걸이 및 스탠드 에어컨 완전 분해",
      "투인원(2in1) 기종 정석 클리닝",
      "기초부터 탄탄한 고압 세척 마스터"
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 7.75v5.5m-4.5-5.5v5.5m-4.5-5.5v5.5M5.25 19.5h13.5c1.243 0 2.25-1.007 2.25-2.25V6.75c0-1.243-1.007-2.25-2.25-2.25H5.25c-1.243 0-2.25 1.007-2.25 2.25v10.5c0 1.243 1.007 2.25 2.25 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 22h8" />
      </svg>
    )
  },
  { 
    step: "02", 
    title: ["시스템 에어컨 심화", "(1Way/4Way)"],
    desc: [
      "1Way 및 4Way 시스템 에어컨 구조 이해",
      "상가 및 오피스 B2B 대량 오더 대응",
      "오염이 심한 드레인판 완벽 세척 기술"
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 11a8 8 0 0116 0" />
      </svg>
    )
  },
  { 
    step: "03", 
    title: ["세탁기/건조기","완전 분해"], 
    desc: [
      "일반 및 드럼 세탁기 튜브 안전 탈거",
      "건조기 내부 부품 완전 분해 조립",
      "가을·겨울철 비수기 방어 핵심 기술"
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121M17.243 17.243l-2.121-2.121M6.757 6.757L8.879 8.879" />
      </svg>
    )
  },
  { 
    step: "04", 
    title: ["특수 가전","(공기청정기·스타일러)"], 
    desc: [
      "특수가전제품 구조 파악",
      "고단가 프리미엄 가전 클리닝",
      "대체불가능한 전문성 확보"
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
];

export default function Curriculum() {
  const { ref, className } = useScrollFadeIn();

  return (
    <section 
      id="curriculum" 
      ref={ref}
      className={`w-full bg-white py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col justify-center">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full tracking-wide">
            비수기 제로 인력 양성
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            LG 전 가전제품 <span className="text-emerald-600">올인원 마스터 교육</span>
          </h2>
          <p className="text-slate-500 mt-3 md:mt-4 text-sm md:text-base break-keep">
            단 하나의 품목에 의존하지 않는 전천후 베테랑 기술자로 육성합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
          {COURSES.map((course) => (
            <div 
              key={course.step} 
              className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col group hover:bg-emerald-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* 스텝 넘버 (워터마크) */}
              <div className="absolute top-4 right-4 text-5xl md:text-6xl font-black text-slate-200/50 group-hover:text-emerald-500/50 transition-colors pointer-events-none">
                {course.step}
              </div>

              {/* 아이콘 */}
              <div className="text-emerald-500 group-hover:text-emerald-100 transition-colors mb-6 relative z-10">
                {course.icon}
              </div>

              {/* 텍스트 영역 */}
              <div className="mt-auto relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors break-keep">
                  {course.title[0] + "\n" + course.title[1]}
                </h3>
                
                {/* ⚡ 배열을 순회하며 체크리스트(ul > li) 형태로 출력합니다. */}
                <ul className="flex flex-col gap-2.5 w-full">
                  {course.desc.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600 group-hover:text-emerald-50 transition-colors break-keep">
                      {/* ⚡ 마우스를 올렸을 때 체크마크 색상도 부드럽게 반전됩니다. */}
                      <span className="text-emerald-500 group-hover:text-emerald-200 mr-2.5 flex-shrink-0 font-bold tracking-tighter mt-0.5">✔</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}