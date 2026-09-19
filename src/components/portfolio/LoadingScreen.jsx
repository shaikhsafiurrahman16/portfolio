import { motion } from "framer-motion";

export function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--background)]"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Animated logo mark */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center">
          <motion.span
            className="text-3xl font-bold text-gradient"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            SR
          </motion.span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--brand), var(--brand-secondary))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-sm text-muted-foreground font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}
