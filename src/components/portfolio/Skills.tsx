import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "LLMs", "OpenAI", "Scikit-learn"],
  },
  {
    title: "Blockchain & Web3",
    skills: ["Solidity", "Web3.js", "Smart Contracts", "dApps", "Ethereum"],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "PHP"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Django", "Flask", "FastAPI", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Linux", "Figma", "VS Code"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl blur-2xl" />
            <div className="relative image-frame aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src="/photo3.jpg"
                alt="Kinjal Luhar - Skills & Expertise"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-12"
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Expertise
              </span>
              <h2 className="heading-section mt-4">Skills & Technologies</h2>
            </motion.div>

            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
