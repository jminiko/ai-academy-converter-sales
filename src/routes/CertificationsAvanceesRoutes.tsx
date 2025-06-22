
import { Route } from "react-router-dom";

// Certifications avancées
import CertificationIAEthique from "@/pages/certifications/CertificationIAEthique";
import CertificationRobotique from "@/pages/certifications/CertificationRobotique";

export const CertificationsAvanceesRoutes = () => (
  <>
    <Route path="/certification-ia-ethique" element={<CertificationIAEthique />} />
    <Route path="/certification-robotique" element={<CertificationRobotique />} />
  </>
);
