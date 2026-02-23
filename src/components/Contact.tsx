import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm currently open to new opportunities and exciting projects. Whether you want to 
          discuss a role, collaborate on something, or just say hi — my inbox is always open.
        </p>
        <a
          href="mailto:hasanalamshaikh@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-colors glow-border"
        >
          <Mail className="w-4 h-4" /> Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hasanalamshaikh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+4915739043558" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      <div className="mt-20 font-mono text-xs text-muted-foreground">
        <p>Built by Hashan Alam — React & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
