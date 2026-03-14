import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/kunika-makker" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:kmak2710@gmail.com" },
  { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/kmakker" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card bg-grain">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Say <span className="italic text-gradient">namaste</span> ✨
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to share a travel story — 
            I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {s.icon}
                <span className="text-sm font-medium">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
