import Script from "next/script";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import CustomCursor from "@/components/CustomCursor";
import OfflinePopup from "@/components/OfflinePopup";
import BackToTop from "@/components/BackToTop";
import ProcessPopup from "@/components/ProcessPopup";
import "./globals.css";

export const metadata = {
  title: "Vicky Kumar | IIT Patna Developer | Devil Labs - AI Websites, Automation & Agentic AI",
  description: "Vicky Kumar, IIT Patna developer & founder of Devil Labs. Top AI architect in India specializing in AI-powered infrastructure, enterprise B2B pipelines, agentic AI, NLP chatbots, and scalable SaaS deployments. Partner with the top tech talent from IIT Patna. Architecting systems starting at ₹5,000. Contact: vickyykumar14@gmail.com | +91 8102099678",
  keywords: "vickyiitp, vicky kumar, iit patna developer, devil labs, best web architect india, ai automation engineer india, workflow architecture, agentic ai systems, chatbot integrations india, ecommerce engine deployment, next.js developer, enterprise react, full stack systems india, deploy iitian architect, b2b saas engineer, direct b2b digital consulting, elite web architect, enterprise tech consultant 2026",
  authors: [{ name: "Vicky Kumar", url: "https://vickyiitp.tech" }],
  creator: "Vicky Kumar - Devil Labs",
  publisher: "Devil Labs",
  metadataBase: new URL("https://vickyiitp.tech"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vicky Kumar | Devil Labs - Enterprise B2B Systems & Automation Architect, IIT Patna",
    description: "Deploy scalable tech with an elite architect from IIT Patna. AI infrastructures, predictive endpoints, agentic NLP, custom digital operations, and SaaS product engineering. Starting at ₹5,000. Founded by Vicky Kumar, IIT Patna CSE.",
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
    google: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7BHY0YHBQ8" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7BHY0YHBQ8');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans text-white selection:bg-accent/30 selection:text-white bg-[#050505]" suppressHydrationWarning>
        <CustomCursor />
        <OfflinePopup />
        <div className="relative z-10 mx-auto w-full min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full relative overflow-x-hidden">
            {children}
          </main>
        </div>
        <ChatBot />
        <ProcessPopup />
        <BackToTop />
      </body>
    </html>
  );
}

