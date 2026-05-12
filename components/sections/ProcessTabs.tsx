'use client'

import {useState} from 'react';

const PROCESS_STEPS = [
    {
    id: 1,
    title: '사전 점검 및 보양',
    subtitle: '완벽한 준비로 피해 제로',
    description: '세척 전 기기의 정상 작동 여부를 점검하고, 고가의 사무실 집기나 바닥에 오염물이 튀지 않도록 이중 특수 보양(마스킹) 작업을 철저하게 진행합니다.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 2,
    title: '완전 분해',
    subtitle: '숨은 곰팡이까지 타겟팅',
    description: '프론트 판넬, 필터, 송풍팬은 물론 오염이 가장 심한 드레인판(물받이)까지 완벽하게 분해하여 육안으로 보이지 않는 사각지대의 곰팡이까지 찾아냅니다.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 3,
    title: '친환경 고압 세척',
    subtitle: '호흡기 안전 최우선',
    description: '인체에 무해한 환경부 인증 친환경 세척제를 도포한 후, 100~130bar의 초고압 세척기로 냉각핀 깊숙이 박힌 곰팡이와 미세먼지를 시원하게 씻어냅니다.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    id: 4,
    title: '건조 및 UV 살균',
    subtitle: '세균 번식 원천 차단',
    description: '세척 후 부품을 완벽하게 건조하고, 재조립 후 UV-C 자외선 살균 처리 및 피톤치드 연무 코팅을 진행하여 곰팡이의 재발을 억제하고 상쾌한 공기를 만듭니다.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'bg-yellow-50 text-yellow-600',
  }
];

export default function ProcessTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    // 1. section 태그가 화면 전체(h-screen)를 차지하도록 설정
    <section 
      id="process" 
      className="w-full min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pt-20"
    >
      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col justify-center h-full pb-8">
        {/* 헤더 영역: 마진 축소 및 텍스트 반응형 조절 */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            단 한 대도 대충하지 않는<br />
            <span className="text-blue-600">4단계 정석 세척 프로세스</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            눈에 보이지 않는 곳까지 완벽하게 분해하고 살균합니다.
          </p>
        </div>

        {/* 탭 버튼 영역: flex-wrap을 유지하되 간격 최적화 */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3 mb-6">
          {PROCESS_STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`flex-1 min-w-[120px] md:min-w-0 py-2 md:py-3 px-2 md:px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 border-2 ${
                activeTab === step.id
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md transform -translate-y-1'
                  : 'border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-500'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${activeTab === step.id ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                  {step.id}
                </span>
                <span className="truncate">{step.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* 콘텐츠 영역: 고정 높이 대신 가변 높이(max-h)와 flex 사용 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden flex-1 max-h-[400px] md:max-h-[450px] min-h-[250px]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className={`absolute inset-0 p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-500 ease-in-out ${
                activeTab === step.id
                  ? 'opacity-100 translate-x-0 z-10'
                  : 'opacity-0 translate-x-8 pointer-events-none z-0'
              }`}
            >
              {/* 좌측: 아이콘 (비율 축소) */}
              <div className={`w-24 h-24 md:w-36 md:h-36 flex-shrink-0 rounded-full flex items-center justify-center shadow-inner ${step.color}`}>
                <div className="scale-75 md:scale-100">
                  {step.icon}
                </div>
              </div>
              
              {/* 우측: 텍스트 설명 (텍스트 크기 및 간격 축소) */}
              <div className="flex-1 text-center md:text-left overflow-y-auto max-h-full">
                <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[10px] md:text-xs font-bold mb-2">
                  STEP {step.id}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <h4 className="text-sm md:text-base text-blue-600 font-medium mb-2">
                  "{step.subtitle}"
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}