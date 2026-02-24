import { motion } from "framer-motion";
import { ArrowDown, Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
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
    <section className="min-h-screen flex flex-col justify-center section-padding pt-28 md:pt-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.10] [mask-image:radial-gradient(ellipse_at_center,black,transparent_62%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(175 70% 50% / 0.22) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50% / 0.22) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-start gap-10 lg:gap-12">
          {/* Left */}
          <div className="max-w-3xl">
            <p className="font-mono text-primary mb-4 text-sm md:text-base">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-4">
              Hashan Alam<span className="text-gradient">.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-muted-foreground mb-3 h-[1.2em]">
              {text}<span className="animate-blink text-primary">|</span>
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" /> Munich, Germany
            </div>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10">
              Software engineer with 3+ years of experience building scalable web applications,
              microservices architectures, and AI-powered solutions.
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
              className="flex gap-10 mt-14"
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
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-card/60 border border-border rounded-xl p-6 backdrop-blur-md hover:glow-border transition-shadow"
          >
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-3xl bg-primary/20 blur-xl" />
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-3xl border border-primary/25 bg-background/30 overflow-hidden">
                    <img
                      src="/profile_pic.png"
                      alt="Hashan Alam profile photo"
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-foreground leading-tight truncate">Hashan Alam</div>
                  <div className="font-mono text-xs text-muted-foreground truncate">Full‑stack Software Engineer</div>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center rounded-full border border-border/60 bg-background/30 px-3 py-1 font-mono text-xs text-muted-foreground">
                Available
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
              <div>
                <div className="font-heading font-bold text-foreground">Quick snapshot</div>
                <div className="font-mono text-xs text-muted-foreground">What I bring to teams</div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/30 p-3">
                <Briefcase className="h-4 w-4 text-primary mt-0.5" />
                <div className="min-w-0">
                  <div className="text-sm text-foreground font-medium">Full‑stack delivery</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    React + Node/Python, performance, and production observability.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/30 p-3">
                <GraduationCap className="h-4 w-4 text-primary mt-0.5" />
                <div className="min-w-0">
                  <div className="text-sm text-foreground font-medium">M.Sc. Computer Science</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Universität Passau · Software architecture · Distributed systems.
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/30 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm text-foreground font-medium">Open to opportunities</div>
                    <div className="text-xs text-muted-foreground">Full‑time · Remote/On‑site</div>
                  </div>
                  <a
                    href="mailto:hasanalamshaikh@gmail.com"
                    className="shrink-0 inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-2 font-mono text-xs hover:bg-primary/90 transition-colors"
                  >
                    Email me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
