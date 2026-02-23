type TechLogoResult = {
  src?: string;
  alt: string;
};

function normalizeTechLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/\s+\d+\+?$/g, "") // remove trailing version markers like "React 17+"
    .replace(/\(.*?\)/g, "") // remove parentheticals
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function devicon(iconPath: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
}

function simpleIcon(slug: string) {
  // Simple Icons CDN returns an SVG. Works well for tech logos.
  return `https://cdn.simpleicons.org/${slug}`;
}

const LOGO_BY_TECH: Record<string, string | undefined> = {
  // Languages
  typescript: devicon("typescript/typescript-original.svg"),
  javascript: devicon("javascript/javascript-original.svg"),
  python: devicon("python/python-original.svg"),
  sql: simpleIcon("postgresql"), // generic DB-ish logo; SQL itself has no universal logo

  // Frontend
  react: devicon("react/react-original.svg"),
  "next js": devicon("nextjs/nextjs-original.svg"),
  nextjs: devicon("nextjs/nextjs-original.svg"),
  zustand: simpleIcon("zustand"),
  redux: devicon("redux/redux-original.svg"),
  "tailwind css": devicon("tailwindcss/tailwindcss-plain.svg"),
  tailwindcss: devicon("tailwindcss/tailwindcss-plain.svg"),
  mui: devicon("materialui/materialui-original.svg"),
  "material ui": devicon("materialui/materialui-original.svg"),
  "chart js": devicon("chartjs/chartjs-original.svg"),
  chartjs: devicon("chartjs/chartjs-original.svg"),
  jest: devicon("jest/jest-plain.svg"),
  rtl: simpleIcon("testinglibrary"),
  "react testing library": simpleIcon("testinglibrary"),

  // Backend
  "node js": devicon("nodejs/nodejs-original.svg"),
  nodejs: devicon("nodejs/nodejs-original.svg"),
  "express js": devicon("express/express-original.svg"),
  expressjs: devicon("express/express-original.svg"),
  django: devicon("django/django-plain.svg"),
  fastapi: devicon("fastapi/fastapi-original.svg"),
  graphql: devicon("graphql/graphql-plain.svg"),
  pandas: devicon("pandas/pandas-original.svg"),

  // Databases / Search / Vector
  postgresql: devicon("postgresql/postgresql-original.svg"),
  mysql: devicon("mysql/mysql-original.svg"),
  mongodb: devicon("mongodb/mongodb-original.svg"),
  redis: devicon("redis/redis-original.svg"),
  elasticsearch: devicon("elasticsearch/elasticsearch-original.svg"),
  qdrant: simpleIcon("qdrant"),

  // DevOps & Cloud
  aws: devicon("amazonwebservices/amazonwebservices-original.svg"),
  kubernetes: devicon("kubernetes/kubernetes-plain.svg"),
  docker: devicon("docker/docker-original.svg"),
  "github actions": simpleIcon("githubactions"),
  terraform: devicon("terraform/terraform-original.svg"),
  cloudwatch: simpleIcon("amazoncloudwatch"),
  sentry: simpleIcon("sentry"),

  // Other common ones in your sections
  rabbitmq: devicon("rabbitmq/rabbitmq-original.svg"),
  s3: simpleIcon("amazons3"),
};

export function getTechLogo(label: string): TechLogoResult {
  const normalized = normalizeTechLabel(label);

  // Special-case a few common variants
  const key =
    normalized === "next" || normalized === "nextjs" || normalized === "next js"
      ? "nextjs"
      : normalized === "react 17" || normalized === "react"
        ? "react"
        : normalized;

  const src = LOGO_BY_TECH[key];

  return {
    src: typeof src === "string" ? src : undefined,
    alt: label,
  };
}

