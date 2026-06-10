import { Link } from "react-router-dom";
import Button from "../components/Button";
import { team, stats } from "../data/clinicData";

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(135deg, #0d9488 0%, transparent 60%)" }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-3 animate-fade-in">Our Story</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 animate-fade-up">Built on belief that <span className="text-teal-400">everyone deserves excellent care</span></h1>
          <p className="text-slate-300 font-body text-lg leading-relaxed animate-fade-up animate-delay-100">Vitalis was founded in 2010 in Addis Ababa with a simple conviction: high-quality, specialist-level medical care should not be a privilege reserved for the few.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-teal-600 rounded-3xl p-10 text-white animate-fade-up">
            <div className="text-4xl mb-5">🎯</div>
            <h2 className="font-display font-bold text-3xl mb-4">Our Mission</h2>
            <p className="font-body leading-relaxed text-teal-50">To deliver accessible, compassionate, and evidence-based medical care that empowers every patient to live a healthier, fuller life — regardless of background or circumstance.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-10 animate-fade-up animate-delay-100">
            <div className="text-4xl mb-5">🔭</div>
            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p className="font-body leading-relaxed text-slate-500 dark:text-slate-400">To become East Africa's most trusted multi-specialty clinic — a place where clinical excellence, patient dignity, and modern technology come together in genuine service of health.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="animate-fade-up">
                <p className="font-display font-bold text-4xl text-teal-600 dark:text-teal-400 mb-1">{value}</p>
                <p className="text-slate-500 dark:text-slate-400 font-body text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-3">How it started</p>
          <h2 className="font-display font-bold text-4xl text-slate-900 dark:text-white mb-6">The Vitalis story</h2>
          <div className="space-y-5 text-slate-600 dark:text-slate-300 font-body leading-relaxed text-lg">
            <p>Vitalis was born from a conversation Dr. Mekdes Alemu had with her mother in 2009 — a woman who had traveled three hours by bus to reach a specialist in Addis Ababa for a condition that, with the right local care, never should have progressed as far as it had.</p>
            <p>That conversation became a commitment. Dr. Alemu, then returning from seven years of clinical practice in the United Kingdom, decided to build the clinic she wished had existed for her mother: a practice that combined the technical rigor of European training with the warmth and accessibility that Ethiopians deserve close to home.</p>
            <p>Today, Vitalis serves over 12,000 patients a year across 20 specialties — and every member of the team still works by the same standard Dr. Alemu set on day one: treat every patient the way you would treat your own family.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-2">The Team</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white">Meet our doctors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`${member.color} h-36 flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-white text-3xl">{member.initials}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white leading-tight">{member.name}</h3>
                  <p className="text-teal-600 dark:text-teal-400 text-xs font-semibold font-body mt-1 mb-3">{member.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-body leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Ready to meet the team in person?</h2>
          <p className="text-teal-100 font-body mb-8">Book an appointment and experience the Vitalis difference for yourself.</p>
          <Link to="/contact"><Button variant="dark" size="lg">Book Your Visit</Button></Link>
        </div>
      </section>
    </div>
  );
}
