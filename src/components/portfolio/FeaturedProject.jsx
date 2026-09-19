import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./Shared";

const CATEGORIES = [
  "All",
  "Enterprise Software",
  "AI & Machine Learning",
  "Client Project",
  "Mobile & Enterprise",
];

export function FeaturedProject() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects" className="relative">
      {/* Background ambient light */}
      <div className="absolute inset-0 animated-gradient-bg opacity-25 pointer-events-none" />

      <div className="relative">
        <SectionHeading
          title="Featured Projects & Solutions"
          subtitle="Enterprise platforms, AI prediction engines, commercial websites, and mobile applications"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand text-primary-foreground shadow-lg shadow-brand/25 scale-105"
                  : "glass-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-12 md:space-y-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative glass-card rounded-3xl overflow-hidden shine-effect border border-border/50"
    >
      {/* Ambient glowing background */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-15 blur-[90px] pointer-events-none"
        style={{
          background:
            project.previewType === "ai"
              ? "radial-gradient(circle, var(--brand-tertiary) 0%, transparent 70%)"
              : project.previewType === "client"
              ? "radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)"
              : "radial-gradient(circle, var(--brand) 0%, transparent 70%)",
        }}
      />

      <div
        className={`relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 md:p-10 items-center`}
      >
        {/* Mockup Column */}
        <div
          className={`lg:col-span-6 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {project.previewType === "ai" && <AIMockup project={project} />}
          {project.previewType === "client" && <ClientMockup project={project} />}
          {project.previewType === "mobile" && <MobileMockup project={project} />}
          {project.previewType === "dashboard" && <DashboardMockup project={project} />}
          {project.previewType === "logistics" && <LogisticsMockup project={project} />}
        </div>

        {/* Details Column */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center gap-4 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="glass-card text-brand font-semibold rounded-full px-3 py-1 text-xs">
              {project.categoryBadge}
            </span>
            {project.liveUrl && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live in Production
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {project.name}
            </h3>
            <p className="text-brand font-semibold text-sm sm:text-base mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4 text-brand mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
            {project.stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-2.5 text-center">
                <p className="text-sm sm:text-base font-bold text-gradient">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-full px-3 py-1 text-xs font-medium text-foreground bg-accent/60 border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button (if live website exists, e.g. GN Graphix) */}
          {project.liveUrl ? (
            <div className="mt-3 flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-brand hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Live Website
              </a>
              <span className="text-xs text-muted-foreground font-mono">
                {project.liveUrl.replace(/^https?:\/\//, '')}
              </span>
            </div>
          ) : (
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-brand/60" />
              <span>Enterprise & Commercial Solution · High Performance Deployed</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// 1. Dashboard Mockup (for TradeStack)
function DashboardMockup({ project }) {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden gradient-border p-1 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-xl overflow-hidden flex flex-col">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <div className="ml-3 flex-1 h-4 rounded-full bg-muted/70 flex items-center px-2">
            <span className="text-[9px] text-muted-foreground font-mono">tradestack.enterprise/pos</span>
          </div>
        </div>

        {/* Sectors Row */}
        <div className="flex items-center gap-1 px-3 py-1.5 border-b border-border/20 bg-muted/20 text-[10px]">
          {["Automotive", "Kiryana", "Computer Acc.", "Paper Shop"].map((sector, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 rounded ${
                i === 0
                  ? "bg-brand/20 text-brand font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {sector}
            </span>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 p-3 flex gap-2.5">
          {/* Sidebar */}
          <div className="w-14 flex flex-col gap-1.5">
            {["Inventory", "Ledgers", "Billing", "Audit", "Reports"].map((label, i) => (
              <div
                key={i}
                className={`h-5 rounded text-[8px] font-medium flex items-center px-1.5 ${
                  i === 0 ? "bg-brand/30 text-brand" : "bg-muted/40 text-muted-foreground"
                }`}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Stock Items", val: "14,820" },
                { label: "Daily Sales", val: "Rs 482k" },
                { label: "Ledger Balance", val: "Verified" },
              ].map((s, i) => (
                <div key={i} className="rounded-lg bg-muted/30 p-1.5">
                  <p className="text-[8px] text-muted-foreground">{s.label}</p>
                  <p className="text-[10px] font-bold text-foreground">{s.val}</p>
                </div>
              ))}
            </div>

            {/* Sales Bar chart */}
            <div className="flex-1 rounded-lg bg-muted/25 p-2 flex items-end justify-around gap-1.5">
              {[45, 70, 50, 85, 60, 95, 75, 90].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, var(--brand), var(--brand-secondary))`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-3 py-1 bg-muted/40 border-t border-border/20 flex justify-between text-[9px] text-muted-foreground">
          <span>TradeStack Multi-Branch MySQL Engine</span>
          <span className="text-brand font-semibold">Active POS</span>
        </div>
      </div>
    </motion.div>
  );
}

// 2. AI Climate Analytics Mockup (for EarthScape AI)
function AIMockup({ project }) {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden gradient-border p-1 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-xl overflow-hidden flex flex-col">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <div className="ml-3 flex-1 h-4 rounded-full bg-muted/70 flex items-center px-2">
            <span className="text-[9px] text-brand-tertiary font-mono">earthscape.ai/predict</span>
          </div>
        </div>

        {/* AI Prediction Content */}
        <div className="flex-1 p-3 flex flex-col gap-2.5">
          {/* Top Prediction Status Banner */}
          <div className="rounded-xl p-2.5 bg-gradient-to-r from-violet-500/15 via-cyan-500/15 to-emerald-500/15 border border-violet-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-tertiary/20 flex items-center justify-center text-brand-tertiary font-bold text-xs">
                AI
              </span>
              <div>
                <p className="text-[11px] font-bold text-foreground">Climate ML Regression Model</p>
                <p className="text-[9px] text-muted-foreground">scikit-learn · Flask Prediction API</p>
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-tertiary/20 text-brand-tertiary">
              98.4% Confidence
            </span>
          </div>

          {/* Parameters & Predictions Grid */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="glass-card rounded-lg p-2">
              <p className="text-[9px] text-muted-foreground">Input Temp / Humidity</p>
              <p className="text-xs font-bold text-cyan-400">32.4°C · 68%</p>
            </div>
            <div className="glass-card rounded-lg p-2">
              <p className="text-[9px] text-muted-foreground">Predicted Anomaly</p>
              <p className="text-xs font-bold text-emerald-400">+1.8°C Shift</p>
            </div>
            <div className="glass-card rounded-lg p-2">
              <p className="text-[9px] text-muted-foreground">Precipitation Prob.</p>
              <p className="text-xs font-bold text-amber-400">74% Rain</p>
            </div>
          </div>

          {/* Prediction Trendline */}
          <div className="flex-1 rounded-xl bg-muted/20 p-2.5 flex flex-col justify-between border border-border/20">
            <div className="flex justify-between text-[9px] text-muted-foreground">
              <span>Historical Input Data</span>
              <span className="text-brand-tertiary font-semibold">Forecast Horizon (7 Days)</span>
            </div>

            {/* SVG Wave Visualization */}
            <svg viewBox="0 0 300 60" className="w-full h-12 overflow-visible">
              <path
                d="M 0 45 Q 40 10, 80 35 T 160 25 T 240 15 T 300 30"
                fill="none"
                stroke="url(#aiGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0 45 Q 40 10, 80 35 T 160 25 T 240 15 T 300 30 L 300 60 L 0 60 Z"
                fill="url(#aiAreaGradient)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="aiGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--brand-secondary)" />
                  <stop offset="50%" stopColor="var(--brand-tertiary)" />
                  <stop offset="100%" stopColor="var(--brand)" />
                </linearGradient>
                <linearGradient id="aiAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--brand-tertiary)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="px-3 py-1 bg-muted/40 border-t border-border/20 flex justify-between text-[9px] text-muted-foreground">
          <span>EarthScape AI · Weather Prediction Engine</span>
          <span className="text-brand-tertiary font-semibold">Flask REST API Ready</span>
        </div>
      </div>
    </motion.div>
  );
}

// 3. Client Website Mockup (for GN Graphix)
function ClientMockup({ project }) {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden gradient-border p-1 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-xl overflow-hidden flex flex-col">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <div className="ml-3 flex-1 h-4 rounded-full bg-muted/70 flex items-center px-2">
            <span className="text-[9px] text-emerald-400 font-mono">{project?.liveUrl || "https://gngraphix.pk"}</span>
          </div>
        </div>

        {/* Website Preview Hero */}
        <div className="flex-1 p-3 flex flex-col justify-between bg-gradient-to-b from-muted/10 to-muted/30">
          <div className="flex justify-between items-center border-b border-border/20 pb-2">
            <span className="font-extrabold text-sm tracking-tight text-gradient">GN GRAPHIX</span>
            <div className="flex gap-2 text-[9px] text-muted-foreground">
              <span>Wall Coverings</span>
              <span>Branding</span>
              <span>Portfolio</span>
            </div>
          </div>

          <div className="text-center py-2">
            <p className="text-[9px] uppercase tracking-widest text-brand font-bold">Premium Digital Branding</p>
            <h4 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
              Custom Interior Wall Coverings
            </h4>
            <p className="text-[10px] text-muted-foreground max-w-xs mx-auto mt-1">
              High-resolution commercial wall art, corporate wraps, and bespoke interior signage.
            </p>
          </div>

          {/* Gallery Preview Row */}
          <div className="grid grid-cols-3 gap-2">
            {["Wallpaper Art", "Corporate Decor", "Custom Decals"].map((title, i) => (
              <div
                key={i}
                className="rounded-lg h-12 bg-gradient-to-br from-brand/20 to-brand-secondary/20 border border-brand/20 flex items-center justify-center p-1 text-center"
              >
                <span className="text-[9px] font-semibold text-foreground">{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-3 py-1 bg-muted/40 border-t border-border/20 flex justify-between text-[9px] text-muted-foreground">
          <span>{project?.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : "gngraphix.pk"}</span>
          <span className="text-emerald-400 font-semibold">100% Responsive & Live</span>
        </div>
      </div>
    </motion.div>
  );
}

// 4. Mobile & PIM Mockup
function MobileMockup({ project }) {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden gradient-border p-1 shadow-2xl flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-xl p-3 flex gap-4 items-center justify-center">
        {/* Phone Frame */}
        <div className="w-44 h-56 rounded-2xl border-2 border-border/60 bg-background/90 p-2 flex flex-col justify-between shadow-xl">
          {/* Phone Notch */}
          <div className="w-12 h-2 rounded-full bg-muted/70 mx-auto" />

          {/* App Header */}
          <div className="text-center mt-1">
            <span className="text-[9px] font-bold text-brand">PIM Institute</span>
            <p className="text-[8px] text-muted-foreground">Student Portal (Flutter)</p>
          </div>

          {/* Cards */}
          <div className="space-y-1.5 my-auto">
            <div className="rounded-lg bg-brand/15 p-1.5 text-[8px] font-semibold text-foreground flex justify-between">
              <span>Enrollment Form</span>
              <span className="text-brand">Active</span>
            </div>
            <div className="rounded-lg bg-muted/40 p-1.5 text-[8px] font-medium text-muted-foreground flex justify-between">
              <span>Course Schedule</span>
              <span>Verified</span>
            </div>
            <div className="rounded-lg bg-muted/40 p-1.5 text-[8px] font-medium text-muted-foreground flex justify-between">
              <span>Fee Ledger</span>
              <span>Paid</span>
            </div>
          </div>

          {/* Phone bottom bar */}
          <div className="w-16 h-1 rounded-full bg-muted/80 mx-auto" />
        </div>

        {/* Info Column */}
        <div className="flex-1 space-y-2 text-left">
          <span className="text-xs font-bold text-gradient">Flutter & Dart Mobile Architecture</span>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Engineered for Pakistan Institute of Management with cross-platform mobile workflows, JWT secure authentication, and MySQL backend integration.
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-semibold">iOS & Android</span>
            <span className="px-2 py-0.5 rounded bg-muted/40 text-muted-foreground text-[9px]">Node.js Backend</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 5. Logistics Mockup
function LogisticsMockup({ project }) {
  return (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden gradient-border p-1 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-xl p-3 flex flex-col justify-between">
        <div className="flex justify-between items-center border-b border-border/20 pb-1.5">
          <span className="text-xs font-bold text-foreground">Translink & TradeLink Hub</span>
          <span className="text-[9px] font-semibold text-brand">Real-time GPS & Dispatch</span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="glass-card rounded-xl p-2.5">
            <p className="text-[9px] text-muted-foreground">Active Transporters</p>
            <p className="text-sm font-bold text-foreground">128 Fleet Units</p>
            <div className="mt-1 h-1 rounded-full bg-brand/40" />
          </div>
          <div className="glass-card rounded-xl p-2.5">
            <p className="text-[9px] text-muted-foreground">Trade Consignments</p>
            <p className="text-sm font-bold text-foreground">340 In Transit</p>
            <div className="mt-1 h-1 rounded-full bg-brand-secondary/40" />
          </div>
        </div>

        <div className="p-2 rounded-lg bg-muted/30 text-[10px] text-muted-foreground">
          Logistics dispatching, cargo manifest processing, and MySQL transactional ledger synchronization.
        </div>
      </div>
    </motion.div>
  );
}
