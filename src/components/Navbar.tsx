import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        console.log(id, element, 'scrolllll')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    })
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl text-foreground tracking-tight">
            kunika<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 font-body text-sm tracking-wide">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Kunika_Makker.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={14} /> Resume
          </a>

          <button
            onClick={toggle}
            className="p-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    onClick={(event) => handleMobileNavClick(event, l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Kunika_Makker.pdf"
                  download
                  className="inline-flex items-center gap-2 text-primary text-lg"
                >
                  <Download size={18} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;