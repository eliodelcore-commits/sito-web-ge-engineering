import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contatti" className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-primary">
          <Anchor className="w-5 h-5" />
          <span className="font-heading text-lg font-bold text-foreground">VelaNova</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 VelaNova — Il magazine delle barche a vela di ultima generazione
        </p>
      </div>
    </footer>
  );
};

export default Footer;
