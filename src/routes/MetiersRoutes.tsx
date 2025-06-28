
import { Route } from "react-router-dom";
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";
import IAMedecin from "@/pages/metiers/IAMedecin";
import IAAvocat from "@/pages/metiers/IAAvocat";
import IAComptable from "@/pages/metiers/IAComptable";
import IAHR from "@/pages/metiers/IAHR";
import IAMarketing from "@/pages/metiers/IAMarketing";
import IAVendeur from "@/pages/metiers/IAVendeur";
import IALogistique from "@/pages/metiers/IALogistique";
import IAFinance from "@/pages/metiers/IAFinance";
import IAProduction from "@/pages/metiers/IAProduction";

const MetiersRoutes = () => {
  return (
    <>
      <Route path="/ia-architecte" element={<IAArchitecte />} />
      <Route path="/ia-journaliste" element={<IAJournaliste />} />
      <Route path="/ia-medecin" element={<IAMedecin />} />
      <Route path="/ia-avocat" element={<IAAvocat />} />
      <Route path="/ia-comptable" element={<IAComptable />} />
      <Route path="/ia-rh" element={<IAHR />} />
      <Route path="/ia-marketing" element={<IAMarketing />} />
      <Route path="/ia-vendeur" element={<IAVendeur />} />
      <Route path="/ia-logistique" element={<IALogistique />} />
      <Route path="/ia-finance" element={<IAFinance />} />
      <Route path="/ia-production" element={<IAProduction />} />
    </>
  );
};

export default MetiersRoutes;
