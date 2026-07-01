import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const ROLES = [
  "React Native Developer",
  "Mobile App Builder",
  "Full-Stack Explorer",
  "React JS Developer",
];

function TypewriterText({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1400);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentText.length < word.length) {
      timeout = setTimeout(() => setCurrentText(word.slice(0, currentText.length + 1)), 75);
    } else if (!isDeleting && currentText.length === word.length) {
      setIsPaused(true);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => setCurrentText(currentText.slice(0, -1)), 38);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWord, words]);

  return (
    <span>
      <span className="text-gradient">{currentText}</span>
      <span className="cursor-blink text-primary ml-0.5">|</span>
    </span>
  );
}


export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToNext = () => {
    const el = document.querySelector("#profile");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm mb-8"
          >
            <Sparkles size={14} />
            <span>Available for opportunities</span>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-mono text-muted-foreground mb-4 text-sm tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-4xl lg:text-[6rem] font-black tracking-tighter text-foreground mb-4 leading-[0.88]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Shital
            <span className="shimmer-text">Kumari.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-lg md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8 leading-tight mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <TypewriterText words={ROLES} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Crafting exceptional cross-platform mobile experiences with React Native.
            Currently building a construction management app — pixel-perfect UI to optimized performance.
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
                className="relative px-8 py-4 bg-primary text-primary-foreground font-mono font-bold tracking-wide rounded-lg hover:scale-105 transition-all duration-200 glow-primary overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="mailto:sitalkumari95044@gmail.com"
                className="px-8 py-4 border border-primary/30 text-primary font-mono font-bold tracking-wide rounded-lg hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10 aspect-square w-full max-w-[450px] ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-accent rounded-[2rem] opacity-30 blur group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative h-full w-full bg-background rounded-[1.8rem] border border-white/10 overflow-hidden glass-panel">
                <img 
                  src="/assets/myPhoto2.jpeg"
                  alt="Shital Kumari"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop";
                  }}
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-14 flex flex-wrap gap-6 font-mono text-xs text-muted-foreground max-w-5xl mx-auto"
        >
            {[
              { label: "Stack", val: "React Native" },
              { label: "Degree", val: "MCA · 8.3" },
              { label: "Experience", val: "1+ Year" },
              { label: "Projects", val: "3 Built" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>{stat.label}:</span>
                <span className="text-foreground font-semibold">{stat.val}</span>
              </div>
            ))}
          </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}


