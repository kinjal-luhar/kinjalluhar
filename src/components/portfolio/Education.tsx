import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, Sparkles } from "lucide-react";

const educationData = [
  {
    degree: "MSC-IT (Integrated)",
    institution: "K S School of Business Management",
    university: "Gujarat University",
    location: "Ahmedabad",
    period: "2022 - 2027",
    highlight: "One of Ahmedabad's premier institutions for business & IT education",
    description: "Pursuing integrated Master's in Information Technology with focus on AI, ML, and emerging technologies.",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shakti Higher Secondary School",
    location: "Chandlodiya, Ahmedabad",
    period: "2020 - 2022",
    percentage: "87.29%",
    stream: "Science",
    description: "Completed 12th grade with distinction in Science stream.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shakti Higher Secondary School",
    location: "Chandlodiya, Ahmedabad",
    period: "2020",
    percentage: "74.00%",
    description: "Completed 10th grade with strong foundation in academics.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Academic Journey
          </span>
          <h2 className="text-display font-display font-bold gradient-text">Education</h2>
        </motion.div>

        {/* Inspirational Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative max-w-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-lg" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                "An innovative soul eager to learn, constantly pushing beyond comfort zones to embrace new challenges and technologies."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-5 h-5 rounded-full border-4 ${
                    edu.current 
                      ? "bg-primary border-primary/50 shadow-lg shadow-primary/50" 
                      : "bg-accent border-accent/50"
                  }`}
                />
              </div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 pl-20 md:pl-0" : "md:pl-8 pl-20"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl group hover:border-primary/30 transition-all duration-300"
                >
                  {/* Current badge */}
                  {edu.current && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Currently Pursuing
                    </span>
                  )}

                  {/* Percentage badge */}
                  {edu.percentage && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                      <Award size={12} />
                      {edu.percentage}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <GraduationCap size={16} />
                    {edu.institution}
                  </div>

                  {edu.university && (
                    <p className="text-sm text-muted-foreground mb-2">{edu.university}</p>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm">{edu.description}</p>

                  {edu.highlight && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-primary/80 italic flex items-center gap-2">
                        <Award size={14} className="text-primary" />
                        {edu.highlight}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
