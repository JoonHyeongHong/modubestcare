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

export default function ProcessTabs(){
    const [activeTab,setActiveTab] = useState(1);

    return (
        <div className="max-w-5xl mx-auto my-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">단 한 대도 대충하지 않는<br/><span className="text-blue-600">4단계 정석 세척 프로세스</span></h2>
        <p className="text-gray-500 mt-4 text-lg">눈에 보이지 않는 곳까지 완벽하게 분해하고 살균합니다.</p>
      </div>

      {/* 모바일 & PC 공통: 탭 버튼 영역 */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 mb-8">
        {PROCESS_STEPS.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveTab(step.id)}
            className={`flex-1 py-4 px-2 md:px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 border-2 ${
              activeTab === step.id
                ? 'border-blue-600 bg-blue-600 text-white shadow-lg transform -translate-y-1'
                : 'border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-500'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${activeTab === step.id ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                {step.id}
              </span>
              {step.title}
            </div>
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden relative min-h-[450px] flex items-center">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.id}
            className={`absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 ease-in-out ${
              activeTab === step.id
                ? 'opacity-100 translate-x-0 z-10'
                : 'opacity-0 translate-x-8 pointer-events-none z-0'
            }`}
          >
            {/* 좌측: 아이콘 (실제 운영 시 이 부분을 세척 사진 이미지 <img>로 교체하면 훨씬 좋습니다) */}
            <div className={`w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full flex items-center justify-center shadow-inner ${step.color}`}>
              {step.icon}
            </div>
            
            {/* 우측: 텍스트 설명 */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-3">
                STEP {step.id}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <h4 className="text-lg text-blue-600 font-medium mb-4">
                "{step.subtitle}"
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed break-keep">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}