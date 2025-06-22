
import { Route } from "react-router-dom";

// Tendances et innovations IA
import TendancesIA2024 from "@/pages/tendances/TendancesIA2024";
import InnovationsIA from "@/pages/tendances/InnovationsIA";

export const TendancesRoutes = () => (
  <>
    <Route path="/tendances-ia-2024" element={<TendancesIA2024 />} />
    <Route path="/innovations-ia" element={<InnovationsIA />} />
  </>
);
