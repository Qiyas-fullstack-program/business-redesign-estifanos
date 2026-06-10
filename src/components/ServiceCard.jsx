import { useClinicStore } from "../store/useClinicStore";
import Button from "./Button";

export default function ServiceCard({ service, delay = 0 }) {
  const { toggleFavorite, isFavorite, addToCart, appointmentCart } = useClinicStore();
  const fav = isFavorite(service.id);
  const inCart = appointmentCart.some(s => s.id === service.id);

  return (
    <div
      className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Favorite */}
      <button
        onClick={() => toggleFavorite(service.id)}
        className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      >
        <svg className={`w-5 h-5 transition-colors ${fav ? "text-red-500 fill-current" : "text-slate-300"}`} viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Icon + Category */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-2xl shrink-0">
          {service.icon}
        </div>
        <div>
          <span className="text-xs font-semibold font-body text-teal-600 dark:text-teal-400 uppercase tracking-wide">{service.category}</span>
          <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white leading-tight mt-0.5">{service.name}</h3>
        </div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{service.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-body">⏱ {service.duration}</span>
          <span className="text-lg font-bold text-slate-900 dark:text-white font-body mt-0.5">{service.price} ETB</span>
        </div>
        <Button
          variant={inCart ? "ghost" : "primary"}
          size="sm"
          onClick={() => addToCart(service)}
          disabled={inCart}
        >
          {inCart ? "✓ Added" : "Book"}
        </Button>
      </div>
    </div>
  );
}
