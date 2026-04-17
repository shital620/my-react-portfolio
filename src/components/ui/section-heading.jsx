import { motion } from "framer-motion";

export function SectionHeading({ children, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm md:text-base uppercase tracking-widest mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
        className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mt-6 origin-left"
      />
    </div>
  );
}



