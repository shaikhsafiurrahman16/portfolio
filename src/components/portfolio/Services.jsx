import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import { Section, SectionHeading } from "./Shared";
import React from "react";

function ServiceIcon({ name, className, style }) {
  return React.createElement(getIcon(name), { className, style });
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        title="Services"
        subtitle="What I can build for you — from idea to production"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  service,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Rotate accent colors across cards
  const accents = [
    "var(--brand)",
    "var(--brand-secondary)",
    "var(--brand-tertiary)",
    "var(--gold)",
  ];
  const color = accents[index % accents.length];

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden cursor-default"
      style={{
        "--mx": "0px",
        "--my": "0px",
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 + Math.floor(index / 3) * 0.1 }}
    >
      {/* Hover radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 200px at var(--mx) var(--my), ${color}15, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
        style={{ background: `${color}15` }}
        whileHover={{ rotate: 8, scale: 1.05 }}
      >
        <ServiceIcon name={service.icon} className="w-6 h-6" style={{ color }} />
      </motion.div>

      {/* Title + description */}
      <h3 className="font-bold text-foreground text-base mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Bottom indicator */}
      <div
        className="mt-4 h-0.5 rounded-full w-8 group-hover:w-16 transition-all duration-300"
        style={{ background: color }}
      />
    </motion.div>
  );
}
