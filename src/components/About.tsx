import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">01.</span> About Me
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer who enjoys building products that live on the internet. 
              My interest in web development started when I first customized a website template — 
              turns out hacking together HTML & CSS taught me a lot about how things work under the hood.
            </p>
            <p>
              Fast-forward to today, I've had the privilege of working at various companies 
              where I've built software used by thousands of people. I focus on writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or learning something completely new.
            </p>
          </div>
          <div className="flex items-start justify-center">
            <div className="w-48 h-48 rounded-md border-2 border-primary/30 bg-secondary flex items-center justify-center relative group">
              <span className="font-mono text-muted-foreground text-sm">your-photo.jpg</span>
              <div className="absolute inset-0 rounded-md bg-primary/5 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
