import { Route } from "react-router-dom";
import GuideDebutantChatGPT from "@/pages/guides/GuideDebutantChatGPT";
import GuidePromptAdvance from "@/pages/guides/GuidePromptAdvance";

export const GuidesAvancesRoutes = () => (
  <>
    <Route path="/guide-debutant-chatgpt" element={<GuideDebutantChatGPT />} />
    <Route path="/guide-prompt-avance" element={<GuidePromptAdvance />} />
  </>
);
