import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Blocks, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Automation",
    description:
      "Custom AI/ML models, intelligent automation systems, and LLM integrations to optimize business processes.",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern frameworks, responsive design, and seamless user experiences.",
  },
  {
    icon: Blocks,
    title: "Blockchain & dApp Development",
    description:
      "Smart contracts, decentralized applications, and Web3 integrations for secure, transparent solutions.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    description:
      "Data-driven insights through advanced analytics, interactive dashboards, and predictive modeling.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            What I Offer
          </span>
          <h2 className="heading-section mt-4">Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Specialized services tailored to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="card-premium p-8 group hover:border-primary/30"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
