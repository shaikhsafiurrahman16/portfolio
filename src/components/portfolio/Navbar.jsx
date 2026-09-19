import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = href === "#projects" ? document.querySelector("#projects") || document.querySelector("#project") : document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="text-xl font-bold tracking-tight text-gradient"
          >
            &lt;SR /&gt;
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Theme toggle & Mobile Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggleBtn />

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-[2px] bg-foreground rounded-full"
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-foreground rounded-full"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-foreground rounded-full"
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimateMobileMenu open={mobileOpen} links={links} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function AnimateMobileMenu({
  open,
  links,
  onClose,
}) {
  const handleClick = (e, href) => {
    e.preventDefault();
    onClose();
    const target = href === "#projects" ? document.querySelector("#projects") || document.querySelector("#project") : document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed inset-0 z-[85] md:hidden"
      initial={false}
      animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <motion.div
        className="absolute top-0 right-0 w-[280px] h-full glass-strong p-8 pt-20 flex flex-col justify-between"
        initial={{ x: "100%" }}
        animate={open ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
      >
        <div>
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block py-3 text-lg font-medium text-foreground border-b border-border/30 hover:text-brand transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: i * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ThemeToggleBtn() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex w-10 h-10 items-center justify-center rounded-full glass-card text-foreground hover:glow-brand transition-shadow"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </motion.button>
  );
}
