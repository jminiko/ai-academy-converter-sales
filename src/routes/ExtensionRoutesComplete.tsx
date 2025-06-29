
import { Route } from "react-router-dom";

// Méthodes avancées
import MethodeRAG from "@/pages/methodes-avancees/MethodeRAG";
import MethodeFewShot from "@/pages/methodes-avancees/MethodeFewShot";

// Technologies émergentes
import EdgeAI from "@/pages/technologies-emergentes/EdgeAI";
import FederatedLearning from "@/pages/technologies-emergentes/FederatedLearning";

// Solutions entreprise
import SolutionIARH from "@/pages/solutions-entreprise/SolutionIARH";
import SolutionIAComptabilite from "@/pages/solutions-entreprise/SolutionIAComptabilite";

// Secteurs émergents
import IABiotechnologie from "@/pages/secteurs-emergents/IABiotechnologie";
import IALogistique from "@/pages/secteurs-emergents/IALogistique";
import IAImmobilier from "@/pages/secteurs-emergents/IAImmobilier";

// Formations spécialisées
import FormationIAChirurgie from "@/pages/formations-specialisees/FormationIAChirurgie";
import FormationIAGameDev from "@/pages/formations-specialisees/FormationIAGameDev";
import FormationIAMarketing from "@/pages/formations-specialisees/FormationIAMarketing";
import FormationIACybersecurite from "@/pages/formations-specialisees/FormationIACybersecurite";

// Outils émergents
import OutilOpenAIGPT5 from "@/pages/outils-emergents/OutilOpenAIGPT5";
import OutilHuggingFace from "@/pages/outils-emergents/OutilHuggingFace";
import OutilLangChain from "@/pages/outils-emergents/OutilLangChain";

// Cas d'usage avancés
import CasUsageIAQuantique from "@/pages/cas-usage-avances/CasUsageIAQuantique";
import CasUsageIAEducation from "@/pages/cas-usage-avances/CasUsageIAEducation";
import CasUsageIATourisme from "@/pages/cas-usage-avances/CasUsageIATourisme";

// Extension complète des routes - 600+ pages totales
const ExtensionRoutesComplete = () => {
  return (
    <>
      {/* Méthodes avancées */}
      <Route key="methode-rag" path="/methode-rag" element={<MethodeRAG />} />
      <Route key="methode-few-shot" path="/methode-few-shot" element={<MethodeFewShot />} />
      
      {/* Technologies émergentes */}
      <Route key="edge-ai" path="/edge-ai" element={<EdgeAI />} />
      <Route key="federated-learning" path="/federated-learning" element={<FederatedLearning />} />
      
      {/* Solutions entreprise */}
      <Route key="solution-ia-rh" path="/solution-ia-rh" element={<SolutionIARH />} />
      <Route key="solution-ia-comptabilite" path="/solution-ia-comptabilite" element={<SolutionIAComptabilite />} />
      
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

export default ExtensionRoutesComplete;
