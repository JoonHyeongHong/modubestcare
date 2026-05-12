import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 섹션이 50% 이상 화면에 보일 때 활성화
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% 기준
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observers.observe(el);
    });

    return () => observers.disconnect();
  }, [sectionIds]);

  return activeSection;
}