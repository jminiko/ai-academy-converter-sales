import { Route } from "react-router-dom";

// Solutions Métier
import SolutionGestionTalents from "@/pages/solutions/SolutionGestionTalents";
import SolutionServiceClient from "@/pages/solutions/SolutionServiceClient";
import SolutionGestionStocks from "@/pages/solutions/SolutionGestionStocks";

// Existing solution pages
import SolutionAutomatisationFacturation from "@/pages/solutions/SolutionAutomatisationFacturation";

export const SolutionsRoutes = () => (
  <>
    {/* Solutions Métier */}
    <Route path="/solution-automatisation-facturation" element={<SolutionAutomatisationFacturation />} />
    <Route path="/solution-gestion-talents" element={<SolutionGestionTalents />} />
    <Route path="/solution-service-client" element={<SolutionServiceClient />} />
    <Route path="/solution-gestion-stocks" element={<SolutionGestionStocks />} />
  </>
);
