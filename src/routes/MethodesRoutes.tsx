
import { Route } from "react-router-dom";
import MethodeIAApprentissage from "@/pages/methodes/MethodeIAApprentissage";
import MethodeDeepLearning from "@/pages/methodes/MethodeDeepLearning";
import MethodeDataScience from "@/pages/methodes/MethodeDataScience";
import MethodeMLOps from "@/pages/methodes/MethodeMLOps";
import AgileIA from "@/pages/methodes/AgileIA";
import DesignThinkingIA from "@/pages/methodes/DesignThinkingIA";
import LeanStartupIA from "@/pages/methodes/LeanStartupIA";

const MethodesRoutes = () => {
  return (
    <>
      <Route path="/methode-ia-apprentissage" element={<MethodeIAApprentissage />} />
      <Route path="/methode-deep-learning" element={<MethodeDeepLearning />} />
      <Route path="/methode-data-science" element={<MethodeDataScience />} />
      <Route path="/methode-mlops" element={<MethodeMLOps />} />
      <Route path="/agile-ia" element={<AgileIA />} />
      <Route path="/design-thinking-ia" element={<DesignThinkingIA />} />
      <Route path="/lean-startup-ia" element={<LeanStartupIA />} />
    </>
  );
};

export default MethodesRoutes;
