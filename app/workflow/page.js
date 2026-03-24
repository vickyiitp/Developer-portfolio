import EfficiencyEngine from "@/components/EfficiencyEngine";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workflow | Devil Labs",
  description: "Discover the high-efficiency engineering workflow at Devil Labs.",
};

export default function WorkflowPage() {
  return (
    <div className="w-full min-h-screen flex flex-col pt-20">
      <div className="flex-grow flex flex-col items-center">
        <EfficiencyEngine />
      </div>
      <Footer />
    </div>
  );
}
