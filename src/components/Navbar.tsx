import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  // NOTE: Projects section is currently hidden in Index.tsx, so we omit it from the header nav.
  const links = useMemo(() => ["about", "experience", "skills", "contact"], []);
  const headerOffset = 96;
  const active = useActiveSection(links, { defaultSectionId: "about", offsetTop: headerOffset, activationSlack: 24 });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-transparent",
        "transition-[background-color,backdrop-filter,padding,border-color] duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-border"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "px-6 md:px-12 lg:px-24",
          scrolled ? "py-3" : "py-4",
          "flex items-center justify-between",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-primary font-bold tracking-tight text-lg md:text-xl hover:opacity-90 transition-opacity"
        >
          {"<HA />"}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-background/40 backdrop-blur px-2 py-1">
            {links.map((link, i) => {
              const isActive = active === link;
              return (
                <li key={link} className="relative">
                  <button
                    onClick={() => scrollTo(link)}
                    className={cn(
                      "relative rounded-full px-3 py-2 font-mono text-sm transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="text-primary text-xs mr-1.5">0{i + 1}.</span>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px rounded-full transition-opacity",
                        isActive ? "bg-primary opacity-100" : "bg-primary/60 opacity-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:hasanalamshaikh@gmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 font-mono text-sm hover:bg-primary/90 transition-colors"
            >
              Let’s talk
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-background/95 backdrop-blur-md">
              <div className="mt-8 flex flex-col gap-6">
                <div className="font-mono text-primary font-bold text-lg">{"<HA />"}</div>

                <div className="grid gap-2">
                  {links.map((link, i) => {
                    const isActive = active === link;
                    return (
                      <button
                        key={link}
                        onClick={() => {
                          scrollTo(link);
                          setMobileOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-lg border border-border/60 bg-card/40 px-4 py-3 font-mono text-sm transition-colors",
                          isActive ? "text-primary border-primary/30" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <span>
                          <span className="text-primary text-xs mr-2">0{i + 1}.</span>
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </span>
                        <span className={cn("h-1.5 w-1.5 rounded-full", isActive ? "bg-primary" : "bg-border")} />
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:hasanalamshaikh@gmail.com"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    scrollTo("contact");
                    setMobileOpen(false);
                  }}
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-3 font-mono text-sm hover:bg-primary/90 transition-colors"
                >
                  Let’s talk
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
