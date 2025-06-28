
import { Route } from "react-router-dom";

// Import core pages
import FormationIABusiness from "@/pages/formations/FormationIABusiness";
import FormationIALeadership from "@/pages/formations/FormationIALeadership";
import FormationIAGestion from "@/pages/formations/FormationIAGestion";
import FormationIAExplicable from "@/pages/formations/FormationIAExplicable";
import FormationDeepLearningAvance from "@/pages/formations/FormationDeepLearningAvance";
import FormationTransformersAvances from "@/pages/formations/FormationTransformersAvances";
import FormationModelesGeneratifsAvances from "@/pages/formations/FormationModelesGeneratifsAvances";
import FormationEdgeAI from "@/pages/formations/FormationEdgeAI";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";
import Stats500Pages from "@/pages/Stats500Pages";
import FormationIAFinance from "@/pages/FormationIAFinance";

export const CoreRoutes = () => {
  return (
    <>
      {/* Core formations */}
      <Route key="formation-ia-business" path="/formation-ia-business" element={<FormationIABusiness />} />
      <Route key="formation-ia-leadership" path="/formation-ia-leadership" element={<FormationIALeadership />} />
      <Route key="formation-ia-gestion" path="/formation-ia-gestion" element={<FormationIAGestion />} />
      <Route key="formation-ia-explicable" path="/formation-ia-explicable" element={<FormationIAExplicable />} />
      <Route key="formation-deep-learning-avance" path="/formation-deep-learning-avance" element={<FormationDeepLearningAvance />} />
      <Route key="formation-transformers-avances" path="/formation-transformers-avances" element={<FormationTransformersAvances />} />
      <Route key="formation-modeles-generatifs-avances" path="/formation-modeles-generatifs-avances" element={<FormationModelesGeneratifsAvances />} />
      <Route key="formation-edge-ai" path="/formation-edge-ai" element={<FormationEdgeAI />} />
      <Route key="formation-nlp-avance" path="/formation-nlp-avance" element={<FormationNLPAvance />} />
      <Route key="formation-ia-quantique" path="/formation-ia-quantique" element={<FormationIAQuantique />} />
      <Route key="formation-ia-industrie" path="/formation-ia-industrie" element={<FormationIAIndustrie />} />
      
      {/* Statistics and special pages */}
      <Route key="stats-500" path="/stats-500-pages" element={<Stats500Pages />} />
      <Route key="formationiafinance" path="/formationiafinance" element={<FormationIAFinance />} />
    </>
  );
};
