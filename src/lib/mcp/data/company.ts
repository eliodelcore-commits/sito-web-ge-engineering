export const company = {
  name: "GenGinering Solutions",
  descrizione:
    "Azienda di automazione industriale: automazione hardware, automazione software (SCADA/PLC), wireless planning con Ekahau AI e assistenza tecnica.",
  indirizzo: "Via Idice 47, 40050 Monterenzio (BO), Italia",
  email: "info@geenginering.com",
  telefono: "+39 051 568908",
  sito: "https://ge-engineering-srl.lovable.app",
};

export const services = [
  {
    title: "Automazione Hardware",
    description:
      "Progettazione completa di impianti di automazione industriale con componentistica di ultima generazione.",
    features: [
      "PLC Siemens",
      "Azionamenti SEW",
      "Azionamenti Vacon",
      "Azionamenti KEB",
      "Azionamenti Siemens",
    ],
    path: "/servizi/automazione-hardware",
  },
  {
    title: "Automazione Software",
    description:
      "Sviluppo software per il controllo e la supervisione dei processi produttivi industriali.",
    features: [
      "Sistemi SCADA e HMI",
      "Programmazione PLC (Ladder, ST, FBD)",
      "Interfacce operatore touch screen",
      "Integrazione MES e ERP",
    ],
    path: "/servizi/automazione-software",
  },
  {
    title: "Wireless Planning con Ekahau AI",
    description:
      "Progettazione professionale di reti wireless industriali utilizzando la piattaforma Ekahau AI.",
    features: [
      "Site survey pre e post installazione",
      "Analisi predittiva con Ekahau AI",
      "Ottimizzazione copertura e capacità",
      "Report dettagliati e documentazione",
    ],
    path: "/servizi/wireless-planning",
  },
  {
    title: "Assistenza Tecnica",
    description:
      "Supporto continuo per garantire il massimo uptime dei vostri impianti produttivi.",
    features: [
      "Manutenzione preventiva e predittiva",
      "Interventi rapidi on-site",
      "Teleassistenza e monitoraggio remoto",
      "Contratti di assistenza personalizzati",
    ],
    path: "/servizi/assistenza-tecnica",
  },
];

export const projects = [
  {
    title: "Linea di produzione automatizzata",
    category: "Automazione Hardware",
    description:
      "Progettazione e realizzazione completa dell'automazione di una linea produttiva. Architettura Profinet ad anello con 12 PLC Siemens S7 distribuiti su 4 switch Scalance X, 2 server SCADA WinCC in ridondanza hot-standby e postazione supervisore operatore HMI. Sistema di visione artificiale integrato per controllo qualità inline.",
    tags: ["PLC Siemens", "Profinet", "WinCC SCADA", "Scalance X", "Safety", "Visione Artificiale"],
    path: "/progetti/linea-automatizzata",
  },
  {
    title: "Sistema SCADA stabilimento chimico",
    category: "Automazione Software",
    description:
      "Sistema SCADA WinCC ridondante per impianto chimico con 2000+ punti I/O. Firewall OT/IT, Historian 30.000 tag, 4 PLC di zona con ESD Safety Integrated su F-CPU Siemens.",
    tags: ["WinCC SCADA", "OPC-UA", "S7-1516F Safety", "Historian", "ESD", "2000+ I/O"],
    path: "/progetti/scada-chimico",
  },
  {
    title: "Wireless survey magazzino logistico automatico",
    category: "Wireless Planning",
    description:
      "Site survey e progettazione rete Wi-Fi 5 e Wi-Fi 6 per magazzino da 15.000 mq con Ekahau AI. Upgrade da Wi-Fi 2.4 GHz a 5 GHz e 6 GHz per copertura ottimale di 200+ dispositivi mobili.",
    tags: ["Ekahau AI", "Wi-Fi 5", "Wi-Fi 6", "Upgrade 2.4→5/6 GHz", "Site Survey"],
    path: "/progetti/wireless-survey",
  },
  {
    title: "Revamping linea di confezionamento",
    category: "Automazione Hardware",
    description:
      "Upgrade da S7-300 a S7-1516F Safety, sostituzione drive KEB F5 con SEW MOVIDRIVE B su Profinet, inserimento 4 cobot per etichettatura packaging.",
    tags: ["S7-1516F Safety", "SEW MOVIDRIVE B", "Cobot"],
    path: "/progetti/revamping-confezionamento",
  },
  {
    title: "Piattaforma IoT industriale",
    category: "Automazione Software",
    description:
      "Piattaforma IoT per raccolta dati da sensori industriali con edge gateway OPC-UA, broker MQTT ridondato, database time-series InfluxDB e dashboard Grafana per manutenzione predittiva.",
    tags: ["IoT", "MQTT", "InfluxDB", "Grafana", "Edge Gateway", "Predictive Maintenance"],
    path: "/progetti/iot-industriale",
  },
  {
    title:
      "Analisi e troubleshooting su reti wireless in un magazzino automatico su due piani con ambienti RF complessi",
    category: "Wireless Planning",
    description:
      "Progettazione e validazione rete wireless per stabilimento multi-piano con ambienti RF complessi.",
    tags: ["Ekahau AI", "RF Design", "Validazione"],
    path: "/progetti/troubleshooting-wireless",
  },
];

export const technologies = [
  { name: "WinCC SCADA", path: "/wincc-scada", description: "Supervisione SCADA Siemens WinCC: sinottici, allarmi, trending, archiviazione." },
  { name: "WinCC SCADA (linea automatizzata)", path: "/wincc-scada-linea", description: "Esempio di sinottico WinCC per una linea automatizzata con robot, visione e palettizzatore." },
  { name: "OPC-UA", path: "/opc-ua", description: "Protocollo di interoperabilità industriale con modello informativo, sicurezza TLS e Pub/Sub." },
  { name: "S7-1516F Safety", path: "/s7-safety", description: "F-CPU Siemens Safety Integrated, PROFIsafe, logiche di shutdown SIL3." },
  { name: "Historian", path: "/historian", description: "Archiviazione storica di processo e trending su lunghi periodi." },
  { name: "HMI", path: "/hmi", description: "Interfacce operatore touch e sinottici di impianto." },
  { name: "ESD", path: "/esd", description: "Emergency Shutdown System, livelli SIL e matrice causa-effetto." },
  { name: "Profinet", path: "/profinet", description: "Rete industriale Profinet: classi NRT/RT/IRT e topologia ad anello MRP." },
  { name: "PLC Siemens", path: "/siemens", description: "CPU SIMATIC S7-1500/1200, ET 200, switch Scalance X e firewall Scalance SC." },
  { name: "Safety", path: "/safety", description: "Funzioni di sicurezza SIL 3 / PL e, PROFIsafe e norme di riferimento." },
  { name: "Visione Artificiale", path: "/visione-artificiale", description: "Protocolli GigE Vision, USB3 Vision, GenICam e librerie OpenCV, OpenMV, Halcon." },
  { name: "Ekahau", path: "/ekahau", description: "Ekahau Sidekick 2 e suite AI Pro / Survey / Analyzer per il wireless planning." },
  { name: "IoT", path: "/iot", description: "IoT industriale: edge gateway, MQTT, time-series e manutenzione predittiva." },
];