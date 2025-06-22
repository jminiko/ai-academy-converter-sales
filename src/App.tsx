
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

// Nouvelles pages formations spécialisées
import FormationChatGPTEntreprise from "./pages/formations/FormationChatGPTEntreprise";
import FormationAutomatisationProcessus from "./pages/formations/FormationAutomatisationProcessus";
import FormationPromptEngineering from "./pages/formations/FormationPromptEngineering";
import FormationIAMarketing from "./pages/formations/FormationIAMarketing";
import FormationRPAZapier from "./pages/formations/FormationRPAZapier";
import FormationIAComptabilite from "./pages/formations/FormationIAComptabilite";
import FormationChatbotIA from "./pages/formations/FormationChatbotIA";
import FormationAnalyseDonnees from "./pages/formations/FormationAnalyseDonnees";
import FormationIARessourcesHumaines from "./pages/formations/FormationIARessourcesHumaines";
import FormationIAVente from "./pages/formations/FormationIAVente";

// Nouvelles pages solutions métier
import SolutionAutomatisationFacturation from "./pages/solutions/SolutionAutomatisationFacturation";
import SolutionChatbotClient from "./pages/solutions/SolutionChatbotClient";
import SolutionAnalyseSentimentClient from "./pages/solutions/SolutionAnalyseSentimentClient";
import SolutionOptimisationStock from "./pages/solutions/SolutionOptimisationStock";
import SolutionRecrutementIA from "./pages/solutions/SolutionRecrutementIA";
import SolutionMarketingPredictif from "./pages/solutions/SolutionMarketingPredictif";
import SolutionDetectionAnomalie from "./pages/solutions/SolutionDetectionAnomalie";
import SolutionRecommandationProduit from "./pages/solutions/SolutionRecommandationProduit";
import SolutionAutomatisationEmail from "./pages/solutions/SolutionAutomatisationEmail";
import SolutionAnalysePerformance from "./pages/solutions/SolutionAnalysePerformance";

// Nouvelles pages secteurs
import SecteurBanqueAssurance from "./pages/secteurs/SecteurBanqueAssurance";
import SecteurIndustrieManufacture from "./pages/secteurs/SecteurIndustrieManufacture";
import SecteurConseilJuridique from "./pages/secteurs/SecteurConseilJuridique";
import SecteurAgenceImmobiliere from "./pages/secteurs/SecteurAgenceImmobiliere";
import SecteurCliqueVetement from "./pages/secteurs/SecteurCliqueVetement";
import SecteurRestaurantHotellerie from "./pages/secteurs/SecteurRestaurantHotellerie";
import SecteurAgenceVoyage from "./pages/secteurs/SecteurAgenceVoyage";
import SecteurCentreFormation from "./pages/secteurs/SecteurCentreFormation";
import SecteurCliqueBeaute from "./pages/secteurs/SecteurCliqueBeaute";
import SecteurServiceFinancier from "./pages/secteurs/SecteurServiceFinancier";

// Nouvelles pages outils IA
import OutilChatGPT4 from "./pages/outils/OutilChatGPT4";
import OutilClaude3 from "./pages/outils/OutilClaude3";
import OutilMidjourney from "./pages/outils/OutilMidjourney";
import OutilZapierIA from "./pages/outils/OutilZapierIA";
import OutilMakeAutomation from "./pages/outils/OutilMakeAutomation";
import OutilNotionAI from "./pages/outils/OutilNotionAI";
import OutilCopilotMicrosoft from "./pages/outils/OutilCopilotMicrosoft";
import OutilGeminiGoogle from "./pages/outils/OutilGeminiGoogle";
import OutilCanvaIA from "./pages/outils/OutilCanvaIA";
import OutilLoomIA from "./pages/outils/OutilLoomIA";

// Nouvelles pages cas d'usage
import CasUsageAutomatisationVente from "./pages/cas-usage/CasUsageAutomatisationVente";
import CasUsageServiceClient from "./pages/cas-usage/CasUsageServiceClient";
import CasUsageGestionStock from "./pages/cas-usage/CasUsageGestionStock";
import CasUsageRecrutement from "./pages/cas-usage/CasUsageRecrutement";
import CasUsageMarketingEmail from "./pages/cas-usage/CasUsageMarketingEmail";
import CasUsageAnalyseFinanciere from "./pages/cas-usage/CasUsageAnalyseFinanciere";
import CasUsageFormationPersonnel from "./pages/cas-usage/CasUsageFormationPersonnel";
import CasUsageGestionProjet from "./pages/cas-usage/CasUsageGestionProjet";
import CasUsageOptimisationPrix from "./pages/cas-usage/CasUsageOptimisationPrix";
import CasUsageAnalyseRisque from "./pages/cas-usage/CasUsageAnalyseRisque";

// Nouvelles pages guides pratiques
import GuideDebutantIA2024 from "./pages/guides/GuideDebutantIA2024";
import GuideChatGPTEntreprise from "./pages/guides/GuideChatGPTEntreprise";
import GuideAutomatisationZapier from "./pages/guides/GuideAutomatisationZapier";
import GuidePromptOptimal from "./pages/guides/GuidePromptOptimal";
import GuideMiseOeuvreIA from "./pages/guides/GuideMiseOeuvreIA";
import GuideROIAutomatisation from "./pages/guides/GuideROIAutomatisation";
import GuideSecuriteIA from "./pages/guides/GuideSecuriteIA";
import GuideIntegrationIA from "./pages/guides/GuideIntegrationIA";
import GuideFormationEquipe from "./pages/guides/GuideFormationEquipe";
import GuideTransformationDigitale from "./pages/guides/GuideTransformationDigitale";

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
            
            {/* Nouvelles routes formations spécialisées */}
            <Route path="/formation-chatgpt-entreprise" element={<FormationChatGPTEntreprise />} />
            <Route path="/formation-automatisation-processus" element={<FormationAutomatisationProcessus />} />
            <Route path="/formation-prompt-engineering" element={<FormationPromptEngineering />} />
            <Route path="/formation-ia-marketing" element={<FormationIAMarketing />} />
            <Route path="/formation-rpa-zapier" element={<FormationRPAZapier />} />
            <Route path="/formation-ia-comptabilite" element={<FormationIAComptabilite />} />
            <Route path="/formation-chatbot-ia" element={<FormationChatbotIA />} />
            <Route path="/formation-analyse-donnees" element={<FormationAnalyseDonnees />} />
            <Route path="/formation-ia-ressources-humaines" element={<FormationIARessourcesHumaines />} />
            <Route path="/formation-ia-vente" element={<FormationIAVente />} />

            {/* Nouvelles routes solutions métier */}
            <Route path="/solution-automatisation-facturation" element={<SolutionAutomatisationFacturation />} />
            <Route path="/solution-chatbot-client" element={<SolutionChatbotClient />} />
            <Route path="/solution-analyse-sentiment-client" element={<SolutionAnalyseSentimentClient />} />
            <Route path="/solution-optimisation-stock" element={<SolutionOptimisationStock />} />
            <Route path="/solution-recrutement-ia" element={<SolutionRecrutementIA />} />
            <Route path="/solution-marketing-predictif" element={<SolutionMarketingPredictif />} />
            <Route path="/solution-detection-anomalie" element={<SolutionDetectionAnomalie />} />
            <Route path="/solution-recommandation-produit" element={<SolutionRecommandationProduit />} />
            <Route path="/solution-automatisation-email" element={<SolutionAutomatisationEmail />} />
            <Route path="/solution-analyse-performance" element={<SolutionAnalysePerformance />} />

            {/* Nouvelles routes secteurs */}
            <Route path="/secteur-banque-assurance" element={<SecteurBanqueAssurance />} />
            <Route path="/secteur-industrie-manufacture" element={<SecteurIndustrieManufacture />} />
            <Route path="/secteur-conseil-juridique" element={<SecteurConseilJuridique />} />
            <Route path="/secteur-agence-immobiliere" element={<SecteurAgenceImmobiliere />} />
            <Route path="/secteur-clique-vetement" element={<SecteurCliqueVetement />} />
            <Route path="/secteur-restaurant-hotellerie" element={<SecteurRestaurantHotellerie />} />
            <Route path="/secteur-agence-voyage" element={<SecteurAgenceVoyage />} />
            <Route path="/secteur-centre-formation" element={<SecteurCentreFormation />} />
            <Route path="/secteur-clique-beaute" element={<SecteurCliqueBeaute />} />
            <Route path="/secteur-service-financier" element={<SecteurServiceFinancier />} />

            {/* Nouvelles routes outils IA */}
            <Route path="/outil-chatgpt4" element={<OutilChatGPT4 />} />
            <Route path="/outil-claude3" element={<OutilClaude3 />} />
            <Route path="/outil-midjourney" element={<OutilMidjourney />} />
            <Route path="/outil-zapier-ia" element={<OutilZapierIA />} />
            <Route path="/outil-make-automation" element={<OutilMakeAutomation />} />
            <Route path="/outil-notion-ai" element={<OutilNotionAI />} />
            <Route path="/outil-copilot-microsoft" element={<OutilCopilotMicrosoft />} />
            <Route path="/outil-gemini-google" element={<OutilGeminiGoogle />} />
            <Route path="/outil-canva-ia" element={<OutilCanvaIA />} />
            <Route path="/outil-loom-ia" element={<OutilLoomIA />} />

            {/* Nouvelles routes cas d'usage */}
            <Route path="/cas-usage-automatisation-vente" element={<CasUsageAutomatisationVente />} />
            <Route path="/cas-usage-service-client" element={<CasUsageServiceClient />} />
            <Route path="/cas-usage-gestion-stock" element={<CasUsageGestionStock />} />
            <Route path="/cas-usage-recrutement" element={<CasUsageRecrutement />} />
            <Route path="/cas-usage-marketing-email" element={<CasUsageMarketingEmail />} />
            <Route path="/cas-usage-analyse-financiere" element={<CasUsageAnalyseFinanciere />} />
            <Route path="/cas-usage-formation-personnel" element={<CasUsageFormationPersonnel />} />
            <Route path="/cas-usage-gestion-projet" element={<CasUsageGestionProjet />} />
            <Route path="/cas-usage-optimisation-prix" element={<CasUsageOptimisationPrix />} />
            <Route path="/cas-usage-analyse-risque" element={<CasUsageAnalyseRisque />} />

            {/* Nouvelles routes guides pratiques */}
            <Route path="/guide-debutant-ia-2024" element={<GuideDebutantIA2024 />} />
            <Route path="/guide-chatgpt-entreprise" element={<GuideChatGPTEntreprise />} />
            <Route path="/guide-automatisation-zapier" element={<GuideAutomatisationZapier />} />
            <Route path="/guide-prompt-optimal" element={<GuidePromptOptimal />} />
            <Route path="/guide-mise-oeuvre-ia" element={<GuideMiseOeuvreIA />} />
            <Route path="/guide-roi-automatisation" element={<GuideROIAutomatisation />} />
            <Route path="/guide-securite-ia" element={<GuideSecuriteIA />} />
            <Route path="/guide-integration-ia" element={<GuideIntegrationIA />} />
            <Route path="/guide-formation-equipe" element={<GuideFormationEquipe />} />
            <Route path="/guide-transformation-digitale" element={<GuideTransformationDigitale />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
