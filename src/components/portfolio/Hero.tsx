import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPhoto from "@/assets/photo-hero.jpg";

const roles = [
  "AI Engineer",
  "Blockchain Developer",
  "Full-Stack Developer",
  "ML Specialist",
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Main Hero Container - Name slides behind photo */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Sliding Name - Behind Photo */}
          <div className="relative w-full flex flex-col items-center">
            {/* First Name - Slides from left */}
            <div className="overflow-hidden w-full">
              <motion.h1
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none text-foreground/90 tracking-tighter text-center font-display"
              >
                Kinjal
              </motion.h1>
            </div>

            {/* Photo - Positioned over the name intersection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="relative z-20 -my-8 md:-my-12 lg:-my-16"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                {/* Border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-full p-1 animate-[spin_8s_linear_infinite]" />
                
                <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                  <img
                    src={heroPhoto}
                    alt="Kinjal Luhar - AI Engineer and Full-Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Last Name - Slides from right */}
            <div className="overflow-hidden w-full">
              <motion.h1
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none text-primary tracking-tighter text-center font-display"
              >
                Luhar
              </motion.h1>
            </div>
          </div>

          {/* Rotating Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="h-8 overflow-hidden mt-8 md:mt-12"
          >
            <div className="animate-text-rotate">
              {[...roles, roles[0]].map((role, index) => (
                <p
                  key={index}
                  className="h-8 flex items-center justify-center text-lg md:text-xl text-muted-foreground font-light tracking-wide"
                >
                  {role}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-body text-muted-foreground max-w-xl text-center mt-6 px-4"
          >
            Building intelligent, scalable applications that bridge innovation with real-world impact
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
