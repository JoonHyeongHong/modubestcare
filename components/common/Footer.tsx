"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <p className="text-white font-bold text-sm tracking-wide">
            모두홈케어
          </p>
          <p className="text-[11px] text-slate-500">B2B 대량 가전 세척 전문</p>
          <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400">
            <span>대표: 정한채</span>
            <span>사업자등록번호: 000-00-00000</span>
            <span>이메일: support@modohomecare.com</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-600 md:text-right">
          <p>© 2026 모두홈케어. All rights reserved.</p>
          <p className="mt-0.5">
            본 사이트는 스마트폰 및 PC 환경에 최적화되어 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
