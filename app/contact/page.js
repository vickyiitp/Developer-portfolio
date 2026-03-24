import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Devil Labs",
  description: "Consultation and lead capture for Devil Labs by Vicky.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
