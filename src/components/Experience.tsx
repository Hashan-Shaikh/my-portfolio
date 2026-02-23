import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    company: "neXDos",
    role: "Software Engineer",
    period: "June 2025 – Present",
    location: "Munich, Germany",
    highlights: [
      "Delivered React/Next.js SSR application achieving 50% reduction in page load times through code-splitting and CDN caching.",
      "Developed a RAG pipeline with FastAPI across 340+ stock tables for AI-powered financial data exploration.",
      "Implemented monorepo architecture and shared component package, reducing code duplication by 50%.",
      "Optimized Django ORM calls with raw SQL and Redis caching, reducing query response times by 40–60%.",
      "Improved observability through CloudWatch metrics and Sentry, reducing incident response time by 40%.",
    ],
    tech: ["React", "Next.js", "Django", "FastAPI", "Redis", "AWS", "RabbitMQ"],
  },
  {
    company: "Aideniti",
    role: "Software Engineer",
    period: "Dec 2023 – Dec 2024",
    location: "Karachi, Pakistan (Remote)",
    highlights: [
      "Led a team of 3 engineers to build Boarddd, a scalable team collaboration platform for a UK-based client.",
      "Integrated Elasticsearch reducing query latency from 2–4s to 20–50ms.",
      "Designed RESTful and GraphQL microservices on AWS (Lambda, ECS, API Gateway, RDS).",
      "Implemented end-to-end CI/CD pipelines with GitHub Actions for zero-downtime deployments.",
    ],
    tech: ["React", "Zustand", "GraphQL", "AWS", "Elasticsearch", "Docker"],
  },
  {
    company: "Brew Buddy IT",
    role: "Software Engineer",
    period: "Dec 2022 – Dec 2023",
    location: "Dubai, UAE (Remote)",
    highlights: [
      "Built dynamic audit templates in React for customizable enterprise workflows.",
      "Designed REST APIs with Express.js supporting 10K+ remote agent onboarding.",
      "Implemented secure JWT authentication with refresh tokens and HTTP-only cookies.",
      "Managed file uploads via Multer and Amazon S3 for efficient document handling.",
    ],
    tech: ["React", "TypeScript", "Express.js", "Redux", "PostgreSQL", "S3"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">02.</span> Experience
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-bold font-heading text-foreground">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground font-mono text-xs mb-4">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="font-mono text-xs bg-secondary text-primary/80 px-2 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
