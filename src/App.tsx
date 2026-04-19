import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GenHome from "./pages/GenHome";
import Servizi from "./pages/Servizi";
import AutomazioneHardware from "./pages/AutomazioneHardware";
import AutomazioneSoftware from "./pages/AutomazioneSoftware";
import WirelessPlanning from "./pages/WirelessPlanning";
import Progetti from "./pages/Progetti";
import GenContatti from "./pages/GenContatti";
import AssistenzaTecnica from "./pages/AssistenzaTecnica";
import HolisticLanding from "./pages/HolisticLanding";
import ProgettoLineaAutomatizzata from "./pages/ProgettoLineaAutomatizzata";
import ProgettoRevampingConfezionamento from "./pages/ProgettoRevampingConfezionamento";
import ProgettoSCADAChimico from "./pages/ProgettoSCADAChimico";
import ProgettoIoT from "./pages/ProgettoIoT";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GenHome />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/automazione-hardware" element={<AutomazioneHardware />} />
          <Route path="/servizi/automazione-software" element={<AutomazioneSoftware />} />
          <Route path="/servizi/wireless-planning" element={<WirelessPlanning />} />
          <Route path="/progetti" element={<Progetti />} />
<Route path="/progetti/linea-automatizzata" element={<ProgettoLineaAutomatizzata />} />
<Route path="/progetti/revamping-confezionamento" element={<ProgettoRevampingConfezionamento />} />
<Route path="/progetti/scada-chimico" element={<ProgettoSCADAChimico />} />
          <Route path="/progetti/iot" element={<ProgettoIoT />} />
          <Route path="/servizi/assistenza-tecnica" element={<AssistenzaTecnica />} />
          <Route path="/contatti" element={<GenContatti />} />
          <Route path="/holistic" element={<HolisticLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
