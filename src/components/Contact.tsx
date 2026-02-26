import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-md">
          <div className="absolute inset-0 bg-glow opacity-[0.7]" />
          <div className="absolute inset-0 bg-grid-soft opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-card" />

          <div className="relative p-8 md:p-10">
            <div className="text-center">
              <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Let’s build something great
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                I’m open to new opportunities and exciting projects. If you want to discuss a role,
                collaborate, or just say hi — my inbox is always open.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6 items-stretch">
              <div className="min-w-0 rounded-xl border border-border/60 bg-background/30 p-5">
                <div className="font-heading font-bold text-foreground mb-1">Contact</div>
                <div className="font-mono text-xs text-muted-foreground mb-4">
                  Typically responds within 24 hours
                </div>
                <div className="grid gap-3">
                  <a
                    href="mailto:hashanalamshaikh@gmail.com"
                    className="min-w-0 w-full overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 rounded-lg border border-border/60 bg-card/40 px-4 py-3 text-sm text-foreground hover:border-primary/30 hover:bg-card/60 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-mono min-w-0 flex-1">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <span className="min-w-0 flex-1 text-left break-all sm:break-normal sm:truncate">
                        hashanalamshaikh@gmail.com
                      </span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">Email</span>
                  </a>
                  <a
                    href="tel:+4915739043558"
                    className="min-w-0 w-full overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 rounded-lg border border-border/60 bg-card/40 px-4 py-3 text-sm text-foreground hover:border-primary/30 hover:bg-card/60 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-mono min-w-0 flex-1">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <span className="min-w-0 flex-1 text-left break-all sm:break-normal sm:truncate">
                        +49 157 3904 3558
                      </span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">Call</span>
                  </a>
                </div>
              </div>

              <div className="min-w-0 rounded-xl border border-border/60 bg-background/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="font-heading font-bold text-foreground mb-1">Let’s talk</div>
                  <div className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Want a quick intro call? Share a bit about what you’re building and I’ll reply
                    with next steps.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:hashanalamshaikh@gmail.com?subject=Let%27s%20work%20together"
                    className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Say Hello
                  </a>
                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors glow-border"
                  >
                    View experience
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  {[
                    { href: "https://github.com/Hashan-Shaikh", label: "GitHub", icon: Github },
                    { href: "https://www.linkedin.com/in/hashan-alam-121a271b4/", label: "LinkedIn", icon: Linkedin },
                    { href: "mailto:hashanalamshaikh@gmail.com", label: "Email", icon: Mail },
                    { href: "tel:+4915739043558", label: "Phone", icon: Phone },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-full",
                        "border border-border/60 bg-card/40 text-muted-foreground",
                        "hover:text-primary hover:border-primary/40 hover:bg-card/60 transition-colors",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-20 font-mono text-xs text-muted-foreground">
        <p>Built by Hashan Alam — React & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
