import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skillsPhoto from "@/assets/photo-skills.jpg";

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
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative image-frame aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl">
              <img
                src={skillsPhoto}
                alt="Kinjal Luhar - Skills & Expertise"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
                Expertise
              </span>
              <h2 className="heading-section mt-4">
                Skills & <span className="gradient-text">Technologies</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                >
                  <h3 className="font-semibold text-foreground mb-3 font-display">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
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
