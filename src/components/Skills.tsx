import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"] },
];

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
          <span className="font-mono text-primary text-lg">02.</span> Skills
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
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
                  <span
                    key={skill}
                    className="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-sm"
                  >
                    {skill}
                  </span>
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
