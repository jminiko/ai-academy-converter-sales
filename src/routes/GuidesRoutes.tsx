
import { Route } from "react-router-dom";
import GuideDebutantIA from "@/pages/guides/GuideDebutantIA";
import GuideAvanceIA from "@/pages/guides/GuideAvanceIA";
import GuideMLOps from "@/pages/guides/GuideMLOps";
import GuideIA2025 from "@/pages/guides/GuideIA2025";
import GuideImplementationIA from "@/pages/guides/GuideImplementationIA";
import GuideOptimisationModeles from "@/pages/guides/GuideOptimisationModeles";
import GuideAutomatisationBureau from "@/pages/guides/GuideAutomatisationBureau";

export const GuidesRoutes = () => (
  <>
    <Route path="/guide-debutant-ia" element={<GuideDebutantIA />} />
    <Route path="/guide-avance-ia" element={<GuideAvanceIA />} />
    <Route path="/guide-mlops" element={<GuideMLOps />} />
    <Route path="/guide-ia-2025" element={<GuideIA2025 />} />
    <Route path="/guide-implementation-ia" element={<GuideImplementationIA />} />
    <Route path="/guide-optimisation-modeles" element={<GuideOptimisationModeles />} />
    <Route path="/guide-automatisation-bureau" element={<GuideAutomatisationBureau />} />
  </>
);
