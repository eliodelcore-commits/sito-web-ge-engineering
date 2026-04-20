import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/gen/Navbar";

export default function Auth() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && user) navigate("/admin");
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
            data: { display_name: displayName },
          },
        });
        if (error) throw error;
        toast.success("Account creato! Accesso in corso...");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Accesso effettuato");
      }
    } catch (err: any) {
      const msg = err.message?.includes("already registered")
        ? "Email già registrata. Prova ad accedere."
        : err.message?.includes("Invalid login")
        ? "Email o password non validi"
        : err.message;
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-display font-bold mb-2">
            {mode === "login" ? "Accedi" : "Registrati"}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {mode === "login" ? "Area riservata amministratori" : "Crea un nuovo account"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Attendere..." : mode === "login" ? "Accedi" : "Registrati"}
            </Button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="w-full text-sm text-muted-foreground hover:text-foreground mt-6 text-center"
          >
            {mode === "login" ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
          </button>

          <Link to="/" className="block text-center text-xs text-muted-foreground mt-4 hover:text-foreground">
            Torna alla home
          </Link>
        </Card>
      </main>
    </div>
  );
}
