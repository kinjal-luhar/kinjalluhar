import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Image, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MediMate",
    subtitle: "AI-Powered Health Tracker",
    description:
      "Intelligent health monitoring application leveraging machine learning for personalized health insights and predictions.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-500",
    driveLink: "https://drive.google.com/file/d/17OL5uiKzpLlfXr4uqhiecBynMhf8sfed/view",
  },
  {
    title: "Smart Kisan",
    subtitle: "Intelligent Farmer Management System",
    description:
      "Comprehensive agricultural management platform with AI-driven crop recommendations and market price predictions.",
    tech: ["Django", "Machine Learning", "React Native", "MongoDB"],
    gradient: "from-green-500 to-teal-500",
    driveLink: "https://drive.google.com/file/d/1jEBYcgrAJzgX4sG8ZdUvQ4xtKHF7GcGU/view",
  },
  {
    title: "QAssurify",
    subtitle: "AI-Driven QA Command Center",
    description:
      "Automated quality assurance platform using AI to detect bugs, analyze code quality, and streamline testing workflows.",
    tech: ["Python", "OpenAI", "Next.js", "Docker"],
    gradient: "from-blue-500 to-cyan-500",
    driveLink: "https://drive.google.com/file/d/1BiqUgWdBKZ9giXnZDfIVy1EDZeut2vNZ/view",
  },
  {
    title: "Minute-Mind",
    subtitle: "Meeting Action Extractor",
    description:
      "AI-powered tool that automatically extracts action items, summaries, and key decisions from meeting recordings and transcripts.",
    tech: ["LLMs", "Whisper", "FastAPI", "React"],
    gradient: "from-orange-500 to-red-500",
    driveLink: "https://drive.google.com/file/d/1XzXE2OWa9UJAZ2hC34rVrHyKbyGsHJuf/view",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Portfolio
          </span>
          <h2 className="heading-section mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, machine learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`} />
              
              <div className="relative card-premium overflow-hidden">
                {/* Video Link Button */}
                <div className="relative aspect-video bg-gradient-to-br from-muted via-card to-muted overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <a 
                    href={project.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div 
                      animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                      className="text-center"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}
                      >
                        <Play className="text-white ml-1" size={32} />
                      </motion.div>
                      <p className="text-sm text-foreground font-medium">Watch Demo</p>
                    </motion.div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(index)}
                      className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
                      title="View Screenshots"
                    >
                      <Image size={20} />
                    </motion.button>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-xs rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screenshots Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-card rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-muted-foreground">Project Screenshots</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <Image size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Screenshots coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
