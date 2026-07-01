"use client";

import { useState } from "react";

// 포스트 데이터 타입 정의
interface Post {
  id: string;
  title: string;
  date: string;
  name: string; // 마스킹된 작성자 이름 (예: 홍*동)
}

export default function InquiryBoard({ posts }: { posts: Post[] }) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [phone, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [acfData, setAcfData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 모달 열기
  const handleOpenModal = (post: Post) => {
    setSelectedPost(post);
    setPhoneNumber("");
    setErrorMsg("");
    setAcfData(null); // 이전 본문 초기화
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedPost(null);
    setAcfData(null);
  };

  // 인증 API 호출
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: selectedPost?.id, phone: phone }),
      });

      const data = await res.json();

      if (res.ok && data.authenticated) {
        setAcfData(data.acfData); // 성공 시 본문 세팅
      } else {
        setErrorMsg(data.message || "연락처 정보가 일치하지 않습니다.");
      }
    } catch (err) {
      setErrorMsg("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* 1. 게시글 목록 영역 */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-50 p-4 border-b text-sm font-semibold text-gray-600 text-center">
          <div className="col-span-8 text-left pl-2">제목</div>
          <div className="col-span-2">작성자</div>
          <div className="col-span-2">작성일</div>
        </div>

        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleOpenModal(post)}
            className="grid grid-cols-12 p-4 border-b cursor-pointer hover:bg-blue-50 transition-colors text-sm text-center items-center"
          >
            <div className="col-span-8 text-left pl-2 font-medium text-gray-800 truncate">
              🔒 {post.title}
            </div>
            <div className="col-span-2 text-gray-500">{post.name}</div>
            <div className="col-span-2 text-gray-400">{post.date}</div>
          </div>
        ))}
      </div>

      {/* 2. 비밀번호(연락처) 입력 모달 창 */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in">
            {/* 닫기 버튼 */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              {!acfData ? (
                /* 인증 폼 영역 */
                <form onSubmit={handleVerify} className="flex flex-col gap-4">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      🔒
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      본인 확인
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      문의 등록 시 입력한 연락처를 입력해주세요.
                    </p>
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="예: 01012345678 (숫자만 입력)"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center tracking-widest"
                    required
                  />

                  {errorMsg && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-400 mt-2"
                  >
                    {isLoading ? "확인 중..." : "글 내용 보기"}
                  </button>
                </form>
              ) : (
                /* 인증 성공 시 본문 표시 영역 */
                <div className="animate-fade-in text-left">
                  {/* 헤더 영역 */}
                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-md mb-2">
                      견적문의 내역
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                      {selectedPost.title}
                    </h3>
                  </div>

                  {/* 상세 내역 테이블/카드 형태 폼 디자인 */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4">
                    <div className="grid grid-cols-3 border-b border-slate-200/60 pb-3">
                      <span className="text-sm font-medium text-slate-400">
                        업체/기관명
                      </span>
                      <span className="col-span-2 text-sm font-semibold text-slate-800">
                        {acfData.company_name || acfData.companyName || "-"}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 border-b border-slate-200/60 pb-3">
                      <span className="text-sm font-medium text-slate-400">
                        담당자
                      </span>
                      <span className="col-span-2 text-sm font-semibold text-slate-800">
                        {acfData.client_name || acfData.clientName || "-"}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 border-b border-slate-200/60 pb-3">
                      <span className="text-sm font-medium text-slate-400">
                        연락처
                      </span>
                      <span className="col-span-2 text-sm font-semibold text-slate-800 text-blue-600 font-mono">
                        {acfData.phone || "-"}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 border-b border-slate-200/60 pb-3">
                      <span className="text-sm font-medium text-slate-400">
                        주소
                      </span>
                      <span className="col-span-2 text-sm font-semibold text-slate-800">
                        {acfData.address || "-"}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 border-b border-slate-200/60 pb-3">
                      <span className="text-sm font-medium text-slate-400">
                        예상 수량
                      </span>
                      <span className="col-span-2 text-sm font-semibold text-slate-800">
                        {acfData.quantity || "-"}
                      </span>
                    </div>

                    {/* 상세 내용 영역 */}
                    <div className="flex flex-col pt-1">
                      <span className="text-sm font-medium text-slate-400 mb-2">
                        상세 내용
                      </span>
                      <div className="text-sm text-slate-700 bg-white border border-slate-200/80 rounded-lg p-3 min-h-[80px] whitespace-pre-wrap leading-relaxed">
                        {acfData.details || "내용이 없습니다."}
                      </div>
                    </div>
                  </div>

                  {/* 하단 닫기 버튼 */}
                  <button
                    onClick={handleCloseModal}
                    className="w-full py-3 mt-6 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg transition-colors shadow-sm text-center"
                  >
                    확인 완료
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
