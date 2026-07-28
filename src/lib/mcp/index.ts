import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfoTool from "./tools/get-company-info";
import listProjectsTool from "./tools/list-projects";
import listServicesTool from "./tools/list-services";
import listTechnologiesTool from "./tools/list-technologies";

export default defineMcp({
  name: "genginering-mcp",
  title: "GenGinering Solutions MCP",
  version: "0.1.0",
  instructions:
    "Strumenti pubblici del sito GenGinering Solutions (automazione industriale). Usa `list_services` per i servizi, `list_projects` per i case study (filtrabili per categoria o tecnologia), `list_technologies` per le schede tecniche e `get_company_info` per contatti e sede.",
  tools: [listServicesTool, listProjectsTool, listTechnologiesTool, getCompanyInfoTool],
});