import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import TechBadge from "@/components/TechBadge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ExperienceProject = {
  name: string;
  tech: string[];
  bullets: string[];
};

const experiences = [
  {
    company: "neXDos GmbH",
    role: "Software Engineer",
    period: "06/2025 – Present",
    location: "Munich, Germany",
    summary: [
      "Optimized React rendering with virtualization, memoization, Suspense, and code-splitting to improve Core Web Vitals.",
      "Implemented Redis caching for analytics dashboards, improving API response time by ~60%.",
      "Established a monorepo + shared component package, cutting code duplication by ~35%.",
    ],
    projects: [
      {
        name: "Financial Insights Platform",
        tech: ["React", "Django", "Redis", "PostgreSQL", "AWS"],
        bullets: [
          "Optimized React rendering with virtualization, memoization, Suspense, and code-splitting, improving Core Web Vitals scores.",
          "Developed reusable React (TypeScript) hooks and components, enhancing front-end scalability.",
          "Engineered a Python backend with layered architecture (DAO/DTO separation), strengthening modularity, separation of concerns, and testability.",
          "Implemented Redis caching for dashboards with financial analytics charts, improving API response time by ~60%.",
          "Enforced code quality with Jest/React Testing Library tests, achieving 90%+ code coverage.",
          "Enhanced observability via CloudWatch and Sentry, reducing incident response time by ~40%.",
          "Reviewed merge requests and managed user stories to ensure quality and timely releases.",
        ],
      },
      {
        name: "Marketing Web Platform",
        tech: ["Next.js", "Django", "Docker", "MUI", "Tailwind CSS"],
        bullets: [
          "Implemented i18n helpers at Next.js server-side, improving SEO score of the marketing app.",
          "Developed highly responsive components with Material UI and Tailwind CSS, directly improving UI/UX.",
          "Established a monorepo and shared component package, cutting code duplication by ~35%.",
          "Translated Figma designs into pixel-perfect UI using HTML, CSS, and Material UI.",
          "Participated in weekly scrums to identify workflow bottlenecks and improve team alignment.",
        ],
      },
    ],
    tech: ["React", "Next.js", "Django", "Redis", "PostgreSQL", "AWS", "Docker", "MUI", "Tailwind CSS", "Jest", "RTL"],
  },
  {
    company: "Aideniti",
    role: "Software Engineer",
    period: "12/2023 – 05/2025",
    location: "Karachi, Pakistan (Remote)",
    summary: [
      "Integrated Elasticsearch, reducing search latency from 2–4s to 20–50ms and improving UX across dashboards.",
      "Architected a reusable WebSocket layer with custom hooks for reliable real-time communication.",
      "Established end-to-end CI/CD with GitHub Actions for automated testing, Docker builds, and zero-downtime releases.",
    ],
    projects: [
      {
        name: "Boarddd – Collaboration Platform",
        tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Elasticsearch", "RabbitMQ", "GraphQL", "Docker"],
        bullets: [
          "Engineered RabbitMQ-based microservices for async tasks, reducing backend load and improving communication.",
          "Architected a reusable WebSocket layer with custom hooks, delivering reliable real-time communication.",
          "Decomposed the system into microservices, enhancing scalability and accelerating feature delivery.",
          "Integrated Elasticsearch, reducing search latency from 2–4s to 20–50ms, improving UX across dashboards.",
          "Led a team of 3 engineers to deliver a B2B SaaS platform for a UK client using Agile/Lean practices.",
          "Designed RESTful and GraphQL microservices on AWS (Lambda, ECS, API Gateway, RDS, IAM) with circuit breakers and retries for higher uptime.",
          "Established end-to-end CI/CD pipelines with GitHub Actions for automated testing, Docker builds, and multi-environment deployments, ensuring zero-downtime releases.",
        ],
      },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Elasticsearch", "RabbitMQ", "GraphQL", "Docker", "GitHub Actions"],
  },
  {
    company: "Brew Buddy Information Technology",
    role: "Software Engineer",
    period: "12/2022 – 12/2023",
    location: "Dubai, UAE (Remote)",
    summary: [
      "Designed dynamic master audit templates in React for 60+ workflows; improved reusability and customization.",
      "Delivered high-performance REST APIs used by 10K+ remote agents, streamlining onboarding and training.",
      "Managed file uploads/streaming with Multer + S3 and secured auth with JWT + refresh tokens + HTTP-only cookies.",
    ],
    projects: [
      {
        name: "Hailo Assure (AEP) – Audit Management System",
        tech: ["React", "TypeScript", "Redux", "AWS", "S3", "Chart.js"],
        bullets: [
          "Designed dynamic master audit templates in React, customizable for 60+ audit workflows, enhancing reusability.",
          "Configured scalable state management with Redux Toolkit for complex async workflows and global state updates.",
          "Managed file uploads and streaming with Multer and Amazon S3, ensuring efficient document handling.",
          "Created strongly-typed React modules in TypeScript, improving reliability and maintainability.",
          "Crafted interactive Chart.js dashboards for audit parameters, enabling better analysis and decision-making.",
        ],
      },
      {
        name: "iTalk2u – Call Centre Platform",
        tech: ["Node.js", "MySQL", "PostgreSQL"],
        bullets: [
          "Delivered high-performance REST APIs utilized by 10K+ remote agents, streamlining onboarding and training workflows.",
          "Secured the authentication layer using JWT, refresh tokens, and HTTP-only cookies, strengthening session integrity.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Redux", "AWS", "S3", "Chart.js", "Node.js", "MySQL", "PostgreSQL", "JWT"],
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

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="w-full text-left bg-card border border-border rounded-lg p-6 hover:glow-border transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                    >
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
                        {exp.summary.map((h, j) => (
                          <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5 shrink-0">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.slice(0, 5).map((t) => (
                            <TechBadge
                              key={t}
                              label={t}
                              className="font-mono text-xs bg-secondary text-primary/80 px-2 py-1 rounded-sm"
                              iconClassName="h-3.5 w-3.5"
                            />
                          ))}
                          {exp.tech.length > 5 && (
                            <span className="font-mono text-xs bg-secondary text-primary/80 px-2 py-1 rounded-sm">
                              +{exp.tech.length - 5}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-muted-foreground shrink-0">Click to expand</span>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl max-h-[82vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-heading">
                        {exp.role} <span className="text-primary">@ {exp.company}</span>
                      </DialogTitle>
                      <DialogDescription className="font-mono text-xs">
                        {exp.period} · {exp.location}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-5">
                      <div>
                        <div className="font-mono text-xs text-primary mb-3">{`// Projects`}</div>
                        <div className="space-y-5">
                          {exp.projects.map((p: ExperienceProject) => (
                            <div key={p.name} className="rounded-lg border border-border/60 bg-card/40 p-4">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                <div className="font-heading font-bold text-foreground">{p.name}</div>
                                <div className="flex flex-wrap gap-2">
                                  {p.tech.map((t) => (
                                    <TechBadge
                                      key={t}
                                      label={t}
                                      className="font-mono text-xs bg-secondary text-primary/80 px-2 py-1 rounded-sm"
                                      iconClassName="h-3.5 w-3.5"
                                    />
                                  ))}
                                </div>
                              </div>
                              <ul className="space-y-2">
                                {p.bullets.map((h, j) => (
                                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-mono text-xs text-primary mb-3">{`// Skills`}</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <TechBadge
                              key={t}
                              label={t}
                              className="font-mono text-xs bg-secondary text-primary/80 px-2 py-1 rounded-sm"
                              iconClassName="h-3.5 w-3.5"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
