import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ScrollToTop />
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-900 border-r-emerald-400 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-white shadow-sm" />
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-900" style={{ animationDelay: "0ms" }} />
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-700" style={{ animationDelay: "120ms" }} />
              <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" style={{ animationDelay: "240ms" }} />
            </div>
            <p className="text-sm font-semibold text-slate-700">Loading…</p>
          </div>
        </div>
      ) : null}
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
