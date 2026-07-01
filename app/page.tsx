import B2BMain from "@/components/home/B2BMain";
import FloatingButtons from "@/components/common/FloatingButtons";

export default async function Home() {
  return (
    <div className="relative w-full">
      <B2BMain />
      <FloatingButtons />
    </div>
  );
}
