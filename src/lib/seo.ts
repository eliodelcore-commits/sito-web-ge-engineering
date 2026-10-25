export const SITE_URL = "https://geenginering.com";

export type PageMeta = {
  title: string;
  description: string;
  noindex?: boolean;
};

// Un titolo e una descrizione per ogni pagina: sono i testi che Google
// legge e mostra nei risultati di ricerca.
export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "GE Engineering srl | Automazione industriale",
    description:
      "GE Engineering srl, automazione industriale a Monterenzio (BO): automazione hardware e software SCADA/PLC, wireless planning con Ekahau AI e assistenza tecnica.",
  },
  "/servizi": {
    title: "Servizi di automazione industriale | GE Engineering",
    description:
      "Automazione hardware e software, wireless planning con Ekahau AI e assistenza tecnica per impianti industriali.",
  },
  "/servizi/automazione-hardware": {
    title: "Automazione hardware e magazzini automatici | GE Engineering",
    description:
      "Progettazione e realizzazione di automazione hardware: magazzini automatici, trasloelevatori, quadri e impianti.",
  },
  "/servizi/automazione-software": {
    title: "Automazione software, SCADA e PLC | GE Engineering",
    description:
      "Sviluppo software industriale: supervisioni SCADA WinCC, programmazione PLC Siemens, interfacce HMI e integrazione OPC-UA.",
  },
  "/servizi/wireless-planning": {
    title: "Wireless planning e survey Wi-Fi industriale | GE Engineering",
    description:
      "Progettazione e verifica di reti wireless industriali con Ekahau AI: studio predittivo, survey in campo e troubleshooting.",
  },
  "/servizi/assistenza-tecnica": {
    title: "Assistenza tecnica industriale | GE Engineering",
    description:
      "Interventi, messa in servizio e manutenzione su PLC, SCADA, reti industriali e sistemi di automazione.",
  },
  "/progetti": {
    title: "Progetti di automazione realizzati | GE Engineering",
    description:
      "Installazioni, revamping, survey wireless e piattaforme IoT: i progetti di automazione realizzati da GE Engineering.",
  },
  "/progetti/iot-industriale": {
    title: "Piattaforma IoT industriale | GE Engineering",
    description:
      "Raccolta dati di campo, storicizzazione e supervisione: progetto di piattaforma IoT industriale.",
  },
  "/progetti/revamping-confezionamento": {
    title: "Revamping linea di confezionamento | GE Engineering",
    description:
      "Ammodernamento di una linea di confezionamento: PLC, safety, vista topologica degli impianti e interfacce HMI.",
  },
  "/progetti/linea-automatizzata": {
    title: "Linea di produzione automatizzata | GE Engineering",
    description:
      "Sinottico di una linea automatizzata, supervisione SCADA e integrazione dei dispositivi di campo.",
  },
  "/progetti/scada-chimico": {
    title: "SCADA per stabilimento chimico | GE Engineering",
    description:
      "Sistema SCADA per uno stabilimento chimico: supervisione, allarmi, storico dei dati e sicurezza funzionale.",
  },
  "/progetti/wireless-survey": {
    title: "Wireless survey in magazzino logistico | GE Engineering",
    description:
      "Survey wireless in un magazzino logistico automatico: copertura reale, interferenze e verifica in campo.",
  },
  "/progetti/troubleshooting-wireless": {
    title: "Troubleshooting reti wireless industriali | GE Engineering",
    description:
      "Analisi e risoluzione di problemi su reti wireless in un magazzino automatico su due piani con ambienti RF complessi.",
  },
  "/contatti": {
    title: "Contatti | GE Engineering",
    description:
      "Scriveteci o venite in sede: Via Idice 47, 40050 Monterenzio (BO). Modulo di contatto, telefono e mappa.",
  },
  "/lavora-con-noi": {
    title: "Lavora con noi: offerte di lavoro in automazione industriale a Bologna | GE Engineering",
    description:
      "Offerte di lavoro a Monterenzio (Bologna): programmatori PLC Siemens, tecnici di campo, tecnici elettromeccanici e neolaureati. Invia la tua candidatura con CV.",
  },
  "/wincc-scada": {
    title: "WinCC SCADA: esempio di supervisione | GE Engineering",
    description:
      "Come si presenta una supervisione WinCC SCADA: schermate, allarmi e storico dei dati di impianto.",
  },
  "/wincc-scada-linea": {
    title: "WinCC SCADA su linea automatizzata | GE Engineering",
    description:
      "Sinottico di una linea automatizzata in WinCC SCADA: stazione, trasloelevatore, confezionatrice e allarmi.",
  },
  "/opc-ua": {
    title: "OPC-UA: connessione dati industriali | GE Engineering",
    description:
      "OPC-UA per collegare PLC, SCADA e sistemi IT: exchange di dati e informazioni in modo standard e sicuro.",
  },
  "/s7-safety": {
    title: "S7-1516F Safety | GE Engineering",
    description:
      "PLC di sicurezza S7-1516F: funzioni safety, arresti di emergenza e integrazione con il controllo standard.",
  },
  "/historian": {
    title: "Historian: storico dei dati di impianto | GE Engineering",
    description:
      "Storicizzazione dei dati di produzione: raccolta, archiviazione e consultazione delle serie storiche di impianto.",
  },
  "/hmi": {
    title: "HMI: interfacce uomo-macchina | GE Engineering",
    description:
      "Interfacce HMI per macchine e linee: comandi, visualizzazioni di stato e diagnostica a bordo impianto.",
  },
  "/esd": {
    title: "ESD: Emergency Shutdown System | GE Engineering",
    description:
      "Sistema di arresto di emergenza: logica ESD, livelli di priorità e ripartenza controllata dell'impianto.",
  },
  "/profinet": {
    title: "PROFINET: rete industriale in tempo reale | GE Engineering",
    description:
      "PROFINET per collegare PLC, I/O distribuiti e azionamenti in tempo reale, con diagnosi e ridondanza.",
  },
  "/siemens": {
    title: "PLC e device industriali Siemens | GE Engineering",
    description:
      "SIMATIC S7-1500 e S7-1200, periferie ET 200, reti Scalance e WinCC: i prodotti Siemens che usiamo ogni giorno.",
  },
  "/safety": {
    title: "Safety: sicurezza funzionale industriale | GE Engineering",
    description:
      "Sicurezza funzionale di macchina: barriere, arresti, PL e SIL, e integrazione tra safety e automazione.",
  },
  "/visione-artificiale": {
    title: "Visione Artificiale industriale | GE Engineering",
    description:
      "Visione artificiale in linea: telecamere GigE Vision, GenICam, OpenCV e Halcon per controlli e ispezioni.",
  },
  "/ekahau": {
    title: "Ekahau AI: progettazione e survey Wi-Fi | GE Engineering",
    description:
      "Ekahau AI Pro, Sidekick 2, Survey e Analyzer: progettazione predittiva e misura reale delle reti Wi-Fi.",
  },
  "/iot": {
    title: "IoT industriale | GE Engineering",
    description:
      "Sensori e gateway verso il cloud: raccolta dati, manutenzione predittiva e analisi di consumo negli impianti.",
  },
  "/auth": {
    title: "Accedi o crea le tue credenziali | GE Engineering",
    description: "Area riservata: accedi o crea le credenziali per parlare con un consulente dedicato.",
    noindex: true,
  },
  "/area-consulente": {
    title: "Parla con un consulente | GE Engineering",
    description: "Area riservata: scrivi al tuo consulente commerciale di riferimento.",
    noindex: true,
  },
};

export const normalizePath = (pathname: string) =>
  pathname.replace(/\/+$/, "") || "/";

export function metaForPath(pathname: string): PageMeta {
  return (
    pageMeta[normalizePath(pathname)] ?? {
      title: "Pagina non trovata | GE Engineering srl",
      description: "La pagina che cerchi non esiste o è stata spostata.",
      noindex: true,
    }
  );
}
