
import { Route } from "react-router-dom";
import CertificationProfessionnelleDataScientist from "@/pages/certifications-pro/CertificationProfessionnelleDataScientist";

const CertificationsProRoutes = () => {
  return (
    <>
      <Route path="/certification-data-scientist-pro" element={<CertificationProfessionnelleDataScientist />} />
    </>
  );
};

export default CertificationsProRoutes;
