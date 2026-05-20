'use client';

import { useState } from 'react';

interface ContactFormProps {
  viewMode?: 'b2b' | 'edu'; // b2b: 고객 견적, edu: 기사 지원
}

interface FormData {
  name: string;
  phone: string;
  location: string;
  // B2B 전용 필드
  acType: string;
  quantity: number;
  // 기사 모집(Edu) 전용 필드 (완전 수정)
  hasVehicle: string;     // 차량 및 운전 여부 (기사 필수 요건)
  availableTime: string;  // 활동 가능 시기
  message: string;
}

export default function ContactForm({ viewMode = 'b2b' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    acType: '천장형 4Way',
    quantity: 1,
    hasVehicle: '차량 보유 (운전 가능)', // 기사 기본값
    availableTime: '즉시 활동 가능',       // 기사 기본값
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const KAKAO_CHAT_URL = "https://open.kakao.com/o/s03CkhJc";

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
      name: '', phone: '', location: '',
      acType: '천장형 4Way', quantity: 1,
      hasVehicle: '차량 보유 (운전 가능)', availableTime: '즉시 활동 가능',
      message: ''
    });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const themeBtnColor = viewMode === 'b2b' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700';

  return (
  // md 미만 환경에선 고정 높이를 없애서(min-h-screen) 아래쪽 잘림 원천 방쇄
  <section id="contact" className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 pb-10 md:pb-0 scroll-mt-20 box-border">
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 flex flex-col justify-center h-full min-h-0">
      
      {/* 헤더 (카톡 버튼 완전히 제거하여 높이 확보!) */}
      <div className="text-center mb-4 flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-950">
          {viewMode === 'b2b' ? '빠른 견적 문의' : '소속 세척 기사 지원하기'}
        </h2>
        <p className="text-gray-500 mt-1 text-xs break-keep">
          {viewMode === 'b2b' ? '대량 세척 견적을 빠르게 안내해 드립니다.' : '정식 교육 후 프로 크루로 활동할 팀원을 모십니다.'}
        </p>
      </div>

      {/* 폼 본체 박스 */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex-shrink-0">
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* 인풋 그리드 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* ...이름, 연락처, 지역 인풋들은 기존과 동일... */}
          </div>

          {/* 하단 추가 문의 사항 */}
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1">
              {viewMode === 'b2b' ? '문의 내용 (선택)' : '경력 사항 및 한마디 (선택)'}
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 text-gray-700 rounded-lg text-xs resize-none outline-none focus:border-blue-500"
              placeholder={viewMode === 'b2b' ? '특이사항을 적어주세요.' : '나이 및 유관 경력을 적어주세요.'}
            />
          </div>

          {/* 최종 제출 버튼 (이제 모바일에서도 무조건 다 보입니다!) */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl text-white font-bold text-sm md:text-base transition-all ${
                isSubmitting ? 'bg-gray-400' : themeBtnColor
              }`}
            >
              {isSubmitting ? '제출 중...' : (viewMode === 'b2b' ? '무료 견적 요청하기' : '기사 지원서 제출하기')}
            </button>
          </div>
        </form>
      </div>

    </div>
  </section>
);
}