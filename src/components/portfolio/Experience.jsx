import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./Shared";

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative">
      {/* Subtle background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-30 pointer-events-none" />

      <div className="relative">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Experience timeline */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </h3>
            <TimelineExperience />
          </div>

          {/* Education timeline */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-secondary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
                </svg>
              </span>
              Education
            </h3>
            <TimelineEducation />
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineExperience() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-secondary to-brand/20" />

      <div className="space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <TimelineCard key={i} index={i}>
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center shrink-0 z-10 ring-4 ring-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h4 className="font-bold text-foreground text-base">{exp.role}</h4>
                <p className="text-brand text-sm font-semibold">{exp.company}</p>
              </div>
              <span className="ml-auto glass-card rounded-full px-3 py-1 text-xs font-semibold text-brand shrink-0">
                {exp.duration}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 ml-12">
              {exp.description}
            </p>

            <div className="ml-12">
              <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                Key Responsibilities
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {exp.responsibilities.map((r, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05 + 0.3 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {r}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4 ml-12">
              {exp.tags.map((tag, j) => (
                <motion.span
                  key={j}
                  className="glass-card rounded-full px-3 py-1 text-xs font-medium text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.05 + 0.5 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </TimelineCard>
        ))}
      </div>
    </div>
  );
}

function TimelineEducation() {
  return (
    <div className="relative">
      <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-secondary via-brand to-brand/20" />

      <div className="space-y-8">
        {EDUCATION.map((edu, i) => (
          <TimelineCard key={i} index={i}>
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="w-9 h-9 rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0 z-10 ring-4 ring-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
                </svg>
              </motion.div>
              <div>
                <h4 className="font-bold text-foreground text-base">{edu.degree}</h4>
                <p className="text-brand-secondary text-sm font-semibold">{edu.institution}</p>
              </div>
              <span className="ml-auto glass-card rounded-full px-3 py-1 text-xs font-semibold text-brand-secondary shrink-0">
                {edu.year}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed ml-12">
              {edu.description}
            </p>
          </TimelineCard>
        ))}
      </div>
    </div>
  );
}

function TimelineCard({
  children,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-5 ml-12 shine-effect"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {children}
    </motion.div>
  );
}
