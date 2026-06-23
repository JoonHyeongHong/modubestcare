import { useRef, useEffect, useState } from 'react';

export function useScrollFadeIn(threshold = 0.15) {
  const elementRef = useRef<HTMLElement | any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 나타나면 다시 숨기지 않음
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref: elementRef,
    // 이 클래스 문자열을 컴포넌트에 그대로 뿌려주기만 하면 됩니다.
    className: `transition-all duration-1000 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`
  };
}