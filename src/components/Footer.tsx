import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSiteData from "../hooks/useSiteData";

function Footer() {
  const { contact, footerGroups, social } = useSiteData();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setShowBackToTop(progress >= 0.25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-blue-900 text-white">
      <div className="w-full px-6 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-16">
        <div className="grid gap-10 md:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-base font-semibold">{group.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-white" to={link.to} title={link.label}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-base font-semibold">Get Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>Phone: {contact.phone}</li>
              <li>E-mail: {contact.email}</li>
              <li>Location: {contact.location}</li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href={contact.mapUrl}
                  title="Locate us on Google Map"
                >
                  Locate us on Google Map
                  <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={social.facebook}
                className="hover:text-blue-200"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H6v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a
                href={social.instagram}
                className="hover:text-blue-200"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.2-2.3a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>
              <a
                href={social.linkedin}
                className="hover:text-blue-200"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.94 8.5H3.5V21h3.44V8.5zM5.22 3a2 2 0 00-2.22 2 2.02 2.02 0 002.24 2 2 0 00-.02-4zM20.5 13.5c0-3.2-1.7-5.2-4.6-5.2-2.1 0-3.1 1.2-3.6 2v-1.8H8.9V21h3.44v-6.7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V21h3.26v-7.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800/60 bg-blue-950 text-blue-100">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-2 sm:px-8 sm:py-2 md:px-12 lg:px-16 text-sm">
          <span>Copyright © 2026 Arora Ankit & Associates. All Rights Reserved</span>
          <div className="flex items-center gap-4">
            <Link to="/disclaimer" className="hover:text-white" title="Disclaimer">
              Disclaimer
            </Link>
            <Link to="/privacy" className="hover:text-white" title="Privacy Policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3">
          <a
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12.04 2a9.94 9.94 0 00-8.52 15.1L2 22l5.05-1.48A9.95 9.95 0 1012.04 2zm0 2a7.95 7.95 0 017.96 7.95 7.95 7.95 0 01-7.96 7.95 7.9 7.9 0 01-4.07-1.12l-.3-.18-2.98.87.9-2.9-.19-.31A7.9 7.9 0 014.09 12 7.95 7.95 0 0112.04 4zm4.55 10.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.36-.78-1.87-.2-.48-.41-.41-.57-.42h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.68.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-blue-900 text-white shadow-lg transition hover:bg-blue-800"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 5l7 7-1.4 1.4L13 8.8V20h-2V8.8L6.4 13.4 5 12l7-7z" />
            </svg>
          </button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
