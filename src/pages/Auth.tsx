import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import { toast } from "@/hooks/use-toast";
import { Headset } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/area-consulente", { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate("/area-consulente", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/area-consulente`,
            data: { display_name: nome },
          },
        });
        if (error) throw error;
        toast({
          title: "Account creato",
          description:
            "Controlla la tua email per confermare l'iscrizione, poi accedi per parlare con un consulente.",
        });
        setMode("login");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast({
        title: "Errore",
        description: err.message ?? "Operazione non riuscita",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-1 pt-32 pb-24 bg-background overflow-hidden">
        <MeshBackground
          focal={{ x: 0.18, y: 0.18 }}
          cols={72}
          rows={115}
          strokeWidth={0.22}
          nodeRadius={0.25}
          className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-90"
        />
        <div className="container mx-auto px-6 max-w-xl relative z-10">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <Headset className="w-6 h-6 text-primary" />
          </div>
          <p className="text-primary text-sm font-medium mb-2">Area riservata</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {mode === "signup" ? "Crea le tue credenziali" : "Accedi"}
          </h1>
          <p className="text-muted-foreground mb-8">
            Registrati per parlare direttamente con un consulente commerciale dedicato:
            riceverai supporto su misura per il tuo progetto di automazione.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className={fieldClass}
                  placeholder="Il tuo nome"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={fieldClass}
                placeholder="la.tua@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className={fieldClass}
                placeholder="Almeno 6 caratteri"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading
                ? "Attendere..."
                : mode === "signup"
                ? "Crea account e parla con un consulente"
                : "Accedi"}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            {mode === "signup" ? "Hai già un account?" : "Non hai un account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "signup" ? "login" : "signup")}
              className="text-primary hover:underline font-medium"
            >
              {mode === "signup" ? "Accedi" : "Registrati"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;