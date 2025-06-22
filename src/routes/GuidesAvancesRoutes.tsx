
import { Route } from "react-router-dom";
import GuideDebutantChatGPT from "@/pages/guides/GuideDebutantChatGPT";
import GuidePromptAdvance from "@/pages/guides/GuidePromptAdvance";

const GuidesAvancesRoutes = () => {
  return (
    <>
      <Route path="/guide-debutant-chatgpt" element={<GuideDebutantChatGPT />} />
      <Route path="/guide-prompt-avance" element={<GuidePromptAdvance />} />
    </>
  );
};

export default GuidesAvancesRoutes;
