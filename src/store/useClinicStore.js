import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useClinicStore = create(
  persist(
    (set, get) => ({
      // Theme
      isDark: false,
      toggleTheme: () => {
        const next = !get().isDark;
        set({ isDark: next });
        if (next) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
      initTheme: () => {
        if (get().isDark) document.documentElement.classList.add("dark");
      },

      // Favorites
      favorites: [],
      toggleFavorite: (serviceId) => {
        const favs = get().favorites;
        set({
          favorites: favs.includes(serviceId)
            ? favs.filter((id) => id !== serviceId)
            : [...favs, serviceId],
        });
      },
      isFavorite: (serviceId) => get().favorites.includes(serviceId),

      // Appointment cart
      appointmentCart: [],
      addToCart: (service) => {
        const cart = get().appointmentCart;
        if (!cart.find((s) => s.id === service.id)) {
          set({ appointmentCart: [...cart, service] });
        }
      },
      removeFromCart: (serviceId) => {
        set({
          appointmentCart: get().appointmentCart.filter((s) => s.id !== serviceId),
        });
      },
      clearCart: () => set({ appointmentCart: [] }),

      // Search
      searchQuery: "",
      setSearchQuery: (q) => set({ searchQuery: q }),

      // Filter
      activeCategory: "All",
      setActiveCategory: (cat) => set({ activeCategory: cat }),
    }),
    {
      name: "clinic-store",
      partialize: (state) => ({
        isDark: state.isDark,
        favorites: state.favorites,
        appointmentCart: state.appointmentCart,
      }),
    }
  )
);
