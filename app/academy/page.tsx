import Navbar from '@/components/common/Navbar';
import EduMain from '@/components/home/EduMain';

export default function EduPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 scroll-smooth">
          <div className="flex-1 flex flex-col">
            {/* 3. 가져온 portfolios 데이터를 자식 컴포넌트(B2BMain)로 넘겨줍니다 (Props) */}
            <EduMain />
          </div>
        </main>
  );
}