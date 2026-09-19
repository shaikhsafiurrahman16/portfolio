import { PERSONAL, NAV_LINKS, FOOTER_SERVICES } from "@/lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40">
      {/* Subtle gradient */}
      <div className="absolute inset-0 animated-gradient-bg opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="text-xl font-bold text-gradient">
              &lt;SR /&gt;
            </a>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer specializing in the MERN Stack. Building
              scalable, secure, and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {PERSONAL.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL.phoneHref}
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PERSONAL.phone}
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{PERSONAL.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed & Developed by
            <span className="font-semibold text-brand">{PERSONAL.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
