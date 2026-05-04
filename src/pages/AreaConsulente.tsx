import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import { toast } from "@/hooks/use-toast";
import { Headset, LogOut, Mail } from "lucide-react";

const CONSULENTE_EMAIL = "info@geenginering.com";

const AreaConsulente = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [oggetto, setOggetto] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth", { replace: true });
      } else {
        setUserEmail(session.user.email ?? null);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth", { replace: true });
      else setUserEmail(session.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messaggio.trim()) {
      toast({ title: "Scrivi un messaggio", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(
      oggetto.trim() || "Richiesta consulenza commerciale"
    );
    const body = encodeURIComponent(
      `Mittente: ${userEmail ?? ""}\nTelefono: ${telefono}\n\n${messaggio}`
    );
    window.location.href = `mailto:${CONSULENTE_EMAIL}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Headset className="w-6 h-6 text-primary" />
              </div>
              <p className="text-primary text-sm font-medium mb-2">Area riservata</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Parla con un consulente
              </h1>
              <p className="text-muted-foreground">
                Ciao{userEmail ? `, ${userEmail}` : ""}. Scrivi al tuo consulente
                commerciale dedicato: ti risponderemo al più presto.
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Esci
            </button>
          </div>

          <form onSubmit={handleSend} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Oggetto</label>
              <input
                type="text"
                value={oggetto}
                onChange={(e) => setOggetto(e.target.value)}
                className={fieldClass}
                placeholder="es. Richiesta preventivo automazione linea"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Telefono (opzionale)
              </label>
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={fieldClass}
                placeholder="+39 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Messaggio</label>
              <textarea
                value={messaggio}
                onChange={(e) => setMessaggio(e.target.value)}
                required
                rows={6}
                className={`${fieldClass} resize-none`}
                placeholder="Raccontaci la tua esigenza..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Invia al consulente
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Il messaggio verrà inviato a {CONSULENTE_EMAIL}
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AreaConsulente;