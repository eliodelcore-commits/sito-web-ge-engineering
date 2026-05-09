import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Cpu, Network, Code2, Eye, Layers } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import visionBg from "@/assets/vision-bg.jpg";

const protocols = [
  {
    icon: Network,
    title: "GigE Vision",
    description:
      "Standard di trasmissione video su rete Gigabit Ethernet. Cavi fino a 100 m, bandwidth ~125 MB/s, ideale per applicazioni industriali distribuite. Basato su GenICam per la configurazione delle camere.",
  },
  {
    icon: Network,
    title: "USB3 Vision",
    description:
      "Standard per camere industriali su USB 3.0. Bandwidth fino a ~400 MB/s, plug-and-play, basso costo. Ideale per stazioni compatte di ispezione qualità.",
  },
  {
    icon: Layers,
    title: "GenICam",
    description:
      "Generic Interface for Cameras: standard EMVA per accedere ai parametri di qualsiasi camera (gain, exposure, trigger) in modo uniforme indipendentemente da brand o trasporto fisico.",
  },
  {
    icon: Network,
    title: "CoaXPress / Camera Link",
    description:
      "Protocolli ad altissima velocità (fino a 12.5 Gbps su CoaXPress, 6.8 Gbps su Camera Link HS). Usati per camere ad alta risoluzione o frame rate elevati: ispezione print, semiconduttori, web inspection.",
  },
  {
    icon: Cpu,
    title: "Profinet / OPC-UA Vision",
    description:
      "Integrazione dei risultati di visione nel mondo PLC: trigger di acquisizione da Profinet, restituzione di esito OK/NOK e coordinate al PLC, telemetria verso SCADA via OPC-UA.",
  },
  {
    icon: Eye,
    title: "MQTT / REST per AI Vision",
    description:
      "Per pipeline di visione basate su AI o edge computing, i risultati di inferenza viaggiano spesso su MQTT o REST verso MES e dashboard di qualità.",
  },
];

const libraries = [
  {
    name: "OpenCV",
    tag: "Open source · C++ / Python",
    description:
      "La libreria di computer vision più diffusa al mondo. Filtri, edge detection, template matching, calibrazione camera, stereo, tracking, ML classico. Cuore di moltissime pipeline di visione industriale custom.",
  },
  {
    name: "OpenMV",
    tag: "Hardware + MicroPython",
    description:
      "Piattaforma hardware (camera + microcontrollore) programmabile in MicroPython. Ideale per prototipi, smart sensor a basso costo, applicazioni educational e PoC di visione embedded.",
  },
  {
    name: "Halcon (MVTec)",
    tag: "Commerciale · industriale",
    description:
      "Suite di visione professionale con oltre 2.000 operatori: matching geometrico, OCR, 3D vision, deep learning. Standard de-facto per ispezione qualità ad alte prestazioni.",
  },
  {
    name: "Cognex VisionPro / In-Sight",
    tag: "Smart camera + SDK",
    description:
      "Smart camera Cognex programmate in EasyBuilder o VisionPro. PatMax per matching geometrico ad altissima robustezza. Integrazione nativa con PLC tramite Profinet, EtherNet/IP, Modbus.",
  },
  {
    name: "Keyence CV-X / IV",
    tag: "Smart camera all-in-one",
    description:
      "Sistemi di visione integrati con interfaccia grafica e configurazione no-code. Ottimi per linee di confezionamento, controllo presenza/assenza, lettura codici 1D/2D.",
  },
  {
    name: "Basler Pylon",
    tag: "SDK + GenICam",
    description:
      "SDK ufficiale Basler per camere GigE Vision, USB3 Vision e CoaXPress. Spesso combinato con OpenCV o Halcon per costruire applicazioni custom.",
  },
  {
    name: "TensorFlow / PyTorch",
    tag: "Deep Learning",
    description:
      "Framework di deep learning per visione AI: classificazione difetti, segmentazione, anomaly detection. Modelli esportati in ONNX o TensorRT ed eseguiti su edge GPU industriali.",
  },
  {
    name: "NVIDIA DeepStream / Triton",
    tag: "Edge AI · GPU",
    description:
      "Pipeline di video analytics e inferenza AI accelerate su GPU NVIDIA. Per applicazioni real-time multi-camera (tracking, conteggio, ispezione di flusso continuo).",
  },
];

const VisioneArtificiale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${visionBg})` }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 55%, hsl(var(--background) / 0.6) 100%)",
        }}
      />
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/progetti"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai progetti
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Visione Artificiale
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            La visione artificiale industriale combina ottica, illuminazione, hardware di acquisizione,
            protocolli di trasporto e librerie software per trasformare un flusso di immagini in
            informazioni utili al PLC e al MES: presenza/assenza, misure dimensionali, lettura codici,
            riconoscimento difetti, guida robot. Di seguito i principali protocolli e librerie usati
            in linee di automazione e quality inspection.
          </p>

          {/* Protocolli */}
          <h2 className="font-heading text-2xl font-semibold mb-6">Protocolli e standard di trasporto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-14">
            {protocols.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Librerie e piattaforme */}
          <h2 className="font-heading text-2xl font-semibold mb-6">Librerie e piattaforme software</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mb-14">
            {libraries.map((l) => (
              <div
                key={l.name}
                className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{l.name}</h3>
                </div>
                <p className="text-xs text-primary/80 mb-3 uppercase tracking-wider">{l.tag}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
              </div>
            ))}
          </div>

          {/* Pipeline tipica */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
            <h2 className="font-heading text-xl font-semibold mb-2">Pipeline tipica di una stazione di visione</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Dal trigger di acquisizione fino all'esito che torna al PLC e ai dati che salgono al MES.
            </p>

            <svg width="100%" viewBox="0 0 900 280" role="img">
              <title>Pipeline visione artificiale</title>
              <rect x="0" y="0" width="900" height="280" rx="8" fill="#0b1220" stroke="#1e293b" />

              {/* Trigger */}
              <rect x="20" y="40" width="140" height="60" rx="6" fill="#0f2040" stroke="#2563EB" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="90" y="66" textAnchor="middle">PLC Trigger</text>
              <text fontSize="10" fill="#93C5FD" x="90" y="84" textAnchor="middle">Profinet I/O</text>

              {/* Camera */}
              <rect x="200" y="40" width="160" height="60" rx="6" fill="#1a1f3a" stroke="#8b5cf6" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="280" y="66" textAnchor="middle">Smart Camera</text>
              <text fontSize="10" fill="#c4b5fd" x="280" y="84" textAnchor="middle">GigE Vision · GenICam</text>

              {/* Illuminazione */}
              <rect x="200" y="120" width="160" height="50" rx="6" fill="#3a2f1a" stroke="#eab308" />
              <text fontSize="11" fontWeight="600" fill="#F1F5F9" x="280" y="142" textAnchor="middle">Illuminatore LED</text>
              <text fontSize="9" fill="#fde68a" x="280" y="158" textAnchor="middle">Ring · Backlight · Dome</text>

              {/* Pipeline software */}
              <rect x="400" y="40" width="180" height="60" rx="6" fill="#0a3d2e" stroke="#1D9E75" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="490" y="66" textAnchor="middle">OpenCV · Halcon</text>
              <text fontSize="10" fill="#9FE1CB" x="490" y="84" textAnchor="middle">Pre-processing + ROI</text>

              <rect x="400" y="120" width="180" height="60" rx="6" fill="#0a3d2e" stroke="#1D9E75" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="490" y="146" textAnchor="middle">Inferenza AI</text>
              <text fontSize="10" fill="#9FE1CB" x="490" y="164" textAnchor="middle">TensorRT · ONNX</text>

              {/* Esito */}
              <rect x="620" y="40" width="160" height="60" rx="6" fill="#3d0808" stroke="#D85A30" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="700" y="66" textAnchor="middle">Esito OK / NOK</text>
              <text fontSize="10" fill="#F0997B" x="700" y="84" textAnchor="middle">→ PLC via Profinet</text>

              <rect x="620" y="120" width="160" height="60" rx="6" fill="#0f2040" stroke="#2563EB" />
              <text fontSize="12" fontWeight="600" fill="#F1F5F9" x="700" y="146" textAnchor="middle">Telemetria MES</text>
              <text fontSize="10" fill="#93C5FD" x="700" y="164" textAnchor="middle">OPC-UA · MQTT</text>

              {/* Frecce */}
              <line x1="160" y1="70" x2="200" y2="70" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />
              <line x1="360" y1="70" x2="400" y2="70" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />
              <line x1="580" y1="70" x2="620" y2="70" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />
              <line x1="490" y1="100" x2="490" y2="120" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />
              <line x1="580" y1="150" x2="620" y2="150" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />
              <line x1="280" y1="100" x2="280" y2="120" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)" />

              <defs>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#64748B" />
                </marker>
              </defs>

              <text fontSize="10" fill="#64748B" x="20" y="230">Latenza tipica end-to-end: 20–80 ms · Throughput: 30–200 pezzi/min</text>
              <text fontSize="10" fill="#64748B" x="20" y="250">Standard: GenICam · GigE Vision · USB3 Vision · CoaXPress · Camera Link</text>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisioneArtificiale;
