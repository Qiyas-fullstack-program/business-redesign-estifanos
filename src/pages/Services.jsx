import { useState } from "react";
import { useClinicStore } from "../store/useClinicStore";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/clinicData";
import { Link } from "react-router-dom";

const categories = ["All", ...Array.from(new Set(services.map(s => s.category)))];

export default function Services() {
  const { searchQuery, setSearchQuery, activeCategory, setActiveCategory, appointmentCart, removeFromCart, clearCart } = useClinicStore();
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = services.filter(s => {
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const total = appointmentCart.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-teal-400 text-sm font-semibold font-body uppercase tracking-widest mb-2">What We Treat</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-4">Our Services</h1>
          <p className="text-slate-300 font-body text-lg">Search or browse our full range of medical services. Add any to your appointment cart.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filter + Cart button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                type="text"
                placeholder="Search services…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold font-body text-slate-700 dark:text-slate-300 hover:border-teal-500 transition-all"
            >
              📋 My Appointment
              {appointmentCart.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">{appointmentCart.length}</span>
              )}
            </button>
          </div>

          {/* Cart panel */}
          {cartOpen && appointmentCart.length > 0 && (
            <div className="mb-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 animate-fade-up shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">Appointment Cart</h3>
                <button onClick={clearCart} className="text-xs text-red-500 hover:text-red-700 font-body font-semibold">Clear all</button>
              </div>
              <div className="space-y-3">
                {appointmentCart.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white font-body">{s.name}</p>
                        <p className="text-xs text-slate-400 font-body">{s.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 dark:text-white text-sm font-body">{s.price} ETB</span>
                      <button onClick={() => removeFromCart(s.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div>
                  <p className="text-xs text-slate-400 font-body">Total estimate</p>
                  <p className="font-display font-bold text-2xl text-slate-900 dark:text-white">{total} ETB</p>
                </div>
                <Link to="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold font-body text-sm hover:bg-teal-700 transition-colors">
                  Book These →
                </Link>
              </div>
            </div>
          )}

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-body transition-all ${activeCategory === cat ? "bg-teal-600 text-white shadow-sm" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-400"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-400 font-body mb-6">{filtered.length} service{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => <ServiceCard key={service.id} service={service} delay={i * 60} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-display font-semibold text-2xl text-slate-700 dark:text-slate-300 mb-2">No services found</p>
              <p className="font-body text-sm">Try a different search term or category.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 text-teal-600 dark:text-teal-400 font-body font-semibold text-sm hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
