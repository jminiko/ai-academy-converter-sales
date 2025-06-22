
import { Route } from "react-router-dom";
import SecteurHotellerie from "@/pages/secteurs/SecteurHotellerie";

export const SecteurHotellerieRoutes = () => (
  <>
    <Route path="/secteur-hotellerie" element={<SecteurHotellerie />} />
  </>
);
