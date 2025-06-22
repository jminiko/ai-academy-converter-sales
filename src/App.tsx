import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import CalculateurROIPage from "./pages/CalculateurROIPage";
import SimulateurROIPage from "./pages/SimulateurROIPage";
import AvantagesAutomatisation from "./pages/AvantagesAutomatisation";
import DemoInteractive from "./pages/DemoInteractive";
import ROIFormations from "./pages/ROIFormations";
import ROIEtudesCas from "./pages/ROIEtudesCas";
import TemoignagesClients from "./pages/TemoignagesClients";
import Testimonials from "./pages/Testimonials";
import Certifications from "./pages/Certifications";
import Methodologie from "./pages/Methodologie";
import Projets from "./pages/Projets";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import LegalMentions from "./pages/LegalMentions";
import Confidentialite from "./pages/Confidentialite";
import CGV from "./pages/CGV";
import Newsletter from "./pages/Newsletter";
import Partenaires from "./pages/Partenaires";
import Carrieres from "./pages/Carrieres";
import Equipe from "./pages/Equipe";
import Actualites from "./pages/Actualites";
import Webinaires from "./pages/Webinaires";
import Evenements from "./pages/Evenements";
import RessourcesGratuites from "./pages/RessourcesGratuites";
import GuidesEtTutoriels from "./pages/GuidesEtTutoriels";
import LivreBlanc from "./pages/LivreBlanc";
import OutilsIA from "./pages/OutilsIA";
import LabIA from "./pages/LabIA";
import Tarifs from "./pages/Tarifs";
import Automatisation from "./pages/Automatisation";
import SecteursBusiness from "./pages/SecteursBusiness";
import CertificationISO from "./pages/CertificationISO";
import AccessibiliteNumerique from "./pages/AccessibiliteNumerique";
import PolitiqueQualite from "./pages/PolitiqueQualite";
import PlanSite from "./pages/PlanSite";
import NotFound from "./pages/NotFound";

// Existing specialized formation pages
import FormationChatGPTEntreprise from "./pages/formations/FormationChatGPTEntreprise";
import FormationAutomatisationProcessus from "./pages/formations/FormationAutomatisationProcessus";
import PromptEngineering from "./pages/formations/PromptEngineering";
import FormationIAMarketing from "./pages/formations/FormationIAMarketing";
import FormationRPAZapier from "./pages/formations/FormationRPAZapier";
import FormationIAComptabilite from "./pages/formations/FormationIAComptabilite";
import BigData from "./pages/formations/BigData";
import AutoMLPlatforms from "./pages/formations/AutoMLPlatforms";
import AutomatisationTests from "./pages/formations/AutomatisationTests";
import AutomatisationRobotique from "./pages/formations/AutomatisationRobotique";
import AutoMLNoCode from "./pages/formations/AutoMLNoCode";
import BlockchainIA from "./pages/formations/BlockchainIA";
import AutomatisationMarketing from "./pages/formations/AutomatisationMarketing";
import ClaudeAI from "./pages/formations/ClaudeAI";
import ChatGPTPro from "./pages/formations/ChatGPTPro";

// Nouvelle catégorie: Formations Techniques IA
import FormationTensorFlow from "./pages/formations/FormationTensorFlow";
import FormationPyTorchAvance from "./pages/formations/FormationPyTorchAvance";
import FormationVisionIA from "./pages/formations/FormationVisionIA";
import FormationNLPAvance from "./pages/formations/FormationNLPAvance";
import FormationMLOpsProduction from "./pages/formations/FormationMLOpsProduction";
import FormationIAQuantique from "./pages/formations/FormationIAQuantique";
import FormationReseauxNeurones from "./pages/formations/FormationReseauxNeurones";
import FormationApprentissageRenforce from "./pages/formations/FormationApprentissageRenforce";
import FormationIAEthique from "./pages/formations/FormationIAEthique";
import FormationOptimisationIA from "./pages/formations/FormationOptimisationIA";

// Formations Sectorielles
import FormationIASante from "./pages/formations/FormationIASante";
import FormationIAFinance from "./pages/formations/FormationIAFinance";
import FormationIAIndustrie from "./pages/formations/FormationIAIndustrie";
import FormationIAEducation from "./pages/formations/FormationIAEducation";
import FormationIARetail from "./pages/formations/FormationIARetail";
import FormationIALogistique from "./pages/formations/FormationIALogistique";
import FormationIAImmobilier from "./pages/formations/FormationIAImmobilier";
import FormationIAAgriculture from "./pages/formations/FormationIAAgriculture";
import FormationIATransport from "./pages/formations/FormationIATransport";
import FormationIAEnergie from "./pages/formations/FormationIAEnergie";

// Outils IA Spécialisés
import OutilMidjourney from "./pages/outils/OutilMidjourney";
import OutilStableDiffusion from "./pages/outils/OutilStableDiffusion";
import OutilDALLEPro from "./pages/outils/OutilDALLEPro";
import OutilRunwayML from "./pages/outils/OutilRunwayML";
import OutilElevenLabs from "./pages/outils/OutilElevenLabs";
import OutilGitHubCopilot from "./pages/outils/OutilGitHubCopilot";

// Solutions Métier
import SolutionGestionTalents from "./pages/solutions/SolutionGestionTalents";
import SolutionServiceClient from "./pages/solutions/SolutionServiceClient";
import SolutionGestionStocks from "./pages/solutions/SolutionGestionStocks";

// Existing solution pages
import SolutionAutomatisationFacturation from "./pages/solutions/SolutionAutomatisationFacturation";

// Existing guide pages
import GuideDebutantIA2024 from "./pages/guides/GuideDebutantIA2024";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/calculateur-roi" element={<CalculateurROIPage />} />
            <Route path="/simulateur-roi" element={<SimulateurROIPage />} />
            <Route path="/avantages-automatisation" element={<AvantagesAutomatisation />} />
            <Route path="/demo-interactive" element={<DemoInteractive />} />
            <Route path="/roi-formations" element={<ROIFormations />} />
            <Route path="/roi-etudes-cas" element={<ROIEtudesCas />} />
            <Route path="/temoignages-clients" element={<TemoignagesClients />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/methodologie" element={<Methodologie />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/carrieres" element={<Carrieres />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/webinaires" element={<Webinaires />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/ressources-gratuites" element={<RessourcesGratuites />} />
            <Route path="/guides-et-tutoriels" element={<GuidesEtTutoriels />} />
            <Route path="/livre-blanc" element={<LivreBlanc />} />
            <Route path="/outils-ia" element={<OutilsIA />} />
            <Route path="/lab-ia" element={<LabIA />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/automatisation" element={<Automatisation />} />
            <Route path="/secteurs-business" element={<SecteursBusiness />} />
            <Route path="/certification-iso" element={<CertificationISO />} />
            <Route path="/accessibilite-numerique" element={<AccessibiliteNumerique />} />
            <Route path="/politique-qualite" element={<PolitiqueQualite />} />
            <Route path="/plan-site" element={<PlanSite />} />
            
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

            {/* Outils IA */}
            <Route path="/outil-midjourney" element={<OutilMidjourney />} />
            <Route path="/outil-stable-diffusion" element={<OutilStableDiffusion />} />
            <Route path="/outil-dalle-pro" element={<OutilDALLEPro />} />
            <Route path="/outil-runway-ml" element={<OutilRunwayML />} />
            <Route path="/outil-eleven-labs" element={<OutilElevenLabs />} />
            <Route path="/outil-github-copilot" element={<OutilGitHubCopilot />} />

            {/* Solutions Métier */}
            <Route path="/solution-automatisation-facturation" element={<SolutionAutomatisationFacturation />} />
            <Route path="/solution-gestion-talents" element={<SolutionGestionTalents />} />
            <Route path="/solution-service-client" element={<SolutionServiceClient />} />
            <Route path="/solution-gestion-stocks" element={<SolutionGestionStocks />} />

            {/* Guides */}
            <Route path="/guide-debutant-ia-2024" element={<GuideDebutantIA2024 />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
