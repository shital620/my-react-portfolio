import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const links = [
  {
    icon: <Mail size={18} />,
    label: "sitalkumari95044@gmail.com",
    href: "mailto:sitalkumari95044@gmail.com",
  },
  // {
  //   icon: <Phone size={18} />,
  //   label: "+91-6201174727",
  //   href: "tel:+916201174727",
  // },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shital-kumari-24a426252/",
  },
  {
    icon: <SiGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/shital620",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/8 blur-[80px] md:blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-primary text-sm mb-4 tracking-widest uppercase"
          >
            07. What's Next?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's Build <span className="text-gradient">Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            I'm actively looking for opportunities in React Native, mobile app development, and practical full-stack work.
            Whether you have a project, a question, or just want to connect, my inbox is always open.
          </motion.p>

          <motion.a
            href="mailto:sitalkumari95044@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-mono font-bold tracking-wide rounded-xl hover:scale-105 transition-all duration-200 glow-primary mb-16"
          >
            Say Hello
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-5 pt-10 border-t border-white/8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors group font-mono text-sm"
              >
                <span className="group-hover:-translate-y-0.5 transition-transform">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



