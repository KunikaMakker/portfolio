import heroBg from '@/assets/hero-bg.jpg';
import { track } from '@vercel/analytics';
import { motion } from "framer-motion";
import { Code, Download, Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0" aria-label='Banner'>
            {/* Background */}
            <div className="absolute inset-0">
                <img src={heroBg} alt="Kunika Makker - Banner" className="w-full h-full object-cover opacity-45" />
                <div className="absolute inset-0 bg-background/40" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sage-light text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Senior Software Engineer - Frontend
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-6"
                >
                    Building scalable
                    <br />
                    <span className="text-gradient italic">experiences</span> with soul
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    6+ years building high-scale consumer platforms with Angular & React. <br/>
                    Fueled by wanderlust, grounded by mindfulness.
                </motion.p>

                {/* Buttons on Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity "
                    >
                        <Code size={18} /> View My Work
                    </a>
                    <a
                        href="/Kunika_Makker.pdf"
                        download
                        onClick={() => track("Resume Download", {location: "Herosection"})}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity "
                    >
                        <Download size={18} /> Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-foreground/25 text-foreground hover:bg-foreground/5 transition-colors "
                    >
                        <Mail size={18} /> Get in Touch
                    </a>
                </motion.div>
                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-secondary opacity-60"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-16 w-4 h-4 rounded-full bg-accent opacity-40"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
                
            </div>
        </section>
    )
}

export default HeroSection;