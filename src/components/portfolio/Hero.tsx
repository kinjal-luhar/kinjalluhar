import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import heroPhoto from "@/assets/photo-hero.png";
const Hero = () => {
  return <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating orbs */}
      <motion.div animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }} className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <motion.div animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 5,
      repeat: Infinity
    }} className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
        {/* Main Hero Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Name - KINJAL LUHAR - Single Line */}
          <motion.h1 initial={{
          opacity: 0,
          y: -30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }} className="text-[11vw] md:text-[9vw] lg:text-[7vw] font-black leading-none tracking-tighter text-center font-display select-none">
            <span className="gradient-text animate-gradient-text text-8xl">Kinjal Luhar</span>
          </motion.h1>

          {/* Photo - With swing animation */}
          <motion.div initial={{
          opacity: 0,
          y: -100
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.6
        }} className="relative -mt-4">
            {/* Vertical Swing Animation */}
            <motion.div animate={{
            y: [0, 15, 0, -10, 0]
          }} transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/20 to-transparent blur-3xl scale-110" />
              
              <img alt="Kinjal Luhar - Software Developer" className="relative w-[440px] h-auto md:w-[420px] lg:w-[480px] object-contain drop-shadow-2xl" src="/lovable-uploads/c3cb1b8d-825e-4d8d-a9ef-5f87e2bd3570.png" />
            </motion.div>
          </motion.div>

          {/* Software Developer Title - No gap */}
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1,
          duration: 0.8
        }} className="-mt-8 text-[8vw] md:text-[6vw] lg:text-[5vw] font-black tracking-tight text-center font-display">
            <span className="gradient-text animate-gradient-text text-5xl">Software Developer</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }} className="text-sm md:text-base text-muted-foreground max-w-xl text-center mt-2 px-4">
            Building intelligent, scalable applications that bridge innovation with real-world impact
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.4,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href="#projects" className="btn-primary text-sm py-2 px-4">
              View My Work
            </a>
            <a href="/resume/Kinjal-Luhar-Resume.pdf" download="Kinjal-Luhar-Resume.pdf" className="btn-outline flex items-center gap-2 text-sm py-2 px-4">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-outline text-sm py-2 px-4">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.8
    }} className="flex justify-center mt-4">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center text-muted-foreground">
          <span className="text-xs mb-1 tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;