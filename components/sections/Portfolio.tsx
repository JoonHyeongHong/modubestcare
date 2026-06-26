'use client';

import Image from "next/image";
import Link from "next/link";
import { PortfolioNode } from "@/app/page";
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

interface PortfolioProps {
  portfolios: PortfolioNode[];
}

export default function Portfolio({ portfolios }: PortfolioProps) {
  const { ref, className } = useScrollFadeIn(); // ⚡ 훅 호출

  return (
    <section 
      id="portfolio" 
      ref={ref} // ⚡ DOM 참조 연결
      className={`w-full flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-slate-50 select-none ${className}`} // ⚡ 클래스 결합
    >
      <div className="text-center mb-10 max-w-2xl">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
          PREMIUM CASE STUDY
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4 text-slate-900 tracking-tight">
          최근 시공 사례
        </h2>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed">
          철저한 보양 작업부터 완전 분해 고압 세척까지, 모두홈케어가 완수한 B2B 표준 유지보수 실적입니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
        {portfolios.map((item, index) => (
          <Link 
            key={index} 
            href={`/portfolio/${item.slug}`} 
            className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer h-full"
          >
            <div className="w-full aspect-video bg-slate-100 relative overflow-hidden flex-shrink-0">
              {item.featuredImage ? (
                <Image 
                  src={item.featuredImage.node.sourceUrl} 
                  alt={item.featuredImage.node.sourceUrl} 
                  fill 
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium text-sm">
                  시공 이미지 준비 중
                </div>
              )}
            </div>
            
            <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold text-blue-600 bg-blue-50 rounded-md tracking-tight">LG 시스템 에어컨</span>
                  <span className="px-2.5 py-0.5 text-[11px] font-bold text-slate-600 bg-slate-100 rounded-md tracking-tight">인천 서구</span>
                </div>
                <h3 className="font-bold text-[16px] md:text-lg text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-blue-600 transition-colors">
                <span className="text-xs font-semibold tracking-tight">자세히 보기</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}