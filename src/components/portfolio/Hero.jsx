import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { PERSONAL, TYPING_ROLES } from "@/lib/portfolio-data";
import { TypingAnimation, MagneticButton } from "./Shared";
import { downloadResume } from "@/lib/resume";

export function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 24);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const handleContactClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Floating glowing blobs */}
      <div
        className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full opacity-30 blur-[100px] float-anim-slow"
        style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full opacity-20 blur-[120px] float-anim"
        style={{ background: "radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[50%] left-[50%] w-64 h-64 rounded-full opacity-15 blur-[90px] float-anim-slow"
        style={{ background: "radial-gradient(circle, var(--brand-tertiary) 0%, transparent 70%)" }}
      />

      {/* Floating particles (decorative dots) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand/30"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -20 - (i % 3) * 15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8 w-full"
        style={{ x: springX, y: springY }}
      >
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          {/* Availability badge */}
          <motion.div
            className="glass-card rounded-full px-5 py-2 flex items-center gap-2 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
            </span>
            <span className="text-muted-foreground font-medium">
              {PERSONAL.availability}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-gradient">{PERSONAL.name}</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
              <TypingAnimation words={TYPING_ROLES} />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl text-center text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I architect scalable enterprise applications, intelligent machine learning prediction platforms (EarthScape AI), cross-platform Flutter mobile apps, and high-conversion client web solutions.
          </motion.p>

          {/* Tech badges marquee */}
          <motion.div
            className="w-full max-w-2xl overflow-hidden py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-3 marquee-track w-max">
              {[...TECH_BADGES, ...TECH_BADGES].map((tech, i) => (
                <span
                  key={i}
                  className="glass-card rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <MagneticButton
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground bg-brand hover:opacity-90 glow-brand transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Me
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open(PERSONAL.github, "_blank", "noopener")}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground glass-card hover:glow-brand transition-shadow"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </MagneticButton>

            <MagneticButton
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, var(--gold), var(--brand))" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV / Resume
            </MagneticButton>
          </motion.div>

          {/* Glassmorphism profile card */}
          <motion.div
            className="glass-card rounded-2xl p-5 max-w-lg w-full text-center"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, type: "spring", stiffness: 100 }}
          >
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {PERSONAL.locationShort}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {PERSONAL.email}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PERSONAL.phone}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-brand"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

const TECH_BADGES = [
  "React.js",
  "Node.js",
  "Python",
  "Flask",
  "Flutter",
  "Dart",
  "scikit-learn",
  "Express.js",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Tailwind CSS",
  "Pandas",
  "REST APIs",
  "JWT",
  "Git",
];
