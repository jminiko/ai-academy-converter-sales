
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
import ChatGPTOutil from "./pages/outils/ChatGPTOutil";
import MidjourneyOutil from "./pages/outils/MidjourneyOutil";
import StableDiffusion from "./pages/outils/StableDiffusion";
import RunwayML from "./pages/outils/RunwayML";
import ArticleIA2024 from "./pages/blog/ArticleIA2024";
import GuidePrompts from "./pages/blog/GuidePrompts";
import TendancesIA2025 from "./pages/blog/TendancesIA2025";
import GuideAutomatisation from "./pages/blog/GuideAutomatisation";
import CaseStudyBanque from "./pages/CaseStudyBanque";
import RetailTransformation from "./pages/case-studies/RetailTransformation";
import SanteDigitale from "./pages/case-studies/SanteDigitale";
import GuidesIA from "./pages/ressources/GuidesIA";
import Templates from "./pages/ressources/Templates";
import WebinairesRessource from "./pages/ressources/Webinaires";
import ConferenceIA2024 from "./pages/events/ConferenceIA2024";
import WorkshopChatGPT from "./pages/events/WorkshopChatGPT";
import CertificationIA from "./pages/certifications/CertificationIA";
import CertificationChatGPT from "./pages/certifications/CertificationChatGPT";
import PartenaireOpenAI from "./pages/partenariats/PartenaireOpenAI";
import PartenaireMicrosoft from "./pages/partenariats/PartenaireMicrosoft";
import DirecteurTechnique from "./pages/equipe/DirecteurTechnique";
import ChefProduit from "./pages/equipe/ChefProduit";
import PolitiqueConfidentialiteDetaille from "./pages/legal/PolitiqueConfidentialiteDetaille";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/support" element={<Support />} />
          <Route path="/services/conseil-strategique" element={<ConseilStrategique />} />
          <Route path="/services/audit-ia" element={<AuditIA />} />
          <Route path="/services/developpement-ia" element={<DeveloppementIA />} />
          <Route path="/services/maintenance-ia" element={<MaintenanceIA />} />
          <Route path="/secteurs/sante" element={<Sante />} />
          <Route path="/secteurs/finance" element={<Finance />} />
          <Route path="/secteurs/education" element={<Education />} />
          <Route path="/secteurs/automobile" element={<Automobile />} />
          <Route path="/secteurs/retail" element={<Retail />} />
          <Route path="/outils/chatgpt" element={<ChatGPTOutil />} />
          <Route path="/outils/midjourney" element={<MidjourneyOutil />} />
          <Route path="/outils/stable-diffusion" element={<StableDiffusion />} />
          <Route path="/outils/runway-ml" element={<RunwayML />} />
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
          <Route path="/ressources/guides-ia" element={<GuidesIA />} />
          <Route path="/ressources/templates" element={<Templates />} />
          <Route path="/ressources/webinaires" element={<WebinairesRessource />} />
          <Route path="/events/conference-ia-2024" element={<ConferenceIA2024 />} />
          <Route path="/events/workshop-chatgpt" element={<WorkshopChatGPT />} />
          <Route path="/certifications/certification-ia" element={<CertificationIA />} />
          <Route path="/certifications/certification-chatgpt" element={<CertificationChatGPT />} />
          <Route path="/partenariats/openai" element={<PartenaireOpenAI />} />
          <Route path="/partenariats/microsoft" element={<PartenaireMicrosoft />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
