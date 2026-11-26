import { describe, expect, it } from "vitest";
import { techLinkedPaths } from "@/components/gen/TechTag";
import { industrialTopics, technologyTopicPath } from "@/data/industrialTopics";
import { pageMeta } from "@/lib/seo";

describe("collegamenti dei tag tecnologici", () => {
  it.each([
    ["Allarmi e messaggi", "/tecnologie/wincc-allarmi-messaggi"],
    ["WinCC Runtime", "/tecnologie/wincc-runtime"],
    ["User Administration", "/tecnologie/wincc-user-administration"],
    ["Recipe Management", "/tecnologie/wincc-recipe-management"],
    ["Report Designer", "/tecnologie/wincc-report-designer"],
  ])("%s apre il proprio approfondimento e non riapre WinCC SCADA", (tag, path) => {
    expect(techLinkedPaths[tag]).toBe(path);
    expect(techLinkedPaths[tag]).not.toBe("/wincc-scada");
  });

  it("SEW MOVIDRIVE B apre la pagina dedicata", () => {
    expect(techLinkedPaths["SEW MOVIDRIVE B"]).toBe("/tecnologie/sew-movidrive");
  });

  it("Cobot apre la pagina dedicata", () => {
    expect(techLinkedPaths.Cobot).toBe("/tecnologie/cobot");
  });

  it.each([
    ["S7-1515 Motion", "/tecnologie/s7-1500"],
    ["ET200SP", "/tecnologie/et200"],
    ["ET200SP-F", "/tecnologie/profisafe"],
    ["Scalance XC224", "/tecnologie/scalance"],
    ["2000+ I/O", "/tecnologie/et200"],
  ])("%s apre un approfondimento anche dalle pagine Siemens e SCADA chimico", (tag, path) => {
    expect(techLinkedPaths[tag]).toBe(path);
  });

  it("ogni tag collegato porta a una pagina con titolo e descrizione", () => {
    for (const [tag, path] of Object.entries(techLinkedPaths)) {
      expect(pageMeta[path], `Metadati mancanti per il tag ${tag} verso ${path}`).toBeDefined();
    }
  });

  it("ogni nuovo argomento ha metadati e contenuti illustrativi", () => {
    for (const topic of industrialTopics) {
      const path = technologyTopicPath(topic.slug);
      expect(pageMeta[path]?.title, topic.slug).toContain(topic.title);
      expect(topic.explanation.length, topic.slug).toBeGreaterThan(80);
      expect(topic.application.length, topic.slug).toBeGreaterThan(80);
      expect(topic.points.length, topic.slug).toBeGreaterThanOrEqual(3);
    }
  });
});
