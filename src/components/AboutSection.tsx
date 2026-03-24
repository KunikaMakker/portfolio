import { Compass, ExternalLink, Leaf, Sparkles } from "lucide-react";
import { motion } from 'framer-motion'
import profile from '@/assets/Kunika.jpg';

const traits = [
    {
        icon: <Sparkles size={20} />,
        label: "Mindful Engineer",
        desc: "Bringing clarity and intention to every line of code"
    },
    {
        icon: <Compass size={20} />,
        label: "Avid Traveler",
        desc: "From the mountains of India to the streets of England & Scotland"
    },
    {
        icon: <Leaf size={20} />,
        label: "Spiritual Soul",
        desc: "Yoga, meditation & finding stillness in the chaos"
    }
]

const AboutSection = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-grain" aria-label="About me">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left — Text + Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Label + Heading */}
                        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                            About Me
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                            Where code meets{" "}
                            <span className="italic text-gradient">creativity</span>
                        </h2>

                        {/* Photo + intro inline */}
                        <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                            <div className="w-36 h-36 rounded-2xl border-2 border-primary/40 shrink-0 overflow-hidden shadow-sm">
                                <img
                                    src={profile}
                                    alt="Kunika Makker - Senior Frontend Engineer"
                                    className="w-full h-full object-cover scale-x-[-1]"
                                />
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Hi, I'm Kunika — a Senior Software Engineer at{" "}
                                <a
                                    href="https://www.shl.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline"
                                >
                                    SHL
                                </a>
                                , building high-scale consumer-facing platforms with Angular & React.
                                I specialise in frontend architecture, performance optimisation, and
                                turning complex problems into clean, intuitive interfaces.
                            </p>
                        </div>

                        {/* Second paragraph */}
                        <p className="text-muted-foreground leading-relaxed">
                            When I'm not deep in code, you'll find me on a yoga mat at sunrise,
                            journaling at a café, or wandering through a city I've never seen before.
                            That same curiosity and presence shapes everything I build.
                        </p>
                    </motion.div>

                    {/* Right — Traits */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-6">
                            Beyond the screen
                        </p>
                        {traits.map((trait, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                            >
                                <div className="p-3 rounded-xl bg-sage-light text-primary shrink-0">
                                    {trait.icon}
                                </div>
                                <div>
                                    <h3 className="font-body font-semibold text-foreground">
                                        {trait.label}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {trait.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;