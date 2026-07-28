import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data/company";

export default defineTool({
  name: "list_projects",
  title: "Elenca i progetti",
  description:
    "Elenca i progetti/case study pubblici di GenGinering Solutions. Opzionalmente filtra per categoria o per tecnologia (tag).",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Categoria: Automazione Hardware, Automazione Software o Wireless Planning."),
    tag: z.string().optional().describe("Tecnologia da cercare nei tag, es. 'WinCC SCADA'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, tag }) => {
    const items = projects.filter(
      (p) =>
        (!category || p.category.toLowerCase() === category.toLowerCase()) &&
        (!tag || p.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))),
    );
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});