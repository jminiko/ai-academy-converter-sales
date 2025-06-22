
import { Route } from "react-router-dom";

// Méthodes et approches
import DesignThinkingIA from "@/pages/methodes/DesignThinkingIA";
import LeanStartupIA from "@/pages/methodes/LeanStartupIA";

export const MethodesRoutes = () => (
  <>
    <Route path="/design-thinking-ia" element={<DesignThinkingIA />} />
    <Route path="/lean-startup-ia" element={<LeanStartupIA />} />
  </>
);
