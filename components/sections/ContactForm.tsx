'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  location: string;
  acType: string;
  quantity: number;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    acType: '천장형 4Way',
    quantity: 1,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      phone: '',
      location: '',
      acType: '천장형 4Way',
      quantity: 1,
      message: ''
    });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    // 1. h-screen과 pt-20으로 헤더 공간 확보 및 스크롤 방지
    <section id="contact" className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 scroll-mt-20 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto px-6 flex flex-col justify-center h-full py-4 md:py-8">
        
        {/* 헤더: 간격 축소 */}
        <div className="text-center mb-4 md:mb-6 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">빠른 견적 문의</h2>
          <p className="text-gray-500 mt-1 text-sm">정기 관리 및 대량 세척 견적을 빠르게 안내해 드립니다.</p>
        </div>

        {/* 폼 박스: flex-1과 min-h-0을 주어 내부 스크롤 허용 */}
        <div className="bg-white p-5 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {/* 담당자/업체명 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">업체명 또는 담당자명 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  placeholder="예: 홍길동 / (주)OO컴퍼니"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">연락처 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  placeholder="010-0000-0000"
                />
              </div>

              {/* 지역 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">지역 *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  placeholder="예: 인천 서구 청라동"
                />
              </div>

              {/* 에어컨 종류 & 수량 */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">주요 기종</label>
                  <select
                    name="acType"
                    value={formData.acType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-sm"
                  >
                    <option value="천장형 4Way">천장형 4Way</option>
                    <option value="천장형 1Way">천장형 1Way</option>
                    <option value="스탠드형">스탠드형</option>
                    <option value="벽걸이형">벽걸이형</option>
                    <option value="혼합(내용에 기재)">여러 기종 혼합</option>
                  </select>
                </div>
                <div className="w-20">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">대수</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-2 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-center text-sm"
                  />
                </div>
              </div>
            </div>

            {/* 추가 문의 사항 (rows를 줄여 높이 확보) */}
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1.5">문의 내용 (선택)</label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-sm"
                placeholder="특이사항(층고, 야간작업 등)을 적어주세요."
              />
            </div>

            {/* 제출 버튼 */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl text-white font-bold text-base transition-all ${
                  isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md'
                }`}
              >
                {isSubmitting ? '전송 중...' : '무료 견적 요청하기'}
              </button>
            </div>

            {/* 성공 알림 메시지 */}
            {isSuccess && (
              <div className="p-3 bg-green-50 text-green-700 rounded-lg text-center font-medium text-sm animate-bounce">
                성공적으로 접수되었습니다! 담당자가 빠르게 연락드리겠습니다.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}