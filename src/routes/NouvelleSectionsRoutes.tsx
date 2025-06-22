
import { Route } from "react-router-dom";

// Nouvelles formations
import FormationIABusiness from "@/pages/formations/FormationIABusiness";
import FormationIALeadership from "@/pages/formations/FormationIALeadership";
import FormationIAGestion from "@/pages/formations/FormationIAGestion";

// Nouvelles industries
import TourismIA from "@/pages/industries/TourismIA";
import SportIA from "@/pages/industries/SportIA";

// Nouvelles technologies
import BlockchainAI from "@/pages/technologies/BlockchainAI";
import IoTAI from "@/pages/technologies/IoTAI";

const NouvelleSectionsRoutes = () => {
  return (
    <>
      {/* Nouvelles formations business */}
      <Route path="/formation-ia-business" element={<FormationIABusiness />} />
      <Route path="/formation-ia-leadership" element={<FormationIALeadership />} />
      <Route path="/formation-ia-gestion" element={<FormationIAGestion />} />
      
      {/* Nouvelles industries */}
      <Route path="/tourism-ia" element={<TourismIA />} />
      <Route path="/sport-ia" element={<SportIA />} />
      
      {/* Nouvelles technologies */}
      <Route path="/blockchain-ai" element={<BlockchainAI />} />
      <Route path="/iot-ai" element={<IoTAI />} />
    </>
  );
};

export default NouvelleSectionsRoutes;
