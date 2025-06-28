
import { Route } from "react-router-dom";
import CertificationDataScientistPro from "@/pages/certifications-pro/CertificationDataScientistPro";
import CertificationMLEngineerPro from "@/pages/certifications-pro/CertificationMLEngineerPro";
import CertificationAIProductManager from "@/pages/certifications-pro/CertificationAIProductManager";

const CertificationsProRoutes = () => {
  return (
    <>
      <Route path="/certification-data-scientist-pro" element={<CertificationDataScientistPro />} />
      <Route path="/certification-ml-engineer-pro" element={<CertificationMLEngineerPro />} />
      <Route path="/certification-ai-product-manager" element={<CertificationAIProductManager />} />
    </>
  );
};

export default CertificationsProRoutes;
