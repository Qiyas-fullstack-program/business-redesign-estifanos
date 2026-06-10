import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
        <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Request Received!</h3>
        <p className="text-slate-500 dark:text-slate-400 font-body">We'll confirm your appointment within 2 hours during working hours.</p>
        <Button variant="ghost" size="sm" onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", service:"", message:"" }); }} className="mt-6">
          Submit another request
        </Button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold font-body text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} className={inputCls} placeholder="Abrham Kebede" required />
        </div>
        <div>
          <label className="block text-sm font-semibold font-body text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="you@example.com" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold font-body text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+251 91 234 5678" />
        </div>
        <div>
          <label className="block text-sm font-semibold font-body text-slate-700 dark:text-slate-300 mb-1.5">Service Needed</label>
          <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
            <option value="">Select a service</option>
            {["General Consultation","Blood Work & Lab Tests","Dermatology","Ophthalmology","Orthopedics","ECG & Cardiac Screening","Mental Health Support","Physiotherapy","Nutrition Counseling","Other"].map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold font-body text-slate-700 dark:text-slate-300 mb-1.5">Message or Notes</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputCls} placeholder="Tell us about your symptoms or any specific needs..." />
      </div>
      <Button variant="primary" size="lg" type="submit" onClick={handleSubmit} disabled={loading || !form.name || !form.email} className="w-full">
        {loading ? (
          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Sending…</span>
        ) : "Send Appointment Request"}
      </Button>
    </div>
  );
}
