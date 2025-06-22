
import { Route } from "react-router-dom";

// Composants de pages méthodes - Architecture prête pour 500 pages
import MethodeIAApprentissage from "@/pages/methodes/MethodeIAApprentissage";
import MethodeDeepLearning from "@/pages/methodes/MethodeDeepLearning";
import MethodeDataScience from "@/pages/methodes/MethodeDataScience";
import MethodeMLOps from "@/pages/methodes/MethodeMLOps";

const MethodesRoutes = () => {
  return (
    <>
      {/* Routes pour méthodes - Pages optimisées pour SEO et performance */}
      <Route path="/methode-ia-apprentissage" element={<MethodeIAApprentissage />} />
      <Route path="/methode-deep-learning" element={<MethodeDeepLearning />} />
      <Route path="/methode-data-science" element={<MethodeDataScience />} />
      <Route path="/methode-mlops" element={<MethodeMLOps />} />
    </>
  );
};

export default MethodesRoutes;
