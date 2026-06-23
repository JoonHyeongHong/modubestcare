import Navbar from '@/components/common/Navbar';
import EduMain from '@/components/home/EduMain';
import {fetchAPI} from "@/lib/api";
export default function EduPage() {
  return (
    <main className="relative min-h-screen md:h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-gray-50">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <EduMain />
      </div>
    </main>
  );
}