
import { Route } from "react-router-dom";

// Guides avancés
import GuideAutomatisationBureau from "@/pages/guides/GuideAutomatisationBureau";
import GuideIA2025 from "@/pages/guides/GuideIA2025";

// Guides existants
import GuideDebutantIA2024 from "@/pages/guides/GuideDebutantIA2024";

export const GuidesAvancesRoutes = () => (
  <>
    {/* Nouveaux guides */}
    <Route path="/guide-automatisation-bureau" element={<GuideAutomatisationBureau />} />
    <Route path="/guide-ia-2025" element={<GuideIA2025 />} />
    
    {/* Guides existants */}
    <Route path="/guide-debutant-ia-2024" element={<GuideDebutantIA2024 />} />
  </>
);
