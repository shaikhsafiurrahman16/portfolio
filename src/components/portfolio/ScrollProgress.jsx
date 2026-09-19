import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX: progress / 100,
        background: "linear-gradient(90deg, var(--brand), var(--brand-secondary), var(--gold))",
      }}
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.button
      onClick={scrollUp}
      className="fixed bottom-6 right-6 z-50 glass-card rounded-full p-3 group"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5 text-brand transition-transform group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Glow follow */}
      <div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: pos.x - 180,
          top: pos.y - 180,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.75 0.18 160 / 0.06) 0%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      {/* Dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "2px solid var(--brand)",
          opacity: 0.7,
          transition: "left 0.08s ease-out, top 0.08s ease-out",
        }}
      />
    </>
  );
}
