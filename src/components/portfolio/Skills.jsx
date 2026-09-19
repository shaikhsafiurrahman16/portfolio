import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import { Section, SectionHeading } from "./Shared";
import React from "react";

const ACCENT_COLORS = {
  brand: "var(--brand)",
  secondary: "var(--brand-secondary)",
  tertiary: "var(--brand-tertiary)",
  gold: "var(--gold)",
};

function SkillGroupIcon({ name, className, style }) {
  return React.createElement(getIcon(name), { className, style });
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies and tools I work with daily"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <SkillGroupCard key={gi} group={group} index={gi} />
        ))}
      </div>
    </Section>
  );
}

function SkillGroupCard({
  group,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const accent = ACCENT_COLORS[group.accent] || "var(--brand)";

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 shine-effect"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* Group header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${accent}15` }}
        >
          <SkillGroupIcon name={group.icon} className="w-5 h-5" style={{ color: accent }} />
        </div>
        <h3 className="font-bold text-foreground text-base">{group.category}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-3.5">
        {group.skills.map((skill, si) => (
          <SkillBar
            key={si}
            name={skill.name}
            level={skill.level}
            color={accent}
            delay={si * 0.05 + index * 0.12}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({
  name,
  level,
  color,
  delay,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
