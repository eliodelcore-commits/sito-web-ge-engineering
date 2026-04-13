import boatRacing from "@/assets/boat-racing.jpg";
import boatCruiser from "@/assets/boat-cruiser.jpg";
import boatFoiling from "@/assets/boat-foiling.jpg";
import boatEco from "@/assets/boat-eco.jpg";

export interface Boat {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  specs: { length: string; speed: string; crew: string };
  details: { label: string; value: string }[];
}

export const boats: Boat[] = [
  {
    slug: "clubswan-80",
    name: "ClubSwan 80",
    category: "Performance Racing",
    description:
      "Progettata da Juan Kouyoumdjian, questa 80 piedi combina prestazioni da regata pura con un design elegante. Scafo in fibra di carbonio, chiglia basculante e vele 3Di per dominare le regate d'altura.",
    longDescription:
      "La ClubSwan 80 rappresenta l'apice della gamma performance di Nautor's Swan. Progettata dall'argentino Juan Kouyoumdjian e con interni firmati dal design studio Misa Poggi, unisce la tradizione artigianale finlandese alla più avanzata tecnologia da regata. Lo scafo in fibra di carbonio pre-preg, la chiglia basculante con bulbo in piombo e tungsteno e il piano velico ottimizzato con vele 3Di North Sails la rendono una macchina da regata formidabile, capace di competere ai massimi livelli in eventi come la Rolex Swan Cup e le regate d'altura del circuito IRC.",
    image: boatRacing,
    specs: { length: "24.4 m", speed: "25+ kn", crew: "12-16" },
    details: [
      { label: "Cantiere", value: "Nautor's Swan, Finlandia" },
      { label: "Architetto", value: "Juan K. Design" },
      { label: "Materiale scafo", value: "Carbonio pre-preg" },
      { label: "Dislocamento", value: "19.500 kg" },
      { label: "Superficie velica", value: "450 m²" },
      { label: "Pescaggio", value: "4.5 m (chiglia basculante)" },
    ],
  },
  {
    slug: "aura-51",
    name: "Fountaine Pajot Aura 51",
    category: "Catamarano Luxury",
    description:
      "Il nuovo punto di riferimento per la crociera in catamarano. Spazi interni luminosi, pannelli solari integrati e un sistema di propulsione ibrido elettrico.",
    longDescription:
      "La Fountaine Pajot Aura 51 ridefinisce il concetto di catamarano da crociera. Con un beam di 8.1 metri e un layout intelligente, offre spazi abitativi paragonabili a un appartamento di lusso. La versione Owner dispone di una suite armatoriale a tutta larghezza con bagno privato e vista panoramica. L'innovativo sistema di propulsione ibrido elettrico, abbinato a 2 kW di pannelli solari integrati nel bimini, permette navigazioni silenziose a emissioni zero. Il cantiere francese ha integrato materiali sostenibili come il lino bio-composito per le strutture interne.",
    image: boatCruiser,
    specs: { length: "15.1 m", speed: "12 kn", crew: "2-4" },
    details: [
      { label: "Cantiere", value: "Fountaine Pajot, Francia" },
      { label: "Architetto", value: "Berret-Racoupeau" },
      { label: "Materiale scafo", value: "Fibra di vetro infusa" },
      { label: "Dislocamento", value: "18.200 kg" },
      { label: "Cabine", value: "3-5 (versioni Owner / Charter)" },
      { label: "Propulsione", value: "Ibrido diesel-elettrico" },
    ],
  },
  {
    slug: "ac75",
    name: "AC75 – America's Cup",
    category: "Foiling Monoscafo",
    description:
      "La barca più estrema della vela moderna. Grazie ai foil a T, questo monoscafo vola sull'acqua a velocità superiori ai 50 nodi.",
    longDescription:
      "L'AC75 è il monoscafo foiling di classe unica progettato per la 37ª e 38ª America's Cup. Lungo 75 piedi (22.8 m), è dotato di due foil arm laterali con profilo a T che generano portanza sufficiente a sollevare l'intero scafo dall'acqua. A bordo, l'equipaggio di 8 persone gestisce un sistema di vele rigide e soft sail con un albero di 26.5 metri. Le velocità raggiunte superano i 50 nodi (oltre 90 km/h), rendendo l'AC75 una delle barche a vela più veloci mai costruite. Il controllo del volo è gestito da un sistema fly-by-wire con attuatori idraulici.",
    image: boatFoiling,
    specs: { length: "22.8 m", speed: "50+ kn", crew: "8-11" },
    details: [
      { label: "Classe", value: "AC75 (One Design)" },
      { label: "Regata", value: "38ª America's Cup 2024" },
      { label: "Materiale scafo", value: "Carbonio pre-preg autoclave" },
      { label: "Dislocamento", value: "6.500 kg" },
      { label: "Altezza albero", value: "26.5 m" },
      { label: "Controllo foil", value: "Fly-by-wire idraulico" },
    ],
  },
  {
    slug: "solar-sail-80",
    name: "Solar Sail 80 Concept",
    category: "Eco-Yacht",
    description:
      "Il futuro della vela sostenibile: pannelli solari integrati, propulsione ibrida e materiali riciclati.",
    longDescription:
      "Il Solar Sail 80 è un concept yacht che esplora il futuro della navigazione a vela sostenibile. Lo scafo di 24 metri è costruito con un innovativo composito di fibra di basalto e resina bio-based, riducendo l'impronta di carbonio del 60% rispetto ai materiali tradizionali. Le vele rigide integrano celle fotovoltaiche flessibili che alimentano un sistema di propulsione elettrica da 150 kW. L'autopilota AI ottimizza la rotta in tempo reale per massimizzare l'uso del vento e dell'energia solare. A bordo, sistemi di desalinizzazione e riciclo acque grigie garantiscono autonomia completa.",
    image: boatEco,
    specs: { length: "24 m", speed: "15 kn", crew: "2-6" },
    details: [
      { label: "Tipo", value: "Concept — in sviluppo" },
      { label: "Materiale scafo", value: "Basalto bio-composito" },
      { label: "Propulsione", value: "Full electric 150 kW" },
      { label: "Pannelli solari", value: "12 kW integrati nelle vele" },
      { label: "Autonomia elettrica", value: "200+ nm" },
      { label: "AI Navigation", value: "Ottimizzazione rotta in tempo reale" },
    ],
  },
];
