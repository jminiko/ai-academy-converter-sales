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
import Pages500Complete from "./Pages500Complete";

// Import des nouvelles routes
import ExpertisesRoutes from "./ExpertisesRoutes";
import CertificationsProRoutes from "./CertificationsProRoutes";
import ActualitesRoutes from "./ActualitesRoutes";
import PartenairesRoutes from "./PartenairesRoutes";
import EvenementsRoutes from "./EvenementsRoutes";

// Import des pages individuelles créées
import FormationIABusiness from "@/pages/formations/FormationIABusiness";
import FormationIALeadership from "@/pages/formations/FormationIALeadership";
import FormationIAGestion from "@/pages/formations/FormationIAGestion";
import FormationIAExplicable from "@/pages/formations/FormationIAExplicable";
import FormationDeepLearningAvance from "@/pages/formations/FormationDeepLearningAvance";
import FormationTransformersAvances from "@/pages/formations/FormationTransformersAvances";
import FormationModelesGeneratifsAvances from "@/pages/formations/FormationModelesGeneratifsAvances";
import FormationEdgeAI from "@/pages/formations/FormationEdgeAI";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";

import TourismIA from "@/pages/industries/TourismIA";
import SportIA from "@/pages/industries/SportIA";
import AgricultureIA from "@/pages/industries/AgricultureIA";
import Industrie40 from "@/pages/industries/Industrie40";
import BlockchainAI from "@/pages/technologies/BlockchainAI";
import IoTAI from "@/pages/technologies/IoTAI";
import SolutionIAVente from "@/pages/solutions/SolutionIAVente";
import SolutionIAMarketing from "@/pages/solutions/SolutionIAMarketing";
import OutilAnalyseDonnees from "@/pages/outils/OutilAnalyseDonnees";
import OutilGenerationTexte from "@/pages/outils/OutilGenerationTexte";
import OutilGPT4 from "@/pages/outils/OutilGPT4";
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";
import IAMedecin from "@/pages/metiers/IAMedecin";
import IAAvocat from "@/pages/metiers/IAAvocat";
import ReseauxNeurones from "@/pages/concepts/ReseauxNeurones";
import ApprentissageAutomatique from "@/pages/concepts/ApprentissageAutomatique";
import IASymbolique from "@/pages/types-ia/IASymbolique";
import IAConnexionniste from "@/pages/types-ia/IAConnexionniste";
import SanteCardiologie from "@/pages/secteurs-specialises/SanteCardiologie";
import SanteRadiologie from "@/pages/secteurs-specialises/SanteRadiologie";
import SanteOncologie from "@/pages/secteurs-specialises/SanteOncologie";
import IADebutant from "@/pages/formations-niveau/IADebutant";
import IAIntermediaire from "@/pages/formations-niveau/IAIntermediaire";
import IAExpert from "@/pages/formations-niveau/IAExpert";
import IAExecutive from "@/pages/formations-niveau/IAExecutive";
import GuideDebutantIA from "@/pages/guides/GuideDebutantIA";
import GuideAvanceIA from "@/pages/guides/GuideAvanceIA";
import FormationIAFinance from "@/pages/FormationIAFinance";
import Stats500Pages from "@/pages/Stats500Pages";

const AllRoutes = () => {
  return (
    <>
      {/* Main routes */}
      {MainRoutes()}
      
      {/* Routes principales existantes */}
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

      {/* NOUVELLES ROUTES AJOUTÉES */}
      {ExpertisesRoutes()}
      {CertificationsProRoutes()}
      {ActualitesRoutes()}
      {PartenairesRoutes()}
      {EvenementsRoutes()}

      {/* Routes complètes pour les 500 pages */}
      {RoutesComplete500()}
      {Pages500Complete()}

      {/* Page de statistiques */}
      <Route key="stats-500" path="/stats-500-pages" element={<Stats500Pages />} />

      {/* Routes formations spécialisées */}
      <Route key="formation-ia-explicable" path="/formation-ia-explicable" element={<FormationIAExplicable />} />
      <Route key="formation-deep-learning-avance" path="/formation-deep-learning-avance" element={<FormationDeepLearningAvance />} />
      <Route key="formation-transformers-avances" path="/formation-transformers-avances" element={<FormationTransformersAvances />} />
      <Route key="formation-modeles-generatifs-avances" path="/formation-modeles-generatifs-avances" element={<FormationModelesGeneratifsAvances />} />
      <Route key="formation-edge-ai" path="/formation-edge-ai" element={<FormationEdgeAI />} />
      <Route key="formation-nlp-avance" path="/formation-nlp-avance" element={<FormationNLPAvance />} />
      <Route key="formation-ia-quantique" path="/formation-ia-quantique" element={<FormationIAQuantique />} />
      <Route key="formation-ia-industrie" path="/formation-ia-industrie" element={<FormationIAIndustrie />} />

      {/* Routes directes existantes */}
      <Route key="formation-ia-business" path="/formation-ia-business" element={<FormationIABusiness />} />
      <Route key="formation-ia-leadership" path="/formation-ia-leadership" element={<FormationIALeadership />} />
      <Route key="formation-ia-gestion" path="/formation-ia-gestion" element={<FormationIAGestion />} />
      
      {/* Industries */}
      <Route key="tourism-ia" path="/tourism-ia" element={<TourismIA />} />
      <Route key="sport-ia" path="/sport-ia" element={<SportIA />} />
      <Route key="agriculture-ia" path="/agriculture-ia" element={<AgricultureIA />} />
      <Route key="industrie-40" path="/industrie-40" element={<Industrie40 />} />
      
      {/* Technologies */}
      <Route key="blockchain-ai" path="/blockchain-ai" element={<BlockchainAI />} />
      <Route key="iot-ai" path="/iot-ai" element={<IoTAI />} />
      
      {/* Solutions */}
      <Route key="solution-ia-vente" path="/solution-ia-vente" element={<SolutionIAVente />} />
      <Route key="solution-ia-marketing" path="/solution-ia-marketing" element={<SolutionIAMarketing />} />
      
      {/* Outils */}
      <Route key="outil-analyse-donnees" path="/outil-analyse-donnees" element={<OutilAnalyseDonnees />} />
      <Route key="outil-generation-texte" path="/outil-generation-texte" element={<OutilGenerationTexte />} />
      <Route key="outilgpt4" path="/outilgpt4" element={<OutilGPT4 />} />
      
      {/* Métiers */}
      <Route key="ia-architecte" path="/ia-architecte" element={<IAArchitecte />} />
      <Route key="ia-journaliste" path="/ia-journaliste" element={<IAJournaliste />} />
      <Route key="ia-medecin" path="/ia-medecin" element={<IAMedecin />} />
      <Route key="ia-avocat" path="/ia-avocat" element={<IAAvocat />} />
      
      {/* Concepts */}
      <Route key="reseaux-neurones" path="/reseaux-neurones" element={<ReseauxNeurones />} />
      <Route key="apprentissage-automatique" path="/apprentissage-automatique" element={<ApprentissageAutomatique />} />
      <Route key="ia-symbolique" path="/ia-symbolique" element={<IASymbolique />} />
      <Route key="ia-connexionniste" path="/ia-connexionniste" element={<IAConnexionniste />} />
      
      {/* Secteurs spécialisés */}
      <Route key="sante-cardiologie" path="/sante-cardiologie" element={<SanteCardiologie />} />
      <Route key="sante-radiologie" path="/sante-radiologie" element={<SanteRadiologie />} />
      <Route key="sante-oncologie" path="/sante-oncologie" element={<SanteOncologie />} />
      
      {/* Formations niveau */}
      <Route key="ia-debutant" path="/ia-debutant" element={<IADebutant />} />
      <Route key="ia-intermediaire" path="/ia-intermediaire" element={<IAIntermediaire />} />
      <Route key="ia-expert" path="/ia-expert" element={<IAExpert />} />
      <Route key="ia-executive" path="/ia-executive" element={<IAExecutive />} />
      
      {/* Guides */}
      <Route key="guide-debutant-ia" path="/guide-debutant-ia" element={<GuideDebutantIA />} />
      <Route key="guide-avance-ia" path="/guide-avance-ia" element={<GuideAvanceIA />} />
      
      {/* Autres */}
      <Route key="formationiafinance" path="/formationiafinance" element={<FormationIAFinance />} />
    </>
  );
};

export default AllRoutes;
