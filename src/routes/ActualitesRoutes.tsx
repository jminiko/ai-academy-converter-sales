
import { Route } from "react-router-dom";
import TendancesIA2025 from "@/pages/actualites/TendancesIA2025";
import InnovationsIA2025 from "@/pages/actualites/InnovationsIA2025";
import RevolutionIA2025 from "@/pages/actualites/RevolutionIA2025";

const ActualitesRoutes = () => {
  return (
    <>
      <Route path="/tendances-ia-2025" element={<TendancesIA2025 />} />
      <Route path="/innovations-ia-2025" element={<InnovationsIA2025 />} />
      <Route path="/revolution-ia-2025" element={<RevolutionIA2025 />} />
    </>
  );
};

export default ActualitesRoutes;
