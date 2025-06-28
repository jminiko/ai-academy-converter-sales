
import { Route } from "react-router-dom";

// Import careers and guides pages
import IAArchitecte from "@/pages/metiers/IAArchitecte";
import IAJournaliste from "@/pages/metiers/IAJournaliste";
import IAMedecin from "@/pages/metiers/IAMedecin";
import IAAvocat from "@/pages/metiers/IAAvocat";
import IAComptable from "@/pages/metiers/IAComptable";
import SanteCardiologie from "@/pages/secteurs-specialises/SanteCardiologie";
import SanteRadiologie from "@/pages/secteurs-specialises/SanteRadiologie";
import SanteOncologie from "@/pages/secteurs-specialises/SanteOncologie";
import IADebutant from "@/pages/formations-niveau/IADebutant";
import IAIntermediaire from "@/pages/formations-niveau/IAIntermediaire";
import IAExpert from "@/pages/formations-niveau/IAExpert";
import IAExecutive from "@/pages/formations-niveau/IAExecutive";
import GuideDebutantIA from "@/pages/guides/GuideDebutantIA";
import GuideAvanceIA from "@/pages/guides/GuideAvanceIA";

export const CareersGuidesRoutes = () => {
  return (
    <>
      {/* Métiers */}
      <Route key="ia-architecte" path="/ia-architecte" element={<IAArchitecte />} />
      <Route key="ia-journaliste" path="/ia-journaliste" element={<IAJournaliste />} />
      <Route key="ia-medecin" path="/ia-medecin" element={<IAMedecin />} />
      <Route key="ia-avocat" path="/ia-avocat" element={<IAAvocat />} />
      <Route key="ia-comptable" path="/ia-comptable" element={<IAComptable />} />
      
      {/* Secteurs spécialisés */}
      <Route key="sante-cardiologie" path="/sante-cardiologie" element={<SanteCardiologie />} />
      <Route key="sante-radiologie" path="/sante-radiologie" element={<SanteRadiologie />} />
      <Route key="sante-oncologie" path="/sante-oncologie" element={<SanteOncologie />} />
      
      {/* Formations niveau */}
      <Route key="ia-debutant" path="/ia-debutant" element={<IADebutant />} />
      <Route key="ia-intermediaire" path="/ia-intermediaire" element={<IAIntermediaire />} />
      <Route key="ia-expert" path="/ia-expert" element={<IAExpert />} />
      <Route key="ia-executive" path="/ia-executive" element={<IAExecutive />} />
      
      {/* Guides */}
      <Route key="guide-debutant-ia" path="/guide-debutant-ia" element={<GuideDebutantIA />} />
      <Route key="guide-avance-ia" path="/guide-avance-ia" element={<GuideAvanceIA />} />
    </>
  );
};
