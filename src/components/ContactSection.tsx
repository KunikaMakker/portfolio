import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const socials = [
    {
        icon: <Linkedin size={18} />,
        label: "LinkedIn",
        href: "https://linkedin.com/in/kunika-makker",
        primary: true,
    },
    {
        icon: <Github size={18} />,
        label: "GitHub",
        href: "https://github.com/kunikamakker",
        primary: false,
    },
    {
        icon: <Mail size={18} />,
        label: "kmak2710@gmail.com",
        href: "mailto:kmak2710@gmail.com",
        primary: false,
    },
    {
        icon: <Instagram size={18} />,
        label: "Instagram",
        href: "https://instagram.com/kmakker",
        primary: false,
    },
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
                    <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                        Let's Connect
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 pb-2">
                        Say <span className="italic text-gradient">namaste</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                        Whether you have a project in mind, want to collaborate, or just
                        want to share a travel story — I'd love to hear from you.
                    </p>
                    
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${s.primary
                                        ? "bg-primary text-primary-foreground hover:opacity-90"
                                        : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {s.icon}
                                {s.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;