
import { Route } from "react-router-dom";
import SecteurHotellerie from "@/pages/secteurs/SecteurHotellerie";
import SecteurBanqueFintech from "@/pages/secteurs/SecteurBanqueFintech";

const SecteursRoutes = () => {
  return (
    <>
      <Route path="/secteur-hotellerie" element={<SecteurHotellerie />} />
      <Route path="/secteur-banque-fintech" element={<SecteurBanqueFintech />} />
    </>
  );
};

export default SecteursRoutes;
