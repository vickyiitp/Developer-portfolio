import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata = {
  title: "Vicky Kumar | IIT Patna Developer | Devil Labs - AI Websites, Automation & Agentic AI",
  description: "Vicky Kumar, IIT Patna developer & founder of Devil Labs. Top web developer in India specializing in AI-powered websites, business automation, agentic AI, chatbots, e-commerce, and SaaS development. Hire the best developer from IIT Patna. Starting at ₹5,000. Contact: vickyykumar14@gmail.com | +91 8102099678",
  keywords: "vickyiitp, vicky kumar, iit patna developer, devil labs, best web developer india, ai developer india, automation developer, agentic ai developer, chatbot developer india, ecommerce developer, next.js developer, react developer, full stack developer india, hire iitian developer, saas developer, hire freelance developer upwork, fiverr web developer, top developer india 2026",
  authors: [{ name: "Vicky Kumar", url: "https://vickyiitp.tech" }],
  creator: "Vicky Kumar - Devil Labs",
  publisher: "Devil Labs",
  metadataBase: new URL("https://vickyiitp.tech"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vicky Kumar | Devil Labs - Best AI Developer & Automation Architect, IIT Patna",
    description: "Hire the top web developer from IIT Patna. AI websites, business automation, agentic AI, chatbots, e-commerce, and SaaS development. Starting at ₹5,000. Founded by Vicky Kumar, IIT Patna CSE.",
    url: "https://vickyiitp.tech",
    siteName: "Devil Labs | Vicky Kumar",
    images: [
      {
        url: "https://vickyiitp.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vicky Kumar - IIT Patna Developer - Devil Labs Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicky Kumar | Devil Labs - Top AI Developer India | IIT Patna",
    description: "AI websites, automation tools, agentic AI, chatbots & custom software. Starting at ₹5,000. Founded by Vicky Kumar, IIT Patna.",
    creator: "@vickyiitp",
    images: ["https://vickyiitp.tech/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  verification: {
    google: "PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-white selection:bg-accent/30 selection:text-white">
        <CustomCursor />
        <div className="relative z-10 mx-auto max-w-[1440px] w-full min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full relative overflow-x-hidden">
            {children}
          </main>
        </div>
        <ChatBot />
      </body>
    </html>
  );
}

