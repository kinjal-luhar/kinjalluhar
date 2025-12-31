import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail, MapPin, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import contactPhoto from "@/assets/photo-contact.jpg";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_73kpphe",
        "template_i8302sk",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fqcguc-mPIb-JHEiW"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="heading-section mt-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="card-premium p-8"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info & Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative image-frame aspect-[4/3] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl">
                <img
                  src={contactPhoto}
                  alt="Kinjal Luhar - Contact"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">kinjal96luhar@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-xl text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/kinjal-luhar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-card border border-border rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/kinjal-luhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-card border border-border rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
