import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["about", "skills", "projects", "contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <span className="font-mono text-primary font-bold text-lg">{"<dev />"}</span>
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
