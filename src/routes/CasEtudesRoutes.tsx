
import { Route } from "react-router-dom";

// Cas d'études détaillés
import CasEtudeManufacturing from "@/pages/cas-etudes/CasEtudeManufacturing";
import CasEtudeStartup from "@/pages/cas-etudes/CasEtudeStartup";

export const CasEtudesRoutes = () => (
  <>
    <Route path="/cas-etude-manufacturing" element={<CasEtudeManufacturing />} />
    <Route path="/cas-etude-startup" element={<CasEtudeStartup />} />
  </>
);
