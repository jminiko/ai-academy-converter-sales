
import { Route } from "react-router-dom";
import CertificationProfessionnelleDataScientist from "@/pages/certifications-pro/CertificationProfessionnelleDataScientist";
import CertificationMLEngineer from "@/pages/certifications-pro/CertificationMLEngineer";
import CertificationAIProduct from "@/pages/certifications-pro/CertificationAIProduct";

const CertificationsProRoutes = () => {
  return (
    <>
      <Route path="/certification-data-scientist-pro" element={<CertificationProfessionnelleDataScientist />} />
      <Route path="/certification-ml-engineer-pro" element={<CertificationMLEngineer />} />
      <Route path="/certification-ai-product-manager" element={<CertificationAIProduct />} />
    </>
  );
};

export default CertificationsProRoutes;
