import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm currently open to new opportunities. Whether you have a question, 
          a project idea, or just want to say hi — my inbox is always open.
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-colors glow-border"
        >
          <Mail className="w-4 h-4" /> Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      <div className="mt-20 font-mono text-xs text-muted-foreground">
        <p>Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
