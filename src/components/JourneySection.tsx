import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const timeline = [
  {
    year: "July 2022 - Present",
    title: "Senior Software Engineer",
    place: "SHL",
    link: "https://www.shl.com",
    desc: "Owning end-to-end UI architecture for enterprise interview platforms (TC+, SIL, IGB). Leading React & Angular migrations, mentoring engineers, and driving performance optimisation across teams.",
  },
  {
    year: "Sep 2019 - June 2022",
    title: "Software Engineer",
    place: "Aspiring Minds",
    link: "https://www.myamcat.com",
    desc: "Core frontend contributor for myamcat.com. Led Lighthouse-based performance engineering, reducing FCP from 25s to 10s. Built reusable UI component libraries and mentored junior developers.",
  },
  {
    year: "2019",
    title: "B.Tech in Computer Science",
    place: "Lovely Professional University",
    link: "https://www.lpu.in",
    desc: "Graduated with 8.79 GPA. Built a strong foundation in data structures, algorithms, and software engineering principles.",
  },
  {
    year: "2015",
    title: "Class XII — CBSE",
    place: "Jawahar Navodaya Vidyalaya, Rudrapur",
    link: "https://navodaya.gov.in",
    desc: "One of India's most selective residential schools - admitted through a national entrance exam with under 2% acceptance. Seven years of merit-based residential education that built discipline, grit, and a quiet confidence that background never limits potential.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-16 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground pb-2">
            The path <span className="italic text-gradient">so far</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 top-2 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16"
                  }`}
                >
                  <span className="text-primary text-sm font-medium">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-1">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm mt-0.5 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {item.place} <ExternalLink size={10} />
                  </a>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;