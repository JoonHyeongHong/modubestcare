'use client';

import { resolve } from 'path';
import { useState } from 'react';

interface FormData {
    name : string;
    phone : string;
    location : string;
    acType : string;
    quantity : number;
    message : string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name : '',
        phone : '',
        location : '',
        acType : '천장형 4Way',
        quantity : 1,
        message : '',
    });


const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

//입력값 변경 핸들러
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}));
};

//폼 제출 핸들러 (현재는 UI 시뮬레이션만 적용)
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    //TODO : 실제 이메일 전송 API 연결 (예 : EmailJS, Next.js Server Action 등)
    // 지금은 1.5초 뒤에 전송 완료가 된 것처럼 시뮬레이션 합니다.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    //성공 후 폼 초기화
    setFormData({name : '',
        phone : '',
        location : '',
        acType : '천장형 4Way',
        quantity : 1,
        message : ''})
    ;
    //3초뒤 성공 메시지 숨기기
    setTimeout(()=>setIsSuccess(false),3000);
    };
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto my-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">빠른 견적 문의</h2>
        <p className="text-gray-500 mt-2">대량 세척 및 정기 관리 견적을 빠르게 안내해 드립니다.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 담당자/업체명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">업체명 또는 담당자명 *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="예: 홍길동 / (주)OO컴퍼니"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="010-0000-0000"
            />
          </div>

          {/* 지역 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">지역 *</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="예: 인천 서구 청라동"
            />
          </div>

          {/* 에어컨 종류 & 수량 (Flex로 가로 배치) */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">주요 기종</label>
              <select
                name="acType"
                value={formData.acType}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-gray-700 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="천장형 4Way">천장형 4Way</option>
                <option value="천장형 1Way">천장형 1Way</option>
                <option value="스탠드형">스탠드형</option>
                <option value="벽걸이형">벽걸이형</option>
                <option value="혼합(내용에 기재)">여러 기종 혼합</option>
              </select>
            </div>
            <div className="w-24">
              <label className="block text-sm font-medium text-gray-700 mb-2">대수</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-center"
              />
            </div>
          </div>
        </div>

        {/* 추가 문의 사항 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용 (선택)</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="층고가 높거나, 야간 작업이 필요한 경우 등 특이사항을 적어주시면 더 정확한 견적이 가능합니다."
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all ${
            isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? '전송 중...' : '무료 견적 요청하기'}
        </button>

        {/* 성공 알림 메시지 */}
        {isSuccess && (
          <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium animate-pulse">
            성공적으로 접수되었습니다! 담당자가 빠르게 연락드리겠습니다.
          </div>
        )}
      </form>
    </div>
  );
};
