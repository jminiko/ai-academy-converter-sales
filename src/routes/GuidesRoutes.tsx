
import { Route } from "react-router-dom";

// Composants de pages guides - Architecture complète
import GuideDebutantIA from "@/pages/guides/GuideDebutantIA";
import GuideAvanceIA from "@/pages/guides/GuideAvanceIA";
import GuideIA2025 from "@/pages/guides/GuideIA2025";
import GuideIAEthiqueResponsable from "@/pages/guides/GuideIAEthiqueResponsable";
import GuideAutomatisationBureau from "@/pages/guides/GuideAutomatisationBureau";
import GuideIAEntreprise from "@/pages/guides/GuideIAEntreprise";
import GuideIAStartup from "@/pages/guides/GuideIAStartup";
import GuideIAPME from "@/pages/guides/GuideIAPME";
import GuideTransformationDigitale from "@/pages/guides/GuideTransformationDigitale";
import GuideStratégieIA from "@/pages/guides/GuideStratégieIA";

const GuidesRoutes = () => {
  return (
    <>
      {/* Routes pour guides - Pages complètes et optimisées */}
      <Route path="/guide-debutant-ia" element={<GuideDebutantIA />} />
      <Route path="/guide-avance-ia" element={<GuideAvanceIA />} />
      <Route path="/guide-ia-2025" element={<GuideIA2025 />} />
      <Route path="/guide-ia-ethique-responsable" element={<GuideIAEthiqueResponsable />} />
      <Route path="/guide-automatisation-bureau" element={<GuideAutomatisationBureau />} />
      <Route path="/guide-ia-entreprise" element={<GuideIAEntreprise />} />
      <Route path="/guide-ia-startup" element={<GuideIAStartup />} />
      <Route path="/guide-ia-pme" element={<GuideIAPME />} />
      <Route path="/guide-transformation-digitale" element={<GuideTransformationDigitale />} />
      <Route path="/guide-strategie-ia" element={<GuideStratégieIA />} />
    </>
  );
};

export default GuidesRoutes;
