import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 px-5 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-14 md:mb-18 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <motion.div
        className={`mt-5 h-1 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
        style={{
          width: "3.5rem",
          background: "linear-gradient(90deg, var(--brand), var(--brand-secondary))",
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "3.5rem", opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}

export function TypingAnimation({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 35 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-brand ml-1 align-middle caret-blink" />
    </span>
  );
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function MagneticButton({
  children,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const x = useRef(0);
  const y = useRef(0);

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.current = (e.clientX - rect.left - rect.width / 2) * 0.25;
    y.current = (e.clientY - rect.top - rect.height / 2) * 0.25;
    ref.current.style.transform = `translate(${x.current}px, ${y.current}px)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
