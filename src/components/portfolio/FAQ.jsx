import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./Shared";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions"
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground text-sm md:text-base">
          {question}
        </span>
        <motion.span
          className="shrink-0 w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center text-brand"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
