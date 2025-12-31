import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPhoto from "@/assets/photo-hero.png";

const roles = [
  "AI Engineer",
  "Blockchain Developer",
  "Full-Stack Developer",
  "ML Specialist",
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Main Hero Container */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Name + Photo Layout */}
          <div className="relative w-full flex flex-col items-center">
            {/* First Name - Slides from left */}
            <div className="overflow-hidden w-full">
              <motion.h1
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold leading-[0.85] tracking-tighter text-center font-display"
              >
                <span className="gradient-text animate-gradient-text">Kinjal</span>
              </motion.h1>
            </div>

            {/* Photo - Overlapping the names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 }}
              className="relative z-20 -my-6 md:-my-10 lg:-my-14"
            >
              {/* Glowing ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-60 blur-sm"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 md:-inset-3 bg-gradient-to-l from-secondary via-primary to-accent rounded-full opacity-40 blur-md"
              />
              
              <div className="relative w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
                <img
                  src={heroPhoto}
                  alt="Kinjal Luhar - AI Engineer and Full-Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Last Name - Slides from right */}
            <div className="overflow-hidden w-full">
              <motion.h1
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold leading-[0.85] tracking-tighter text-center font-display text-foreground"
              >
                Luhar
              </motion.h1>
            </div>
          </div>

          {/* Rotating Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="h-8 overflow-hidden mt-10 md:mt-14"
          >
            <div className="animate-text-rotate">
              {[...roles, roles[0]].map((role, index) => (
                <p
                  key={index}
                  className="h-8 flex items-center justify-center text-lg md:text-xl text-muted-foreground font-medium tracking-widest uppercase"
                >
                  {role}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-body text-muted-foreground max-w-2xl text-center mt-6 px-4"
          >
            Building intelligent, scalable applications that bridge innovation with real-world impact
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
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
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs mb-2 tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
