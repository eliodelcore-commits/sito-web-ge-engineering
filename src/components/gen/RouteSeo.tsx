import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE_URL, metaForPath, normalizePath } from "@/lib/seo";

// Ogni pagina comunica a Google il proprio titolo, la propria descrizione
// e il proprio indirizzo, così i risultati di ricerca escono corretti.
const RouteSeo = () => {
  const { pathname } = useLocation();
  const clean = normalizePath(pathname);
  const meta = metaForPath(pathname);
  const url = `${SITE_URL}${clean === "/" ? "/" : clean}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      {meta.noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
};

export default RouteSeo;
