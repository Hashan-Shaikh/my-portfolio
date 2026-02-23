import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TechBadge from "@/components/TechBadge";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Financial Insights Platform",
    description: "SSR application for financial data visualization with React/Next.js, featuring code-splitting, CDN caching, and a RAG pipeline for AI-powered SQL generation across 340+ stock tables.",
    highlights: [
      "Code-splitting + CDN caching for faster navigation",
      "RAG pipeline for AI-powered SQL over 340+ stock tables",
      "Production-ready data visualization workflows",
    ],
    tech: ["React", "Next.js", "FastAPI", "Redis", "RabbitMQ", "AWS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Boarddd – Team Collaboration",
    description: "Scalable real-time collaboration platform with WebSocket architecture, Elasticsearch-powered search (20–50ms latency), and microservices deployed on AWS Lambda & ECS.",
    highlights: [
      "Real-time collaboration using WebSocket architecture",
      "Elasticsearch search optimized to 20–50ms latency",
      "Microservices deployed on AWS Lambda & ECS",
    ],
    tech: ["React", "Zustand", "GraphQL", "Elasticsearch", "AWS", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Enterprise Audit Platform",
    description: "Dynamic audit template system enabling organizations to define reusable templates with interactive Chart.js dashboards, secure JWT auth, and S3-based file management.",
    highlights: [
      "Interactive dashboards with Chart.js",
      "Secure JWT auth and audit workflows",
      "S3-based file management and uploads",
    ],
    tech: ["React", "TypeScript", "Express.js", "Redux", "PostgreSQL", "S3"],
    github: "#",
    live: "#",
  },
];

type Project = (typeof projects)[number];

function isRealLink(url?: string) {
  return Boolean(url) && url !== "#";
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = Boolean(project.featured);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-md",
        "hover:glow-border transition-shadow",
        isFeatured ? "md:col-span-2" : "",
      )}
    >
      {/* Visual header */}
      <div className="relative h-28 md:h-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.35] bg-grid-soft" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          {isFeatured && (
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              Featured
            </span>
          )}
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/30 px-3 py-1 font-mono text-xs text-muted-foreground">
            Case study
          </span>
        </div>
      </div>

      <div className={cn("p-6", isFeatured ? "md:p-7" : "")}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg md:text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {isRealLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label={`${project.title} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {isRealLink(project.live) && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label={`${project.title} Live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className={cn("grid gap-2 mb-5", isFeatured ? "md:grid-cols-2" : "")}>
          {project.highlights.map((h) => (
            <li key={h} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
              <span className="text-primary mt-1.5 shrink-0">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge
              key={t}
              label={t}
              className="font-mono text-xs text-primary/80"
              iconClassName="h-3.5 w-3.5"
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">04.</span> Projects
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
