import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background grid */}
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
          Your Name<span className="text-gradient">.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-muted-foreground mb-6">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed mb-10">
          Software engineer focused on building exceptional digital experiences. 
          Currently crafting performant, accessible, and delightful products.
        </p>
        <a
          href="#projects"
          onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors glow-border"
        >
          View my work <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Blinking cursor decoration */}
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
