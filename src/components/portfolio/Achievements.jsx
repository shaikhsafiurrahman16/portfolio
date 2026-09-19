import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import { AnimatedCounter } from "./Shared";
import React from "react";

export function Achievements() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background panel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Icon */}
                <div className="mx-auto w-12 h-12 md:w-14 md:h-14 rounded-2xl glass-card flex items-center justify-center mb-3">
                  {React.createElement(getIcon(item.icon), { className: "w-5 h-5 md:w-6 md:h-6 text-brand" })}
                </div>

                {/* Counter */}
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
