export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-amber-400 text-lg">★</span>
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 italic font-body text-sm">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold font-display text-sm">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm font-body">{testimonial.name}</p>
          <p className="text-xs text-slate-400 font-body">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
