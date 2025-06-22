
import { Route } from "react-router-dom";

// Webinaires spécialisés
import WebinaireFutureIA from "@/pages/webinaires/WebinaireFutureIA";
import WebinaireIndustrieIA from "@/pages/webinaires/WebinaireIndustrieIA";

export const WebinairesRoutes = () => (
  <>
    <Route path="/webinaire-futur-ia" element={<WebinaireFutureIA />} />
    <Route path="/webinaire-industrie-ia" element={<WebinaireIndustrieIA />} />
  </>
);
