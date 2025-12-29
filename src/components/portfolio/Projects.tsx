import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink, X, Image } from "lucide-react";

const projects = [
  {
    title: "MediMate",
    subtitle: "AI-Powered Health Tracker",
    description:
      "Intelligent health monitoring application leveraging machine learning for personalized health insights and predictions.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    videoUrl: "", // Placeholder for video
    screenshots: [],
  },
  {
    title: "Smart Kisan",
    subtitle: "Intelligent Farmer Management System",
    description:
      "Comprehensive agricultural management platform with AI-driven crop recommendations and market price predictions.",
    tech: ["Django", "Machine Learning", "React Native", "MongoDB"],
    videoUrl: "",
    screenshots: [],
  },
  {
    title: "QAssurify",
    subtitle: "AI-Driven QA Command Center",
    description:
      "Automated quality assurance platform using AI to detect bugs, analyze code quality, and streamline testing workflows.",
    tech: ["Python", "OpenAI", "Next.js", "Docker"],
    videoUrl: "",
    screenshots: [],
  },
  {
    title: "Minute-Mind",
    subtitle: "Meeting Action Extractor",
    description:
      "AI-powered tool that automatically extracts action items, summaries, and key decisions from meeting recordings and transcripts.",
    tech: ["LLMs", "Whisper", "FastAPI", "React"],
    videoUrl: "",
    screenshots: [],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="heading-section mt-4">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, machine learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="card-premium overflow-hidden group"
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                      <Play className="text-primary" size={28} />
                    </div>
                    <p className="text-sm text-muted-foreground">Demo Coming Soon</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    title="View Screenshots"
                  >
                    <Image size={20} />
                  </button>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-muted-foreground">Project Screenshots</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
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
