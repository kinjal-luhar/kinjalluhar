import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Blocks, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Automation",
    description:
      "Custom AI/ML models, intelligent automation systems, and LLM integrations to optimize business processes.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern frameworks, responsive design, and seamless user experiences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Blocks,
    title: "Blockchain & dApp Development",
    description:
      "Smart contracts, decentralized applications, and Web3 integrations for secure, transparent solutions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    description:
      "Data-driven insights through advanced analytics, interactive dashboards, and predictive modeling.",
    gradient: "from-green-500 to-teal-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            What I Offer
          </span>
          <h2 className="heading-section mt-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Specialized services tailored to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
              
              <div className="relative card-premium p-8">
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl text-white shadow-lg shrink-0`}
                  >
                    <service.icon size={28} />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
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
