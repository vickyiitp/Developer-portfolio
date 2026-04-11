import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Devil Labs",
  description: "Terms & Conditions for working with Devil Labs and Vicky Kumar.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#CFB53B] selection:text-black pt-24">
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/" className="inline-block mb-8 text-[#CFB53B] hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
          ← Back to Hub
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4">Terms and Conditions</h1>
        <p className="text-white/50 font-mono text-xs uppercase tracking-widest mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} | DEVIL LABS</p>

        <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#CFB53B] prose-headings:text-white max-w-none">
          <p>
            Welcome to Devil Labs, operated by Vicky Kumar. By engaging in services at vickyiitp.tech, you agree to these Terms and Conditions. Please review them carefully.
          </p>

          <h2>1. Services & Agreements</h2>
          <p>
            Devil Labs provides web development, AI automation, software engineering, SaaS MVP development, frontend design, and backend architectural services. All service descriptions, deliverables, timelines, and payment structures are customized and finalized upon signing an agreement or initiating an invoice for the client.
          </p>

          <h2>2. Payment & Milestones</h2>
          <p>
            Payments are generally divided into milestones based on project scope, unless mentioned otherwise in writing:
          </p>
          <ul>
            <li>A <strong>30% non-refundable advance payment</strong> is required to formally commence development or lock in a calendar slot.</li>
            <li>A <strong>30% mid-milestone progressive payment</strong> will be required upon completion of an agreed-upon core phase (such as UI finalization or backend integration).</li>
            <li>The final <strong>40% payment</strong> is due prior to source code delivery, final deployment, and IP transfer.</li>
          </ul>
          <p>
            Devil Labs commits to open transparency regarding delays, and expects the same punctuality regarding payouts. Overdue balances may result in a pause in development.
          </p>

          <h2>3. Revisions & Scope Creep</h2>
          <p>
            Projects include specific revision rounds as outlined in your specific proposal. Additional major changes after the initial requirements phase (scope creep) may be subject to additional fees. We rely on clear scopes to build exactly what you need at the highest quality.
          </p>

          <h2>4. Intellectual Property (IP)</h2>
          <p>
            The intellectual property (custom frameworks, application architecture, proprietary code structure) utilized by Devil Labs to speed up development remains the property of Devil Labs unless explicitly outlined via custom buyout. However, upon 100% full project payment, the specific project code, deployed assets, and finalized web architecture transfer entirely to the client.
          </p>

          <h2>5. Warranties & Liability</h2>
          <p>
            Devil Labs provides high-performance, robust, and scalable solutions using modern software engineering practices. We guarantee our work is secure and functional <em>at the time of launch</em> based on modern standards (e.g., Next.js, Node, Python implementations). We are not liable for subsequent unauthorized changes, third-party API deprecations, independent server issues, or general downtime beyond the initial launch phase. Ongoing maintenance packages are offered separately if required.
          </p>

          <h2>6. Data Collection</h2>
          <p>
            When utilizing our website or engaging in a service, we handle your data with respect and privacy. By engaging Devil Labs, you also acknowledge our <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>7. Termination of Service</h2>
          <p>
            Devil Labs reserves the right to suspend or terminate services or contractual agreements for failure to meet payment schedules, or abusive/unprofessional behavior without providing a refund.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and any negotiations between Devil Labs and the Client shall be governed by and construed in accordance with the laws and jurisdictions corresponding with operations registered in India.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For any queries regarding these terms, send an email to: <a href="mailto:themvaplatform@gmail.com">themvaplatform@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
