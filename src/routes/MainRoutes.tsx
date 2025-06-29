
import { Route } from "react-router-dom";

// Main pages
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Formations from "@/pages/Formations";
import CalculateurROIPage from "@/pages/CalculateurROIPage";
import SimulateurROIPage from "@/pages/SimulateurROIPage";
import AvantagesAutomatisation from "@/pages/AvantagesAutomatisation";
import DemoInteractive from "@/pages/DemoInteractive";
import ROIFormations from "@/pages/ROIFormations";
import ROIEtudesCas from "@/pages/ROIEtudesCas";
import TemoignagesClients from "@/pages/TemoignagesClients";
import Testimonials from "@/pages/Testimonials";
import Certifications from "@/pages/Certifications";
import Methodologie from "@/pages/Methodologie";
import Projets from "@/pages/Projets";
import Blog from "@/pages/Blog";
import FAQ from "@/pages/FAQ";
import LegalMentions from "@/pages/LegalMentions";
import Confidentialite from "@/pages/Confidentialite";
import CGV from "@/pages/CGV";
import Newsletter from "@/pages/Newsletter";
import Partenaires from "@/pages/Partenaires";
import Carrieres from "@/pages/Carrieres";
import Equipe from "@/pages/Equipe";
import Actualites from "@/pages/Actualites";
import Webinaires from "@/pages/Webinaires";
import Evenements from "@/pages/Evenements";
import RessourcesGratuites from "@/pages/RessourcesGratuites";
import GuidesEtTutoriels from "@/pages/GuidesEtTutoriels";
import LivreBlanc from "@/pages/LivreBlanc";
import OutilsIA from "@/pages/OutilsIA";
import LabIA from "@/pages/LabIA";
import Tarifs from "@/pages/Tarifs";
import Automatisation from "@/pages/Automatisation";
import SecteursBusiness from "@/pages/SecteursBusiness";
import CertificationISO from "@/pages/CertificationISO";
import AccessibiliteNumerique from "@/pages/AccessibiliteNumerique";
import PolitiqueQualite from "@/pages/PolitiqueQualite";
import PlanSite from "@/pages/PlanSite";
import NotFound from "@/pages/NotFound";
import Sitemap from "@/pages/Sitemap";
import FormationIAFinance from "@/pages/FormationIAFinance";

// Secteurs émergents
import IAAutomobile from "@/pages/secteurs-emergents/IAAutomobile";
import IASante from "@/pages/secteurs-emergents/IASante";
import IABiotechnologie from "@/pages/secteurs-emergents/IABiotechnologie";
import IALogistique from "@/pages/secteurs-emergents/IALogistique";
import IAImmobilier from "@/pages/secteurs-emergents/IAImmobilier";

// Formations spécialisées
import FormationIAMarketing from "@/pages/formations-specialisees/FormationIAMarketing";
import FormationIAChirurgie from "@/pages/formations-specialisees/FormationIAChirurgie";
import FormationIAGameDev from "@/pages/formations-specialisees/FormationIAGameDev";
import FormationIACybersecurite from "@/pages/formations-specialisees/FormationIACybersecurite";

// Outils émergents
import OutilMidjourney from "@/pages/outils-emergents/OutilMidjourney";
import OutilOpenAIGPT5 from "@/pages/outils-emergents/OutilOpenAIGPT5";

// Méthodes
import MethodeNLP from "@/pages/methodes/MethodeNLP";

// Métiers
import IAConsultant from "@/pages/metiers/IAConsultant";

// Outils
import CalculateurPerformanceIA from "@/pages/outils/CalculateurPerformanceIA";

// Secteurs industriels
import Automobile from "@/pages/secteurs/Automobile";
import Aeronautique from "@/pages/secteurs/Aeronautique";
import BTP from "@/pages/secteurs/BTP";
import Agriculture from "@/pages/secteurs/Agriculture";

// Secteurs spécialisés santé
import SanteRadiologie from "@/pages/secteurs-specialises/SanteRadiologie";
import SanteOncologie from "@/pages/secteurs-specialises/SanteOncologie";
import SanteCardiologie from "@/pages/secteurs-specialises/SanteCardiologie";

// Ressources
import Templates from "@/pages/ressources/Templates";
import GuidesIA from "@/pages/ressources/GuidesIA";
import WebinairesRessources from "@/pages/ressources/Webinaires";
import CommunauteOpenSource from "@/pages/ressources/CommunauteOpenSource";
import CommunauteIA from "@/pages/ressources/CommunauteIA";
import LivresBlancsIA from "@/pages/ressources/LivresBlancsIA";
import OutilsGratuits from "@/pages/ressources/OutilsGratuits";
import CasEtudes from "@/pages/ressources/CasEtudes";
import Podcasts from "@/pages/ressources/Podcasts";
import BibliothequeIA from "@/pages/ressources/BibliothequeIA";

// Nouvelles formations techniques
import TensorFlow from "@/pages/formations/TensorFlow";
import ScikitLearn from "@/pages/formations/Scikit-learn";
import Pandas from "@/pages/formations/Pandas";
import NumPy from "@/pages/formations/NumPy";
import Matplotlib from "@/pages/formations/Matplotlib";

export const MainRoutes = () => (
  <>
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
    <Route path="/sitemap" element={<Sitemap />} />
    <Route path="/formationiafinance" element={<FormationIAFinance />} />
    
    {/* Secteurs émergents */}
    <Route path="/secteurs-emergents/ia-automobile" element={<IAAutomobile />} />
    <Route path="/secteurs-emergents/ia-sante" element={<IASante />} />
    <Route path="/secteurs-emergents/ia-biotechnologie" element={<IABiotechnologie />} />
    <Route path="/secteurs-emergents/ia-logistique" element={<IALogistique />} />
    <Route path="/secteurs-emergents/ia-immobilier" element={<IAImmobilier />} />
    
    {/* Formations spécialisées */}
    <Route path="/formations-specialisees/formation-ia-marketing" element={<FormationIAMarketing />} />
    <Route path="/formations-specialisees/formation-ia-chirurgie" element={<FormationIAChirurgie />} />
    <Route path="/formations-specialisees/formation-ia-gamedev" element={<FormationIAGameDev />} />
    <Route path="/formations-specialisees/formation-ia-cybersecurite" element={<FormationIACybersecurite />} />
    
    {/* Outils émergents */}
    <Route path="/outils-emergents/outil-midjourney" element={<OutilMidjourney />} />
    <Route path="/outils-emergents/outil-openai-gpt5" element={<OutilOpenAIGPT5 />} />
    
    {/* Méthodes */}
    <Route path="/methodes/methode-nlp" element={<MethodeNLP />} />
    
    {/* Métiers */}
    <Route path="/metiers/ia-consultant" element={<IAConsultant />} />
    
    {/* Outils */}
    <Route path="/outils/calculateur-performance-ia" element={<CalculateurPerformanceIA />} />
    
    {/* Secteurs industriels */}
    <Route path="/secteurs/automobile" element={<Automobile />} />
    <Route path="/secteurs/aeronautique" element={<Aeronautique />} />
    <Route path="/secteurs/btp" element={<BTP />} />
    <Route path="/secteurs/agriculture" element={<Agriculture />} />
    
    {/* Secteurs spécialisés santé */}
    <Route path="/secteurs-specialises/sante-radiologie" element={<SanteRadiologie />} />
    <Route path="/secteurs-specialises/sante-oncologie" element={<SanteOncologie />} />
    <Route path="/secteurs-specialises/sante-cardiologie" element={<SanteCardiologie />} />
    
    {/* Ressources */}
    <Route path="/ressources/templates" element={<Templates />} />
    <Route path="/ressources/guides-ia" element={<GuidesIA />} />
    <Route path="/ressources/webinaires" element={<WebinairesRessources />} />
    <Route path="/ressources/communaute-opensource" element={<CommunauteOpenSource />} />
    <Route path="/ressources/communaute-ia" element={<CommunauteIA />} />
    <Route path="/ressources/livres-blancs-ia" element={<LivresBlancsIA />} />
    <Route path="/ressources/outils-gratuits" element={<OutilsGratuits />} />
    <Route path="/ressources/cas-etudes" element={<CasEtudes />} />
    <Route path="/ressources/podcasts" element={<Podcasts />} />
    <Route path="/ressources/bibliotheque-ia" element={<BibliothequeIA />} />
    
    {/* Formations techniques */}
    <Route path="/formations/tensorflow" element={<TensorFlow />} />
    <Route path="/formations/scikit-learn" element={<ScikitLearn />} />
    <Route path="/formations/pandas" element={<Pandas />} />
    <Route path="/formations/numpy" element={<NumPy />} />
    <Route path="/formations/matplotlib" element={<Matplotlib />} />
    
    <Route path="*" element={<NotFound />} />
  </>
);
