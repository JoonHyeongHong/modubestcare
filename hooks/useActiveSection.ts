"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // 1. 현재 스크롤 위치 (Navbar 높이만큼 더해줌)
      const scrollPosition = window.scrollY + 100;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // 2. 현재 스크롤이 해당 섹션 범위 안에 있는지 확인
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break; // 찾았으면 바로 종료
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
