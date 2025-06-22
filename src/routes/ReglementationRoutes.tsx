
import { Route } from "react-router-dom";

// Réglementation et conformité IA
import RGPDIA from "@/pages/reglementation/RGPDIA";
import LoisIA from "@/pages/reglementation/LoisIA";

export const ReglementationRoutes = () => (
  <>
    <Route path="/rgpd-ia" element={<RGPDIA />} />
    <Route path="/lois-ia" element={<LoisIA />} />
  </>
);
