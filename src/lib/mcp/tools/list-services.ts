import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../data/company";

export default defineTool({
  name: "list_services",
  title: "Elenca i servizi",
  description:
    "Elenca i servizi di automazione industriale offerti da GenGinering Solutions, con descrizione, punti chiave e pagina del sito.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});