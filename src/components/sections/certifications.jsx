import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award, Code2, Cloud } from "lucide-react";

const certifications = [
  {
    name: "React Native Internship",
    issuer: "Satya Kabir E-Solutions",
    desc: "Certification for completing a React Native Developer internship, building production mobile apps.",
    icon: <Code2 size={22} />,
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    tag: "Satya Kabir",
    certificate: "/assets/certificate.jpg",
  },
  {
    name: "MERN Internship",
    issuer: "EY GDS",
    desc: "Full-stack development certification from EY Global Delivery Services.",
    icon: <Award size={22} />,
    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    tag: "EY GDS",
  },
  {
    name: "AI & Cloud",
    issuer: "Edunet",
    desc: "Certification in artificial intelligence concepts and cloud computing fundamentals.",
    icon: <Cloud size={22} />,
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    tag: "Edunet",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="06. Accolades">Certifications</SectionHeading>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${cert.color}`}>
                {cert.icon}
              </div>
              <div className="font-mono text-xs text-muted-foreground mb-1">{cert.tag}</div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{cert.desc}</p>
              
              {cert.certificate && (
                <a 
                  href={cert.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-primary hover:text-secondary translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Award size={10} />
                  VIEW CERTIFICATE
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



