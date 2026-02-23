import { motion } from "framer-motion";
import TechBadge from "@/components/TechBadge";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { category: "Frontend", items: ["React 17+", "Next.js 14+", "Zustand", "Redux", "Tailwind CSS", "MUI", "Chart.js", "Jest", "RTL"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Django", "FastAPI", "REST", "GraphQL", "Pandas"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Redis", "Elasticsearch"] },
  { category: "DevOps & Cloud", items: ["AWS", "Kubernetes", "Docker", "GitHub Actions", "Terraform", "CloudWatch", "Sentry"] },
];

const marqueeItems = Array.from(new Set(skills.flatMap((g) => g.items)));
const marqueeDoubled = [...marqueeItems, ...marqueeItems];

const Skills = () => {
  return (
    <section id="skills" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">03.</span> Skills
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        {/* Marquee tech stack */}
        <div className="relative mb-10 overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/70 to-transparent" />

          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 62, ease: "linear", repeat: Infinity }}
            className="flex w-max items-center gap-4 py-6"
          >
            {marqueeDoubled.map((label, idx) => (
              <motion.div
                key={`${label}-${idx}`}
                className="shrink-0"
                whileHover={{ y: -2, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <TechBadge
                  label={label}
                  className="rounded-full border border-border/60 bg-background/30 px-4 py-3 text-foreground shadow-[0_0_0_0_rgba(0,0,0,0)] hover:border-primary/35 hover:shadow-[0_0_28px_hsl(175_70%_50%_/_0.14)] transition-[border-color,box-shadow,transform]"
                  iconClassName="h-7 w-7"
                  textClassName="hidden"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-shadow"
            >
              <h3 className="font-mono text-primary text-sm mb-4">{`// ${group.category}`}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <TechBadge
                    key={skill}
                    className="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-sm"
                    iconClassName="h-3.5 w-3.5"
                    label={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
