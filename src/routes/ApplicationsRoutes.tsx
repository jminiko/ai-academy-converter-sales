
import { Route } from "react-router-dom";

// Applications métier de l'IA
import IARecruitement from "@/pages/applications/IARecruitement";
import IAComptabilite from "@/pages/applications/IAComptabilite";
import IAMarketing from "@/pages/applications/IAMarketing";
import IAVente from "@/pages/applications/IAVente";

export const ApplicationsRoutes = () => (
  <>
    <Route path="/ia-recrutement" element={<IARecruitement />} />
    <Route path="/ia-comptabilite" element={<IAComptabilite />} />
    <Route path="/ia-marketing" element={<IAMarketing />} />
    <Route path="/ia-vente" element={<IAVente />} />
  </>
);
