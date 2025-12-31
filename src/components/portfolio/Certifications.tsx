import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

import certOpenxai from "@/assets/cert-openxai.png";
import certAcmegrade from "@/assets/cert-acmegrade.png";
import certBluestock from "@/assets/cert-bluestock.png";
import certHacknode from "@/assets/cert-hacknode.png";

const certifications = [
  {
    title: "First Milestone Achievement",
    issuer: "BlockseBlock & OpenxAI",
    description: "Successfully reaching the First Milestone in the internship program, demonstrating perseverance, skill development, and commitment to excellence.",
    image: certOpenxai,
  },
  {
    title: "Web Development Training",
    issuer: "Acmegrade & Mood Indigo IIT Bombay",
    description: "Successfully completed training in Web Development from July 2024 to August 2024, demonstrating competency with dedication and promise.",
    image: certAcmegrade,
  },
  {
    title: "Software Development Engineer Internship",
    issuer: "Bluestock Fintech",
    description: "Completed internship as Software Development Engineer (SDE) at Bluestock Fintech from April 2025 to May 2025.",
    image: certBluestock,
  },
  {
    title: "Hack Node India Participation",
    issuer: "BlockseBlock & Web3 Sabha",
    description: "Participated in the Hack Node India Hackathon organized by BlockseBlock.",
    image: certHacknode,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-primary/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Achievements
          </span>
          <h2 className="heading-section mt-4">
            Certifications & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development through recognized programs and competitions.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div 
                className="card-premium p-6 h-full cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl text-white shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                </div>
                
                {/* Certificate Thumbnail */}
                <div className="mt-4 relative aspect-[16/10] rounded-xl overflow-hidden border border-border group-hover:border-primary/30 transition-all">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-sm font-medium text-foreground">Click to view</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full certificate view */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded-2xl border border-border shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-foreground">{selectedCert.title}</h3>
              <p className="text-primary font-medium">{selectedCert.issuer}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
