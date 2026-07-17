import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Terminal, Database, Smartphone, MapPin, Mail, GraduationCap } from "lucide-react";

const stats = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 1, suffix: "+", label: "Year Experience" },
  { value: 8.3, suffix: "", label: "MCA CGPA", decimal: true },
  { value: 5, suffix: "+", label: "Tech Stacks" },
];

function AnimatedCounter({ value, suffix, decimal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value, decimal]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function Profile() {
  return (
    <section id="profile" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="01. About">Who I Am</SectionHeading>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel rounded-xl p-5 text-center gradient-border group hover:scale-105 transition-transform duration-200"
            >
              <div className="text-3xl md:text-4xl font-black text-gradient mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 xl:col-span-7 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              Hello! I'm <span className="text-foreground font-semibold">Shital Kumari</span>, a React Native Developer with hands-on experience in building cross-platform mobile applications. I specialize in crafting fluid, native-feeling experiences that live on phones.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 py-4">
              <div className="space-y-4">
                <p>
                  I am skilled in developing responsive UI, integrating REST APIs, and optimizing application performance. My journey started with a deep curiosity about systems, leading to my 
                  MCA at RGPV, Sagar Institute of Research & Technology, Bhopal.
                </p>
                <p>
                  I am a quick learner with a strong problem-solving ability and a keen interest in full-stack development. Currently, I am focusing on building scalable, production-ready solutions like my Construction Management App and other complex enterprise tools.
                </p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden glass-panel border border-white/5"
              >
                <img 
                  src="/assets/myPhoto1.jpg" 
                  alt="Shital working" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-tighter">Current Focus: React Native Development</div>
                </div>
              </motion.div>
            </div>

            <div className="pt-4 space-y-2.5 font-mono text-sm">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:sitalkumari95044@gmail.com" className="hover:text-primary transition-colors">
                  sitalkumari95044@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={14} className="text-primary shrink-0" />
                <span>MCA — RGPV, Bhopal</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-12 xl:col-span-5 grid gap-4"
          >
            {[
              {
                icon: <Smartphone className="text-primary" size={22} />,
                bgIcon: <Smartphone size={72} strokeWidth={0.5} />,
                title: "Mobile Development",
                desc: "Crafting fluid, native-feeling experiences for iOS and Android using React Native — reusable components, responsive layouts, and smooth animations.",
                color: "border-primary/20 hover:border-primary/50",
                glow: "group-hover:glow-primary",
              },
              {
                icon: <Database className="text-secondary" size={22} />,
                bgIcon: <Database size={72} strokeWidth={0.5} />,
                title: "Backend & Databases",
                desc: "Structuring reliable APIs with Node.js/Express and managing data efficiently via MySQL and MongoDB — from schema design to query optimization.",
                color: "border-secondary/20 hover:border-secondary/50",
                glow: "",
              },
              {
                icon: <Terminal className="text-accent" size={22} />,
                bgIcon: <Terminal size={72} strokeWidth={0.5} />,
                title: "Core Programming",
                desc: "Solid algorithmic foundation in C, Java, Python, and JavaScript — comfortable with data structures, logic, and clean code practices.",
                color: "border-accent/20 hover:border-accent/50",
                glow: "",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`glass-panel p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-default ${card.color}`}
              >
                <div className="absolute -right-3 -bottom-3 opacity-5 group-hover:opacity-10 transition-opacity text-foreground">
                  {card.bgIcon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.icon}
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



