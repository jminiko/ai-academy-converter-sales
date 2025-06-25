
import { Route } from "react-router-dom";
import TendancesIA2025 from "@/pages/actualites/TendancesIA2025";

const ActualitesRoutes = () => {
  return (
    <>
      <Route path="/tendances-ia-2025" element={<TendancesIA2025 />} />
    </>
  );
};

export default ActualitesRoutes;
