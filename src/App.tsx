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
import OutilCopilotStudio from "./pages/outils/OutilCopilotStudio";
import OutilMakeAutomation from "./pages/outils/OutilMakeAutomation";
import OutilIntegromatScenarios from "./pages/outils/OutilIntegromatScenarios";
import OutilPowerAutomate from "./pages/outils/OutilPowerAutomate";

// Solutions Métier
import SolutionGestionTalents from "./pages/solutions/SolutionGestionTalents";
import SolutionServiceClient from "./pages/solutions/SolutionServiceClient";
import SolutionGestionStocks from "./pages/solutions/SolutionGestionStocks";
import SolutionComptabiliteIA from "./pages/solutions/SolutionComptabiliteIA";
import SolutionVentesIA from "./pages/solutions/SolutionVentesIA";
import SolutionMarketingAutomation from "./pages/solutions/SolutionMarketingAutomation";
import SolutionCRMIntelligent from "./pages/solutions/SolutionCRMIntelligent";
import SolutionERPAutomatise from "./pages/solutions/SolutionERPAutomatise";
import SolutionBusinessIntelligence from "./pages/solutions/SolutionBusinessIntelligence";
import SolutionGestionProjet from "./pages/solutions/SolutionGestionProjet";

// Certifications Professionnelles
import CertificationProfessionnelleIA from "./pages/certifications/CertificationProfessionnelleIA";
import CertificationExpertIA from "./pages/certifications/CertificationExpertIA";
import CertificationConsultantIA from "./pages/certifications/CertificationConsultantIA";
import CertificationArchitecteIA from "./pages/certifications/CertificationArchitecteIA";
import CertificationDataScientist from "./pages/certifications/CertificationDataScientist";
import CertificationMLEngineer from "./pages/certifications/CertificationMLEngineer";
import CertificationPromptEngineer from "./pages/certifications/CertificationPromptEngineer";
import CertificationAutomatisation from "./pages/certifications/CertificationAutomatisation";
import CertificationIAResponsable from "./pages/certifications/CertificationIAResponsable";
import CertificationInnovationIA from "./pages/certifications/CertificationInnovationIA";

// Services Consulting
import ConsultingTransformationIA from "./pages/consulting/ConsultingTransformationIA";
import ConsultingStrategieIA from "./pages/consulting/ConsultingStrategieIA";
import ConsultingAuditIA from "./pages/consulting/ConsultingAuditIA";
import ConsultingImplementationIA from "./pages/consulting/ConsultingImplementationIA";
import ConsultingFormationEquipe from "./pages/consulting/ConsultingFormationEquipe";
import ConsultingOptimisationProcessus from "./pages/consulting/ConsultingOptimisationProcessus";
import ConsultingArchitectureIA from "./pages/consulting/ConsultingArchitectureIA";
import ConsultingGouvernanceIA from "./pages/consulting/ConsultingGouvernanceIA";
import ConsultingROIIA from "./pages/consulting/ConsultingROIIA";
import ConsultingChangementOrganisationnel from "./pages/consulting/ConsultingChangementOrganisationnel";

// Secteurs d'Activité
import SecteurBanqueAssurance from "./pages/secteurs/SecteurBanqueAssurance";
import SecteurSanteIA from "./pages/secteurs/SecteurSanteIA";
import SecteurIndustrieManufacture from "./pages/secteurs/SecteurIndustrieManufacture";
import SecteurRetailCommerce from "./pages/secteurs/SecteurRetailCommerce";
import SecteurTelecom from "./pages/secteurs/SecteurTelecom";
import SecteurTransportLogistique from "./pages/secteurs/SecteurTransportLogistique";
import SecteurEnergieUtilities from "./pages/secteurs/SecteurEnergieUtilities";
import SecteurMediaDivertissement from "./pages/secteurs/SecteurMediaDivertissement";
import SecteurGouvernementPublic from "./pages/secteurs/SecteurGouvernementPublic";
import SecteurStartupTech from "./pages/secteurs/SecteurStartupTech";

// Technologies et Plateformes
import TechnologieAWSIA from "./pages/technologies/TechnologieAWSIA";
import TechnologieAzureIA from "./pages/technologies/TechnologieAzureIA";
import TechnologieGoogleCloudIA from "./pages/technologies/TechnologieGoogleCloudIA";
import TechnologieKubernetes from "./pages/technologies/TechnologieKubernetes";
import TechnologieDocker from "./pages/technologies/TechnologieDocker";
import TechnologieTensorBoard from "./pages/technologies/TechnologieTensorBoard";
import TechnologieMLflow from "./pages/technologies/TechnologieMLflow";
import TechnologieHuggingFace from "./pages/technologies/TechnologieHuggingFace";
import TechnologieOpenAI from "./pages/technologies/TechnologieOpenAI";
import TechnologieAnthropic from "./pages/technologies/TechnologieAnthropic";

// Cas d'Usage et Applications
import CasUsageDetectionFraude from "./pages/cas-usage/CasUsageDetectionFraude";
import CasUsageRecommandationPersonnalisee from "./pages/cas-usage/CasUsageRecommandationPersonnalisee";
import CasUsageAnalyseSentiment from "./pages/cas-usage/CasUsageAnalyseSentiment";
import CasUsageMaintenancePredictive from "./pages/cas-usage/CasUsageMaintenancePredictive";
import CasUsageOptimisationPrix from "./pages/cas-usage/CasUsageOptimisationPrix";
import CasUsageGestionRisque from "./pages/cas-usage/CasUsageGestionRisque";
import CasUsageAutomatisationDocument from "./pages/cas-usage/CasUsageAutomatisationDocument";
import CasUsageChurPrediction from "./pages/cas-usage/CasUsageChurPrediction";
import CasUsageSegmentationClient from "./pages/cas-usage/CasUsageSegmentationClient";
import CasUsageOptimisationSupplyChain from "./pages/cas-usage/CasUsageOptimisationSupplyChain";

// Webinaires et Événements
import WebinaireTendancesIA2024 from "./pages/webinaires/WebinaireTendancesIA2024";
import WebinaireAutomatisationEntreprise from "./pages/webinaires/WebinaireAutomatisationEntreprise";
import WebinaireChatGPTBusiness from "./pages/webinaires/WebinaireChatGPTBusiness";
import WebinaireIAEthiqueResponsable from "./pages/webinaires/WebinaireIAEthiqueResponsable";
import WebinaireTransformationDigitale from "./pages/webinaires/WebinaireTransformationDigitale";
import WebinaireROIInvestissementIA from "./pages/webinaires/WebinaireROIInvestissementIA";
import WebinaireFormationEquipeIA from "./pages/webinaires/WebinaireFormationEquipeIA";
import WebinaireStrategieImplementationIA from "./pages/webinaires/WebinaireStrategieImplementationIA";
import WebinaireSecuriteIA from "./pages/webinaires/WebinaireSecuriteIA";
import WebinaireFuturTravailIA from "./pages/webinaires/WebinaireFuturTravailIA";

// Ressources et Guides
import GuideImplementationIA from "./pages/guides/GuideImplementationIA";
import GuideStrategieIA from "./pages/guides/GuideStrategieIA";
import GuideSelectionOutils from "./pages/guides/GuideSelectionOutils";
import GuideFormationEquipe from "./pages/guides/GuideFormationEquipe";
import GuideMesureROI from "./pages/guides/GuideMesureROI";
import GuideGestionChangement from "./pages/guides/GuideGestionChangement";
import GuideSecuriteIA from "./pages/guides/GuideSecuriteIA";
import GuideConformiteIA from "./pages/guides/GuideConformiteIA";
import GuideOptimisationPerformance from "./pages/guides/GuideOptimisationPerformance";
import GuideMaintenanceIA from "./pages/guides/GuideMaintenanceIA";

// Partenariats et Écosystème
import PartenaireStrategiqueIA from "./pages/partenaires/PartenaireStrategiqueIA";
import PartenaireIntegrateur from "./pages/partenaires/PartenaireIntegrateur";
import PartenaireConsultant from "./pages/partenaires/PartenaireConsultant";
import PartenaireFormateur from "./pages/partenaires/PartenaireFormateur";
import PartenaireTechnologique from "./pages/partenaires/PartenaireTechnologique";
import PartenaireDistributeur from "./pages/partenaires/PartenaireDistributeur";
import PartenaireStartup from "./pages/partenaires/PartenaireStartup";
import PartenaireUniversite from "./pages/partenaires/PartenaireUniversite";
import PartenaireInstitutionnel from "./pages/partenaires/PartenaireInstitutionnel";
import PartenaireInnovation from "./pages/partenaires/PartenaireInnovation";

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
            <Route path="/outil-copilot-studio" element={<OutilCopilotStudio />} />
            <Route path="/outil-make-automation" element={<OutilMakeAutomation />} />
            <Route path="/outil-integromat-scenarios" element={<OutilIntegromatScenarios />} />
            <Route path="/outil-power-automate" element={<OutilPowerAutomate />} />

            {/* Solutions Métier */}
            <Route path="/solution-automatisation-facturation" element={<SolutionAutomatisationFacturation />} />
            <Route path="/solution-gestion-talents" element={<SolutionGestionTalents />} />
            <Route path="/solution-service-client" element={<SolutionServiceClient />} />
            <Route path="/solution-gestion-stocks" element={<SolutionGestionStocks />} />
            <Route path="/solution-comptabilite-ia" element={<SolutionComptabiliteIA />} />
            <Route path="/solution-ventes-ia" element={<SolutionVentesIA />} />
            <Route path="/solution-marketing-automation" element={<SolutionMarketingAutomation />} />
            <Route path="/solution-crm-intelligent" element={<SolutionCRMIntelligent />} />
            <Route path="/solution-erp-automatise" element={<SolutionERPAutomatise />} />
            <Route path="/solution-business-intelligence" element={<SolutionBusinessIntelligence />} />
            <Route path="/solution-gestion-projet" element={<SolutionGestionProjet />} />

            {/* Certifications */}
            <Route path="/certification-professionnelle-ia" element={<CertificationProfessionnelleIA />} />
            <Route path="/certification-expert-ia" element={<CertificationExpertIA />} />
            <Route path="/certification-consultant-ia" element={<CertificationConsultantIA />} />
            <Route path="/certification-architecte-ia" element={<CertificationArchitecteIA />} />
            <Route path="/certification-data-scientist" element={<CertificationDataScientist />} />
            <Route path="/certification-ml-engineer" element={<CertificationMLEngineer />} />
            <Route path="/certification-prompt-engineer" element={<CertificationPromptEngineer />} />
            <Route path="/certification-automatisation" element={<CertificationAutomatisation />} />
            <Route path="/certification-ia-responsable" element={<CertificationIAResponsable />} />
            <Route path="/certification-innovation-ia" element={<CertificationInnovationIA />} />

            {/* Consulting */}
            <Route path="/consulting-transformation-ia" element={<ConsultingTransformationIA />} />
            <Route path="/consulting-strategie-ia" element={<ConsultingStrategieIA />} />
            <Route path="/consulting-audit-ia" element={<ConsultingAuditIA />} />
            <Route path="/consulting-implementation-ia" element={<ConsultingImplementationIA />} />
            <Route path="/consulting-formation-equipe" element={<ConsultingFormationEquipe />} />
            <Route path="/consulting-optimisation-processus" element={<ConsultingOptimisationProcessus />} />
            <Route path="/consulting-architecture-ia" element={<ConsultingArchitectureIA />} />
            <Route path="/consulting-gouvernance-ia" element={<ConsultingGouvernanceIA />} />
            <Route path="/consulting-roi-ia" element={<ConsultingROIIA />} />
            <Route path="/consulting-changement-organisationnel" element={<ConsultingChangementOrganisationnel />} />

            {/* Secteurs */}
            <Route path="/secteur-banque-assurance" element={<SecteurBanqueAssurance />} />
            <Route path="/secteur-sante-ia" element={<SecteurSanteIA />} />
            <Route path="/secteur-industrie-manufacture" element={<SecteurIndustrieManufacture />} />
            <Route path="/secteur-retail-commerce" element={<SecteurRetailCommerce />} />
            <Route path="/secteur-telecom" element={<SecteurTelecom />} />
            <Route path="/secteur-transport-logistique" element={<SecteurTransportLogistique />} />
            <Route path="/secteur-energie-utilities" element={<SecteurEnergieUtilities />} />
            <Route path="/secteur-media-divertissement" element={<SecteurMediaDivertissement />} />
            <Route path="/secteur-gouvernement-public" element={<SecteurGouvernementPublic />} />
            <Route path="/secteur-startup-tech" element={<SecteurStartupTech />} />

            {/* Technologies */}
            <Route path="/technologie-aws-ia" element={<TechnologieAWSIA />} />
            <Route path="/technologie-azure-ia" element={<TechnologieAzureIA />} />
            <Route path="/technologie-google-cloud-ia" element={<TechnologieGoogleCloudIA />} />
            <Route path="/technologie-kubernetes" element={<TechnologieKubernetes />} />
            <Route path="/technologie-docker" element={<TechnologieDocker />} />
            <Route path="/technologie-tensorboard" element={<TechnologieTensorBoard />} />
            <Route path="/technologie-mlflow" element={<TechnologieMLflow />} />
            <Route path="/technologie-huggingface" element={<TechnologieHuggingFace />} />
            <Route path="/technologie-openai" element={<TechnologieOpenAI />} />
            <Route path="/technologie-anthropic" element={<TechnologieAnthropic />} />

            {/* Cas d'Usage */}
            <Route path="/cas-usage-detection-fraude" element={<CasUsageDetectionFraude />} />
            <Route path="/cas-usage-recommandation-personnalisee" element={<CasUsageRecommandationPersonnalisee />} />
            <Route path="/cas-usage-analyse-sentiment" element={<CasUsageAnalyseSentiment />} />
            <Route path="/cas-usage-maintenance-predictive" element={<CasUsageMaintenancePredictive />} />
            <Route path="/cas-usage-optimisation-prix" element={<CasUsageOptimisationPrix />} />
            <Route path="/cas-usage-gestion-risque" element={<CasUsageGestionRisque />} />
            <Route path="/cas-usage-automatisation-document" element={<CasUsageAutomatisationDocument />} />
            <Route path="/cas-usage-churn-prediction" element={<CasUsageChurPrediction />} />
            <Route path="/cas-usage-segmentation-client" element={<CasUsageSegmentationClient />} />
            <Route path="/cas-usage-optimisation-supply-chain" element={<CasUsageOptimisationSupplyChain />} />

            {/* Webinaires */}
            <Route path="/webinaire-tendances-ia-2024" element={<WebinaireTendancesIA2024 />} />
            <Route path="/webinaire-automatisation-entreprise" element={<WebinaireAutomatisationEntreprise />} />
            <Route path="/webinaire-chatgpt-business" element={<WebinaireChatGPTBusiness />} />
            <Route path="/webinaire-ia-ethique-responsable" element={<WebinaireIAEthiqueResponsable />} />
            <Route path="/webinaire-transformation-digitale" element={<WebinaireTransformationDigitale />} />
            <Route path="/webinaire-roi-investissement-ia" element={<WebinaireROIInvestissementIA />} />
            <Route path="/webinaire-formation-equipe-ia" element={<WebinaireFormationEquipeIA />} />
            <Route path="/webinaire-strategie-implementation-ia" element={<WebinaireStrategieImplementationIA />} />
            <Route path="/webinaire-securite-ia" element={<WebinaireSecuriteIA />} />
            <Route path="/webinaire-futur-travail-ia" element={<WebinaireFuturTravailIA />} />

            {/* Guides */}
            <Route path="/guide-debutant-ia-2024" element={<GuideDebutantIA2024 />} />
            <Route path="/guide-implementation-ia" element={<GuideImplementationIA />} />
            <Route path="/guide-strategie-ia" element={<GuideStrategieIA />} />
            <Route path="/guide-selection-outils" element={<GuideSelectionOutils />} />
            <Route path="/guide-formation-equipe" element={<GuideFormationEquipe />} />
            <Route path="/guide-mesure-roi" element={<GuideMesureROI />} />
            <Route path="/guide-gestion-changement" element={<GuideGestionChangement />} />
            <Route path="/guide-securite-ia" element={<GuideSecuriteIA />} />
            <Route path="/guide-conformite-ia" element={<GuideConformiteIA />} />
            <Route path="/guide-optimisation-performance" element={<GuideOptimisationPerformance />} />
            <Route path="/guide-maintenance-ia" element={<GuideMaintenanceIA />} />

            {/* Partenaires */}
            <Route path="/partenaire-strategique-ia" element={<PartenaireStrategiqueIA />} />
            <Route path="/partenaire-integrateur" element={<PartenaireIntegrateur />} />
            <Route path="/partenaire-consultant" element={<PartenaireConsultant />} />
            <Route path="/partenaire-formateur" element={<PartenaireFormateur />} />
            <Route path="/partenaire-technologique" element={<PartenaireTechnologique />} />
            <Route path="/partenaire-distributeur" element={<PartenaireDistributeur />} />
            <Route path="/partenaire-startup" element={<PartenaireStartup />} />
            <Route path="/partenaire-universite" element={<PartenaireUniversite />} />
            <Route path="/partenaire-institutionnel" element={<PartenaireInstitutionnel />} />
            <Route path="/partenaire-innovation" element={<PartenaireInnovation />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
