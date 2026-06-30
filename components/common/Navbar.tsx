"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // ⚡ 현재 경로가 아카데미 관련 경로인지 확인 (기본값은 false / 필요시 라우팅 구조에 맞춰 수정)
  const isEduMode = pathname.includes("/academy") || pathname.includes("/edu");

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 아카데미/B2B 모드 전환 핸들러
  const toggleMode = () => {
    if (isEduMode) {
      router.push("/"); // 메인 B2B 페이지로 이동
    } else {
      router.push("/academy"); // 아카데미(Edu) 페이지로 이동 (해당 라우트 필요)
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-6 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-900"
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
        {/* 1. 로고 영역 */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-black tracking-tight ">
            모두홈케어
          </span>
        </Link>

        {/* 2. 우측 컨트롤 영역 (아카데미 토글 + CTA 버튼) */}
      </div>
    </nav>
  );
}
