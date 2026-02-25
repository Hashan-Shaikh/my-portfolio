import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const highlights = [
  { icon: Briefcase, title: "3+ Years", desc: "Professional Experience" },
  { icon: GraduationCap, title: "M.Sc. CS", desc: "Universität Passau · Apr 2024 – Feb 2026 (expected)" },
  { icon: Code2, title: "Full-Stack", desc: "React · Node · Python" },
];

const About = () => {
  return (
    <section id="about" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">01.</span> About Me
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>
        <div className="space-y-6">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer based in Munich, Germany, passionate about building performant, 
              scalable web applications. With experience across startups and product companies, 
              I've delivered everything from financial analytics platforms to real-time collaboration tools.
            </p>
            <p>
              My expertise spans the full stack — from crafting pixel-perfect React interfaces with 
              optimized rendering pipelines, to designing microservices architectures with Node.js, 
              Django, and cloud-native infrastructure on AWS. I've also built RAG pipelines and 
              AI-powered features using FastAPI and LLMs.
            </p>
            <p>
              I hold a Bachelor's in Computer Science from FAST-NUCES (Dean's Honour List, SGPA 3.9+) 
              and am currently completing my M.Sc. at Universität Passau (Apr 2024 – Feb 2026 (expected)), with a focus on
              Advanced Software Architecture, Distributed Systems, and Deep Learning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:glow-border transition-shadow"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-heading font-bold text-foreground text-sm">{item.title}</div>
                <div className="font-mono text-xs text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
