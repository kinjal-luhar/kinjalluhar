import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import heroPhoto from "@/assets/photo-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Main Hero Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Name Behind - KINJAL - Slides from LEFT */}
          <motion.h1
            initial={{ x: "-150%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.8, 
              ease: [0.25, 0.46, 0.45, 0.94], 
              delay: 0.3 
            }}
            className="absolute top-[5%] left-0 right-0 text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-none tracking-tighter text-center font-display select-none pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <span className="gradient-text animate-gradient-text">Kinjal</span>
          </motion.h1>

          {/* Photo - Vertical Pendulum Swing Effect attached to header */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 }}
            className="relative flex flex-col items-center"
            style={{ zIndex: 5 }}
          >
            {/* Swing ropes connecting directly to header border */}
            <div className="absolute -top-[68px] left-[22%] w-[3px] h-[68px] bg-gradient-to-b from-foreground via-foreground/60 to-foreground/30 rounded-full" />
            <div className="absolute -top-[68px] right-[22%] w-[3px] h-[68px] bg-gradient-to-b from-foreground via-foreground/60 to-foreground/30 rounded-full" />
            
            {/* Vertical Only Swing Animation - pure up and down motion */}
            <motion.div
              animate={{ 
                y: [0, 20, 0, -15, 0],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/20 to-transparent blur-3xl scale-125" />
              
              <img
                src={heroPhoto}
                alt="Kinjal Luhar - Software Developer"
                className="relative w-[280px] h-auto md:w-[380px] lg:w-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Name - LUHAR - Under the photo */}
          <motion.h1
            initial={{ x: "150%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1.8, 
              ease: [0.25, 0.46, 0.45, 0.94], 
              delay: 0.5 
            }}
            className="text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-none tracking-tighter text-center font-display select-none pointer-events-none -mt-[20vw] md:-mt-[16vw] lg:-mt-[12vw]"
            style={{ zIndex: 10 }}
          >
            <span className="gradient-text animate-gradient-text">Luhar</span>
          </motion.h1>

          {/* Content Below Photo - Right after Luhar */}
          <div className="relative z-20 flex flex-col items-center mt-4">
            {/* Software Developer Title - Styled like name but smaller */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-[6vw] md:text-[4vw] lg:text-[3vw] font-black tracking-tight text-center font-display"
            >
              <span className="gradient-text animate-gradient-text">Software Developer</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-body text-muted-foreground max-w-2xl text-center mt-3 px-4"
            >
              Building intelligent, scalable applications that bridge innovation with real-world impact
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a 
                href="/resume/Kinjal-Luhar-Resume.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex justify-center mt-8"
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
