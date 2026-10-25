# AGENTS.md

Regole tecniche del progetto. Le preferenze di contenuto (prezzi, contatti, toni, colori) stanno in mem://, non qui.

- Ogni email in uscita dal sito (form contatti e form dell'area consulente) passa dalla funzione `send-message`, che la consegna all'account Gmail collegato. Nessun form deve aprire il client email del visitatore con `mailto:`.
- Le credenziali dei connettori (Gmail, Google Maps) restano nel backend: le chiamate al gateway partono solo da lì; il browser vede soltanto la chiave pubblica di Google Maps.
- Le coordinate della sede per la mappa si prendono da Google Geocoding (place_id di Via Idice 47), non si scrivono a mano: se l'indirizzo cambia, si ri-geocoda.
- Titolo e descrizione di ogni pagina stanno nella mappa in `src/lib/seo.ts` e li applica `RouteSeo`: una pagina pubblica nuova si aggiunge lì e in `public/sitemap.xml`, e `index.html` tiene solo i tag fissi dell'azienda più una descrizione di riserva marcata `data-rh="true"`, così Helmet la sostituisce invece di duplicarla (i duplicati confondono Google).
