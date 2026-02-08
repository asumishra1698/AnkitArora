import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookie-consent";

type ConsentState = "accepted" | "dismissed" | null;

function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "dismissed") {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "dismissed");
    setConsent("dismissed");
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-sm font-semibold text-slate-900">We use cookies</p>
          <p className="mt-1 text-sm text-slate-600">
            We use cookies to improve site experience and analyze traffic. You can accept or dismiss at any time.
            Read our policy in the privacy page.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/privacy"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
            title="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
