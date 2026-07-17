import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building2, Code2, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Vaibhav Infotech",
    date: "May 2025 – Present",
    type: "Current",
    points: [
      "Working on the ERP School India project and maintaining ERP solutions for school management.",
      "Developing application modules and implementing features based on project requirements.",
      "Writing and optimizing MySQL queries for data retrieval, insertion, updates, and reporting.",
      "Debugging issues, fixing bugs, and improving application performance.",
      "Collaborating with the development team to implement new features and maintain existing modules.",
    ],
    link: null,
    linkLabel: null,
    icon: <Building2 size={20} strokeWidth={1.5} />,
    accentColor: "primary",
    badge: "ERP / Backend",
  },
  {
    role: "React Native Developer Intern",
    company: "Satya Kabir E-Solutions Pvt. Ltd.",
    date: "Oct 2025 – Apr 2026",
    type: "Previous",
    points: [
      "Completed a 6-month internship in React Native mobile application development.",
      "Developed and maintained a Construction Management mobile application using React Native and JavaScript.",
      "Designed reusable and responsive UI components to improve application consistency and user experience.",
      "Integrated REST APIs, debugged application issues, and optimized components for better performance.",
    ],
    link: null,
    linkLabel: null,
    icon: <Code2 size={20} strokeWidth={1.5} />,
    accentColor: "secondary",
    badge: "React Native",
  },
  {
    role: "Software Engineer",
    company: "Vaibhav Infotech",
    date: "May 2025 – Oct 2025",
    type: "Previous",
    points: [
      "Worked on the ERP School India project and supported school ERP application development.",
      "Developed application modules and implemented features based on business requirements.",
      "Wrote and optimized MySQL queries for data management and reporting.",
      "Resolved bugs and assisted in maintaining existing application modules.",
    ],
    link: null,
    linkLabel: null,
    icon: <Building2 size={20} strokeWidth={1.5} />,
    accentColor: "secondary",
    badge: "ERP / Backend",
  },
  {
    role: "MERN Stack Intern",
    company: "EY GDS & AICTE",
    date: "Mar 2025 – Apr 2025",
    type: "Previous",
    points: [
      "Completed a 6-week MERN Stack internship under the Next Gen Employability Program.",
      "Gained practical experience in JavaScript, React.js, API integration, responsive web development, and debugging.",
    ],
    link: null,
    linkLabel: null,
    icon: <Code2 size={20} strokeWidth={1.5} />,
    accentColor: "secondary",
    badge: "MERN Stack",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="02. Work History">Experience</SectionHeading>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="flex gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0 mt-6">
                  <div
                    className={`w-10 h-10 rounded-full glass-panel border flex items-center justify-center z-10 ${exp.accentColor === "primary" ? "border-primary/50 text-primary" : "border-secondary/50 text-secondary"}`}
                    style={{ boxShadow: exp.accentColor === "primary" ? "0 0 20px hsl(var(--primary)/0.3)" : "0 0 20px hsl(var(--secondary)/0.3)" }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 glass-panel rounded-2xl border p-7 transition-all duration-300 group ${exp.accentColor === "primary" ? "hover:border-primary/30" : "hover:border-secondary/30"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs px-2 py-0.5 rounded border ${exp.accentColor === "primary" ? "text-primary border-primary/30 bg-primary/10" : "text-secondary border-secondary/30 bg-secondary/10"}`}>
                          {exp.badge}
                        </span>
                        {exp.type === "Current" && (
                          <span className="flex items-center gap-1 font-mono text-xs text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className={`font-semibold text-sm ${exp.accentColor === "primary" ? "text-primary" : "text-secondary"}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-lg">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className={`mt-1.5 shrink-0 ${exp.accentColor === "primary" ? "text-primary" : "text-secondary"}`}>▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <a href={exp.link} className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs text-primary hover:text-secondary transition-colors group/link">
                      <span>{exp.linkLabel}</span>
                      <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



