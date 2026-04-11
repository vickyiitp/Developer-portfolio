import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Devil Labs",
  description: "Privacy Policy for Devil Labs by Vicky Kumar, IIT Patna.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#CFB53B] selection:text-black pt-24">
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/" className="inline-block mb-8 text-[#CFB53B] hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
          ← Back to Hub
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-white/50 font-mono text-xs uppercase tracking-widest mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} | DEVIL LABS</p>

        <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#CFB53B] prose-headings:text-white max-w-none">
          <p>
            At Devil Labs, accessible from vickyiitp.tech, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Devil Labs and how we use it.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use our website or services, we may collect the following types of information:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide when filling out forms on our website.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website, including your IP address, browser type, pages visited, and time spent on the site.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website and services.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you directly, including for customer service, to provide updates and other information relating to the website, and for marketing purposes.</li>
            <li>Send you emails relating to your project inquiries.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We prioritize the security of your data. We implement reasonable security practices and procedures (like SSL encryption) to help protect the confidentiality and security of personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our website, provide services on our behalf (e.g., hosting via Vercel, analytics, FormSubmit for forms), or assist us in analyzing how our website is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>5. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the right to request copies of your personal data, request correction of any information you believe is inaccurate, or request erasure of your personal data. If you make a request, we have one month to respond to you.
          </p>

          <h2>6. Updates to this Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:themvaplatform@gmail.com">themvaplatform@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
