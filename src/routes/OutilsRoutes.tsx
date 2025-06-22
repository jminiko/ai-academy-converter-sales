
import { Route } from "react-router-dom";

// Outils IA Spécialisés
import OutilMidjourney from "@/pages/outils/OutilMidjourney";
import OutilStableDiffusion from "@/pages/outils/OutilStableDiffusion";
import OutilDALLEPro from "@/pages/outils/OutilDALLEPro";
import OutilRunwayML from "@/pages/outils/OutilRunwayML";
import OutilElevenLabs from "@/pages/outils/OutilElevenLabs";
import OutilGitHubCopilot from "@/pages/outils/OutilGitHubCopilot";

export const OutilsRoutes = () => (
  <>
    {/* Outils IA */}
    <Route path="/outil-midjourney" element={<OutilMidjourney />} />
    <Route path="/outil-stable-diffusion" element={<OutilStableDiffusion />} />
    <Route path="/outil-dalle-pro" element={<OutilDALLEPro />} />
    <Route path="/outil-runway-ml" element={<OutilRunwayML />} />
    <Route path="/outil-eleven-labs" element={<OutilElevenLabs />} />
    <Route path="/outil-github-copilot" element={<OutilGitHubCopilot />} />
  </>
);
