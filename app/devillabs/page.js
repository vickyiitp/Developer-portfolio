import ProjectInventory from "@/components/ProjectInventory";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Devil Labs",
  description: "Explore the proprietary AI and Web Automation projects engineered by Devil Labs.",
};

export default function DevilLabsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow py-20">
        <ProjectInventory />
      </div>
      <Footer />
    </div>
  );
}
