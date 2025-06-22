
import { Route } from "react-router-dom";

// Existing guide pages
import GuideDebutantIA2024 from "@/pages/guides/GuideDebutantIA2024";

export const GuidesRoutes = () => (
  <>
    <Route path="/guide-debutant-ia-2024" element={<GuideDebutantIA2024 />} />
  </>
);
