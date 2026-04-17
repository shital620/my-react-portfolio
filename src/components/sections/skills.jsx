import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const skills = [
  { name: "React Native", level: 88, category: "Mobile" },
  { name: "React.js", level: 82, category: "Web" },
  { name: "JavaScript", level: 90, category: "Language" },
  // { name: "Node.js / Express", level: 72, category: "Backend" },
  { name: "MySQL", level: 75, category: "Database" },
  // { name: "MongoDB", level: 68, category: "Database" },
  { name: "HTML / CSS", level: 92, category: "Web" },
  { name: "Python", level: 65, category: "Language" },
  { name: "Java", level: 60, category: "Language" },
  { name: "Git / GitHub", level: 85, category: "Tools" },
];

const techStack = [
  { name: "React Native", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5" },
  { name: "JavaScript", color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  { name: "React.js", color: "text-blue-400 border-blue-400/30 bg-blue-400/5" },
  // { name: "Node.js", color: "text-green-400 border-green-400/30 bg-green-400/5" },
  // { name: "Express.js", color: "text-gray-400 border-gray-400/30 bg-gray-400/5" },
  // { name: "MongoDB", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" },
  { name: "MySQL", color: "text-orange-400 border-orange-400/30 bg-orange-400/5" },
  { name: "HTML / CSS", color: "text-pink-400 border-pink-400/30 bg-pink-400/5" },
  { name: "Python", color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/5" },
  { name: "Java", color: "text-red-400 border-red-400/30 bg-red-400/5" },
  { name: "C", color: "text-purple-400 border-purple-400/30 bg-purple-400/5" },
  { name: "Git", color: "text-amber-400 border-amber-400/30 bg-amber-400/5" },
  { name: "GitHub", color: "text-white border-white/20 bg-white/5" },
  { name: "VS Code", color: "text-sky-400 border-sky-400/30 bg-sky-400/5" },
  { name: "Postman", color: "text-orange-400 border-orange-400/30 bg-orange-400/5" },
  { name: "REST API", color: "text-violet-400 border-violet-400/30 bg-violet-400/5" },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground px-2 py-0.5 rounded bg-muted/50">{skill.category}</span>
          <span className="font-mono text-xs text-primary font-bold">{skill.level}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="03. Expertise">Skills & Tools</SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-5">
            <h3 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest">Proficiency</h3>
            {skills.slice(0, 6).map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
          <div className="space-y-5">
            <h3 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest">More Skills</h3>
            {skills.slice(6).map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i + 6} />
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 gradient-border">
          <h3 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest">Full Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`px-4 py-2 rounded-lg border text-sm font-mono font-medium transition-all cursor-default ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



