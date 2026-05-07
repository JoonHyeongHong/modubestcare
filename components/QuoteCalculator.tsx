'use client';

import { Preahvihear } from 'next/font/google';
import { useState } from 'react';

const PRICING = {
    wall: { name: '벽걸이형', price: 120000 },
  stand: { name: '스탠드형', price: 180000 },
  way1: { name: '천장형 1Way', price: 150000 },
  way4: { name: '천장형 4Way', price: 180000 },
};

type AcType = keyof typeof PRICING;

export default function QuoteCalculator() {
    //기종별 수량 상태 관리
    const [counts, setCounts] = useState<Record<AcType, number>>({
       wall:0,
         stand:0,
         way1:0,
         way4:0,
      }); 

    // 수량 증감 핸들러
    const handleCount = (type : AcType, delta: number) => {
        setCounts((prev) => ({
            ...prev, [type]:Math.max(0,prev[type] + delta),
        }));

    };

    //총 대수 및 총액 계산 로직
    const totalQuantity = Object.values(counts).reduce((a,b)=> a + b, 0);
    const baseTotal = Object.entries(counts).reduce((sum,[type,count])=> sum+ PRICING[type as AcType].price * count,0);
   
    //B2B 대량 할인 로직 (10대 이상 10%, 20대 이상 15%, 30대 이상 20%)
    let discountRate = 0;
    if (totalQuantity >= 30) discountRate = 0.2;
    else if (totalQuantity >= 20) discountRate = 0.15;
    else if (totalQuantity >= 10) discountRate = 0.1;

    const discountAmount = baseTotal  * discountRate;
    const finalTotal = baseTotal - discountAmount;

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">실시간 B2B 예상 견적</h2>
        <p className="text-gray-500 mt-2">10대 이상 대량 의뢰 시 자동으로 할인이 적용됩니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 왼쪽: 수량 입력기 */}
        <div className="space-y-4">
          {(Object.keys(PRICING) as AcType[]).map((type) => (
            <div key={type} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div>
                <h3 className="font-bold text-gray-800">{PRICING[type].name}</h3>
                <p className="text-sm text-gray-500">{PRICING[type].price.toLocaleString()}원 / 대</p>
              </div>
              <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-md px-2 py-1 shadow-sm">
                <button 
                  onClick={() => handleCount(type, -1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600 font-bold text-xl transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center text-gray-700 font-bold text-lg">{counts[type]}</span>
                <button 
                  onClick={() => handleCount(type, 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600 font-bold text-xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽: 결과 요약판 */}
        <div className="bg-blue-600 text-white p-8 rounded-xl flex flex-col justify-center relative overflow-hidden shadow-inner">
          {/* 장식용 배경 원 */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center border-b border-blue-400 pb-4">
              <span className="text-blue-100 text-lg">총 세척 대수</span>
              <span className="text-2xl font-bold">{totalQuantity}대</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-blue-100 text-lg">기본 견적</span>
              <span className="text-xl line-through opacity-70">{baseTotal.toLocaleString()}원</span>
            </div>

            {discountRate > 0 && (
              <div className="flex justify-between items-center text-yellow-300 font-bold animate-pulse">
                <span>대량 할인 적용 ({discountRate * 100}%)</span>
                <span>- {discountAmount.toLocaleString()}원</span>
              </div>
            )}

            <div className="pt-6 border-t border-blue-400 mt-4">
              <div className="flex justify-between items-end">
                <span className="text-blue-100 text-xl">최종 예상 견적</span>
                <span className="text-4xl font-extrabold">{finalTotal.toLocaleString()}원</span>
              </div>
              <p className="text-xs text-blue-200 text-right mt-2">* 현장 오염도 및 층고에 따라 실제 견적은 달라질 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
