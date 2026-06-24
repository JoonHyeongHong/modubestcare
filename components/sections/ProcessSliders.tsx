"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "사전 점검 및 보양",
    subtitle: "완벽한 준비로 피해 제로",
    description: [
      "세척 전 기기 정상 작동 여부 정밀 점검",
      "고가의 사무실 집기 및 전자기기 완벽 보호",
      "이중 특수 보양(마스킹)으로 오염 원천 차단",
    ],
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-600",
    checkColor: "text-indigo-500",
  },
  {
    id: 2,
    title: "완전 분해",
    subtitle: "숨은 곰팡이까지 타겟팅",
    description: [
      "프론트 판넬, 필터, 송풍팬 정석 탈거",
      "오염이 심한 드레인판(물받이) 완전 분해",
      "육안으로 보이지 않는 사각지대 곰팡이 파악",
    ],
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
    checkColor: "text-blue-500",
  },
  {
    id: 3,
    title: "친환경 고압 세척",
    subtitle: "호흡기 안전 최우선",
    description: [
      "환경부 인증 인체 무해 친환경 세척제 도포",
      "초고압 세척 장비 가동",
      "냉각핀 깊숙이 박힌 곰팡이 및 미세먼지 박멸",
    ],
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    color: "bg-teal-50 text-teal-600",
    checkColor: "text-teal-500",
  },
  {
    id: 4,
    title: "건조 및 UV 살균",
    subtitle: "세균 번식 원천 차단",
    description: [
      "세척 부품의 완벽한 물기 건조 및 재조립",
      "UV-C 자외선 살균으로 세균 번식 억제",
      "냉각핀, 송풍팬, 드레인판까지 2차 살균",
    ],
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    color: "bg-yellow-50 text-yellow-600",
    checkColor: "text-yellow-500",
  },
];

export default function ProcessSliders() {
  const [currentStep, setCurrentStep] = useState(0);
  const { ref, className } = useScrollFadeIn();

  const handlePrev = () => {
    setCurrentStep((prev) =>
      prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentStep((prev) =>
      prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1,
    );
  };

  const step = PROCESS_STEPS[currentStep];

  return (
    <section
      id="process"
      ref={ref}
      className={`w-full bg-white py-16 lg:py-20 xl:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col justify-center">
        <div className="text-center mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            단 한 대도 대충하지 않는 <br />
            <span className="text-blue-600">4단계 정석 프로세스</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 md:p-10 xl:p-12 flex flex-col items-center relative min-h-[420px] md:min-h-[460px] xl:min-h-[500px] justify-between">
          <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] md:text-xs xl:text-sm font-black tracking-widest">
            STEP {step.id} / 4
          </span>

          <div
            key={currentStep}
            className="flex flex-col items-center text-center my-6 xl:my-8 flex-1 w-full max-w-2xl animate-in fade-in zoom-in duration-500"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-sm mb-5 xl:mb-6 ${step.color}`}
            >
              {step.icon}
            </div>

            {/* ⚡ 수정됨: whitespace-nowrap 추가, 모바일 폰트 크기 미세 조정(text-lg sm:text-xl) */}
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-slate-900 mb-2 xl:mb-3  tracking-tight">
              {step.title}
            </h3>

            {/* 서브타이틀 줄바꿈 방지(옵션) 및 폰트 크기 조정 */}
            <h4
              className={`text-[13px] sm:text-sm md:text-base xl:text-lg font-semibold mb-6 xl:mb-8 break-keep  ${step.checkColor}`}
            >
              "{step.subtitle}"
            </h4>

            <ul className="flex flex-col gap-3 md:gap-4 text-left bg-slate-50 px-6 py-5 md:px-8 md:py-6 rounded-2xl border border-slate-100 w-full shadow-inner">
              {step.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-[13px] sm:text-sm md:text-base xl:text-lg text-slate-700 font-medium break-keep"
                >
                  <span
                    className={`${step.checkColor} mr-3 mt-0.5 flex-shrink-0 font-black tracking-tighter`}
                  >
                    ✔
                  </span>
                  <span className="leading-snug">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 md:gap-10 xl:gap-12 w-full justify-center pt-6 xl:pt-8 border-t border-slate-100 flex-shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 flex items-center justify-center text-slate-400 font-bold active:scale-90 hover:shadow-md transition-all duration-300"
              aria-label="이전 공정"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2.5 md:gap-3 xl:gap-4">
              {PROCESS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2.5 md:h-3 xl:h-3.5 rounded-full transition-all duration-500 ${
                    idx === currentStep
                      ? "bg-blue-600 w-8 md:w-10 xl:w-12"
                      : "bg-slate-200 w-2.5 md:w-3 xl:w-3.5 hover:bg-slate-300"
                  }`}
                  aria-label={`${idx + 1}단계로 이동`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 flex items-center justify-center text-slate-400 font-bold active:scale-90 hover:shadow-md transition-all duration-300"
              aria-label="다음 공정"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
