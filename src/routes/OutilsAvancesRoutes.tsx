
import { Route } from "react-router-dom";
import IAEmbedded from "@/pages/formations/IAEmbedded";
import GameDevelopmentAI from "@/pages/formations/GameDevelopmentAI";
import NoCode from "@/pages/formations/NoCode";
import MLSecurite from "@/pages/formations/MLSecurite";
import QuantumComputing from "@/pages/formations/QuantumComputing";
import NeuralNetworks from "@/pages/formations/NeuralNetworks";
import Logistique from "@/pages/secteurs/Logistique";
import ConseilTransition from "@/pages/services/ConseilTransition";
import VisionParOrdinateur from "@/pages/formations/VisionParOrdinateur";
import RobotiqueIA from "@/pages/formations/RobotiqueIA";
import Transport from "@/pages/secteurs/Transport";
import FormationPersonnalisee from "@/pages/services/FormationPersonnalisee";
import MLFlowOps from "@/pages/formations/MLFlowOps";
import ConsultingStrategique from "@/pages/services/ConsultingStrategique";
import ReinforcementLearning from "@/pages/formations/ReinforcementLearning";
import AssuranceIA from "@/pages/industries/AssuranceIA";
import GuideDebutantChatGPT from "@/pages/guides/GuideDebutantChatGPT";
import GuidePromptAdvance from "@/pages/guides/GuidePromptAdvance";
import Immobilier from "@/pages/secteurs/Immobilier";
import IAConversationnelle from "@/pages/formations/IAConversationnelle";
import GoogleBard from "@/pages/formations/GoogleBard";
import MicrosoftCopilot from "@/pages/formations/MicrosoftCopilot";
import OpenAIAPI from "@/pages/formations/OpenAIAPI";
import IAEthiqueResponsable from "@/pages/services/IA-Ethique-Responsable";

const OutilsAvancesRoutes = () => {
  return (
    <>
      <Route path="/ia-embedded" element={<IAEmbedded />} />
      <Route path="/game-development-ai" element={<GameDevelopmentAI />} />
      <Route path="/no-code" element={<NoCode />} />
      <Route path="/ml-securite" element={<MLSecurite />} />
      <Route path="/quantum-computing" element={<QuantumComputing />} />
      <Route path="/neural-networks" element={<NeuralNetworks />} />
      <Route path="/logistique" element={<Logistique />} />
      <Route path="/conseil-transition" element={<ConseilTransition />} />
      <Route path="/vision-par-ordinateur" element={<VisionParOrdinateur />} />
      <Route path="/robotique-ia" element={<RobotiqueIA />} />
      <Route path="/transport" element={<Transport />} />
      <Route path="/formation-personnalisee" element={<FormationPersonnalisee />} />
      <Route path="/mlflow-ops" element={<MLFlowOps />} />
      <Route path="/consulting-strategique" element={<ConsultingStrategique />} />
      <Route path="/reinforcement-learning" element={<ReinforcementLearning />} />
      <Route path="/assurance-ia" element={<AssuranceIA />} />
      <Route path="/guide-debutant-chatgpt" element={<GuideDebutantChatGPT />} />
      <Route path="/guide-prompt-avance" element={<GuidePromptAdvance />} />
      <Route path="/immobilier" element={<Immobilier />} />
      <Route path="/ia-conversationnelle" element={<IAConversationnelle />} />
      <Route path="/google-bard" element={<GoogleBard />} />
      <Route path="/microsoft-copilot" element={<MicrosoftCopilot />} />
      <Route path="/openai-api" element={<OpenAIAPI />} />
      <Route path="/ia-ethique-responsable" element={<IAEthiqueResponsable />} />
    </>
  );
};

export default OutilsAvancesRoutes;
