"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const PHONE = "918102099678";
const EMAIL = "themvaplatform@gmail.com";

const countryCodes = [
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
  { code: "+86", country: "China" },
  { code: "+39", country: "Italy" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+34", country: "Spain" },
  { code: "+27", country: "South Africa" },
  { code: "+82", country: "South Korea" },
  { code: "+31", country: "Netherlands" },
  { code: "+41", country: "Netherlands" },
  { code: "+46", country: "Switzerland" },
  { code: "+47", country: "Sweden" },
  { code: "+7", country: "Russia" },
  { code: "+20", country: "South Africa" },
  { code: "+64", country: "New Zealand" },
]; 

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");

  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    industry: "",
    message: "",
  });

  useEffect(() => {
    if (serviceQuery) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in your ${serviceQuery} service. Let's discuss how we can implement this.`,
      }));
    }
  }, [serviceQuery]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const fullPhone = `${formData.countryCode} ${formData.phone}`;

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          industry: formData.industry,
          message: formData.message,
          _subject: `🔥 New Devil Labs Lead: ${formData.name} (${formData.industry})`,
          _template: "table",
        }),
      });
      
      if (!res.ok) throw new Error("Email failed");
    } catch (err) {
      const mailtoBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${fullPhone}%0AIndustry: ${formData.industry}%0AMessage: ${formData.message}`;
      window.open(`mailto:${EMAIL}?subject=New Devil Labs Lead: ${formData.name}&body=${mailtoBody}`, "_blank");
    }

    const waText = encodeURIComponent(
      `🔥 *New Devil Labs Lead*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${fullPhone}\n🏢 *Industry:* ${formData.industry}\n📝 *Brief:* ${formData.message}`
    );
    window.open(`https://wa.me/${PHONE}?text=${waText}`, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", countryCode: "+91", phone: "", industry: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2 group">
          <label className="font-sans text-[10px] sm:text-xs tracking-widest text-[#CFB53B]/80 group-focus-within:text-[#CFB53B] uppercase transition-colors">Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-[#050505]/60 border border-white/10 px-4 py-3.5 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/50 transition-all rounded-md shadow-inner"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 group">
          <label className="font-sans text-[10px] sm:text-xs tracking-widest text-[#CFB53B]/80 group-focus-within:text-[#CFB53B] uppercase transition-colors">Email</label>
          <input 
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full bg-[#050505]/60 border border-white/10 px-4 py-3.5 text-white font-sans font-light focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/50 transition-all rounded-md shadow-inner"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Input with Country Code */}
        <div className="flex flex-col gap-2 group">
          <label className="font-sans text-[10px] sm:text-xs tracking-widest text-[#CFB53B]/80 group-focus-within:text-[#CFB53B] uppercase transition-colors">Phone Number</label>
          <div className="flex bg-[#050505]/60 border border-white/10 rounded-md focus-within:border-[#CFB53B] focus-within:ring-1 focus-within:ring-[#CFB53B]/50 transition-all shadow-inner overflow-hidden">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-transparent text-white/80 py-3.5 pl-3 pr-2 border-r border-white/10 focus:outline-none outline-none appearance-none cursor-pointer max-w-[85px] sm:max-w-[90px] font-sans text-xs sm:text-sm"
              style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #CFB53B 50%), linear-gradient(135deg, #CFB53B 50%, transparent 50%)', backgroundPosition: 'calc(100% - 10px) center, calc(100% - 5px) center', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
            >
              {countryCodes.map(c => (
                <option key={c.code} value={c.code} className="bg-[#0A0A0A] text-white my-1">{c.code} {c.country}</option>
              ))}
              <option value="+00" className="bg-[#0A0A0A] text-white">Other</option>
            </select>
            <input 
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full bg-transparent px-3 py-3.5 text-white font-sans font-light outline-none text-sm"
            />
          </div>
        </div>

        {/* Industry Dropdown */}
        <div className="flex flex-col gap-2 group">
          <label className="font-sans text-[10px] sm:text-xs tracking-widest text-[#CFB53B]/80 group-focus-within:text-[#CFB53B] uppercase transition-colors">Industry Sector</label>
          <select 
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full bg-[#050505]/60 border border-white/10 px-4 py-3.5 text-white font-sans text-sm font-light focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/50 transition-all appearance-none cursor-pointer rounded-md shadow-inner"
            style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #CFB53B 50%), linear-gradient(135deg, #CFB53B 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 5px), calc(100% - 15px) calc(1em + 5px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
          >
            <option value="" disabled className="bg-[#0A0A0A] text-white/50">Select your industry</option>
            <option value="Logistics & Supply Chain" className="bg-[#0A0A0A] py-1">Logistics & Supply Chain</option>
            <option value="E-Commerce & Retail" className="bg-[#0A0A0A] py-1">E-Commerce & Retail</option>
            <option value="Jewelry & Luxury" className="bg-[#0A0A0A] py-1">Jewelry & Luxury</option>
            <option value="Restaurants & Hospitality" className="bg-[#0A0A0A] py-1">Restaurants & Hospitality</option>
            <option value="Software & Tech" className="bg-[#0A0A0A] py-1">Software & Tech</option>
            <option value="Content Creator / Media" className="bg-[#0A0A0A] py-1">Content Creator / Media</option>
            <option value="Other" className="bg-[#0A0A0A] py-1">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 group">
        <label className="font-sans text-[10px] sm:text-xs tracking-widest text-[#CFB53B]/80 group-focus-within:text-[#CFB53B] uppercase transition-colors">Project Brief / Inquiry</label>
        <textarea 
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your bottlenecks and vision..."
          className="w-full bg-[#050505]/60 border border-white/10 px-4 py-4 text-white font-sans text-sm font-light focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/50 transition-all resize-none rounded-md shadow-inner"
        />
      </div>

      {/* Freelancer Terms Agreement */}
      <div className="flex items-start gap-3 mt-2">
        <div className="pt-1">
          <input 
            type="checkbox" 
            id="terms" 
            required 
            className="w-4 h-4 rounded border-white/20 bg-black/50 accent-[#CFB53B] cursor-pointer"
          />
        </div>
        <label htmlFor="terms" className="text-xs text-white/50 font-light leading-relaxed cursor-pointer select-none">
          I agree to the <span 
            className="text-[#CFB53B]/80 font-medium hover:underline hover:text-[#CFB53B] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("openProcessPopup"));
            }}
            >Terms &amp; Conditions</span>: 30% advance payment required to commence development, 30% in mid-milestone, and 40% upon final delivery. Code/IP delivered upon final payout.
        </label>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={status !== "idle"}
        className="relative overflow-hidden mt-4 w-full py-4 text-black font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase transition-all duration-500 rounded-md group disabled:opacity-50"
        style={{
          background: "linear-gradient(90deg, #B8992D 0%, #E3C952 50%, #B8992D 100%)",
          backgroundSize: "200% auto",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundPosition = "right center" }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundPosition = "left center" }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === "idle" && "Send Brief"}
          {status === "submitting" && "Transmitting..."}
          {status === "success" && "✓ Secured. Check WhatsApp."}
        </span>
        {/* Button Hover Glow */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 md:py-36 relative z-20 overflow-hidden bg-[#000000]">
      {/* Enhanced UI Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-br from-[#CFB53B]/10 to-transparent blur-[120px] sm:blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#CFB53B]/10 to-transparent blur-[150px] sm:blur-[200px] rounded-full pointer-events-none z-0" />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOXYzOEgyVjJzMzctMXYtMXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz4KPC9zdmc+')] pointer-events-none z-0 mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-6 md:px-16 relative z-10">
        
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto w-12 h-1 bg-gradient-to-r from-transparent via-[#CFB53B] to-transparent mb-6 sm:mb-8" />
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tight mb-4 leading-tight">
              Ready to Engineer <br className="hidden sm:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] to-[#E3C952] italic">Absolute Profitability?</span>
            </h2>
            <p className="font-sans font-light text-white/60 max-w-lg mx-auto md:text-lg">
              Drop your brief below. Whether it&apos;s scalable pipelines or an AI-driven vision, let&apos;s architect the future of your operations.
            </p>
          </motion.div>
        </div>

        {/* Lead Gen Glassmorphism Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative group"
        >
          {/* Glowing Border Behind Form */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#CFB53B]/30 via-transparent to-[#CFB53B]/30 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />
          
          <div className="w-full relative bg-[#070707]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
            <Suspense fallback={<div className="h-64 flex items-center justify-center text-white/50 animate-pulse font-sans tracking-widest text-sm">INITIALIZING INTERFACE...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </motion.div>

      </div>
    </section>
  );
}