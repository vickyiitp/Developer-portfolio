"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PHONE = "918102099678";
const EMAIL = "vickyykumar14@gmail.com";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const industry = form.industry.value;
    const message = form.message.value;

    // 1) Send to email via FormSubmit.co (free, no API key needed)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name,
          email,
          industry,
          message,
          _subject: `🔥 New Devil Labs Lead: ${name} (${industry})`,
          _template: "table",
        }),
      });
      
      if (!res.ok) throw new Error("Email failed");
    } catch (err) {
      // Fallback: open mailto if FormSubmit fails
      const mailtoBody = `Name: ${name}%0AEmail: ${email}%0AIndustry: ${industry}%0AMessage: ${message}`;
      window.open(`mailto:${EMAIL}?subject=New Devil Labs Lead: ${name}&body=${mailtoBody}`, "_blank");
    }

    // 2) Send WhatsApp notification to your phone
    const waText = encodeURIComponent(
      `🔥 *New Devil Labs Lead*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Industry:* ${industry}\n📝 *Brief:* ${message}`
    );
    window.open(`https://wa.me/${PHONE}?text=${waText}`, "_blank");

    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-36 relative z-20 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle Gold Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFB53B]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-16 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tight mb-4 leading-tight">
            Ready to Engineer <br className="hidden sm:block" /> 
            <span className="text-[#CFB53B] italic">Absolute Profitability?</span>
          </h2>
          <p className="font-sans font-light text-white/60 max-w-lg mx-auto md:text-lg">
            Drop your brief below. Whether it&apos;s Unity pipelines or an AI-driven storefront, let&apos;s architect the future of your operations.
          </p>
        </div>

        {/* Lead Gen Glassmorphism Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-widest text-[#CFB53B] uppercase">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B]/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-widest text-[#CFB53B] uppercase">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B]/50 transition-colors"
                />
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest text-[#CFB53B] uppercase">Industry Sector</label>
              <select 
                name="industry"
                required
                aria-label="Select your industry"
                defaultValue=""
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B]/50 transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #CFB53B 50%), linear-gradient(135deg, #CFB53B 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="" disabled className="bg-[#0A0A0A] text-white/50">Select your industry</option>
                <option value="Logistics & Supply Chain" className="bg-[#0A0A0A]">Logistics & Supply Chain</option>
                <option value="E-Commerce & Retail" className="bg-[#0A0A0A]">E-Commerce & Retail</option>
                <option value="Jewelry & Luxury" className="bg-[#0A0A0A]">Jewelry & Luxury</option>
                <option value="Restaurants & Hospitality" className="bg-[#0A0A0A]">Restaurants & Hospitality</option>
                <option value="Software & Tech" className="bg-[#0A0A0A]">Software & Tech</option>
                <option value="Content Creator / Media" className="bg-[#0A0A0A]">Content Creator / Media</option>
                <option value="Other" className="bg-[#0A0A0A]">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest text-[#CFB53B] uppercase">Project Brief</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Tell me about your bottlenecks and vision..."
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B]/50 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={status !== "idle"}
              className="mt-4 w-full py-4 text-black font-sans font-medium text-sm md:text-base tracking-widest uppercase transition-all duration-300 disabled:opacity-50"
              style={{
                background: "linear-gradient(90deg, #B8992D 0%, #E3C952 50%, #B8992D 100%)",
                backgroundSize: "200% auto",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundPosition = "right center" }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundPosition = "left center" }}
            >
              {status === "idle" && "Send Brief"}
              {status === "submitting" && "Transmitting..."}
              {status === "success" && "✓ Secured. Check WhatsApp."}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
