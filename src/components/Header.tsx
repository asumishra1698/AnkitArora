import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useSiteData from "../hooks/useSiteData";

function Header() {
  const { brand, contact, navLinks, social } = useSiteData();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({});

  const toggleMobileSection = (key: string) => {
    setMobileSections((prev) => {
      const nextState: Record<string, boolean> = {};
      Object.keys(prev).forEach((existingKey) => {
        nextState[existingKey] = false;
      });
      return { ...nextState, [key]: !prev[key] };
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 shadow-sm backdrop-blur-sm transition-all duration-300">
      <div className="bg-blue-900 text-white">
        <div className="flex w-full flex-col items-start gap-2 px-4 py-2 text-sm md:flex-row md:items-center md:justify-between md:px-16">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8l-8 7-8-7v10z" />
              </svg>
              {contact.email}
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.2 1l-2.2 2.2z" />
              </svg>
              {contact.phone}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={social.facebook}
              className="hover:text-blue-200"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H6v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              href={social.linkedin}
              className="hover:text-blue-200"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.94 8.5H3.5V21h3.44V8.5zM5.22 3a2 2 0 00-2.22 2 2.02 2.02 0 002.24 2 2 2 0 00-.02-4zM20.5 13.5c0-3.2-1.7-5.2-4.6-5.2-2.1 0-3.1 1.2-3.6 2v-1.8H8.9V21h3.44v-6.7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V21h3.26v-7.5z" />
              </svg>
            </a>
            <a
              href={social.instagram}
              className="hover:text-blue-200"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.2-2.3a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm transition-all duration-300">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-4 md:flex-wrap md:px-16">
          <Link to="/" className="flex items-center gap-3 shrink-0" title={brand.name}>
            <div>
              <img src={brand.logo} alt={brand.name} title={brand.name} className="h-12 w-full" />
              {/* <p className="text-lg font-semibold text-slate-900">{brand.name}</p> */}
              {/* <p className="text-xs text-slate-500">{brand.tagline}</p> */}
            </div>
          </Link>

          <nav className="hidden flex-wrap items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) =>
              link.dropdownSections ? (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 transition ${isActive ? "text-blue-700" : "hover:text-blue-700"}`
                    }
                    title={link.label}
                  >
                    {link.label}
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                    </svg>
                  </NavLink>
                  <div
                    className={`invisible absolute top-full z-20 translate-y-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl opacity-0 transition-all duration-200 ease-out delay-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-0 ${link.label === "Compliances"
                        ? "left-1/2 -translate-x-1/2"
                        : "left-0"
                      } ${link.dropdownSections.length >= 3
                        ? "w-[980px]"
                        : link.dropdownSections.length > 1
                          ? "w-[720px]"
                          : "w-[380px]"
                      }`}
                  >
                    <div
                      className={`grid gap-8 ${link.dropdownSections.length >= 3
                          ? "md:grid-cols-3"
                          : link.dropdownSections.length > 1
                            ? "md:grid-cols-2"
                            : "md:grid-cols-1"
                        }`}
                    >
                      {link.dropdownSections.map((section) => (
                        <div key={section.title}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {section.title}
                          </p>
                          <div className="mt-4 space-y-2">
                            {section.links.map((child) => (
                              <NavLink
                                key={child.to}
                                to={child.to}
                                className={({ isActive }) =>
                                  `block rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
                                    ? "bg-slate-100 text-blue-700"
                                    : "text-slate-700 hover:bg-slate-50"
                                  }`
                                }
                                title={child.label}
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.children ? (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 transition ${isActive ? "text-blue-700" : "hover:text-blue-700"}`
                    }
                    title={link.label}
                  >
                    {link.label}
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                    </svg>
                  </NavLink>
                  <div className="absolute left-0 top-full z-20 hidden w-[340px] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg group-hover:block">
                    <div className="grid gap-2">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm transition ${isActive ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50"
                            }`
                          }
                          title={child.label}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition ${isActive ? "text-blue-700" : "hover:text-blue-700"}`
                  }
                  title={link.label}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-slate-700 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
              </svg>
            </button>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="hidden items-center gap-3 rounded-2xl bg-blue-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-800 md:inline-flex"
              title={`Call ${contact.phone}`}
            >
              {contact.phone}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.2 1l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <div
            className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-200 ${mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div
            className={`fixed left-0 top-0 z-9999 h-full w-[420px] bg-white shadow-2xl transition-transform duration-200 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <div className="flex items-center gap-3">
                <img src={brand.logo} alt={brand.name} title={brand.name} className="h-10" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.7 5.3a1 1 0 011.4 0L12 9.2l3.9-3.9a1 1 0 011.4 1.4L13.4 10.6l3.9 3.9a1 1 0 01-1.4 1.4L12 12l-3.9 3.9a1 1 0 01-1.4-1.4l3.9-3.9-3.9-3.9a1 1 0 010-1.4z" />
                </svg>
              </button>
            </div>

            <div className="h-screen bg-white overflow-y-auto px-4 pb-6 pt-4">
              <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
                {navLinks.map((link) => (
                  <div key={link.to} className="space-y-2">
                    {link.dropdownSections || link.children ? (
                      <button
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-between text-left"
                        onClick={() => toggleMobileSection(link.to)}
                      >
                        <span>{link.label}</span>
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            {mobileSections[link.to] ? (
                              <path d="M5 12h14v2H5z" />
                            ) : (
                              <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
                            )}
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `flex items-center justify-between ${isActive ? "text-blue-700" : "text-slate-700"
                          }`
                        }
                        onClick={() => setMobileOpen(false)}
                        title={link.label}
                      >
                        {link.label}
                      </NavLink>
                    )}

                    {mobileSections[link.to] && link.dropdownSections && (
                      <div className="space-y-3 pl-3">
                        {link.dropdownSections.map((section) => (
                          <div key={section.title}>
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                              {section.title}
                            </p>
                            <div className="mt-2 space-y-2">
                              {section.links.map((child) => (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    `block rounded-lg px-2 py-2 ${isActive ? "bg-slate-100 text-blue-700" : "text-slate-700"
                                    }`
                                  }
                                  onClick={() => setMobileOpen(false)}
                                  title={child.label}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {mobileSections[link.to] && link.children && (
                      <div className="space-y-2 pl-3">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-lg px-2 py-2 ${isActive ? "bg-slate-100 text-blue-700" : "text-slate-700"
                              }`
                            }
                            onClick={() => setMobileOpen(false)}
                            title={child.label}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-blue-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-800"
                title={`Call ${contact.phone}`}
              >
                {contact.phone}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.2 1l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
