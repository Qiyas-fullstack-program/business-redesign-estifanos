import ContactForm from "../components/ContactForm";
import { clinicInfo } from "../data/clinicData";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-2">Get in Touch</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-4">Book an Appointment</h1>
          <p className="text-slate-300 font-body text-lg">Fill in the form and we'll confirm your booking within 2 hours during working hours.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">Appointment Request</h2>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-lg shrink-0">📍</div>
                  <div>
                    <p className="text-xs text-slate-400 font-body">Address</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-body font-medium">{clinicInfo.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-lg shrink-0">📞</div>
                  <div>
                    <p className="text-xs text-slate-400 font-body">Phone</p>
                    <a href={`tel:${clinicInfo.phone}`} className="text-sm text-teal-600 dark:text-teal-400 font-body font-medium hover:underline">{clinicInfo.phone}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-lg shrink-0">✉️</div>
                  <div>
                    <p className="text-xs text-slate-400 font-body">Email</p>
                    <a href={`mailto:${clinicInfo.email}`} className="text-sm text-teal-600 dark:text-teal-400 font-body font-medium hover:underline">{clinicInfo.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4">Opening Hours</h3>
              <div className="space-y-3">
                {clinicInfo.hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm font-body">
                    <span className="text-slate-500 dark:text-slate-400">{day}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                <p className="text-teal-700 dark:text-teal-300 text-xs font-body font-semibold">🚨 Emergency? Call us 24/7</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="bg-slate-100 dark:bg-slate-700 h-52 flex items-center justify-center relative overflow-hidden">
                {/* Simplified map visual */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                  {[...Array(36)].map((_, i) => <div key={i} className="border border-slate-400 dark:border-slate-500"></div>)}
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl mx-auto mb-2 shadow-lg">📍</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-body font-semibold">Bole Road, Addis Ababa</p>
                </div>
              </div>
              <div className="p-4">
                <a
                  href="https://maps.google.com/?q=Bole+Road+Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-teal-600 dark:text-teal-400 font-body font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
