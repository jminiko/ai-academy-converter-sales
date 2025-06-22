
import { Route } from "react-router-dom";
import CertificationIA10 from "@/pages/certifications-avancees/CertificationIA10";

const CertificationsAvanceesRoutes = () => {
  return (
    <>
      <Route path="/certificationia10" element={<CertificationIA10 />} />
    </>
  );
};

export default CertificationsAvanceesRoutes;
