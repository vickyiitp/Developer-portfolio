import ServicesShowcase from "@/components/ServicesShowcase";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Devil Labs",
  description: "Explore the AI and automation services offered by Devil Labs.",
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        <ServicesShowcase />
      </div>
      <Footer />
    </div>
  );
}
