
import { Route } from "react-router-dom";

// Import de toutes les routes existantes
import FormationsRoutes from "./FormationsRoutes";
import FormationsAvanceesRoutes from "./FormationsAvanceesRoutes";
import GuidesRoutes from "./GuidesRoutes";
import GuidesAvancesRoutes from "./GuidesAvancesRoutes";
import MethodesRoutes from "./MethodesRoutes";
import ReglementationRoutes from "./ReglementationRoutes";
import OutilsRoutes from "./OutilsRoutes";
import ConseilsRoutes from "./ConseilsRoutes";
import IndustriesRoutes from "./IndustriesRoutes";
import SecteursRoutes from "./SecteursRoutes";
import TechnologiesRoutes from "./TechnologiesRoutes";
import SolutionsRoutes from "./SolutionsRoutes";
import SolutionsAvanceesRoutes from "./SolutionsAvanceesRoutes";
import { MainRoutes } from "./MainRoutes";
import { ServicesRoutes } from "./ServicesRoutes";
import WebinairesRoutes from "./WebinairesRoutes";
import CasEtudesRoutes from "./CasEtudesRoutes";
import ApplicationsRoutes from "./ApplicationsRoutes";
import SecteurHotellerieRoutes from "./SecteurHotellerieRoutes";
import CertificationsAvanceesRoutes from "./CertificationsAvanceesRoutes";
import OutilsAvancesRoutes from "./OutilsAvancesRoutes";
import TendancesRoutes from "./TendancesRoutes";
import FormationRoutes from "./FormationRoutes";
import NouvelleSectionsRoutes from "./NouvelleSectionsRoutes";
import SolutionsSpecialisees from "./SolutionsSpecialisees";
import OutilsSpecialisesRoutes from "./OutilsSpecialisesRoutes";
import MetiersRoutes from "./MetiersRoutes";
import ConceptsRoutes from "./ConceptsRoutes";
import TypesIARoutes from "./TypesIARoutes";
import RoutesMassives from "./RoutesMassives";
import RoutesComplete500 from "./RoutesComplete500";

// Import des nouvelles pages générées
import FormationIABusiness from "@/pages/formations/FormationIABusiness";
import FormationIALeadership from "@/pages/formations/FormationIALeadership";
import FormationIAGestion from "@/pages/formations/FormationIAGestion";
import TourismIA from "@/pages/industries/TourismIA";
import SportIA from "@/pages/industries/SportIA";
import BlockchainAI from "@/pages/technologies/BlockchainAI";
import IoTAI from "@/pages/technologies/IoTAI";
import SolutionIAVente from "@/pages/solutions/SolutionIAVente";
import SolutionIAMarketing from "@/pages/solutions/SolutionIAMarketing";
import OutilAnalyseDonnees from "@/pages/outils/OutilAnalyseDonnees";
import OutilGenerationTexte from "@/pages/outils/OutilGenerationTexte";
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";
import ReseauxNeurones from "@/pages/concepts/ReseauxNeurones";
import ApprentissageAutomatique from "@/pages/concepts/ApprentissageAutomatique";
import IASymbolique from "@/pages/types-ia/IASymbolique";
import IAConnexionniste from "@/pages/types-ia/IAConnexionniste";
import SanteCardiologie from "@/pages/secteurs-specialises/SanteCardiologie";
import IADebutant from "@/pages/formations-niveau/IADebutant";
import FormationIAFinance from "@/pages/FormationIAFinance";
import Stats500Pages from "@/pages/Stats500Pages";

const AllRoutes = () => {
  return (
    <>
      {/* Routes existantes */}
      {MainRoutes()}
      {FormationsRoutes()}
      {FormationsAvanceesRoutes()}
      {FormationRoutes()}
      {GuidesRoutes()}
      {GuidesAvancesRoutes()}
      {MethodesRoutes()}
      {ReglementationRoutes()}
      {OutilsRoutes()}
      {OutilsAvancesRoutes()}
      {OutilsSpecialisesRoutes()}
      {ConseilsRoutes()}
      {IndustriesRoutes()}
      {SecteursRoutes()}
      {SecteurHotellerieRoutes()}
      {TechnologiesRoutes()}
      {SolutionsRoutes()}
      {SolutionsAvanceesRoutes()}
      {SolutionsSpecialisees()}
      {ServicesRoutes()}
      {WebinairesRoutes()}
      {CasEtudesRoutes()}
      {ApplicationsRoutes()}
      {CertificationsAvanceesRoutes()}
      {TendancesRoutes()}
      {NouvelleSectionsRoutes()}
      {MetiersRoutes()}
      {ConceptsRoutes()}
      {TypesIARoutes()}
      {RoutesMassives()}

      {/* NOUVEAU: Routes complètes pour les 500 pages */}
      {RoutesComplete500()}

      {/* Page de statistiques */}
      <Route path="/stats-500-pages" element={<Stats500Pages />} />

      {/* Nouvelles routes directes */}
      <Route path="/formation-ia-business" element={<FormationIABusiness />} />
      <Route path="/formation-ia-leadership" element={<FormationIALeadership />} />
      <Route path="/formation-ia-gestion" element={<FormationIAGestion />} />
      <Route path="/tourism-ia" element={<TourismIA />} />
      <Route path="/sport-ia" element={<SportIA />} />
      <Route path="/blockchain-ai" element={<BlockchainAI />} />
      <Route path="/iot-ai" element={<IoTAI />} />
      <Route path="/solution-ia-vente" element={<SolutionIAVente />} />
      <Route path="/solution-ia-marketing" element={<SolutionIAMarketing />} />
      <Route path="/outil-analyse-donnees" element={<OutilAnalyseDonnees />} />
      <Route path="/outil-generation-texte" element={<OutilGenerationTexte />} />
      <Route path="/ia-architecte" element={<IAArchitecte />} />
      <Route path="/ia-journaliste" element={<IAJournaliste />} />
      <Route path="/reseaux-neurones" element={<ReseauxNeurones />} />
      <Route path="/apprentissage-automatique" element={<ApprentissageAutomatique />} />
      <Route path="/ia-symbolique" element={<IASymbolique />} />
      <Route path="/ia-connexionniste" element={<IAConnexionniste />} />
      <Route path="/sante-cardiologie" element={<SanteCardiologie />} />
      <Route path="/ia-debutant" element={<IADebutant />} />
      <Route path="/formationiafinance" element={<FormationIAFinance />} />
    </>
  );
};

export default AllRoutes;
