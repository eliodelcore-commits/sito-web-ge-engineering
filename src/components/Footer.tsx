import { Anchor } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border px-6 py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
      <Anchor className="h-6 w-6 text-primary" />
      <p className="text-sm text-muted-foreground">
        © 2026 VelaNova — Il portale della vela di ultima generazione
      </p>
    </div>
  </footer>
);

export default Footer;
