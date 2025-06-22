
import { Route } from "react-router-dom";
import DeveloppementIA from "@/pages/services/DeveloppementIA";
import ConseilStrategique from "@/pages/services/ConseilStrategique";
import AuditIA from "@/pages/services/AuditIA";
import MaintenanceIA from "@/pages/services/MaintenanceIA";

const SolutionsRoutes = () => {
  return (
    <>
      <Route path="/developpement-ia" element={<DeveloppementIA />} />
      <Route path="/conseil-strategique" element={<ConseilStrategique />} />
      <Route path="/audit-ia" element={<AuditIA />} />
      <Route path="/maintenance-ia" element={<MaintenanceIA />} />
    </>
  );
};

export default SolutionsRoutes;
