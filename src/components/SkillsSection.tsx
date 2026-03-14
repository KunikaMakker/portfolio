import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Languages & Core",
        skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "SQL"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["Angular", "React", "Next.js", "AngularJS", "RxJS", "Tailwind", "Bootstrap", "jQuery"],
    },
    {
        title: "Tools & Workflow",
        skills: ["Git", "CI/CD", "Agile", "Accessibility", "SEO", "GitHub Copilot", "AI-assisted Development"],
    },
    {
        title: "Architecture & Performance",
        skills: ["Scalable UI Architecture", "Modular UI", "Design Systems", "Component Libraries", "Code Splitting", "Lazy Loading", "Web Vitals"],
    },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card bg-grain">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            My <span className="italic text-gradient">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display text-lg text-foreground">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
