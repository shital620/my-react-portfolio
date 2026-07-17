import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Smartphone, Globe, Wallet } from "lucide-react";

const projects = [
  {
    title: "Construction Management App",
    year: "2026",
    tag: "Mobile App",
    description: "A comprehensive mobile application to manage construction tasks, progress tracking, and workflows. Built with React Native for seamless cross-platform performance with real-time data handling.",
    highlights: [
      "Manage construction tasks, progress tracking, and workflows",
      "Reusable UI components integrated with REST APIs for real-time data",
      "Optimized component design for improved usability and performance",
    ],
    tech: ["React Native", "JavaScript", "REST API"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/40",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: <Smartphone size={48} strokeWidth={1} />,
    iconColor: "text-blue-400",
    link: "https://github.com/shital620",
  },
  {
    title: "Zomato Clone",
    year: "2025",
    tag: "Full-Stack Web",
    description: "A production-grade food delivery platform with secure authentication, full cart functionality, and a clean responsive UI — backed by a Node.js/Express API and MongoDB database.",
    highlights: [
      "Secure authentication and user management",
      "Cart, search, and responsive UI",
      "RESTful APIs with MongoDB data layer",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    gradient: "from-orange-600/20 via-red-500/10 to-transparent",
    borderGlow: "hover:border-orange-500/40",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: <Globe size={48} strokeWidth={1} />,
    iconColor: "text-orange-400",
    link: "https://github.com/shital620",
  },
  {
    title: "Expense Tracking App",
    year: "2026",
    tag: "Mobile App",
    description: "A clean and intuitive mobile app to track daily income and expenses. Features dynamic total calculation, persistent local storage, and smooth state management — all in a minimal, user-friendly interface.",
    highlights: [
      "Add/delete transactions with dynamic total calculation",
      "React Hooks (useState, useEffect) for state management",
      "AsyncStorage for persistent local data storage",
    ],
    tech: ["React Native", "AsyncStorage", "JavaScript"],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    borderGlow: "hover:border-violet-500/40",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    icon: <Wallet size={48} strokeWidth={1} />,
    iconColor: "text-violet-400",
    link: "https://github.com/shital620",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="04. Work">Some Things I've Built</SectionHeading>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`group relative glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 ${project.borderGlow} hover:shadow-2xl`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  {/* Icon */}
                  <div className={`shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${project.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${project.tagColor}`}>
                        {project.tag}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="font-mono text-xs text-muted-foreground px-2.5 py-1 rounded-md bg-muted/40 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group/link"
                      >
                        <span className="group-hover/link:underline">View GitHub</span>
                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



