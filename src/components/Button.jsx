export default function Button({ children, variant = "primary", size = "md", onClick, type = "button", className = "", disabled = false }) {
  const base = "inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 active:scale-95 shadow-sm hover:shadow-md",
    secondary: "bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50 active:scale-95",
    ghost: "text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30",
    danger: "bg-red-500 text-white hover:bg-red-600 active:scale-95",
    dark: "bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white active:scale-95",
  };
  const sizes = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5",
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
