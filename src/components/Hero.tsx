import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Engineer.",
  "React Specialist.",
  "Cloud Architect.",
  "Problem Solver.",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="font-mono text-primary mb-4 text-sm md:text-base">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-4">
          Hashan Alam<span className="text-gradient">.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-muted-foreground mb-2 h-[1.2em]">
          {text}<span className="animate-blink text-primary">|</span>
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-6">
          <MapPin className="w-4 h-4 text-primary" /> Munich, Germany
        </div>
        <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed mb-10">
          Software engineer with 3+ years of experience building scalable web applications, 
          microservices architectures, and AI-powered solutions. Currently pursuing M.Sc. in Computer Science at Universität Passau.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors glow-border"
          >
            View my work <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="mailto:hasanalamshaikh@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-8 mt-14"
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "3", label: "Companies" },
            { value: "M.Sc.", label: "CS Student" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold font-heading text-primary">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
