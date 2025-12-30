import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutPhoto from "@/assets/photo-about.jpg";

const highlights = [
  "MSc IT Student",
  "AI/ML Specialist",
  "Blockchain Developer",
  "Full-Stack Engineer",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative image-frame aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={aboutPhoto}
                alt="Kinjal Luhar - Professional Photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="heading-section mb-6"
            >
              Crafting Digital <span className="gradient-text">Excellence</span> Through Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-body text-muted-foreground mb-6"
            >
              A passionate MSc IT student specializing in AI, Machine Learning, and Blockchain technologies. I build intelligent, scalable applications that bridge innovation with real-world impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-body text-muted-foreground mb-8"
            >
              With hands-on experience in developing AI-powered solutions, decentralized applications, and full-stack web platforms, I transform complex challenges into elegant, user-centric solutions that drive measurable results.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-primary inline-block">
                Let's Work Together
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
