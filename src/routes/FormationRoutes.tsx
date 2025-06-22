
import { Route } from "react-router-dom";

// Existing specialized formation pages
import FormationChatGPTEntreprise from "@/pages/formations/FormationChatGPTEntreprise";
import FormationAutomatisationProcessus from "@/pages/formations/FormationAutomatisationProcessus";
import PromptEngineering from "@/pages/formations/PromptEngineering";
import FormationIAMarketing from "@/pages/formations/FormationIAMarketing";
import FormationRPAZapier from "@/pages/formations/FormationRPAZapier";
import FormationIAComptabilite from "@/pages/formations/FormationIAComptabilite";
import BigData from "@/pages/formations/BigData";
import AutoMLPlatforms from "@/pages/formations/AutoMLPlatforms";
import AutomatisationTests from "@/pages/formations/AutomatisationTests";
import AutomatisationRobotique from "@/pages/formations/AutomatisationRobotique";
import AutoMLNoCode from "@/pages/formations/AutoMLNoCode";
import BlockchainIA from "@/pages/formations/BlockchainIA";
import AutomatisationMarketing from "@/pages/formations/AutomatisationMarketing";
import ClaudeAI from "@/pages/formations/ClaudeAI";
import ChatGPTPro from "@/pages/formations/ChatGPTPro";

// Nouvelle catégorie: Formations Techniques IA
import FormationTensorFlow from "@/pages/formations/FormationTensorFlow";
import FormationPyTorchAvance from "@/pages/formations/FormationPyTorchAvance";
import FormationVisionIA from "@/pages/formations/FormationVisionIA";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationMLOpsProduction from "@/pages/formations/FormationMLOpsProduction";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationReseauxNeurones from "@/pages/formations/FormationReseauxNeurones";
import FormationApprentissageRenforce from "@/pages/formations/FormationApprentissageRenforce";
import FormationIAEthique from "@/pages/formations/FormationIAEthique";
import FormationOptimisationIA from "@/pages/formations/FormationOptimisationIA";

// Formations Sectorielles
import FormationIASante from "@/pages/formations/FormationIASante";
import FormationIAFinance from "@/pages/formations/FormationIAFinance";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";
import FormationIAEducation from "@/pages/formations/FormationIAEducation";
import FormationIARetail from "@/pages/formations/FormationIARetail";
import FormationIALogistique from "@/pages/formations/FormationIALogistique";
import FormationIAImmobilier from "@/pages/formations/FormationIAImmobilier";
import FormationIAAgriculture from "@/pages/formations/FormationIAAgriculture";
import FormationIATransport from "@/pages/formations/FormationIATransport";
import FormationIAEnergie from "@/pages/formations/FormationIAEnergie";

const FormationRoutes = () => {
  return (
    <>
      {/* Specialized formation routes */}
      <Route path="/formation-chatgpt-entreprise" element={<FormationChatGPTEntreprise />} />
      <Route path="/formation-automatisation-processus" element={<FormationAutomatisationProcessus />} />
      <Route path="/formation-prompt-engineering" element={<PromptEngineering />} />
      <Route path="/formation-ia-marketing" element={<FormationIAMarketing />} />
      <Route path="/formation-rpa-zapier" element={<FormationRPAZapier />} />
      <Route path="/formation-ia-comptabilite" element={<FormationIAComptabilite />} />
      <Route path="/formation-big-data" element={<BigData />} />
      <Route path="/formation-automl-platforms" element={<AutoMLPlatforms />} />
      <Route path="/formation-automatisation-tests" element={<AutomatisationTests />} />
      <Route path="/formation-automatisation-robotique" element={<AutomatisationRobotique />} />
      <Route path="/formation-automl-nocode" element={<AutoMLNoCode />} />
      <Route path="/formation-blockchain-ia" element={<BlockchainIA />} />
      <Route path="/formation-automatisation-marketing" element={<AutomatisationMarketing />} />
      <Route path="/formation-claude-ai" element={<ClaudeAI />} />
      <Route path="/formation-chatgpt-pro" element={<ChatGPTPro />} />

      {/* Formations Techniques IA */}
      <Route path="/formation-tensorflow" element={<FormationTensorFlow />} />
      <Route path="/formation-pytorch-avance" element={<FormationPyTorchAvance />} />
      <Route path="/formation-vision-ia" element={<FormationVisionIA />} />
      <Route path="/formation-nlp-avance" element={<FormationNLPAvance />} />
      <Route path="/formation-mlops-production" element={<FormationMLOpsProduction />} />
      <Route path="/formation-ia-quantique" element={<FormationIAQuantique />} />
      <Route path="/formation-reseaux-neurones" element={<FormationReseauxNeurones />} />
      <Route path="/formation-apprentissage-renforce" element={<FormationApprentissageRenforce />} />
      <Route path="/formation-ia-ethique" element={<FormationIAEthique />} />
      <Route path="/formation-optimisation-ia" element={<FormationOptimisationIA />} />

      {/* Formations Sectorielles */}
      <Route path="/formation-ia-sante" element={<FormationIASante />} />
      <Route path="/formation-ia-finance" element={<FormationIAFinance />} />
      <Route path="/formation-ia-industrie" element={<FormationIAIndustrie />} />
      <Route path="/formation-ia-education" element={<FormationIAEducation />} />
      <Route path="/formation-ia-retail" element={<FormationIARetail />} />
      <Route path="/formation-ia-logistique" element={<FormationIALogistique />} />
      <Route path="/formation-ia-immobilier" element={<FormationIAImmobilier />} />
      <Route path="/formation-ia-agriculture" element={<FormationIAAgriculture />} />
      <Route path="/formation-ia-transport" element={<FormationIATransport />} />
      <Route path="/formation-ia-energie" element={<FormationIAEnergie />} />
    </>
  );
};

export default FormationRoutes;
