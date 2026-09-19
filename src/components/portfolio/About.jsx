import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT_PARAGRAPHS, ABOUT_PILLARS, PERSONAL } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./Shared";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know the developer behind the code"
      />

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left: avatar + info */}
        <div className="lg:col-span-2">
          <ProfileCard />
        </div>

        {/* Right: paragraphs + pillars */}
        <div className="lg:col-span-3 space-y-6">
          {ABOUT_PARAGRAPHS.map((para, i) => (
            <RevealParagraph key={i} text={para} index={i} />
          ))}

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {ABOUT_PILLARS.map((pillar, i) => (
              <PillarCard key={i} {...pillar} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProfileCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 text-center h-fit"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Initials avatar */}
      <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-brand to-brand-secondary flex items-center justify-center mb-4">
        <span className="text-3xl font-bold text-white">
          {PERSONAL.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground">{PERSONAL.name}</h3>
      <p className="text-brand font-semibold text-sm mt-1">
        {PERSONAL.title}
      </p>

      <div className="mt-5 space-y-2.5 text-left text-sm text-muted-foreground">
        <InfoRow
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          label={PERSONAL.email}
        />
        <InfoRow
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          label={PERSONAL.phone}
        />
        <InfoRow
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label={PERSONAL.locationShort}
        />
        <InfoRow
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          }
          label="github.com/shaikhsafiurrahman16"
        />
      </div>
    </motion.div>
  );
}

function InfoRow({ icon, label }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-brand mt-0.5 shrink-0">{icon}</span>
      <span className="break-all">{label}</span>
    </div>
  );
}

function RevealParagraph({ text, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.p
      ref={ref}
      className="text-muted-foreground leading-relaxed"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {text}
    </motion.p>
  );
}

function PillarCard({
  title,
  description,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-4 hover:glow-brand transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
