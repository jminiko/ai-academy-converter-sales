
import { Route } from "react-router-dom";

// Import industry and application pages
import TourismIA from "@/pages/industries/TourismIA";
import SportIA from "@/pages/industries/SportIA";
import AgricultureIA from "@/pages/industries/AgricultureIA";
import Industrie40 from "@/pages/industries/Industrie40";
import BlockchainAI from "@/pages/technologies/BlockchainAI";
import IoTAI from "@/pages/technologies/IoTAI";
import SolutionIAVente from "@/pages/solutions/SolutionIAVente";
import SolutionIAMarketing from "@/pages/solutions/SolutionIAMarketing";

export const IndustryApplicationRoutes = () => {
  return (
    <>
      {/* Industries */}
      <Route key="tourism-ia" path="/tourism-ia" element={<TourismIA />} />
      <Route key="sport-ia" path="/sport-ia" element={<SportIA />} />
      <Route key="agriculture-ia" path="/agriculture-ia" element={<AgricultureIA />} />
      <Route key="industrie-40" path="/industrie-40" element={<Industrie40 />} />
      
      {/* Technologies */}
      <Route key="blockchain-ai" path="/blockchain-ai" element={<BlockchainAI />} />
      <Route key="iot-ai" path="/iot-ai" element={<IoTAI />} />
      
      {/* Solutions */}
      <Route key="solution-ia-vente" path="/solution-ia-vente" element={<SolutionIAVente />} />
      <Route key="solution-ia-marketing" path="/solution-ia-marketing" element={<SolutionIAMarketing />} />
    </>
  );
};
