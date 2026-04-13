import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  image: string;
}

const team: { department: string; members: TeamMember[] }[] = [
  {
    department: "Management",
    members: [
      { name: "Alessandro Ferretti", role: "CEO & Founder", department: "Management", email: "a.ferretti@velanova.it", phone: "+39 02 8374 5001", image: "https://i.pravatar.cc/300?img=51" },
      { name: "Giulia Marchetti", role: "Direttore Operativo", department: "Management", email: "g.marchetti@velanova.it", phone: "+39 02 8374 5002", image: "https://i.pravatar.cc/300?img=47" },
    ],
  },
  {
    department: "Ingegneria",
    members: [
      { name: "Marco Sartori", role: "Chief Engineer — Strutture", department: "Ingegneria", email: "m.sartori@velanova.it", phone: "+39 02 8374 5010", image: "https://i.pravatar.cc/300?img=33" },
      { name: "Elena Conti", role: "Ing. Idrodinamica & Foil", department: "Ingegneria", email: "e.conti@velanova.it", phone: "+39 02 8374 5011", image: "https://i.pravatar.cc/300?img=44" },
      { name: "Davide Russo", role: "Ing. Sistemi Elettronici", department: "Ingegneria", email: "d.russo@velanova.it", phone: "+39 02 8374 5012", image: "https://i.pravatar.cc/300?img=12" },
    ],
  },
  {
    department: "Tecnici",
    members: [
      { name: "Luca Bianchi", role: "Capo Tecnico — Compositi", department: "Tecnici", email: "l.bianchi@velanova.it", phone: "+39 02 8374 5020", image: "https://i.pravatar.cc/300?img=14" },
      { name: "Simone Galli", role: "Tecnico Rigging & Alberi", department: "Tecnici", email: "s.galli@velanova.it", phone: "+39 02 8374 5021", image: "https://i.pravatar.cc/300?img=53" },
      { name: "Chiara Moretti", role: "Tecnico Elettronica di Bordo", department: "Tecnici", email: "c.moretti@velanova.it", phone: "+39 02 8374 5022", image: "https://i.pravatar.cc/300?img=45" },
    ],
  },
  {
    department: "Vendite",
    members: [
      { name: "Francesca De Luca", role: "Direttore Commerciale", department: "Vendite", email: "f.deluca@velanova.it", phone: "+39 02 8374 5030", image: "https://i.pravatar.cc/300?img=48" },
      { name: "Roberto Caruso", role: "Account Manager — Europa", department: "Vendite", email: "r.caruso@velanova.it", phone: "+39 02 8374 5031", image: "https://i.pravatar.cc/300?img=56" },
      { name: "Anna Vitale", role: "Account Manager — Asia & Middle East", department: "Vendite", email: "a.vitale@velanova.it", phone: "+39 02 8374 5032", image: "https://i.pravatar.cc/300?img=49" },
    ],
  },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40" style={{ boxShadow: "var(--shadow-card)" }}>
    <div className="flex items-start gap-4">
      <img
        src={member.image}
        alt={member.name}
        className="h-16 w-16 rounded-full object-cover border-2 border-border group-hover:border-primary/50 transition-colors"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg font-bold truncate">{member.name}</h3>
        <p className="text-sm text-primary font-medium">{member.role}</p>
        <div className="mt-3 space-y-1.5">
          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{member.email}</span>
          </a>
          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span>{member.phone}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Il Nostro Team</span>
        <h1 className="mt-3 font-heading text-4xl md:text-6xl font-bold">Contatti</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Esperti di vela, ingegneria navale e innovazione al tuo servizio.
        </p>
      </section>

      {/* HQ info bar */}
      <div className="mx-auto max-w-5xl px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-8 rounded-lg border border-border bg-card/60 p-6" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Sede Principale</p>
              <p className="text-sm font-semibold">Via del Porto 42, Milano</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Centralino</p>
              <p className="text-sm font-semibold">+39 02 8374 5000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email Generale</p>
              <p className="text-sm font-semibold">info@velanova.it</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-semibold">VelaNova Yachts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team sections */}
      <div className="mx-auto max-w-6xl px-6 pb-24 space-y-16">
        {team.map((dept) => (
          <div key={dept.department}>
            <h2 className="font-heading text-2xl font-bold mb-6 border-b border-border pb-3">
              {dept.department}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dept.members.map((m) => (
                <MemberCard key={m.email} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Contatti;
