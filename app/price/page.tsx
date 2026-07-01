import PageHeader from "@/components/common/PageHeader";
import QuoteCalculator from "@/components/sections/QuoteCalculator";

export default async function Home() {
  return (
    <div className="relative w-full">
      <PageHeader title="서비스 단가" subtitle="Price" />
      <QuoteCalculator />
    </div>
  );
}
