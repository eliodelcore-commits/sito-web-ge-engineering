import { Link } from "react-router-dom";
import { technologyTagPaths, technologyTopicPath } from "@/data/industrialTopics";

// Mappa centralizzata: tag tecnologico → pagina dedicata
export const techLinkedPaths: Record<string, string> = {
  ...technologyTagPaths,
  "WinCC SCADA": "/wincc-scada",
  "OPC-UA": "/opc-ua",
  "S7-1516F Safety": "/s7-safety",
  Historian: "/historian",
  HMI: "/hmi",
  ESD: "/esd",
  Profinet: "/profinet",
  Safety: "/safety",
  "PLC Siemens": "/siemens",
  "Scalance X": "/siemens",
  "Scalance XC224": technologyTopicPath("scalance"),
  ET200SP: technologyTopicPath("et200"),
  "ET200SP-F": technologyTopicPath("profisafe"),
  "S7-1515 Motion": technologyTopicPath("s7-1500"),
  "Visione Artificiale": "/visione-artificiale",
  "Ekahau AI": "/ekahau",
  Ekahau: "/ekahau",
  "Ekahau Sidekick": "/ekahau",
  "Ekahau Sidekick 2": "/ekahau",
  IoT: "/iot",
  IIoT: "/iot",
};

interface TechTagProps {
  tag: string;
  size?: "sm" | "xs";
}

const TechTag = ({ tag, size = "sm" }: TechTagProps) => {
  const path = techLinkedPaths[tag];
  const sizeClasses =
    size === "xs" ? "px-2.5 py-1 text-xs" : "px-3 py-1 text-sm";
  const base = `${sizeClasses} rounded-md bg-secondary text-secondary-foreground`;

  if (path) {
    return (
      <Link
        to={path}
        className={`${base} hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer`}
      >
        {tag}
      </Link>
    );
  }
  return <span className={base}>{tag}</span>;
};

export default TechTag;