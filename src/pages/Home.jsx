import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import { services, testimonials, stats } from "../data/clinicData";

const featuredServices = services.slice(0, 6);

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Stats */}
      <section className="bg-teal-600 dark:bg-teal-700 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map(({ value, label }) => (
              <div key={label} className="animate-fade-up">
                <p className="font-display font-bold text-4xl mb-1">{value}</p>
                <p className="text-teal-100 text-sm font-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">Specialist care, <br/>under one roof</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-body">From routine check-ups to complex diagnostics — Dr Adane Speciality Clinic brings together leading specialists for every stage of your health journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 80} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services"><Button variant="dark" size="lg">View All Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-3">Why Dr Adane Speciality Clinic</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">Medicine that knows your name</h2>
            <p className="text-slate-500 dark:text-slate-400 font-body leading-relaxed mb-8">At Dr Adane Speciality Clinic, we believe the best healthcare is both technically excellent and genuinely personal. We've built a practice where every patient is known, every concern is heard, and every treatment plan is tailored — not templated.</p>
            <div className="space-y-4">
              {[
                ["🩺", "Board-Certified Specialists", "Our physicians hold international certifications and bring global expertise to Addis Ababa."],
                ["⏱", "Same-Day Appointments", "Urgent care slots available daily. Your health can't always wait."],
                ["🔒", "Complete Confidentiality", "Your medical information is protected with the same care we give your health."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white font-body text-sm">{title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-body mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in animate-delay-200">
            {[
              { bg: "bg-teal-600", text: "General Practice", icon: "🩺", count: "5,000+ visits" },
              { bg: "bg-slate-800 dark:bg-slate-700", text: "Specialist Care", icon: "🔬", count: "3,200+ referrals" },
              { bg: "bg-slate-800 dark:bg-slate-700", text: "Lab Diagnostics", icon: "🧪", count: "18,000+ tests" },
              { bg: "bg-teal-500", text: "Wellness Programs", icon: "💚", count: "800+ enrolled" },
            ].map(({ bg, text, icon, count }) => (
              <div key={text} className={`${bg} rounded-2xl p-6 text-white`}>
                <div className="text-3xl mb-3">{icon}</div>
                <p className="font-display font-semibold text-lg leading-tight">{text}</p>
                <p className="text-white/70 text-xs font-body mt-1">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-2">Patient Stories</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white">What our patients say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} delay={i * 80} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #14b8a6 0%, transparent 70%)" }}></div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">Ready to take care of your health?</h2>
          <p className="text-slate-400 font-body mb-10 text-lg">Book your appointment today. Same-day slots available Monday through Friday.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"><Button variant="primary" size="lg">Book an Appointment</Button></Link>
            <Link to="/about"><Button size="lg" className="border-2 border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold font-body transition-all active:scale-95">Meet Our Team</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
