'use client';

import { useState, useEffect } from 'react';
import { useActiveSection } from "@/hooks/useActiveSection";

import Link from "next/link";
import {usePathname} from "next/navigation";

const menuConfig = {
  b2b: [
    { name: "서비스 소개", id: "hero" },
    { name: "세척 퀄리티", id: "before-after" },
    { name: "실시간 견적", id: "calculator" },
    {name : "최근 작업", id: "portfolio"},
    {name : "자주 묻는 질문", id: "faq"},
     { name: "견적 문의", id: "contact" },
  ],
  edu: [
    { name: "모집 안내", id: "hero" }, // 교육 메인 히어로 및 과정 소개
    { name: "교육 과정", id: "curriculum" },   // 사계절 일거리 및 대기업 연계 혜택
  
    {name : "자주 묻는 질문", id: "faq"},  { name: "지원하기", id: "contact" },    // 소속 기사 간편 지원서

    {name : "찾아오시는 길", id: "location"} // 교육장 위치 및 교통 안내
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const viewMode = pathname.startsWith('/edu') ? 'edu' : 'b2b';

  const sectionIds = menuConfig[viewMode].map(m => m.id);
  const activeSection = useActiveSection(sectionIds);
  
  // 모바일 사이드 바 메뉴 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(false);

  // 현재 모드에 따른 브랜드 테마 색상 정의
  const themeColor = viewMode === 'b2b' ? 'text-blue-600' : 'text-emerald-600';
  const themeBg = viewMode === 'b2b' ? 'bg-blue-600' : 'bg-emerald-600';


  //URL 경로가 변경되면 열려있던 모바일 메뉴를 자동으로 닫음
  useEffect(()=>{
    setIsOpen(false);
  },[pathname]);

  return (
<>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-2">
          
          {/* 1. 로고 및 모바일 메뉴 버튼 묶음 */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-1 md:hidden text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* 로고 클릭 시 현재 모드의 최상단으로 이동 */}
            <Link href={viewMode === 'b2b' ? '/' : '/edu'} className={`text-base md:text-xl font-extrabold transition-colors duration-300 ${themeColor}` }>
              모두홈케어 {viewMode === 'edu' ? <span className={themeColor}>아카데미</span> : null}
            </Link>
          </div>

          {/* 2. PC 메인 네비게이션 */}
          <div className="hidden md:flex items-center gap-4 lg:gap-7 text-xs lg:text-sm font-medium min-w-0 flex-1 justify-center px-4">
            {menuConfig[viewMode].map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                className={`relative py-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 tracking-tight ${
                  activeSection === menu.id 
                    ? `${themeColor} font-bold` 
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {menu.name}
                {activeSection === menu.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${themeBg} animate-in fade-in zoom-in duration-300`} />
                )}
              </a>
            ))}
          </div>

          {/* 3. 우측 토글 스위치 영역 (상태값 변경 대신 Next.js Link 라우팅 적용) */}
          <div className="flex items-center flex-shrink-0">
            <div className="bg-gray-100 p-1 rounded-full shadow-inner flex relative w-32 md:w-52 h-9 md:h-10 min-w-0">
              
              {/* 스위치 배경 캡슐 슬라이더 */}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-in-out shadow-sm ${
                  viewMode === 'b2b' ? 'bg-[#0F172A] left-1' : `${themeBg} left-[calc(50%+4px)]`
                }`}
              ></div>

              {/* B2B 모드 버튼 -> 메인 라우트(/)로 이동 */}
              <Link 
                href="/"
                className={`flex-1 flex items-center justify-center text-[11px] md:text-sm font-bold z-10 transition-colors duration-300 ${
                  viewMode === 'b2b' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <span>🏢</span>
                <span className="ml-1 hidden md:inline">B2B 세척</span>
                <span className="ml-0.5 md:hidden text-[10px]">B2B</span>
              </Link>

              {/* 교육 모드 버튼 -> 교육 라우트(/edu)로 이동 */}
              <Link 
                href="/edu"
                className={`flex-1 flex items-center justify-center text-[11px] md:text-sm font-bold z-10 transition-colors duration-300 ${
                  viewMode === 'edu' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <span>🛠️</span>
                <span className="ml-1 hidden md:inline">기사 양성</span>
                <span className="ml-0.5 md:hidden text-[10px]">교육</span>
              </Link>
            </div>
          </div>

        </div>
      </nav>

      {/* 4. 모바일 전용 네비게이션 드로어 (Drawer 팝업 창) */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <span className={`text-lg font-black ${themeColor}`}>모두베스트케어</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 p-1" aria-label="메뉴 닫기">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col gap-1.5">
              {menuConfig[viewMode].map((menu) => (
                <a
                  key={menu.id}
                  href={`#${menu.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between ${
                    activeSection === menu.id
                      ? `${viewMode === 'b2b' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {menu.name}
                  {activeSection === menu.id && <span className="text-xs">●</span>}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-[10px] text-gray-400 border-t pt-4 text-center">
            © 모두홈케어. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}