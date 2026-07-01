"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "메인" },
  { id: "why-us", label: "차이점" },
  { id: "process", label: "세척 과정" },
  { id: "services", label: "주요 서비스" },
  { id: "before-after", label: "세척 전후 비교" },
  { id: "faq", label: "자주 묻는 질문" },
  { id: "calculator", label: "견적 계산기" },
];

export default function SideScrollNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // ⚡ 화면의 50%(중앙) 선을 넘어갈 때 활성화된 섹션을 교체합니다.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // ⚡ 어두운 배경(hero)일 때와 밝은 배경일 때의 색상 테마를 동적으로 변경
  const isDarkBg = activeSection === "hero";

  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative flex items-center focus:outline-none"
            aria-label={`${section.label} 섹션으로 이동`}
          >
            {/* 1. 세로 바 형태의 인디케이터 */}
            <div className="flex items-center justify-center w-4 h-8">
              <span
                className={`absolute left-0 transition-all duration-300 rounded-full ${
                  isActive
                    ? `h-8 w-1.5 ${isDarkBg ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "bg-[#1E3A8A]"}`
                    : `h-2 w-1 ${isDarkBg ? "bg-white/40 group-hover:bg-white" : "bg-slate-300 group-hover:bg-slate-400"}`
                }`}
              ></span>
            </div>

            {/* 2. 텍스트 레이블 (평소엔 숨어있다가 마우스를 올리거나 활성화될 때 등장) */}
            <span
              className={`absolute left-6 w-max text-xs font-bold tracking-wide transition-all duration-300 ${
                isActive
                  ? `opacity-100 translate-x-0 ${isDarkBg ? "text-white" : "text-[#1E3A8A]"}`
                  : `opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 ${isDarkBg ? "text-white/70" : "text-slate-500"}`
              }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
