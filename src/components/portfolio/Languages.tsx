import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, MessageCircle } from "lucide-react";

const languages = [
  {
    name: "English",
    proficiency: "Full Professional Proficiency",
    level: 90,
  },
  {
    name: "Hindi",
    proficiency: "Native / Bilingual Proficiency",
    level: 100,
  },
  {
    name: "Gujarati",
    proficiency: "Native / Bilingual Proficiency",
    level: 100,
  },
];

const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Communication
          </span>
          <h2 className="heading-section mt-4">
            Languages <span className="gradient-text">Known</span>
          </h2>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/30 transition-all duration-300"
            >
              {/* Language name */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {lang.name}
              </h3>

              {/* Proficiency */}
              <p className="text-sm text-muted-foreground mb-4">
                {lang.proficiency}
              </p>

              {/* Progress bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>

              {/* Decorative icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="mt-4"
              >
                <MessageCircle className="w-5 h-5 text-primary/50 mx-auto" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
