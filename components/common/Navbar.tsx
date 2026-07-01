"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
  isOpen,
  setIsOpen,
  menuConfig,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  menuConfig: { name: string; id: string }[];
}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-6 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-900"
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
        <div>
          {/* 1. 로고 영역 */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight ">
              모두홈케어
            </span>
          </Link>

          {/* 2. 우측 컨트롤 영역 (아카데미 토글 + CTA 버튼) */}
        </div>
        <div className="hidden md:flex items-cent gap-4 lg:gap-7 text-md font-medium min-w-0 flex-1 justify-center px-4">
          {menuConfig.map((menu) => (
            <Link key={menu.id} href={`${menu.id}`}>
              {menu.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-1 md:hidden text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="메뉴 열기"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
