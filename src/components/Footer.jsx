import { Link } from "react-router-dom";
import { clinicInfo } from "../data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-display font-bold text-lg">V</div>
              <div>
                <p className="font-display font-bold text-white leading-none text-lg">{clinicInfo.name}</p>
                <p className="text-xs text-teal-400 font-body">Medical Centre</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">{clinicInfo.tagline}. Modern healthcare delivered with compassion.</p>
            <div className="flex gap-3">
              {["facebook","twitter","instagram","linkedin"].map(s => (
                <a key={s} href={clinicInfo.socials[s]} className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center text-slate-400 hover:text-white transition-all" aria-label={s}>
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, to]) => (
                <li key={to}><Link to={to} className="text-slate-400 hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {["General Consultation", "Blood Work & Lab Tests", "Dermatology", "Mental Health Support", "Physiotherapy", "ECG & Cardiac Screening"].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2"><span>📍</span><span>{clinicInfo.address}</span></li>
              <li className="flex gap-2"><span>📞</span><a href={`tel:${clinicInfo.phone}`} className="hover:text-teal-400 transition-colors">{clinicInfo.phone}</a></li>
              <li className="flex gap-2"><span>✉️</span><a href={`mailto:${clinicInfo.email}`} className="hover:text-teal-400 transition-colors">{clinicInfo.email}</a></li>
            </ul>
            <div className="mt-4 p-3 bg-slate-800 rounded-xl text-xs">
              <p className="text-teal-400 font-semibold mb-1">Today's Hours</p>
              <p className="text-slate-300">Mon–Fri: 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</p>
          <p>Built with care for better healthcare.</p>
        </div>
      </div>
    </footer>
  );
}
