
import { Route } from "react-router-dom";

// Import des nouvelles pages créées
import IABiotechnologie from "@/pages/secteurs-emergents/IABiotechnologie";
import FormationIAChirurgie from "@/pages/formations-specialisees/FormationIAChirurgie";
import OutilOpenAIGPT5 from "@/pages/outils-emergents/OutilOpenAIGPT5";
import CasUsageIAQuantique from "@/pages/cas-usage-avances/CasUsageIAQuantique";

// Nouvelles formations spécialisées
import FormationIAGameDev from "@/pages/formations-specialisees/FormationIAGameDev";
import FormationIAMarketing from "@/pages/formations-specialisees/FormationIAMarketing";
import FormationIACybersecurite from "@/pages/formations-specialisees/FormationIACybersecurite";

// Nouveaux secteurs émergents
import IALogistique from "@/pages/secteurs-emergents/IALogistique";
import IAImmobilier from "@/pages/secteurs-emergents/IAImmobilier";

// Nouveaux outils émergents
import OutilHuggingFace from "@/pages/outils-emergents/OutilHuggingFace";
import OutilLangChain from "@/pages/outils-emergents/OutilLangChain";

// Nouveaux cas d'usage avancés
import CasUsageIAEducation from "@/pages/cas-usage-avances/CasUsageIAEducation";
import CasUsageIATourisme from "@/pages/cas-usage-avances/CasUsageIATourisme";

// Nouvelles routes pour enrichir le contenu - 570+ pages
const NouvellePagesRoutes = () => {
  return (
    <>
      {/* Secteurs émergents */}
      <Route key="ia-biotechnologie" path="/ia-biotechnologie" element={<IABiotechnologie />} />
      <Route key="ia-logistique" path="/ia-logistique" element={<IALogistique />} />
      <Route key="ia-immobilier" path="/ia-immobilier" element={<IAImmobilier />} />
      
      {/* Formations spécialisées */}
      <Route key="formation-ia-chirurgie" path="/formation-ia-chirurgie" element={<FormationIAChirurgie />} />
      <Route key="formation-ia-gamedev" path="/formation-ia-gamedev" element={<FormationIAGameDev />} />
      <Route key="formation-ia-marketing" path="/formation-ia-marketing" element={<FormationIAMarketing />} />
      <Route key="formation-ia-cybersecurite" path="/formation-ia-cybersecurite" element={<FormationIACybersecurite />} />
      
      {/* Outils émergents */}
      <Route key="outil-openai-gpt5" path="/outil-openai-gpt5" element={<OutilOpenAIGPT5 />} />
      <Route key="outil-huggingface" path="/outil-huggingface" element={<OutilHuggingFace />} />
      <Route key="outil-langchain" path="/outil-langchain" element={<OutilLangChain />} />
      
      {/* Cas d'usage avancés */}
      <Route key="cas-usage-ia-quantique" path="/cas-usage-ia-quantique" element={<CasUsageIAQuantique />} />
      <Route key="cas-usage-ia-education" path="/cas-usage-ia-education" element={<CasUsageIAEducation />} />
      <Route key="cas-usage-ia-tourisme" path="/cas-usage-ia-tourisme" element={<CasUsageIATourisme />} />
    </>
  );
};

export default NouvellePagesRoutes;
