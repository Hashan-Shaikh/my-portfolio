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

const experiences = [
  {
    company: "neXDos",
    role: "Software Engineer",
    period: "June 2025 – Present",
    location: "Munich, Germany",
    summary: [
      "Delivered React/Next.js SSR app achieving ~50% faster page loads via code-splitting and CDN caching.",
      "Built microservices features and async workloads using RabbitMQ; improved performance with Redis caching (up to 60%).",
      "Developed an LLM-powered RAG pipeline (FastAPI) across 340+ stock tables for secure SQL generation and exploration.",
    ],
    highlights: [
      "Delivered React/Next.js SSR application for a financial insights platform, reducing page load times by ~50% through code-splitting and CDN caching.",
      "Managed server state with React Query (caching, background refetching, optimistic updates), improving synchronization and reducing redundant network calls.",
      "Created microservices-based features for inter-service communication; leveraged RabbitMQ for async non-critical tasks to reduce heavy workloads.",
      "Engineered reusable React (TypeScript) hooks for preference persistence, cross-app usage tracking, and responsive behavior, improving modularity and scalability.",
      "Reduced redundant Django ORM calls using raw SQL queries and database views; improved high-load endpoints by 40%+.",
      "Structured Django backend using DAO/DTO patterns and strict OOP practices to improve testability and maintainability.",
      "Defined Redis caching for frequently accessed query results; reduced DB load and improved API response times by up to 60%.",
      "Implemented monorepo architecture and a shared component package, establishing a single source of truth and reducing code duplication by ~50%.",
      "Optimized React rendering via memoization patterns and performance techniques to improve Core Web Vitals.",
      "Improved observability with CloudWatch metrics and Sentry error tracking, reducing incident response time by ~40%.",
      "Developed a RAG pipeline with FastAPI across 340+ stock tables, adding guardrails to deliver reliable SQL generation through LLMs for financial exploration.",
    ],
    tech: ["React", "Next.js", "Django", "FastAPI", "Redis", "AWS", "RabbitMQ"],
  },
  {
    company: "Aideniti",
    role: "Software Engineer",
    period: "Dec 2023 – Dec 2024",
    location: "Karachi, Pakistan (Remote)",
    summary: [
      "Led a team of 3 engineers to build a real-time collaboration platform for a UK client (Agile/Lean).",
      "Integrated Elasticsearch search, cutting latency from 2–4s to 20–50ms.",
      "Built AWS microservices (Lambda/ECS/API Gateway/RDS) with CI/CD via GitHub Actions for zero-downtime releases.",
    ],
    highlights: [
      "Added client-side state management with Zustand for complex multi-step workflows, replacing Redux to reduce boilerplate.",
      "Designed a reusable WebSocket architecture using custom React hooks and event-driven patterns for reliable real-time communication and cleaner state management.",
      "Architected a microservices platform (auth, payments, notifications, real-time messaging) as independently deployable services to improve scalability and speed of delivery.",
      "Integrated Elasticsearch for near real-time search across boards, tasks, and messages; reduced query latency from 2–4s to 20–50ms.",
      "Led a team of 3 engineers to build Boarddd for a UK-based client using Agile and Lean practices.",
      "Designed RESTful and GraphQL microservices on AWS (Lambda, ECS, API Gateway, RDS, IAM) with circuit breakers and retry patterns for higher uptime.",
      "Composed a resilient API layer with Axios interceptors (token lifecycle, retries, global error handling, header standardization) to improve reliability and maintainability.",
      "Implemented end-to-end CI/CD with GitHub Actions (testing, Docker builds, multi-environment deployments) enabling fast, reliable, zero-downtime releases.",
    ],
    tech: ["React", "Zustand", "GraphQL", "AWS", "Elasticsearch", "Docker"],
  },
  {
    company: "Brew Buddy IT",
    role: "Software Engineer",
    period: "Dec 2022 – Dec 2023",
    location: "Dubai, UAE (Remote)",
    summary: [
      "Built dynamic audit templates and React form workflows for enterprise auditing.",
      "Designed Express APIs supporting 10K+ remote agent onboarding/training workflows.",
      "Implemented secure JWT auth with refresh tokens + HTTP-only cookies; managed uploads via Multer + S3.",
    ],
    highlights: [
      "Designed dynamic master audit templates in React, enabling reusable base templates and customization for diverse audit workflows.",
      "Constructed React forms for data entry and validation; created interactive dashboards using Chart.js to visualize audit parameters.",
      "Designed high-performance REST APIs with Express.js supporting onboarding and training workflows for 10K+ remote agents.",
      "Built a secure stateless auth layer using JWT, refresh tokens, and HTTP-only cookies to harden sessions.",
      "Created strongly typed React modules with TypeScript to improve reliability and developer productivity.",
      "Implemented scalable state management with Redux Toolkit for complex async workflows.",
      "Managed file uploads and streaming via Multer and Amazon S3 storage for efficient document handling.",
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
                        <div className="font-mono text-xs text-primary mb-3">{`// Impact`}</div>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                              <span className="text-primary mt-1.5 shrink-0">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
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
