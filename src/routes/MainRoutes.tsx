
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
    
    <Route path="*" element={<NotFound />} />
  </>
);
