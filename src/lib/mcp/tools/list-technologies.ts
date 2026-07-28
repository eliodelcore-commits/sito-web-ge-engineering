import { defineTool } from "@lovable.dev/mcp-js";
import { technologies } from "../data/company";

export default defineTool({
  name: "list_technologies",
  title: "Elenca le tecnologie",
  description:
    "Elenca le tecnologie industriali documentate sul sito (WinCC SCADA, OPC-UA, Profinet, Safety, Ekahau, IoT...) con la pagina di approfondimento.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(technologies, null, 2) }],
    structuredContent: { technologies },
  }),
});