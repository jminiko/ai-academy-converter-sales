
import { Route } from "react-router-dom";
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";

const MetiersRoutes = () => {
  return (
    <>
      <Route path="/ia-architecte" element={<IAArchitecte />} />
      <Route path="/ia-journaliste" element={<IAJournaliste />} />
    </>
  );
};

export default MetiersRoutes;
