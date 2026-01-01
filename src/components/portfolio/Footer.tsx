import { motion } from "framer-motion";
import { Heart, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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
