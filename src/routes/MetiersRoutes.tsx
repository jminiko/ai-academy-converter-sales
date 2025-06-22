
import { Route } from "react-router-dom";
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";
import IAMedecin from "@/pages/metiers/IAMedecin";
import IAAvocat from "@/pages/metiers/IAAvocat";

const MetiersRoutes = () => {
  return (
    <>
      <Route path="/ia-architecte" element={<IAArchitecte />} />
      <Route path="/ia-journaliste" element={<IAJournaliste />} />
      <Route path="/ia-medecin" element={<IAMedecin />} />
      <Route path="/ia-avocat" element={<IAAvocat />} />
    </>
  );
};

export default MetiersRoutes;
