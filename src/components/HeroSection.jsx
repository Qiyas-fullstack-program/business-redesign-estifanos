import { Link } from "react-router-dom";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-teal-400/8 blur-3xl"></div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "48px 48px" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/50 text-teal-300 text-xs font-semibold font-body px-3 py-1.5 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Now Accepting New Patients
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up">
            Healthcare that <span className="text-teal-400">puts you first</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg font-body animate-fade-up animate-delay-100">
            Modern medicine, delivered with the personal attention every patient deserves. Vitalis Medical Centre brings specialist care to the heart of Addis Ababa.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-200">
            <Link to="/contact">
              <Button variant="primary" size="lg">Book an Appointment</Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800">
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 animate-fade-up animate-delay-300">
            {[["12,000+", "Patients"],["15+ yrs", "Experience"],["20+", "Specialists"]].map(([val, lbl]) => (
              <div key={lbl}>
                <p className="font-display font-bold text-white text-2xl">{val}</p>
                <p className="text-slate-400 text-xs font-body">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden lg:flex justify-end animate-fade-in animate-delay-200">
          <div className="relative">
            {/* Main card */}
            <div className="w-80 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-slate-400 font-body">Next available</p>
                  <p className="text-white font-display font-semibold text-lg">Today, 2:30 PM</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-2xl">🩺</div>
              </div>
              <div className="space-y-3">
                {["General Consultation", "Dermatology", "Blood Work"].map(s => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    <span className="text-slate-300 text-sm font-body">{s}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <button className="w-full mt-5 bg-teal-600 text-white font-body font-semibold py-3 rounded-xl hover:bg-teal-700 transition-colors text-sm">
                  Book Now →
                </button>
              </Link>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-700 rounded-2xl px-4 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">★</span>
                <span className="font-bold text-slate-900 dark:text-white font-body">4.9</span>
                <span className="text-slate-400 text-xs font-body">/ 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}
