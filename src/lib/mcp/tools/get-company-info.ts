import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../data/company";

export default defineTool({
  name: "get_company_info",
  title: "Informazioni azienda e contatti",
  description:
    "Restituisce i dati pubblici di GenGinering Solutions: descrizione, indirizzo, email, telefono e sito web.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(company, null, 2) }],
    structuredContent: { company },
  }),
});