'use client'

import { useState } from 'react';
// ⚡ 커스텀 애니메이션 훅 임포트
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const PROCESS_STEPS = [
  {
    id: 1,
    title: '사전 점검 및 보양',
    subtitle: '완벽한 준비로 피해 제로',
    // ⚡ description을 배열 형태로 분리하여 핵심만 전달합니다.
    description: [
      '세척 전 기기 정상 작동 여부 정밀 점검',
      '고가의 사무실 집기 및 전자기기 완벽 보호',
      '이중 특수 보양(마스킹)으로 오염 원천 차단'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 2,
    title: '완전 분해',
    subtitle: '숨은 곰팡이까지 타겟팅',
    description: [
      '프론트 판넬, 필터, 송풍팬 정석 탈거',
      '오염이 심한 드레인판(물받이) 완전 분해',
      '육안으로 보이지 않는 사각지대 곰팡이 파악'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    description: [
      '환경부 인증 인체 무해 친환경 세척제 도포',
      '초고압 세척 장비 가동',
      '냉각핀 깊숙이 박힌 곰팡이 및 미세먼지 박멸'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
  },
  {
    id: 4,
    title: '건조 및 UV 살균',
    subtitle: '세균 번식 원천 차단',
    description: [
      '세척 부품의 완벽한 물기 건조 및 재조립',
      'UV-C 자외선 살균으로 세균 번식 억제',
      '냉각핀, 송풍팬, 드레인판까지 2차 살균'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'bg-yellow-50 text-yellow-600',
  }
];

export default function ProcessSliders() {
  const [currentStep, setCurrentStep] = useState(0);
  
  // ⚡ 훅을 사용하여 깔끔하게 애니메이션 연동
  const { ref, className } = useScrollFadeIn();

  const handlePrev = () => {
    setCurrentStep((prev) => (prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1));
  };

  const step = PROCESS_STEPS[currentStep];

  return (
    <section 
      id="process" 
      ref={ref}
      className={`w-full bg-slate-50 py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col justify-center">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            단 한 대도 대충하지 않는 <br className="md:hidden"/>
            <span className="text-blue-600">4단계 정석 프로세스</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 flex flex-col items-center relative min-h-[420px] md:min-h-[460px] justify-between">
          
          <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-black tracking-wide">
            STEP {step.id} / 4
          </span>

          <div className="flex flex-col items-center text-center my-6 flex-1 w-full max-w-2xl animate-in fade-in zoom-in duration-500">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-sm mb-5 ${step.color}`}>
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
            <h4 className="text-sm md:text-base text-blue-500 font-semibold mb-6">"{step.subtitle}"</h4>
            
            {/* ⚡ 배열로 바뀐 description을 맵핑하여 체크리스트 형태로 출력합니다. */}
            <ul className="flex flex-col gap-2.5 text-left bg-slate-50 px-5 py-4 rounded-xl border border-slate-100 w-full md:w-3/5 mx-auto">
              {step.description.map((desc, idx) => (
                <li key={idx} className="flex items-start text-sm md:text-base text-slate-700 break-keep">
                  {/* 체크 아이콘 고정 */}
                  <span className="text-blue-500 mr-2.5 mt-0.5 flex-shrink-0 font-bold tracking-tighter">✔</span>
                  <span className="leading-snug">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 md:gap-10 w-full justify-center pt-6 border-t border-slate-100 flex-shrink-0">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 font-bold active:scale-90 hover:shadow-md transition-all"
              aria-label="이전 공정"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2.5 md:gap-3">
              {PROCESS_STEPS.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                    idx === currentStep ? 'bg-blue-600 w-6 md:w-8' : 'bg-slate-200 w-2.5 md:w-3 hover:bg-slate-300'
                  }`}
                  aria-label={`${idx + 1}단계로 이동`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 font-bold active:scale-90 hover:shadow-md transition-all"
              aria-label="다음 공정"
            >
               <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}