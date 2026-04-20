import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/gen/Navbar";
import { Shield, LogOut } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Caricamento...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Area Amministrativa
            </h1>
            <p className="text-muted-foreground mt-2">Benvenuto, {user.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" /> Esci
          </Button>
        </div>

        {!isAdmin ? (
          <Card className="p-8 border-destructive/30">
            <h2 className="text-xl font-semibold mb-2">Accesso limitato</h2>
            <p className="text-muted-foreground">
              Il tuo account non ha permessi di amministratore. Contatta un admin per ricevere l'accesso completo.
            </p>
          </Card>
        ) : (
          <Card className="p-8">
            <h2 className="text-xl font-semibold mb-4">Dashboard Admin</h2>
            <p className="text-muted-foreground">
              Hai accesso completo. Da qui potrai gestire i contenuti del sito.
            </p>
          </Card>
        )}
      </main>
    </div>
  );
}
