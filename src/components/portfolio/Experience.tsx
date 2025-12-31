import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Python/Full-Stack Developer",
    company: "Freelance",
    period: "Nov 2025 - Present",
    duration: "2 Months",
    description:
      "Delivering custom web solutions, automation scripts, and AI-powered applications for diverse clients worldwide.",
  },
  {
    role: "AI & Tech Decentralized Intern",
    company: "BlockseBlock",
    period: "Oct 2024 - Dec 2024",
    duration: "2 Months",
    description:
      "Developed blockchain-based solutions and AI integrations for decentralized applications.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "Sep 2024 - Oct 2024",
    duration: "1 Month",
    description:
      "Built fintech solutions focusing on scalable backend systems and API development.",
  },
  {
    role: "Web Developer Intern",
    company: "Acmegrade",
    period: "Jul 2023 - Sep 2023",
    duration: "2 Months",
    description:
      "Created responsive web applications and improved user experience across platforms.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Career Journey
          </span>
          <h2 className="heading-section mt-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary hidden md:block origin-top" 
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4, type: "spring" }}
                  className="absolute left-[22px] top-8 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background hidden md:block shadow-lg shadow-primary/30" 
                />

                <div className="card-premium p-6 group hover:scale-[1.02] transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-500"
                      >
                        <Briefcase size={22} />
                      </motion.div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-1.5 rounded-full border border-border">
                        {exp.period}
                      </span>
                      <span className="text-xs text-primary font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
