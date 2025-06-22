
import { Route } from "react-router-dom";

// Solutions avancées
import AutomatisationRessourcesHumaines from "@/pages/solutions/AutomatisationRessourcesHumaines";
import OptimisationChaineFourniture from "@/pages/solutions/OptimisationChaineFourniture";

// Solutions existantes
import SolutionAutomatisationFacturation from "@/pages/solutions/SolutionAutomatisationFacturation";
import SolutionGestionTalents from "@/pages/solutions/SolutionGestionTalents";
import SolutionServiceClient from "@/pages/solutions/SolutionServiceClient";
import SolutionGestionStocks from "@/pages/solutions/SolutionGestionStocks";

export const SolutionsAvanceesRoutes = () => (
  <>
    {/* Solutions avancées */}
    <Route path="/solution-automatisation-rh" element={<AutomatisationRessourcesHumaines />} />
    <Route path="/solution-optimisation-supply-chain" element={<OptimisationChaineFourniture />} />
    
    {/* Solutions existantes */}
    <Route path="/solution-automatisation-facturation" element={<SolutionAutomatisationFacturation />} />
    <Route path="/solution-gestion-talents" element={<SolutionGestionTalents />} />
    <Route path="/solution-service-client" element={<SolutionServiceClient />} />
    <Route path="/solution-gestion-stocks" element={<SolutionGestionStocks />} />
  </>
);
