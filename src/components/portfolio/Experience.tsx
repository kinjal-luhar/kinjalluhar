import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI & Tech Decentralized Intern",
    company: "BlockseBlock",
    period: "2024",
    description:
      "Developed blockchain-based solutions and AI integrations for decentralized applications.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "2024",
    description:
      "Built fintech solutions focusing on scalable backend systems and API development.",
  },
  {
    role: "Web Developer Intern",
    company: "Acmegrade",
    period: "2023",
    description:
      "Created responsive web applications and improved user experience across platforms.",
  },
  {
    role: "Python/Full-Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    description:
      "Delivered custom web solutions, automation scripts, and AI-powered applications for diverse clients.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Career Journey
          </span>
          <h2 className="heading-section mt-4">Professional Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="card-premium p-6 hover:border-primary/30 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
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
