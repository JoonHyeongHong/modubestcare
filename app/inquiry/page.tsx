import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/sections/B2BContact";

export default async function Home() {
  return (
    <div className="relative w-full">
      <PageHeader title="문의" subtitle="Inquiry" />
      <ContactForm />
    </div>
  );
}
