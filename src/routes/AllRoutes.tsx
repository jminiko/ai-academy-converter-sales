
import { Route } from "react-router-dom";

// Import route modules
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
import RoutesSupplementaires from "./RoutesSupplementaires";
import NouvellePagesRoutes from "./NouvellePagesRoutes";

// Import new route modules
import ExpertisesRoutes from "./ExpertisesRoutes";
import CertificationsProRoutes from "./CertificationsProRoutes";
import ActualitesRoutes from "./ActualitesRoutes";
import PartenairesRoutes from "./PartenairesRoutes";
import EvenementsRoutes from "./EvenementsRoutes";

// Import organized route modules
import { CoreRoutes } from "./CoreRoutes";
import { IndustryApplicationRoutes } from "./IndustryApplicationRoutes";
import { ToolsConceptsRoutes } from "./ToolsConceptsRoutes";
import { CareersGuidesRoutes } from "./CareersGuidesRoutes";

const AllRoutes = () => {
  return (
    <>
      {/* Main routes */}
      {MainRoutes()}
      
      {/* Core application routes */}
      {CoreRoutes()}
      
      {/* Industry and application routes */}
      {IndustryApplicationRoutes()}
      
      {/* Tools and concepts routes */}
      {ToolsConceptsRoutes()}
      
      {/* Careers and guides routes */}
      {CareersGuidesRoutes()}
      
      {/* Existing route modules */}
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

      {/* New feature routes */}
      {ExpertisesRoutes()}
      {CertificationsProRoutes()}
      {ActualitesRoutes()}
      {PartenairesRoutes()}
      {EvenementsRoutes()}

      {/* Complete 500 pages routes */}
      {RoutesComplete500()}
      {Pages500Complete()}
      {RoutesSupplementaires()}
      
      {/* Nouvelles pages ajoutées */}
      {NouvellePagesRoutes()}
    </>
  );
};

export default AllRoutes;
