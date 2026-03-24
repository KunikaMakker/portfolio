import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t">
    <div className="max-w-6xl mx-auto px-6 flex sm:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg text-foreground">
        kunika<span className="text-primary">.</span>
      </span>
      <p className="hidden">
        Kunika Makker, Kunika Makkar, Kanika Makker, Kanika Makkar
      </p>
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        Made with <Heart size={14} className="text-secondary" /> & mindfulness by Kunika
      </p>
    </div>
  </footer>
);

export default Footer;