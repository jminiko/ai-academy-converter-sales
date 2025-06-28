
import { Route } from "react-router-dom";

// Import des nouvelles pages créées
import IABiotechnologie from "@/pages/secteurs-emergents/IABiotechnologie";
import FormationIAChirurgie from "@/pages/formations-specialisees/FormationIAChirurgie";
import OutilOpenAIGPT5 from "@/pages/outils-emergents/OutilOpenAIGPT5";
import CasUsageIAQuantique from "@/pages/cas-usage-avances/CasUsageIAQuantique";

// Nouvelles routes pour enrichir le contenu - 550+ pages
const NouvellePagesRoutes = () => {
  return (
    <>
      {/* Secteurs émergents */}
      <Route key="ia-biotechnologie" path="/ia-biotechnologie" element={<IABiotechnologie />} />
      
      {/* Formations spécialisées */}
      <Route key="formation-ia-chirurgie" path="/formation-ia-chirurgie" element={<FormationIAChirurgie />} />
      
      {/* Outils émergents */}
      <Route key="outil-openai-gpt5" path="/outil-openai-gpt5" element={<OutilOpenAIGPT5 />} />
      
      {/* Cas d'usage avancés */}
      <Route key="cas-usage-ia-quantique" path="/cas-usage-ia-quantique" element={<CasUsageIAQuantique />} />
    </>
  );
};

export default NouvellePagesRoutes;
