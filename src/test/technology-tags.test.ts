import { describe, expect, it } from "vitest";
import { techLinkedPaths } from "@/components/gen/TechTag";
import { industrialTopics, technologyTopicPath } from "@/data/industrialTopics";
import { pageMeta } from "@/lib/seo";

describe("collegamenti dei tag tecnologici", () => {
  it("SEW MOVIDRIVE B apre la pagina dedicata", () => {
    expect(techLinkedPaths["SEW MOVIDRIVE B"]).toBe("/tecnologie/sew-movidrive");
  });

  it("Cobot apre la pagina dedicata", () => {
    expect(techLinkedPaths.Cobot).toBe("/tecnologie/cobot");
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
