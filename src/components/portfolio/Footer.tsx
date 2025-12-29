import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} Kinjal Luhar. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-1 text-muted-foreground text-sm"
          >
            Made with <Heart size={14} className="text-primary fill-primary" /> in India
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
