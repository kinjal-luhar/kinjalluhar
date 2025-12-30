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
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
            <div className="relative image-frame aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <img
                src={aboutPhoto}
                alt="Kinjal Luhar - Professional Photo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-wider uppercase text-sm"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="heading-section mt-4 mb-6"
            >
              Crafting Digital Excellence Through Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-body text-muted-foreground mb-6"
            >
              A passionate MSc IT student specializing in AI, Machine Learning, and Blockchain technologies. I build intelligent, scalable applications that bridge innovation with real-world impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-body text-muted-foreground mb-8"
            >
              With hands-on experience in developing AI-powered solutions, decentralized applications, and full-stack web platforms, I transform complex challenges into elegant, user-centric solutions that drive measurable results.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {highlights.map((item, index) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8"
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
