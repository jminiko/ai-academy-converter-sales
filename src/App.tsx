import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Formations from "./pages/Formations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Automatisation from "./pages/Automatisation";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import IAGenerative from "./pages/formations/IAGenerative";
import ChatGPTPro from "./pages/formations/ChatGPTPro";
import AutomatisationIA from "./pages/formations/AutomatisationIA";
import PromptEngineering from "./pages/formations/PromptEngineering";
import OpenAIAPI from "./pages/formations/OpenAIAPI";
import MicrosoftCopilot from "./pages/formations/MicrosoftCopilot";
import GoogleBard from "./pages/formations/GoogleBard";
import ClaudeAI from "./pages/formations/ClaudeAI";
import PythonIA from "./pages/formations/PythonIA";
import TensorFlow from "./pages/formations/TensorFlow";
import PyTorch from "./pages/formations/PyTorch";
import MachineLearning from "./pages/formations/MachineLearning";
import DeepLearning from "./pages/formations/DeepLearning";
import ComputerVision from "./pages/formations/ComputerVision";
import NLP from "./pages/formations/NLP";
import ReinforcementLearning from "./pages/formations/ReinforcementLearning";
import DataScience from "./pages/formations/DataScience";
import BigData from "./pages/formations/BigData";
import MLFlowOps from "./pages/formations/MLFlowOps";
import Docker from "./pages/formations/Docker";
import Consulting from "./pages/services/Consulting";
import Implementation from "./pages/services/Implementation";
import Support from "./pages/services/Support";
import ConseilStrategique from "./pages/services/ConseilStrategique";
import AuditIA from "./pages/services/AuditIA";
import DeveloppementIA from "./pages/services/DeveloppementIA";
import MaintenanceIA from "./pages/services/MaintenanceIA";
import Sante from "./pages/secteurs/Sante";
import Finance from "./pages/secteurs/Finance";
import Education from "./pages/secteurs/Education";
import Automobile from "./pages/secteurs/Automobile";
import Retail from "./pages/secteurs/Retail";
import Immobilier from "./pages/secteurs/Immobilier";
import Agriculture from "./pages/secteurs/Agriculture";
import Transport from "./pages/secteurs/Transport";
import ChatGPTOutil from "./pages/outils/ChatGPTOutil";
import MidjourneyOutil from "./pages/outils/MidjourneyOutil";
import StableDiffusion from "./pages/outils/StableDiffusion";
import RunwayML from "./pages/outils/RunwayML";
import NotionAI from "./pages/outils/NotionAI";
import JasperAI from "./pages/outils/JasperAI";
import LangChain from "./pages/technologies/LangChain";
import MLOps from "./pages/technologies/MLOps";
import HuggingFace from "./pages/technologies/HuggingFace";
import TensorFlowJS from "./pages/technologies/TensorFlowJS";
import OpenCV from "./pages/technologies/OpenCV";
import Keras from "./pages/technologies/Keras";
import AgileIA from "./pages/methodes/AgileIA";
import DesignThinkingIA from "./pages/methodes/DesignThinkingIA";
import LeanStartupIA from "./pages/methodes/LeanStartupIA";
import GuideAvanceIA from "./pages/guides/GuideAvanceIA";
import GuideDebutantChatGPT from "./pages/guides/GuideDebutantChatGPT";
import GuidePromptAdvance from "./pages/guides/GuidePromptAdvance";
import IASante from "./pages/specialisations/IASante";
import IAFinance from "./pages/specialisations/IAFinance";
import IAEthics from "./pages/formations/IAEthics";
import RealtimeAI from "./pages/formations/RealtimeAI";
import IAEmbedded from "./pages/formations/IAEmbedded";
import IAMarketing from "./pages/specialisations/IAMarketing";
import IACybersecurite from "./pages/specialisations/IACybersecurite";
import ChatbotIA from "./pages/solutions/ChatbotIA";
import AnalyseSentiment from "./pages/solutions/AnalyseSentiment";
import ReconnaissanceVocale from "./pages/solutions/ReconnaissanceVocale";
import PersonnalisationIA from "./pages/solutions/PersonnalisationIA";
import OptimisationIA from "./pages/solutions/OptimisationIA";
import PredictionIA from "./pages/solutions/PredictionIA";
import InnovationsIA2024 from "./pages/actualites/InnovationsIA2024";
import BibliothequeIA from "./pages/ressources/BibliothequeIA";
import CasEtudes from "./pages/ressources/CasEtudes";
import Podcasts from "./pages/ressources/Podcasts";
import LivresBlancsIA from "./pages/ressources/LivresBlancsIA";
import OutilsGratuits from "./pages/ressources/OutilsGratuits";
import ArticleIA2024 from "./pages/blog/ArticleIA2024";
import GuidePrompts from "./pages/blog/GuidePrompts";
import TendancesIA2025 from "./pages/blog/TendancesIA2025";
import GuideAutomatisation from "./pages/blog/GuideAutomatisation";
import CaseStudyBanque from "./pages/CaseStudyBanque";
import RetailTransformation from "./pages/case-studies/RetailTransformation";
import SanteDigitale from "./pages/case-studies/SanteDigitale";
import EcommerceTransformation from "./pages/case-studies/EcommerceTransformation";
import GuidesIA from "./pages/ressources/GuidesIA";
import Templates from "./pages/ressources/Templates";
import WebinairesRessource from "./pages/ressources/Webinaires";
import ConferenceIA2024 from "./pages/events/ConferenceIA2024";
import WorkshopChatGPT from "./pages/events/WorkshopChatGPT";
import SommetIA2024 from "./pages/events/SommetIA2024";
import HackathonIA from "./pages/events/HackathonIA";
import CertificationIA from "./pages/certifications/CertificationIA";
import CertificationChatGPT from "./pages/certifications/CertificationChatGPT";
import CertificationGoogleAI from "./pages/certifications/CertificationGoogleAI";
import PartenaireOpenAI from "./pages/partenariats/PartenaireOpenAI";
import PartenaireMicrosoft from "./pages/partenariats/PartenaireMicrosoft";
import PartenaireGoogle from "./pages/partenariats/PartenaireGoogle";
import PartenaireAWS from "./pages/partenariats/PartenaireAWS";
import PartenaireNVIDIA from "./pages/partenariats/PartenaireNVIDIA";
import DirecteurTechnique from "./pages/equipe/DirecteurTechnique";
import ChefProduit from "./pages/equipe/ChefProduit";
import PolitiqueConfidentialiteDetaille from "./pages/legal/PolitiqueConfidentialiteDetaille";
import ManufacturingIA from "./pages/industries/ManufacturingIA";
import BankingIA from "./pages/industries/BankingIA";
import Certifications from "./pages/Certifications";
import Partenaires from "./pages/Partenaires";
import Evenements from "./pages/Evenements";
import RessourcesGratuites from "./pages/RessourcesGratuites";
import Confidentialite from "./pages/Confidentialite";
import SecteursBusiness from "./pages/SecteursBusiness";
import OutilsIA from "./pages/OutilsIA";
import Methodologie from "./pages/Methodologie";
import Equipe from "./pages/Equipe";
import Tarifs from "./pages/Tarifs";
import Projets from "./pages/Projets";
import Actualites from "./pages/Actualites";
import LivreBlanc from "./pages/LivreBlanc";
import Newsletter from "./pages/Newsletter";
import Webinaires from "./pages/Webinaires";
import Carrieres from "./pages/Carrieres";
import CGV from "./pages/CGV";
import LegalMentions from "./pages/LegalMentions";
import AccessibiliteNumerique from "./pages/AccessibiliteNumerique";
import PlanSite from "./pages/PlanSite";
import PolitiqueQualite from "./pages/PolitiqueQualite";
import CertificationISO from "./pages/CertificationISO";
import LabIA from "./pages/LabIA";
import NotFound from "./pages/NotFound";
import MediaIA from "./pages/industries/MediaIA";
import TourismIA from "./pages/industries/TourismIA";
import LegalIA from "./pages/industries/LegalIA";
import FormationExecutives from "./pages/formations/FormationExecutives";
import FormationEthiqueIA from "./pages/formations/FormationEthiqueIA";
import CertificationMLOps from "./pages/certifications/CertificationMLOps";
import Ethique from "./pages/formations/Ethique";
import NoCode from "./pages/formations/NoCode";
import WebinaireMensuel from "./pages/events/WebinaireMensuel";
import Atelier from "./pages/events/Atelier";
import EnergyIA from "./pages/industries/EnergyIA";
import SportIA from "./pages/industries/SportIA";
import HospitalityIA from "./pages/industries/HospitalityIA";
import AviationIA from "./pages/industries/AviationIA";
import GamingIA from "./pages/industries/GamingIA";
import RealEstateIA from "./pages/industries/RealEstateIA";
import ConsultingStrategique from "./pages/services/ConsultingStrategique";
import FormationPersonnalisee from "./pages/services/FormationPersonnalisee";
import WorkshopAutomatisation from "./pages/events/WorkshopAutomatisation";
import EcommerceIA from "./pages/industries/EcommerceIA";
import StartupIA from "./pages/industries/StartupIA";
import PharmaIA from "./pages/industries/PharmaIA";
import IAConversationnelle from "./pages/formations/IAConversationnelle";
import BootcampIA from "./pages/events/BootcampIA";
import TransformationDigitale from "./pages/services/TransformationDigitale";
import AssuranceIA from "./pages/industries/AssuranceIA";
import BlockchainIA from "./pages/formations/BlockchainIA";
import RobotiqueIA from "./pages/formations/RobotiqueIA";
import CoderIA from "./pages/outils/CoderIA";
import PerplexityAI from "./pages/outils/PerplexityAI";
import Logistique from "./pages/secteurs/Logistique";
import HackerIA from "./pages/events/HackerIA";
import AutoMLNoCode from "./pages/formations/AutoMLNoCode";
import IAQuantique from "./pages/specialisations/IAQuantique";
import TelecommunicationsIA from "./pages/industries/TelecommunicationsIA";
import IAEthicsResponsable from "./pages/services/IA-Ethique-Responsable";
import MicrosoftCopilot360 from "./pages/outils/MicrosoftCopilot360";
import CertificationDataScience from "./pages/certifications/CertificationDataScience";
import SommetTechIA2024 from "./pages/events/SommetTechIA2024";
import CommunauteOpenSource from "./pages/ressources/CommunauteOpenSource";
import AssistantVirtuelIA from "./pages/solutions/AssistantVirtuelIA";
import EdgeAI from "./pages/technologies/EdgeAI";
import VisionParOrdinateur from "./pages/formations/VisionParOrdinateur";
import ConseilTransition from "./pages/services/ConseilTransition";
import BTP from "./pages/secteurs/BTP";
import GeminiIA from "./pages/outils/GeminiIA";
import TensorBoard from "./pages/technologies/TensorBoard";
import IAEducation from "./pages/specialisations/IAEducation";
import TraitementDocuments from "./pages/solutions/TraitementDocuments";
import RevolutionIA2025 from "./pages/actualites/RevolutionIA2025";
import WebinairesPage from "./pages/ressources/Webinaires";
import MasterclassIA from "./pages/events/MasterclassIA";
import AutoMLPlatforms from "./pages/formations/AutoMLPlatforms";
import IAAutomobile from "./pages/specialisations/IAAutomobile";
import DetectionFraude from "./pages/solutions/DetectionFraude";
import NVIDIA from "./pages/technologies/NVIDIA";
import NeuralNetworks from "./pages/formations/NeuralNetworks";
import AnthropicClaude from "./pages/outils/AnthropicClaude";
import StrategieIA from "./pages/services/StrategieIA";
import TendancesIA2024 from "./pages/actualites/TendancesIA2024";
import CertificationAWS from "./pages/certifications/CertificationAWS";
import SymposiumIA from "./pages/events/SymposiumIA";
import AutomatisationRobotique from "./pages/formations/AutomatisationRobotique";
import Kubernetes from "./pages/technologies/Kubernetes";
import RecommandationIA from "./pages/solutions/RecommandationIA";
import LogistiqueIA from "./pages/industries/LogistiqueIA";
import IAEntreprise from "./pages/specialisations/IAEntreprise";
import MistralAI from "./pages/outils/MistralAI";
import CloudAI from "./pages/formations/CloudAI";
import GraphQL from "./pages/formations/GraphQL";
import ReactIA from "./pages/formations/ReactIA";
import Firebase from "./pages/technologies/Firebase";
import Supabase from "./pages/technologies/Supabase";
import AutomatisationMarketingIA from "./pages/solutions/AutomatisationMarketingIA";
import SecurityIA from "./pages/solutions/SecurityIA";
import ConsultingIA from "./pages/industries/ConsultingIA";
import RetailAI from "./pages/industries/RetailAI";
import IAJuridique from "./pages/specialisations/IAJuridique";
import AutomatisationTests from "./pages/formations/AutomatisationTests";
import GestionRisques from "./pages/solutions/GestionRisques";
import FashionIA from "./pages/industries/FashionIA";
import NvidiaOmniverse from "./pages/outils/NvidiaOmniverse";
import IACreative from "./pages/formations/IACreative";
import OptimisationEnergie from "./pages/solutions/OptimisationEnergie";
import FoodTechIA from "./pages/industries/FoodTechIA";
import RetailTechIA from "./pages/industries/RetailTechIA";
import CodePilot from "./pages/outils/CodePilot";
import Apache from "./pages/technologies/Apache";
import IAMusic from "./pages/formations/IAMusic";
import QuantumComputing from "./pages/formations/QuantumComputing";
import IAGovernment from "./pages/specialisations/IAGovernment";
import VoiceAssistant from "./pages/solutions/VoiceAssistant";
import DataVisualization from "./pages/solutions/DataVisualization";
import GameDevelopmentAI from "./pages/formations/GameDevelopmentAI";
import PostgreSQL from "./pages/technologies/PostgreSQL";
import InsuranceIA from "./pages/industries/InsuranceIA";
import PredictiveAnalytics from "./pages/solutions/PredictiveAnalytics";
import CohereAI from "./pages/outils/CohereAI";
import IARetail from "./pages/specialisations/IARetail";
import ConferenceML2024 from "./pages/events/ConferenceML2024";
import CertificationPython from "./pages/certifications/CertificationPython";
import DataEngineering from "./pages/formations/DataEngineering";
import MLSecurite from "./pages/formations/MLSecurite";
import MongoDB from "./pages/technologies/MongoDB";
import Redis from "./pages/technologies/Redis";
import ChemieIA from "./pages/industries/ChemieIA";
import MetallurgieIA from "./pages/industries/MetallurgieIA";
import MonitoringIA from "./pages/solutions/MonitoringIA";
import HuggingFaceSpaces from "./pages/outils/HuggingFaceSpaces";
import TextileIA from "./pages/industries/TextileIA";
import ElasticSearch from "./pages/technologies/ElasticSearch";
import PlaygroundAI from "./pages/outils/PlaygroundAI";
import AutomatisationMarketing from "./pages/formations/AutomatisationMarketing";
import IALogistique from "./pages/specialisations/IALogistique";
import AutomatisationComptable from "./pages/solutions/AutomatisationComptable";
import ROIFormations from "./pages/ROIFormations";
import AvantagesAutomatisation from "./pages/AvantagesAutomatisation";
import ROIEtudesCas from "./pages/ROIEtudesCas";
import TemoignagesClients from "./pages/TemoignagesClients";
import DemoInteractive from "./pages/DemoInteractive";
import CalculateurROIPage from "./pages/CalculateurROIPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/ia-generative" element={<IAGenerative />} />
          <Route path="/formations/chatgpt-pro" element={<ChatGPTPro />} />
          <Route path="/formations/automatisation-ia" element={<AutomatisationIA />} />
          <Route path="/formations/prompt-engineering" element={<PromptEngineering />} />
          <Route path="/formations/openai-api" element={<OpenAIAPI />} />
          <Route path="/formations/microsoft-copilot" element={<MicrosoftCopilot />} />
          <Route path="/formations/google-bard" element={<GoogleBard />} />
          <Route path="/formations/claude-ai" element={<ClaudeAI />} />
          <Route path="/formations/python-ia" element={<PythonIA />} />
          <Route path="/formations/tensorflow" element={<TensorFlow />} />
          <Route path="/formations/pytorch" element={<PyTorch />} />
          <Route path="/formations/machine-learning" element={<MachineLearning />} />
          <Route path="/formations/deep-learning" element={<DeepLearning />} />
          <Route path="/formations/computer-vision" element={<ComputerVision />} />
          <Route path="/formations/nlp" element={<NLP />} />
          <Route path="/formations/reinforcement-learning" element={<ReinforcementLearning />} />
          <Route path="/formations/data-science" element={<DataScience />} />
          <Route path="/formations/big-data" element={<BigData />} />
          <Route path="/formations/mlflow-ops" element={<MLFlowOps />} />
          <Route path="/formations/docker" element={<Docker />} />
          <Route path="/formations/blockchain-ia" element={<BlockchainIA />} />
          <Route path="/formations/robotique-ia" element={<RobotiqueIA />} />
          <Route path="/formations/automl-nocode" element={<AutoMLNoCode />} />
          <Route path="/formations/vision-par-ordinateur" element={<VisionParOrdinateur />} />
          <Route path="/formations/automl-platforms" element={<AutoMLPlatforms />} />
          <Route path="/formations/neural-networks" element={<NeuralNetworks />} />
          <Route path="/formations/automatisation-robotique" element={<AutomatisationRobotique />} />
          <Route path="/formations/cloud-ai" element={<CloudAI />} />
          <Route path="/formations/graphql" element={<GraphQL />} />
          <Route path="/formations/react-ia" element={<ReactIA />} />
          <Route path="/formations/quantum-computing" element={<QuantumComputing />} />
          <Route path="/formations/ia-music" element={<IAMusic />} />
          <Route path="/formations/automatisation-tests" element={<AutomatisationTests />} />
          <Route path="/formations/ia-creative" element={<IACreative />} />
          <Route path="/formations/data-engineering" element={<DataEngineering />} />
          <Route path="/formations/ml-securite" element={<MLSecurite />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/support" element={<Support />} />
          <Route path="/services/conseil-strategique" element={<ConseilStrategique />} />
          <Route path="/services/audit-ia" element={<AuditIA />} />
          <Route path="/services/developpement-ia" element={<DeveloppementIA />} />
          <Route path="/services/maintenance-ia" element={<MaintenanceIA />} />
          <Route path="/services/ia-ethique-responsable" element={<IAEthicsResponsable />} />
          <Route path="/services/conseil-transition" element={<ConseilTransition />} />
          <Route path="/services/strategie-ia" element={<StrategieIA />} />
          <Route path="/secteurs/sante" element={<Sante />} />
          <Route path="/secteurs/finance" element={<Finance />} />
          <Route path="/secteurs/education" element={<Education />} />
          <Route path="/secteurs/automobile" element={<Automobile />} />
          <Route path="/secteurs/retail" element={<Retail />} />
          <Route path="/secteurs/immobilier" element={<Immobilier />} />
          <Route path="/secteurs/agriculture" element={<Agriculture />} />
          <Route path="/secteurs/transport" element={<Transport />} />
          <Route path="/secteurs/logistique" element={<Logistique />} />
          <Route path="/secteurs/btp" element={<BTP />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIA />} />
          <Route path="/industries/banking" element={<BankingIA />} />
          <Route path="/industries/telecommunications" element={<TelecommunicationsIA />} />
          <Route path="/industries/logistique-ia" element={<LogistiqueIA />} />
          <Route path="/industries/consulting-ia" element={<ConsultingIA />} />
          <Route path="/industries/retail-ai" element={<RetailAI />} />
          <Route path="/industries/insurance-ia" element={<InsuranceIA />} />
          <Route path="/industries/fashion-ia" element={<FashionIA />} />
          <Route path="/industries/chemie-ia" element={<ChemieIA />} />
          <Route path="/industries/metallurgie-ia" element={<MetallurgieIA />} />
          <Route path="/outils/chatgpt" element={<ChatGPTOutil />} />
          <Route path="/outils/midjourney" element={<MidjourneyOutil />} />
          <Route path="/outils/stable-diffusion" element={<StableDiffusion />} />
          <Route path="/outils/runway-ml" element={<RunwayML />} />
          <Route path="/outils/notion-ai" element={<NotionAI />} />
          <Route path="/outils/jasper-ai" element={<JasperAI />} />
          <Route path="/outils/coder-ia" element={<CoderIA />} />
          <Route path="/outils/perplexity-ai" element={<PerplexityAI />} />
          <Route path="/outils/microsoft-copilot-360" element={<MicrosoftCopilot360 />} />
          <Route path="/outils/gemini-ia" element={<GeminiIA />} />
          <Route path="/outils/anthropic-claude" element={<AnthropicClaude />} />
          <Route path="/outils/mistral-ai" element={<MistralAI />} />
          <Route path="/outils/code-pilot" element={<CodePilot />} />
          <Route path="/outils/nvidia-omniverse" element={<NvidiaOmniverse />} />
          <Route path="/outils/cohere-ai" element={<CohereAI />} />
          <Route path="/outils/huggingface-spaces" element={<HuggingFaceSpaces />} />
          <Route path="/technologies/langchain" element={<LangChain />} />
          <Route path="/technologies/mlops" element={<MLOps />} />
          <Route path="/technologies/huggingface" element={<HuggingFace />} />
          <Route path="/technologies/tensorflowjs" element={<TensorFlowJS />} />
          <Route path="/technologies/opencv" element={<OpenCV />} />
          <Route path="/technologies/keras" element={<Keras />} />
          <Route path="/technologies/edge-ai" element={<EdgeAI />} />
          <Route path="/technologies/tensorboard" element={<TensorBoard />} />
          <Route path="/technologies/nvidia" element={<NVIDIA />} />
          <Route path="/technologies/kubernetes" element={<Kubernetes />} />
          <Route path="/technologies/firebase" element={<Firebase />} />
          <Route path="/technologies/supabase" element={<Supabase />} />
          <Route path="/technologies/apache" element={<Apache />} />
          <Route path="/technologies/postgresql" element={<PostgreSQL />} />
          <Route path="/technologies/mongodb" element={<MongoDB />} />
          <Route path="/technologies/redis" element={<Redis />} />
          <Route path="/methodes/agile-ia" element={<AgileIA />} />
          <Route path="/methodes/design-thinking-ia" element={<DesignThinkingIA />} />
          <Route path="/methodes/lean-startup-ia" element={<LeanStartupIA />} />
          <Route path="/guides/guide-avance-ia" element={<GuideAvanceIA />} />
          <Route path="/guides/guide-debutant-chatgpt" element={<GuideDebutantChatGPT />} />
          <Route path="/guides/guide-prompt-avance" element={<GuidePromptAdvance />} />
          <Route path="/specialisations/ia-sante" element={<IASante />} />
          <Route path="/specialisations/ia-finance" element={<IAFinance />} />
          <Route path="/specialisations/ia-ethique" element={<IAEthics />} />
          <Route path="/specialisations/ia-marketing" element={<IAMarketing />} />
          <Route path="/specialisations/ia-cybersecurite" element={<IACybersecurite />} />
          <Route path="/specialisations/ia-quantique" element={<IAQuantique />} />
          <Route path="/specialisations/ia-education" element={<IAEducation />} />
          <Route path="/specialisations/ia-automobile" element={<IAAutomobile />} />
          <Route path="/specialisations/ia-entreprise" element={<IAEntreprise />} />
          <Route path="/specialisations/ia-juridique" element={<IAJuridique />} />
          <Route path="/specialisations/ia-government" element={<IAGovernment />} />
          <Route path="/specialisations/ia-retail" element={<IARetail />} />
          <Route path="/solutions/chatbot-ia" element={<ChatbotIA />} />
          <Route path="/solutions/analyse-sentiment" element={<AnalyseSentiment />} />
          <Route path="/solutions/reconnaissance-vocale" element={<ReconnaissanceVocale />} />
          <Route path="/solutions/personnalisation-ia" element={<PersonnalisationIA />} />
          <Route path="/solutions/optimisation-ia" element={<OptimisationIA />} />
          <Route path="/solutions/prediction-ia" element={<PredictionIA />} />
          <Route path="/solutions/assistant-virtuel-ia" element={<AssistantVirtuelIA />} />
          <Route path="/solutions/traitement-documents" element={<TraitementDocuments />} />
          <Route path="/solutions/detection-fraude" element={<DetectionFraude />} />
          <Route path="/solutions/recommandation-ia" element={<RecommandationIA />} />
          <Route path="/solutions/automatisation-marketing-ia" element={<AutomatisationMarketingIA />} />
          <Route path="/solutions/security-ia" element={<SecurityIA />} />
          <Route path="/solutions/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/solutions/data-visualization" element={<DataVisualization />} />
          <Route path="/solutions/gestion-risques" element={<GestionRisques />} />
          <Route path="/solutions/optimisation-energie" element={<OptimisationEnergie />} />
          <Route path="/solutions/predictive-analytics" element={<PredictiveAnalytics />} />
          <Route path="/solutions/monitoring-ia" element={<MonitoringIA />} />
          <Route path="/actualites/innovations-ia-2024" element={<InnovationsIA2024 />} />
          <Route path="/actualites/revolution-ia-2025" element={<RevolutionIA2025 />} />
          <Route path="/actualites/tendances-ia-2024" element={<TendancesIA2024 />} />
          <Route path="/ressources/bibliotheque-ia" element={<BibliothequeIA />} />
          <Route path="/ressources/cas-etudes" element={<CasEtudes />} />
          <Route path="/ressources/podcasts" element={<Podcasts />} />
          <Route path="/ressources/livres-blancs-ia" element={<LivresBlancsIA />} />
          <Route path="/ressources/outils-gratuits" element={<OutilsGratuits />} />
          <Route path="/ressources/communaute-open-source" element={<CommunauteOpenSource />} />
          <Route path="/ressources/webinaires-page" element={<WebinairesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/automatisation" element={<Automatisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/tendances-ia-2024" element={<ArticleIA2024 />} />
          <Route path="/blog/guide-prompt-engineering" element={<GuidePrompts />} />
          <Route path="/blog/tendances-ia-2025" element={<TendancesIA2025 />} />
          <Route path="/blog/guide-automatisation" element={<GuideAutomatisation />} />
          <Route path="/case-studies/banque-transformation" element={<CaseStudyBanque />} />
          <Route path="/case-studies/retail-transformation" element={<RetailTransformation />} />
          <Route path="/case-studies/sante-digitale" element={<SanteDigitale />} />
          <Route path="/case-studies/ecommerce-transformation" element={<EcommerceTransformation />} />
          <Route path="/ressources/guides-ia" element={<GuidesIA />} />
          <Route path="/ressources/templates" element={<Templates />} />
          <Route path="/ressources/webinaires" element={<WebinairesRessource />} />
          <Route path="/events/conference-ia-2024" element={<ConferenceIA2024 />} />
          <Route path="/events/workshop-chatgpt" element={<WorkshopChatGPT />} />
          <Route path="/events/sommet-ia-2024" element={<SommetIA2024 />} />
          <Route path="/events/hackathon-ia" element={<HackathonIA />} />
          <Route path="/events/hacker-ia" element={<HackerIA />} />
          <Route path="/events/sommet-tech-ia-2024" element={<SommetTechIA2024 />} />
          <Route path="/events/masterclass-ia" element={<MasterclassIA />} />
          <Route path="/events/symposium-ia" element={<SymposiumIA />} />
          <Route path="/events/conference-ml-2024" element={<ConferenceML2024 />} />
          <Route path="/certifications/certification-ia" element={<CertificationIA />} />
          <Route path="/certifications/certification-chatgpt" element={<CertificationChatGPT />} />
          <Route path="/certifications/certification-google-ai" element={<CertificationGoogleAI />} />
          <Route path="/certifications/certification-data-science" element={<CertificationDataScience />} />
          <Route path="/certifications/certification-aws" element={<CertificationAWS />} />
          <Route path="/certifications/certification-python" element={<CertificationPython />} />
          <Route path="/partenariats/openai" element={<PartenaireOpenAI />} />
          <Route path="/partenariats/microsoft" element={<PartenaireMicrosoft />} />
          <Route path="/partenariats/google" element={<PartenaireGoogle />} />
          <Route path="/partenariats/aws" element={<PartenaireAWS />} />
          <Route path="/partenariats/nvidia" element={<PartenaireNVIDIA />} />
          <Route path="/equipe/directeur-technique" element={<DirecteurTechnique />} />
          <Route path="/equipe/chef-produit" element={<ChefProduit />} />
          <Route path="/legal/politique-confidentialite-detaille" element={<PolitiqueConfidentialiteDetaille />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/ressources-gratuites" element={<RessourcesGratuites />} />
          <Route path="/secteurs-business" element={<SecteursBusiness />} />
          <Route path="/outils-ia" element={<OutilsIA />} />
          <Route path="/methodologie" element={<Methodologie />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/livre-blanc" element={<LivreBlanc />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/webinaires" element={<Webinaires />} />
          <Route path="/carrieres" element={<Carrieres />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/accessibilite-numerique" element={<AccessibiliteNumerique />} />
          <Route path="/plan-site" element={<PlanSite />} />
          <Route path="/politique-qualite" element={<PolitiqueQualite />} />
          <Route path="/certification-iso" element={<CertificationISO />} />
          <Route path="/lab-ia" element={<LabIA />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/industries/media" element={<MediaIA />} />
          <Route path="/industries/tourism" element={<TourismIA />} />
          <Route path="/industries/legal" element={<LegalIA />} />
          <Route path="/formations/executives" element={<FormationExecutives />} />
          <Route path="/formations/ethique-ia" element={<FormationEthiqueIA />} />
          <Route path="/certifications/mlops" element={<CertificationMLOps />} />
          <Route path="/formations/ethique" element={<Ethique />} />
          <Route path="/formations/no-code" element={<NoCode />} />
          <Route path="/events/webinaire-mensuel" element={<WebinaireMensuel />} />
          <Route path="/events/atelier" element={<Atelier />} />
          <Route path="/industries/energy" element={<EnergyIA />} />
          <Route path="/industries/sport" element={<SportIA />} />
          <Route path="/industries/hospitality" element={<HospitalityIA />} />
          <Route path="/industries/aviation" element={<AviationIA />} />
          <Route path="/industries/gaming" element={<GamingIA />} />
          <Route path="/industries/real-estate" element={<RealEstateIA />} />
          <Route path="/services/consulting-strategique" element={<ConsultingStrategique />} />
          <Route path="/services/formation-personnalisee" element={<FormationPersonnalisee />} />
          <Route path="/events/workshop-automatisation" element={<WorkshopAutomatisation />} />
          <Route path="/industries/ecommerce" element={<EcommerceIA />} />
          <Route path="/industries/startup" element={<StartupIA />} />
          <Route path="/industries/pharma" element={<PharmaIA />} />
          <Route path="/formations/ia-conversationnelle" element={<IAConversationnelle />} />
          <Route path="/events/bootcamp-ia" element={<BootcampIA />} />
          <Route path="/services/transformation-digitale" element={<TransformationDigitale />} />
          <Route path="/industries/assurance" element={<AssuranceIA />} />
          <Route path="/formations/game-development-ai" element={<GameDevelopmentAI />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/temoignages-clients" element={<TemoignagesClients />} />
          <Route path="/demo-interactive" element={<DemoInteractive />} />
          <Route path="/calculateur-roi" element={<CalculateurROIPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
