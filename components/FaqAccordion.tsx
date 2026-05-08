'use client'

import { useState } from "react"

const faqs = [
    {
    q: "세금계산서 및 현금영수증 발행이 가능한가요?",
    a: "물론입니다. 당사는 정식 등록 업체로, 작업 완료 후 사업자등록증을 보내주시면 부가세 포함 금액으로 전자세금계산서를 당일 발행해 드립니다."
  },
  {
    q: "영업에 방해되지 않게 야간이나 주말 작업도 가능한가요?",
    a: "네, 상가 및 사무실 고객님들의 원활한 업무를 위해 야간 및 주말/공휴일 작업 스케줄을 별도로 운영하고 있습니다. (사전 예약 필수)"
  },
];

export default function FaqAccordion() {
    const [openIndex,setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex => openIndex === index ? null : index);
    }

    return (
        <div className="max-w-3xl mx-auto w-full my-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">자주 묻는 질문</h2>
        <p className="text-gray-500 mt-2">고객님들이 가장 많이 문의하시는 내용을 모았습니다.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-blue-300 shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                Q. {faq.q}
              </span>
              <span className={`transform transition-transform duration-300 text-blue-500 font-bold text-xl ${openIndex === index ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-gray-50">
                <span className="font-bold text-blue-600 mr-2">A.</span>
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}