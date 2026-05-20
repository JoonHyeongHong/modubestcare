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
    <section id="contact" className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-gray-50 pt-20 scroll-mt-20 overflow-hidden box-border">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6 flex flex-col justify-center h-full py-4 md:py-6 min-h-0">
        
        {/* 헤더 */}
        <div className="text-center mb-4 md:mb-5 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 leading-tight">
            {viewMode === 'b2b' ? '빠른 견적 문의' : '소속 세척 기사 지원하기'}
          </h2>
          <p className="text-gray-500 mt-1 text-xs md:text-sm break-keep">
            {viewMode === 'b2b' 
              ? '정기 관리 및 대량 세척 견적을 빠르게 안내해 드립니다.' 
              : '대기업 규격 교육 이수 후 모두베스트케어의 프로 기사로 활동할 팀원을 모십니다.'}
          </p>

          {/* 모바일 카톡 버튼 */}
          <div className="mt-4 md:hidden px-1">
            <a 
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#FEE500] text-[#191919] font-bold rounded-xl text-sm shadow-sm"
            >
              💬 카톡으로 지원 및 조건 문의하기
            </a>
            <div className="flex items-center my-4 text-gray-400 text-[11px] before:flex-1 before:border-t before:border-gray-200 after:flex-1 after:border-t after:border-gray-200 gap-3">
              또는 간편 지원서 작성하기
            </div>
          </div>
        </div>

        {/* 메인 폼 박스 */}
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              
              {/* 이름 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  {viewMode === 'b2b' ? '업체명 또는 담당자명 *' : '지원자 성함 *'}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm outline-none"
                  placeholder={viewMode === 'b2b' ? '예: 홍길동 / (주)OO컴퍼니' : '실명을 입력해 주세요'}
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">연락처 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm outline-none"
                  placeholder="010-0000-0000"
                />
              </div>

              {/* 거주 지역 */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  {viewMode === 'b2b' ? '세척 대상지 주소 *' : '거주 지역 (인천/김포 등) *'}
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm outline-none"
                  placeholder="예: 인천 서구 청라동"
                />
              </div>

              {/* ⚡ 모드별 필드 분기 */}
              {viewMode === 'b2b' ? (
                /* B2B 모드 */
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-600 mb-1">주요 기종</label>
                    <select
                      name="acType"
                      value={formData.acType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg bg-white text-sm outline-none"
                    >
                      <option value="천장형 4Way">천장형 4Way</option>
                      <option value="천장형 1Way">천장형 1Way</option>
                      <option value="스탠드형">스탠드형</option>
                      <option value="벽걸이형">벽걸이형</option>
                      <option value="혼합(내용에 기재)">여러 기종 혼합</option>
                    </select>
                  </div>
                  <div className="w-20">
                    <label className="block text-xs font-bold text-gray-600 mb-1">대수</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-2 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg text-center text-sm outline-none"
                    />
                  </div>
                </div>
              ) : (
                /* 🛠️ 기사 모집(Edu) 모드 전용 필드 */
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-600 mb-1">차량 및 운전 여부</label>
                    <select
                      name="hasVehicle"
                      value={formData.hasVehicle}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg bg-white text-sm outline-none"
                    >
                      <option value="차량 보유 (운전 가능)">차량 보유 (운전 가능)</option>
                      <option value="차량 미보유 (운전 가능)">차량 미보유 (운전 가능)</option>
                      <option value="운전 불가능">운전 불가능</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-600 mb-1">활동 가능 시기</label>
                    <select
                      name="availableTime"
                      value={formData.availableTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:py-2.5 border border-gray-200 text-gray-700 rounded-lg bg-white text-sm outline-none"
                    >
                      <option value="즉시 활동 가능">교육 후 즉시 활동 가능</option>
                      <option value="1개월 이내">1개월 이내 가능</option>
                      <option value="협의 후 결정">일정 협의 필요</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* 하단 자기소개 및 문의 */}
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">
                {viewMode === 'b2b' ? '문의 내용 (선택)' : '경력 사항 및 하고 싶은 말 (선택)'}
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm resize-none outline-none"
                placeholder={
                  viewMode === 'b2b' 
                    ? '특이사항(층고, 야간작업 등)을 적어주세요.' 
                    : '나이, 유관 업무 경력(세척, 에어컨 설치 등)이나 다짐을 간단히 적어주시면 우선 선발에 도움이 됩니다.'
                }
              />
            </div>

            {/* 제출 버튼 */}
            <div className="pt-1.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 md:py-3.5 rounded-xl text-white font-bold text-sm md:text-base transition-all shadow-sm ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : themeBtnColor
                }`}
              >
                {isSubmitting ? '지원서 제출 중...' : (viewMode === 'b2b' ? '무료 견적 요청하기' : '팀원(세척 기사) 지원서 제출하기')}
              </button>
            </div>

            {/* 성공 알림 */}
            {isSuccess && (
              <div className="p-3 bg-green-50 text-green-700 rounded-lg text-center font-medium text-sm animate-bounce">
                {viewMode === 'b2b' 
                  ? '성공적으로 접수되었습니다!' 
                  : '지원서가 정상 접수되었습니다. 서류 검토 후 면접 일정을 위해 연락드리겠습니다.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}