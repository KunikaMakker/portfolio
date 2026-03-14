import { motion } from "framer-motion";
import { Lock, ExternalLink, Globe } from "lucide-react";
import fullstophostelLogo from '@/assets/fullstophostels.jpg';
import myamcatLogo from '@/assets/myamcat.png';
import rsroomsLogo from '@/assets/rsrooms.jpeg';

const projects = [
  {
    title: "TC+ Interview Platform",
    desc: "Owned end-to-end UI architecture for a large-scale enterprise interview scheduling & guide platform handling thousands of interviews daily.",
    tags: ["Angular", "TypeScript"],
    color: "bg-sage-light",
    company: "SHL",
    isPrivate: true,
    inProgress: false,
    link: null,
    logo: null,
  },
  {
    title: "Smart Interview Live (SIL)",
    desc: "Built real-time video interview workflows with Twilio integration, enabling seamless interview execution with dynamic question banks and rating scales.",
    tags: ["Angular", "Twilio", "Firebase"],
    color: "bg-terracotta-light",
    company: "SHL",
    isPrivate: true,
    inProgress: false,
    link: null,
    logo: null,
  },
  {
    title: "Talent Mobility Platform",
    desc: "Built React-based client-facing modules for enterprise hiring workflows, supporting talent mobility and email simulation platforms.",
    tags: ["Reactjs", "TypeScript"],
    color: "bg-teal-light",
    company: "SHL",
    isPrivate: true,
    inProgress: true,
    link: null,
    logo: null,
  },
  {
    title: "myamcat.com",
    desc: "Core frontend contributor for a high-traffic public assessment and employability testing platform. Reduced First Contentful Paint from 25s to 10s.",
    tags: ["JavaScript", "Performance", "jQuery"],
    color: "bg-sand",
    company: "Aspiring Minds",
    isPrivate: false,
    inProgress: false,
    link: "https://www.myamcat.com",
    logo: myamcatLogo
  },
  {
    title: "RS Rooms",
    desc: "Built a property listing website for a friend's accommodation business. Clean, responsive UI showcasing rooms and amenities.",
    tags: ["HTML5", "CSS3"],
    color: "bg-teal-light",
    company: "Freelance",
    inProgress: false,
    isPrivate: false,
    link: "https://rs-stays-git-main-kunika-makkers-projects.vercel.app/",
    logo: rsroomsLogo,
  },
  {
    title: "Fullstop Hostels",
    desc: "Built the website for a friend's hostel in Rishikesh. SSR-first architecture with Next.js, online booking coming soon.",
    tags: ["Next.js", "TypeScript", "SSR", "CSS3"],
    color: "bg-terracotta-light",
    company: "Freelance",
    isPrivate: false,
    inProgress: true,
    link: "https://fullstophostels.com",
    logo: fullstophostelLogo
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-12 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.2] text-foreground pb-2">
            Projects I'm 
            <span className="inline-block italic text-gradient p-2">proud of</span>
        </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-500 
                        ${i === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Card visual */}
              <div
                className={`${project.color} h-48 flex justify-center relative overflow-hidden`}
              >
                {project.inProgress && (
                    <div className="absolute left-0">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-sage-light text-primary text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Building
                        </span>
                    </div>
                )}
                {/* Dot pattern */}
                {!project.logo ? (<div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />)
                : (
                    <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={project.logo}
                        alt={project.title}
                        className={`object-contain rounded-xl shadow-sm
                            ${project.title === "myamcat.com" ? "h-16 w-48" : "h-20 w-auto"}`}
                    />
                    </div>
                )}

                {/* Private overlay */}
                {project.isPrivate && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <Lock size={28} className="text-foreground/25" />
                    <span className="text-xs text-foreground/30 font-medium tracking-wider uppercase">
                      Private — NDA Protected
                    </span>
                  </div>
                )}

                {/* Public project — show link hint on hover */}
                {!project.isPrivate && project.link && !project.logo && (
                 <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/5"
                  >
                    <Globe size={20} className="text-foreground/40" />
                    <span className="text-sm text-foreground/40 font-medium">
                      Visit Site
                    </span>
                  </a>
                )}

                {/* Company badge */}
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-background/80 text-muted-foreground font-medium flex items-center gap-1.5">
                  {project.isPrivate && <Lock size={10} />}
                  {project.company}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 bg-card">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl text-foreground">
                    {project.title}
                  </h3>
                  {!project.isPrivate && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;