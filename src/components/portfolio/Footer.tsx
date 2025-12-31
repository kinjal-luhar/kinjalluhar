import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('portfolio-views');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment and save
    const newCount = currentCount + 1;
    localStorage.setItem('portfolio-views', newCount.toString());
    
    // Animate count up
    let start = 0;
    const end = newCount;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setViewCount(start);
      if (start >= end) {
        clearInterval(timer);
        setViewCount(end);
      }
    }, stepTime > 20 ? stepTime : 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Visitor Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <Eye size={20} className="text-primary" />
            <span className="text-muted-foreground text-sm">Profile Views:</span>
            <span className="text-xl font-bold gradient-text">{viewCount.toLocaleString()}</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <span className="font-display text-2xl font-bold gradient-text">KL</span>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Kinjal Luhar. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/kinjal-luhar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/kinjal-luhar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
            
            <p className="flex items-center gap-1.5 text-muted-foreground text-sm">
              Made with <Heart size={14} className="text-accent fill-accent" /> in India
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
