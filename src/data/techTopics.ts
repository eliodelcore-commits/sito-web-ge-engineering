export interface TechTopic {
  slug: string;
  title: string;
  category: string;
  heroDescription: string;
  sections: { heading: string; text: string }[];
  specs: { label: string; value: string }[];
}

export const techTopics: TechTopic[] = [
  {
    slug: "foiling-technology",
    title: "Foiling Technology",
    category: "Aerodinamica & Idrodinamica",
    heroDescription: "I foil in carbonio permettono allo scafo di sollevarsi dall'acqua, riducendo l'attrito e raggiungendo velocità impensabili.",
    sections: [
      {
        heading: "Come funziona il foiling",
        text: "Il foiling sfrutta il principio della portanza idrodinamica: ali sommerse (foil) generano una forza verso l'alto sufficiente a sollevare l'intero scafo dall'acqua. Quando la barca raggiunge una velocità critica, i foil creano abbastanza portanza da vincere la gravità, e lo scafo \"vola\" sopra la superficie. Questo riduce drasticamente l'attrito idrodinamico, consentendo velocità fino a 3 volte superiori rispetto alla navigazione tradizionale.",
      },
      {
        heading: "Evoluzione dei foil",
        text: "Dai primi esperimenti con i moth negli anni 2000, la tecnologia foiling si è evoluta rapidamente. I foil a L dei primi catamarani dell'America's Cup si sono trasformati nei sofisticati foil a T degli AC75, capaci di sostenere monoscafi di 75 piedi. Oggi i foil vengono progettati con simulazioni CFD (Computational Fluid Dynamics) e realizzati in carbonio pre-preg autoclavato con tolleranze al centesimo di millimetro.",
      },
      {
        heading: "Il futuro del foiling",
        text: "La prossima frontiera è il foiling autonomo controllato da intelligenza artificiale. Sensori di pressione integrati nei foil, accelerometri e giroscopi alimentano algoritmi di machine learning che regolano l'angolo dei foil centinaia di volte al secondo. Questo permetterà anche a equipaggi meno esperti di navigare in foiling in sicurezza, democratizzando una tecnologia oggi riservata ai professionisti.",
      },
    ],
    specs: [
      { label: "Materiale", value: "Carbonio pre-preg T800/M21" },
      { label: "Portanza max", value: "12.000 kg a 25 kn" },
      { label: "Riduzione attrito", value: "Fino al 80%" },
      { label: "Velocità di decollo", value: "12-16 nodi" },
      { label: "Apertura foil (AC75)", value: "4.5 m per lato" },
      { label: "Controllo", value: "Fly-by-wire idraulico" },
    ],
  },
  {
    slug: "propulsione-green",
    title: "Propulsione Green",
    category: "Sostenibilità & Energia",
    heroDescription: "Motori elettrici ibridi, pannelli solari e idrogeneratori rendono la navigazione sempre più sostenibile.",
    sections: [
      {
        heading: "Propulsione ibrida diesel-elettrica",
        text: "I moderni yacht a vela integrano sistemi di propulsione ibrida che combinano motori diesel ad alta efficienza con motori elettrici. In modalità elettrica, la barca naviga in totale silenzio e a zero emissioni, ideale per aree marine protette e ormeggi. Il motore diesel interviene solo per la ricarica delle batterie o in condizioni di navigazione impegnative, riducendo il consumo di carburante fino al 40%.",
      },
      {
        heading: "Energia solare e rigenerativa",
        text: "Pannelli solari flessibili di nuova generazione vengono integrati nel bimini, nel ponte e persino nelle vele rigide. Con efficienze superiori al 24%, i moduli SunPower e simili generano fino a 3-5 kW sui catamarani moderni. Gli idrogeneratori, montati sotto lo scafo, sfruttano il flusso d'acqua durante la navigazione a vela per ricaricare le batterie, trasformando la barca in una piccola centrale energetica autonoma.",
      },
      {
        heading: "Batterie e accumulo",
        text: "Le batterie al litio ferro fosfato (LiFePO4) offrono densità energetica elevata, sicurezza intrinseca e oltre 5.000 cicli di carica. I sistemi di gestione batterie (BMS) di ultima generazione ottimizzano la distribuzione dell'energia tra propulsione, strumentazione e comfort di bordo, garantendo autonomia sufficiente per intere giornate di navigazione elettrica.",
      },
    ],
    specs: [
      { label: "Potenza elettrica", value: "30-150 kW" },
      { label: "Pannelli solari", value: "Fino a 5 kW" },
      { label: "Batterie", value: "LiFePO4 40-120 kWh" },
      { label: "Autonomia elettrica", value: "30-200 nm" },
      { label: "Riduzione emissioni", value: "40-100%" },
      { label: "Idrogeneratore", value: "500W a 7 kn" },
    ],
  },
  {
    slug: "navigazione-ai",
    title: "Navigazione AI",
    category: "Intelligenza Artificiale",
    heroDescription: "Sistemi di intelligenza artificiale analizzano vento, correnti e meteo per ottimizzare la rotta in tempo reale.",
    sections: [
      {
        heading: "Routing intelligente",
        text: "Gli algoritmi di routing AI elaborano in tempo reale dati meteo da satellite, modelli di previsione del vento (GFS, ECMWF), dati di corrente oceanica e condizioni di marea. Il sistema calcola migliaia di rotte possibili e seleziona quella ottimale considerando velocità, comfort, sicurezza e consumo energetico. Il risultato è una navigazione più efficiente del 15-25% rispetto al routing tradizionale.",
      },
      {
        heading: "Autopilota adattivo",
        text: "I sistemi di autopilota basati su machine learning imparano dalle condizioni di navigazione e dal comportamento dello skipper. Sensori di vento, inclinazione, velocità e accelerazione alimentano reti neurali che regolano timone e vele con precisione millimetrica. Il sistema si adatta automaticamente a raffiche, onde e cambi di corrente, mantenendo la barca sulla rotta ottimale senza intervento umano.",
      },
      {
        heading: "Sicurezza predittiva",
        text: "L'AI monitora costantemente lo stato strutturale della barca attraverso sensori di stress, vibrazione e temperatura. Algoritmi predittivi identificano potenziali problemi meccanici prima che si manifestino, suggerendo interventi di manutenzione preventiva. Il sistema AIS avanzato utilizza il deep learning per prevedere le traiettorie di altre imbarcazioni e segnalare potenziali collisioni con minuti di anticipo.",
      },
    ],
    specs: [
      { label: "Sensori meteo", value: "Vento, pressione, umidità" },
      { label: "Aggiornamento rotta", value: "Ogni 30 secondi" },
      { label: "Fonti dati", value: "GFS, ECMWF, AIS" },
      { label: "Efficienza routing", value: "+15-25%" },
      { label: "Previsione collisioni", value: "5 min anticipo" },
      { label: "Machine Learning", value: "On-edge (ARM)" },
    ],
  },
  {
    slug: "materiali-avanzati",
    title: "Materiali Avanzati",
    category: "Ingegneria dei Materiali",
    heroDescription: "Fibra di carbonio, kevlar e resine epossidiche di ultima generazione per scafi ultraleggeri e resistenti.",
    sections: [
      {
        heading: "Fibra di carbonio di ultima generazione",
        text: "Le fibre di carbonio T800 e T1000 di Toray rappresentano lo stato dell'arte nella costruzione navale. Con un modulo elastico superiore a 300 GPa e una resistenza a trazione di 6.000 MPa, questi materiali permettono di costruire scafi con un rapporto resistenza/peso 5 volte superiore all'acciaio. La laminazione in autoclave a 180°C e 7 bar di pressione garantisce una distribuzione omogenea della resina e l'assenza di vuoti.",
      },
      {
        heading: "Compositi ibridi e sandwich",
        text: "Le strutture sandwich con core in schiuma Corecell o nido d'ape Nomex offrono rigidità eccezionale con peso minimo. I compositi ibridi carbonio-kevlar combinano la rigidità del carbonio con la resistenza all'impatto del kevlar, ideali per zone soggette a urti come la prua e la carena. Le nuove resine bio-based, derivate da fonti vegetali, riducono l'impatto ambientale senza compromettere le prestazioni.",
      },
      {
        heading: "Nanotecnologie e materiali intelligenti",
        text: "L'integrazione di nanotubi di carbonio nelle resine epossidiche migliora la resistenza alla fatica del 30% e aggiunge proprietà di auto-diagnosi: microcrepe nello scafo modificano la conducibilità elettrica del composito, permettendo il rilevamento precoce di danni strutturali. I rivestimenti nanotecnologici antivegetativi riducono la crescita di alghe e organismi marini senza rilasciare sostanze tossiche.",
      },
    ],
    specs: [
      { label: "Fibra principale", value: "Toray T800S / T1000G" },
      { label: "Resistenza a trazione", value: "6.000 MPa" },
      { label: "Modulo elastico", value: "300+ GPa" },
      { label: "Core sandwich", value: "Nomex / Corecell" },
      { label: "Processo", value: "Pre-preg autoclave 180°C" },
      { label: "Risparmio peso", value: "Fino al 60% vs alluminio" },
    ],
  },
];
