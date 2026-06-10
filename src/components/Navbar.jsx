import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useClinicStore } from "../store/useClinicStore";
import { clinicInfo } from "../data/clinicData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, appointmentCart } = useClinicStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-105 transition-transform">🩺</div>
            <div>
              <p className="font-display font-bold text-slate-900 dark:text-white leading-none text-lg">{clinicInfo.name}</p>
              <p className="text-xs text-teal-600 dark:text-teal-400 font-body">Medical Centre</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold font-body transition-colors ${isActive ? "text-teal-600 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-400" : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20"}`
              }>{label}</NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Link to="/services" className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden md:flex">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {appointmentCart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-teal-600 text-white text-xs rounded-full flex items-center justify-center font-bold">{appointmentCart.length}</span>
              )}
            </Link>

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme">
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 010 14 7 7 0 010-14z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            <Link to="/contact" className="hidden md:inline-flex items-center gap-1.5 bg-teal-600 text-white text-sm font-semibold font-body px-4 py-2 rounded-lg hover:bg-teal-700 active:scale-95 transition-all">
              Book Now
            </Link>

            {/* Mobile menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Menu">
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 dark:border-slate-800 mt-2 animate-fade-in">
            <div className="flex flex-col gap-1 pt-3">
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === "/"} onClick={() => setIsOpen(false)} className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-semibold font-body transition-colors ${isActive ? "text-teal-600 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-400" : "text-slate-700 dark:text-slate-300"}`
                }>{label}</NavLink>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 text-center bg-teal-600 text-white text-sm font-semibold font-body px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
