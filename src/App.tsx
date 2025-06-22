
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SitemapPage from "./pages/Sitemap";

// Nouvelles pages principales
import Inscription from "./pages/Inscription";
import Merci from "./pages/Merci";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import Certifications from "./pages/Certifications";

// Pages en anglais
import AITrainingFinance from "./pages/en/AITrainingFinance";
import ContactEN from "./pages/en/ContactEN";

// Route spéciale pour FormationIAFinance
import FormationIAFinance from "./pages/formations/FormationIAFinance";

// Imports pour toutes les formations
import FormationIAExplicable from "@/pages/formations/FormationIAExplicable";
import DeepLearningAvance from "@/pages/formations/DeepLearningAvance";
import FormationTransformersAvances from "@/pages/formations/FormationTransformersAvances";
import FormationModelesGeneratifsAvances from "@/pages/formations/FormationModelesGeneratifsAvances";
import EdgeAI from "@/pages/formations/EdgeAI";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";
import FormationIASante from "@/pages/formations/FormationIASante";
import FormationIAEthique from "@/pages/formations/FormationIAEthique";
import FormationIARetail from "@/pages/formations/FormationIARetail";
import FormationIAEnergie from "@/pages/formations/FormationIAEnergie";
import FormationMLOpsProduction from "@/pages/formations/FormationMLOpsProduction";
import FormationOptimisationIA from "@/pages/formations/FormationOptimisationIA";
import FormationIABanque from "@/pages/formations/FormationIABanque";
import FormationIAAssurance from "@/pages/formations/FormationIAAssurance";

// Imports pour guides
import GuideDebutantIA from "@/pages/guides/GuideDebutantIA";
import GuideAvanceIA from "@/pages/guides/GuideAvanceIA";
import GuideMLOps from "@/pages/guides/GuideMLOps";
import GuideIA2025 from "@/pages/guides/GuideIA2025";
import GuideImplementationIA from "@/pages/guides/GuideImplementationIA";
import GuideOptimisationModeles from "@/pages/guides/GuideOptimisationModeles";
import GuideAutomatisationBureau from "@/pages/guides/GuideAutomatisationBureau";
import GuideDebutantChatGPT from "@/pages/guides/GuideDebutantChatGPT";
import GuidePromptAdvance from "@/pages/guides/GuidePromptAdvance";

// Imports pour solutions
import DeveloppementIA from "@/pages/services/DeveloppementIA";
import ConseilStrategique from "@/pages/services/ConseilStrategique";
import AuditIA from "@/pages/services/AuditIA";
import MaintenanceIA from "@/pages/services/MaintenanceIA";
import ConseilTransition from "@/pages/services/ConseilTransition";
import ConsultingStrategique from "@/pages/services/ConsultingStrategique";
import FormationPersonnalisee from "@/pages/services/FormationPersonnalisee";
import IAEthiqueResponsable from "@/pages/services/IA-Ethique-Responsable";

// Imports pour outils
import OutilGPT4 from "@/pages/outils/OutilGPT4";

// Imports pour applications
import AgricultureIA from "@/pages/industries/AgricultureIA";

// Imports pour secteurs
import Sante from "@/pages/secteurs/Sante";
import Finance from "@/pages/secteurs/Finance";
import Education from "@/pages/secteurs/Education";
import Automobile from "@/pages/secteurs/Automobile";
import Retail from "@/pages/secteurs/Retail";
import Defense from "@/pages/secteurs/Defense";
import Maritime from "@/pages/secteurs/Maritime";
import BTP from "@/pages/secteurs/BTP";
import SecteurBanqueAssurance from "@/pages/secteurs/SecteurBanqueAssurance";
import SecteurHotellerie from "@/pages/secteurs/SecteurHotellerie";
import Logistique from "@/pages/secteurs/Logistique";
import Transport from "@/pages/secteurs/Transport";
import Immobilier from "@/pages/secteurs/Immobilier";

// Imports pour technologies
import TensorFlow from "@/pages/formations/TensorFlow";
import PyTorch from "@/pages/formations/PyTorch";
import PythonIA from "@/pages/formations/PythonIA";

// Imports pour webinaires
import Webinaires from "@/pages/Webinaires";

// Imports pour cas d'études
import CasUsageIA1 from "@/pages/cas-etudes/CasUsageIA1";

// Imports pour certifications avancées
import CertificationIA10 from "@/pages/certifications-avancees/CertificationIA10";

// Imports pour formations avancées
import MLOps from "@/pages/formations/MLOps";
import RoboticsAI from "@/pages/formations/RoboticsAI";
import GenerativeAI from "@/pages/formations/GenerativeAI";
import NLP from "@/pages/formations/NLP";
import GraphQL from "@/pages/formations/GraphQL";
import RealtimeAI from "@/pages/formations/RealtimeAI";
import IAEthics from "@/pages/formations/IAEthics";
import ReactIA from "@/pages/formations/ReactIA";
import IAMusic from "@/pages/formations/IAMusic";
import IACreative from "@/pages/formations/IACreative";
import FormationVehiculeAutonome from "@/pages/formations/FormationVehiculeAutonome";
import FormationVisionIA from "@/pages/formations/FormationVisionIA";
import FormationReseauxNeurones from "@/pages/formations/FormationReseauxNeurones";
import MachineLearning from "@/pages/formations/MachineLearning";

// Imports pour outils avancés
import IAEmbedded from "@/pages/formations/IAEmbedded";
import GameDevelopmentAI from "@/pages/formations/GameDevelopmentAI";
import NoCode from "@/pages/formations/NoCode";
import MLSecurite from "@/pages/formations/MLSecurite";
import QuantumComputing from "@/pages/formations/QuantumComputing";
import NeuralNetworks from "@/pages/formations/NeuralNetworks";
import VisionParOrdinateur from "@/pages/formations/VisionParOrdinateur";
import RobotiqueIA from "@/pages/formations/RobotiqueIA";
import MLFlowOps from "@/pages/formations/MLFlowOps";
import ReinforcementLearning from "@/pages/formations/ReinforcementLearning";
import AssuranceIA from "@/pages/industries/AssuranceIA";
import IAConversationnelle from "@/pages/formations/IAConversationnelle";
import GoogleBard from "@/pages/formations/GoogleBard";
import MicrosoftCopilot from "@/pages/formations/MicrosoftCopilot";
import OpenAIAPI from "@/pages/formations/OpenAIAPI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Nouvelles pages principales */}
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/certifications" element={<Certifications />} />
          
          {/* Pages en anglais */}
          <Route path="/en/ai-training-finance" element={<AITrainingFinance />} />
          <Route path="/en/contact" element={<ContactEN />} />
          
          {/* Route spéciale */}
          <Route path="/formationiafinance" element={<FormationIAFinance />} />
          
          {/* Routes formations */}
          <Route path="/formation-ia-explicable" element={<FormationIAExplicable />} />
          <Route path="/formation-deep-learning-avance" element={<DeepLearningAvance />} />
          <Route path="/formation-transformers-avances" element={<FormationTransformersAvances />} />
          <Route path="/formation-modeles-generatifs-avances" element={<FormationModelesGeneratifsAvances />} />
          <Route path="/formation-edge-ai" element={<EdgeAI />} />
          <Route path="/formation-nlp-avance" element={<FormationNLPAvance />} />
          <Route path="/formation-ia-quantique" element={<FormationIAQuantique />} />
          <Route path="/formation-ia-industrie" element={<FormationIAIndustrie />} />
          <Route path="/formation-ia-sante" element={<FormationIASante />} />
          <Route path="/formation-ia-ethique" element={<FormationIAEthique />} />
          <Route path="/formation-ia-retail" element={<FormationIARetail />} />
          <Route path="/formation-ia-energie" element={<FormationIAEnergie />} />
          <Route path="/formation-mlops-production" element={<FormationMLOpsProduction />} />
          <Route path="/formation-optimisation-ia" element={<FormationOptimisationIA />} />
          <Route path="/formation-ia-banque" element={<FormationIABanque />} />
          <Route path="/formation-ia-assurance" element={<FormationIAAssurance />} />
          
          {/* Routes guides */}
          <Route path="/guide-debutant-ia" element={<GuideDebutantIA />} />
          <Route path="/guide-avance-ia" element={<GuideAvanceIA />} />
          <Route path="/guide-mlops" element={<GuideMLOps />} />
          <Route path="/guide-ia-2025" element={<GuideIA2025 />} />
          <Route path="/guide-implementation-ia" element={<GuideImplementationIA />} />
          <Route path="/guide-optimisation-modeles" element={<GuideOptimisationModeles />} />
          <Route path="/guide-automatisation-bureau" element={<GuideAutomatisationBureau />} />
          <Route path="/guide-debutant-chatgpt" element={<GuideDebutantChatGPT />} />
          <Route path="/guide-prompt-avance" element={<GuidePromptAdvance />} />
          
          {/* Routes solutions */}
          <Route path="/developpement-ia" element={<DeveloppementIA />} />
          <Route path="/conseil-strategique" element={<ConseilStrategique />} />
          <Route path="/audit-ia" element={<AuditIA />} />
          <Route path="/maintenance-ia" element={<MaintenanceIA />} />
          <Route path="/conseil-transition" element={<ConseilTransition />} />
          <Route path="/consulting-strategique" element={<ConsultingStrategique />} />
          <Route path="/formation-personnalisee" element={<FormationPersonnalisee />} />
          <Route path="/ia-ethique-responsable" element={<IAEthiqueResponsable />} />
          
          {/* Routes outils */}
          <Route path="/outilgpt4" element={<OutilGPT4 />} />
          
          {/* Routes applications */}
          <Route path="/agriculture-ia" element={<AgricultureIA />} />
          
          {/* Routes secteurs */}
          <Route path="/sante" element={<Sante />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/education" element={<Education />} />
          <Route path="/automobile" element={<Automobile />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/maritime" element={<Maritime />} />
          <Route path="/btp" element={<BTP />} />
          <Route path="/secteur-banque-assurance" element={<SecteurBanqueAssurance />} />
          <Route path="/secteur-hotellerie" element={<SecteurHotellerie />} />
          <Route path="/logistique" element={<Logistique />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/immobilier" element={<Immobilier />} />
          
          {/* Routes technologies */}
          <Route path="/tensorflow" element={<TensorFlow />} />
          <Route path="/pytorch" element={<PyTorch />} />
          <Route path="/python-ia" element={<PythonIA />} />
          
          {/* Routes webinaires */}
          <Route path="/webinaires" element={<Webinaires />} />
          
          {/* Routes cas d'études */}
          <Route path="/casusageia1" element={<CasUsageIA1 />} />
          
          {/* Routes certifications avancées */}
          <Route path="/certificationia10" element={<CertificationIA10 />} />
          
          {/* Routes formations avancées */}
          <Route path="/mlops" element={<MLOps />} />
          <Route path="/robotics-ai" element={<RoboticsAI />} />
          <Route path="/generative-ai" element={<GenerativeAI />} />
          <Route path="/nlp" element={<NLP />} />
          <Route path="/graphql" element={<GraphQL />} />
          <Route path="/realtime-ai" element={<RealtimeAI />} />
          <Route path="/ia-ethics" element={<IAEthics />} />
          <Route path="/react-ia" element={<ReactIA />} />
          <Route path="/ia-music" element={<IAMusic />} />
          <Route path="/ia-creative" element={<IACreative />} />
          <Route path="/formation-vehicule-autonome" element={<FormationVehiculeAutonome />} />
          <Route path="/formation-vision-ia" element={<FormationVisionIA />} />
          <Route path="/formation-reseaux-neurones" element={<FormationReseauxNeurones />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          
          {/* Routes outils avancés et tendances */}
          <Route path="/ia-embedded" element={<IAEmbedded />} />
          <Route path="/game-development-ai" element={<GameDevelopmentAI />} />
          <Route path="/no-code" element={<NoCode />} />
          <Route path="/ml-securite" element={<MLSecurite />} />
          <Route path="/quantum-computing" element={<QuantumComputing />} />
          <Route path="/neural-networks" element={<NeuralNetworks />} />
          <Route path="/vision-par-ordinateur" element={<VisionParOrdinateur />} />
          <Route path="/robotique-ia" element={<RobotiqueIA />} />
          <Route path="/mlflow-ops" element={<MLFlowOps />} />
          <Route path="/reinforcement-learning" element={<ReinforcementLearning />} />
          <Route path="/assurance-ia" element={<AssuranceIA />} />
          <Route path="/ia-conversationnelle" element={<IAConversationnelle />} />
          <Route path="/google-bard" element={<GoogleBard />} />
          <Route path="/microsoft-copilot" element={<MicrosoftCopilot />} />
          <Route path="/openai-api" element={<OpenAIAPI />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
