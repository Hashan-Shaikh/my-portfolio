import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Financial Insights Platform",
    description: "SSR application for financial data visualization with React/Next.js, featuring code-splitting, CDN caching, and a RAG pipeline for AI-powered SQL generation across 340+ stock tables.",
    tech: ["React", "Next.js", "FastAPI", "Redis", "RabbitMQ", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "Boarddd – Team Collaboration",
    description: "Scalable real-time collaboration platform with WebSocket architecture, Elasticsearch-powered search (20–50ms latency), and microservices deployed on AWS Lambda & ECS.",
    tech: ["React", "Zustand", "GraphQL", "Elasticsearch", "AWS", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Enterprise Audit Platform",
    description: "Dynamic audit template system enabling organizations to define reusable templates with interactive Chart.js dashboards, secure JWT auth, and S3-based file management.",
    tech: ["React", "TypeScript", "Express.js", "Redux", "PostgreSQL", "S3"],
    github: "#",
    live: "#",
  },
];

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
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary/80">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
