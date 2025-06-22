
import { Route } from "react-router-dom";
import SecteurHotellerie from "@/pages/secteurs/SecteurHotellerie";

const SecteurHotellerieRoutes = () => {
  return (
    <>
      <Route path="/secteur-hotellerie" element={<SecteurHotellerie />} />
    </>
  );
};

export default SecteurHotellerieRoutes;
