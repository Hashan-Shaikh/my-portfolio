import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TechBadge from "@/components/TechBadge";
import { cn } from "@/lib/utils";

type ProjectVisualKey = "eyewear" | "microservices" | "healthcare" | "leetcode";

const ProjectVisual = ({ kind }: { kind: ProjectVisualKey }) => {
  const common = {
    className: "h-full w-full",
    viewBox: "0 0 220 120",
    fill: "none" as const,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
  };

  // All visuals are theme-aware via currentColor.
  const stroke = "currentColor";

  if (kind === "eyewear") {
    return (
      <svg {...common}>
        <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
          {/* cart */}
          <path d="M56 36h18l6 46h86l10-30H84" />
          <path d="M86 96a6 6 0 1 0 0.01 0" />
          <path d="M160 96a6 6 0 1 0 0.01 0" />
          {/* eye */}
          <path d="M120 34c22 0 38 12 46 26-8 14-24 26-46 26-22 0-38-12-46-26 8-14 24-26 46-26Z" />
          <path d="M120 52a8 8 0 1 0 0.01 0" />
          <path d="M112 60l-10 10" opacity="0.7" />
          <path d="M128 60l10 10" opacity="0.7" />
        </g>
      </svg>
    );
  }

  if (kind === "microservices") {
    return (
      <svg {...common}>
        <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
          {/* network nodes */}
          <path d="M60 36h46l20 18h34" opacity="0.85" />
          <path d="M60 84h52l14-14h34" opacity="0.85" />
          <path d="M106 36v48" opacity="0.55" />
          <path d="M160 54v16" opacity="0.55" />
          <rect x="44" y="28" width="32" height="18" rx="6" />
          <rect x="90" y="30" width="32" height="18" rx="6" />
          <rect x="126" y="46" width="32" height="18" rx="6" />
          <rect x="144" y="76" width="32" height="18" rx="6" />
          <rect x="60" y="76" width="32" height="18" rx="6" />
          {/* magnifier */}
          <path d="M124 88a12 12 0 1 0 0.01 0" opacity="0.9" />
          <path d="M132 96l10 10" opacity="0.9" />
        </g>
      </svg>
    );
  }

  if (kind === "healthcare") {
    return (
      <svg {...common}>
        <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
          {/* medical cross */}
          <path d="M108 26v26" />
          <path d="M95 39h26" />
          <rect x="78" y="20" width="60" height="52" rx="14" opacity="0.55" />
          {/* calendar/booking */}
          <rect x="132" y="58" width="62" height="40" rx="10" />
          <path d="M150 58v-8" />
          <path d="M176 58v-8" />
          <path d="M132 72h62" opacity="0.8" />
          <path d="M148 84h8" opacity="0.85" />
          <path d="M166 84h8" opacity="0.85" />
          <path d="M184 84h0" />
        </g>
      </svg>
    );
  }

  // leetcode
  return (
    <svg {...common}>
      <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
        {/* brackets */}
        <path d="M78 34 56 60l22 26" />
        <path d="M142 34 164 60l-22 26" />
        {/* list */}
        <path d="M96 42h38" opacity="0.7" />
        <path d="M96 60h52" opacity="0.85" />
        <path d="M96 78h44" opacity="0.7" />
        <path d="M92 42h0" />
        <path d="M88 60h0" />
        <path d="M92 78h0" />
        {/* pattern dots */}
        <path d="M110 96a1 1 0 1 0 0.01 0" />
        <path d="M124 96a1 1 0 1 0 0.01 0" />
        <path d="M138 96a1 1 0 1 0 0.01 0" />
      </g>
    </svg>
  );
};

const projects = [
  {
    title: "Eyewear E-Commerce + Cataract Detection",
    description:
      "Designed and launched a multi-store e-commerce website specializing in a wide range of eye-related products, with the added capability of providing deep learning-based cataract disease detection through an integrated eye check-up feature.",
    highlights: [
      "Multi-store e-commerce flows (catalog, cart, checkout-ready structure)",
      "Integrated eye check-up feature with cataract detection",
      "Clean, user-friendly storefront UX",
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/Hashan-Shaikh/Eyewear-frontend",
    live: "#",
    visual: "eyewear" as const,
  },
  {
    title: "CommerceKit",
    description:
      "A scalable ecommerce platform built on a microservices architecture using Express.js, featuring lightning-fast product search powered by Elasticsearch. Each service is independently deployable, loosely coupled, and designed for high availability — built to handle real-world commerce at scale.",
    highlights: [
      "Microservices architecture with independently deployable services",
      "Elasticsearch-powered product search for low-latency queries",
      "Designed for high availability and real-world commerce scale",
    ],
    tech: ["Node.js", "Express.js", "Elasticsearch", "Docker"],
    github: "https://github.com/Hashan-Shaikh/CommerceKit",
    live: "#",
    visual: "microservices" as const,
  },
  {
    title: "iCare",
    description:
      "A healthcare management system using Next.js, enabling patients to book online consultations with doctors. Implemented various consultation types, including in-home and in-clinic appointments, to enhance patient care accessibility.",
    highlights: [
      "Patient-facing booking for online consultations",
      "Multiple consultation types (in-home and in-clinic)",
      "Built as a modern Next.js app with production-ready setup",
    ],
    tech: ["Next.js", "TypeScript", "Docker", "Terraform"],
    github: "https://github.com/Hashan-Shaikh/iCare",
    live: "#",
    visual: "healthcare" as const,
  },
  {
    title: "Leetcode Blind 75",
    description: "Blind 75 leetcode problems helps you understand every design pattern",
    highlights: [
      "Curated Blind 75 solutions to build interview fundamentals",
      "Pattern-based approach to learn problem-solving strategies",
      "Clear, incremental implementations in Python",
    ],
    tech: ["Python"],
    github: "https://github.com/Hashan-Shaikh/Leetcode_blind_75",
    live: "#",
    visual: "leetcode" as const,
  },
];

type Project = (typeof projects)[number];

function isRealLink(url?: string) {
  return Boolean(url) && url !== "#";
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-md",
        "hover:glow-border transition-shadow",
      )}
    >
      {/* Visual header */}
      <div className="relative h-28 md:h-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.35] bg-grid-soft" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-end p-3 md:p-4">
          <motion.div
            className={cn(
              "h-20 w-40 md:h-24 md:w-44",
              "text-primary/65",
              "drop-shadow-[0_0_22px_hsl(175_70%_50%_/_0.18)]",
            )}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectVisual kind={project.visual as ProjectVisualKey} />
          </motion.div>
        </div>
      </div>

      <div className="p-6">
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

        <ul className="grid gap-2 mb-5 md:grid-cols-2">
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
