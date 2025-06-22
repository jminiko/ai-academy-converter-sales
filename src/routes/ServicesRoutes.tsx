
import { Route } from "react-router-dom";

// Services principaux
import AuditIA from "@/pages/services/AuditIA";
import ConseilStrategique from "@/pages/services/ConseilStrategique";
import ConseilTransition from "@/pages/services/ConseilTransition";
import Consulting from "@/pages/services/Consulting";
import ConsultingStrategique from "@/pages/services/ConsultingStrategique";
import DeveloppementIA from "@/pages/services/DeveloppementIA";
import FormationPersonnalisee from "@/pages/services/FormationPersonnalisee";
import IAEthiqueResponsable from "@/pages/services/IA-Ethique-Responsable";
import Implementation from "@/pages/services/Implementation";
import StrategieIA from "@/pages/services/StrategieIA";
import TransformationDigitale from "@/pages/services/TransformationDigitale";
import Support from "@/pages/services/Support";
import MaintenanceIA from "@/pages/services/MaintenanceIA";

// Nouveaux services spécialisés
import MigrationIA from "@/pages/services/MigrationIA";
import OptimisationPerformance from "@/pages/services/OptimisationPerformance";
import SecurityAudit from "@/pages/services/SecurityAudit";
import FormationEquipe from "@/pages/services/FormationEquipe";
import AccompagnementChange from "@/pages/services/AccompagnementChange";

export const ServicesRoutes = () => (
  <>
    {/* Services existants */}
    <Route path="/audit-ia" element={<AuditIA />} />
    <Route path="/conseil-strategique" element={<ConseilStrategique />} />
    <Route path="/conseil-transition" element={<ConseilTransition />} />
    <Route path="/consulting" element={<Consulting />} />
    <Route path="/consulting-strategique" element={<ConsultingStrategique />} />
    <Route path="/developpement-ia" element={<DeveloppementIA />} />
    <Route path="/formation-personnalisee" element={<FormationPersonnalisee />} />
    <Route path="/ia-ethique-responsable" element={<IAEthiqueResponsable />} />
    <Route path="/implementation" element={<Implementation />} />
    <Route path="/strategie-ia" element={<StrategieIA />} />
    <Route path="/transformation-digitale" element={<TransformationDigitale />} />
    <Route path="/support" element={<Support />} />
    <Route path="/maintenance-ia" element={<MaintenanceIA />} />
    
    {/* Nouveaux services spécialisés */}
    <Route path="/migration-ia" element={<MigrationIA />} />
    <Route path="/optimisation-performance" element={<OptimisationPerformance />} />
    <Route path="/security-audit" element={<SecurityAudit />} />
    <Route path="/formation-equipe" element={<FormationEquipe />} />
    <Route path="/accompagnement-change" element={<AccompagnementChange />} />
  </>
);
