import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["about", "experience", "skills", "projects", "contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <span className="font-mono text-primary font-bold text-lg">{"<HA />"}</span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8">
        {links.map((link, i) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">0{i + 1}. </span>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
        >
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((link, i) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary text-xs">0{i + 1}. </span>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
