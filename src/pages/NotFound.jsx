import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🏥</div>
        <h1 className="font-display font-bold text-8xl text-teal-600 dark:text-teal-400 mb-2">404</h1>
        <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-4">Page not found</h2>
        <p className="text-slate-500 dark:text-slate-400 font-body mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back to where you need to be.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/"><Button variant="primary" size="lg">Go Home</Button></Link>
          <Link to="/contact"><Button variant="secondary" size="lg">Book Appointment</Button></Link>
        </div>
      </div>
    </div>
  );
}
