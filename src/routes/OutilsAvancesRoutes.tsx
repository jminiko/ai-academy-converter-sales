
import { Route } from "react-router-dom";

// Outils IA avancés et spécialisés
import AnthropicClaude from "@/pages/outils/AnthropicClaude";
import OpenAIGPT4 from "@/pages/outils/OpenAIGPT4";
import GoogleGemini from "@/pages/outils/GoogleGemini";

// Outils existants
import OutilMidjourney from "@/pages/outils/OutilMidjourney";
import OutilStableDiffusion from "@/pages/outils/OutilStableDiffusion";
import OutilDALLEPro from "@/pages/outils/OutilDALLEPro";
import OutilRunwayML from "@/pages/outils/OutilRunwayML";
import OutilElevenLabs from "@/pages/outils/OutilElevenLabs";
import OutilGitHubCopilot from "@/pages/outils/OutilGitHubCopilot";

export const OutilsAvancesRoutes = () => (
  <>
    {/* Outils IA principaux */}
    <Route path="/outil-anthropic-claude" element={<AnthropicClaude />} />
    <Route path="/outil-openai-gpt4" element={<OpenAIGPT4 />} />
    <Route path="/outil-google-gemini" element={<GoogleGemini />} />
    
    {/* Outils existants */}
    <Route path="/outil-midjourney" element={<OutilMidjourney />} />
    <Route path="/outil-stable-diffusion" element={<OutilStableDiffusion />} />
    <Route path="/outil-dalle-pro" element={<OutilDALLEPro />} />
    <Route path="/outil-runway-ml" element={<OutilRunwayML />} />
    <Route path="/outil-eleven-labs" element={<OutilElevenLabs />} />
    <Route path="/outil-github-copilot" element={<OutilGitHubCopilot />} />
  </>
);
