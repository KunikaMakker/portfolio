import { motion } from "framer-motion";

import manali from '@/assets/travel/manali1.jpg';
import london from '@/assets/travel/london.jpg';
import scotland from '@/assets/travel/scotland.jpg';
import banaras from '@/assets/travel/banaras1.jpg';
import konkan from '@/assets/travel/konkan1.jpg';
import vrindavan from '@/assets/travel/vrindavan.jpg';

const destinations = [
    {
        place: "London, England",
        vibe: "Creative Escape",
        desc: "Tower Bridge on a grey morning, the Thames moving quietly below. Great cities have a way of feeling both vast and intimate.",
        image: london,
        position: "object-center",
    },
    {
        place: "Scotland, UK",
        vibe: "Highland Soul",
        desc: "Frost on the ground, golden mountains, and the Glenfinnan Viaduct in the distance. The kind of landscape that makes you feel small in the best way.",
        image: scotland,
        position: "object-center",
    },
    {
        place: "Vrindavan, India",
        vibe: "Krishna's Path",
        desc: "Flowers from floor to ceiling, hands raised, bells ringing. The kind of devotion that moves through you whether you're religious or not.",
        image: vrindavan,
        position: "object-[center_40%]",
    },
    {
        place: "Varanasi, India",
        vibe: "Ancient Wisdom",
        desc: "Feeding birds on the Ganges while the oldest living city watches. Every ghaat tells a story and spirituality flows like the river itself.",
        image: banaras,
        position: "object-[center_65%]",
    },
    {
        place: "Konkan, India",
        vibe: "Coastal Freedom",
        desc: "A crescent moon above a purple sunset, standing in the water with the palms behind. Some moments don't need words — they just stay with you.",
        image: konkan,
        position: "object-center",
    },
    {
        place: "Manali, India",
        vibe: "Mountain Serenity",
        desc: "Snow-capped peaks, a glacial river below, and the crisp Himalayan air that clears both lungs and mind.",
        image: manali,
        position: "object-[center_60%]",
    }
];

const TravelSection = () => {
    return (
        <section id="travel" className="py-16 md:py-24 bg-grain">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                        Wanderlust
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 pb-2">
                        Places that shaped{" "}
                        <span className="italic text-gradient">my soul</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Travel isn't just about destinations — it's about the perspectives
                        you carry back.<br/>Every journey inspires the way I think, design,
                        and build.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="group relative rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src={dest.image}
                                    alt={dest.place}
                                    className={`w-full h-full object-cover ${dest.position} group-hover:scale-105 transition-transform duration-700`}
                                />
                                {/* subtle dark overlay for readability */}
                                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-5 bg-card">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-display text-lg text-foreground">
                                        {dest.place}
                                    </h3>
                                </div>
                                <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                                    {dest.vibe}
                                </span>
                                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                                    {dest.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <blockquote className="font-display text-2xl md:text-3xl text-foreground/70 italic max-w-5xl mx-auto">
                        "The world is a book, and those who do not travel read only one page."
                    </blockquote>
                    <p className="text-muted-foreground text-sm mt-3">— Saint Augustine</p>
                </motion.div>
            </div>
        </section>
    );
};

export default TravelSection;