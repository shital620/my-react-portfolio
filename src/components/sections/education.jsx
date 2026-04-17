import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "RGPV — Sagar Institute of Research & Technology",
    location: "Bhopal",
    year: "2023 – 2025",
    grade: "8.3 CGPA",
    gradeLabel: "CGPA",
    color: "primary",
    gradient: "from-blue-600/15 to-transparent",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "Indira Gandhi National Open University",
    location: "Patna",
    year: "2018 – 2022",
    grade: "65.18%",
    gradeLabel: "Score",
    color: "secondary",
    gradient: "from-cyan-600/15 to-transparent",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="05. Academics">Education</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`group glass-panel rounded-2xl border overflow-hidden transition-all duration-300 ${item.color === "primary" ? "hover:border-primary/40" : "hover:border-secondary/40"}`}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.color === "primary" ? "from-primary to-secondary" : "from-secondary to-accent"}`} />
              <div className={`p-7 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border text-2xl font-black ${item.color === "primary" ? "bg-primary/10 border-primary/30 text-primary" : "bg-secondary/10 border-secondary/30 text-secondary"}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.short}
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-black ${item.color === "primary" ? "text-gradient" : "text-secondary"}`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.grade}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">{item.gradeLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.school}</p>

                  <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {item.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} />
                      {item.location}
                    </span>
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



