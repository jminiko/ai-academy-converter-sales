
import { Route } from "react-router-dom";

// Formations principales
import FormationIAExplicable from "@/pages/formations/FormationIAExplicable";
import DeepLearningAvance from "@/pages/formations/DeepLearningAvance";
import FormationTransformersAvances from "@/pages/formations/FormationTransformersAvances";
import FormationModelesGeneratifsAvances from "@/pages/formations/FormationModelesGeneratifsAvances";
import EdgeAI from "@/pages/formations/EdgeAI";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";
import FormationIASante from "@/pages/formations/FormationIASante";
import FormationIAEthique from "@/pages/formations/FormationIAEthique";
import FormationIARetail from "@/pages/formations/FormationIARetail";
import FormationIAEnergie from "@/pages/formations/FormationIAEnergie";
import FormationMLOpsProduction from "@/pages/formations/FormationMLOpsProduction";
import FormationOptimisationIA from "@/pages/formations/FormationOptimisationIA";

// Nouvelles formations sectorielles
import FormationIABanque from "@/pages/formations/FormationIABanque";
import FormationIAAssurance from "@/pages/formations/FormationIAAssurance";

const FormationsRoutes = () => {
  return (
    <>
      <Route path="/formation-ia-explicable" element={<FormationIAExplicable />} />
      <Route path="/formation-deep-learning-avance" element={<DeepLearningAvance />} />
      <Route path="/formation-transformers-avances" element={<FormationTransformersAvances />} />
      <Route path="/formation-modeles-generatifs-avances" element={<FormationModelesGeneratifsAvances />} />
      <Route path="/formation-edge-ai" element={<EdgeAI />} />
      <Route path="/formation-nlp-avance" element={<FormationNLPAvance />} />
      <Route path="/formation-ia-quantique" element={<FormationIAQuantique />} />
      <Route path="/formation-ia-industrie" element={<FormationIAIndustrie />} />
      <Route path="/formation-ia-sante" element={<FormationIASante />} />
      <Route path="/formation-ia-ethique" element={<FormationIAEthique />} />
      <Route path="/formation-ia-retail" element={<FormationIARetail />} />
      <Route path="/formation-ia-energie" element={<FormationIAEnergie />} />
      <Route path="/formation-mlops-production" element={<FormationMLOpsProduction />} />
      <Route path="/formation-optimisation-ia" element={<FormationOptimisationIA />} />
      <Route path="/formation-ia-banque" element={<FormationIABanque />} />
      <Route path="/formation-ia-assurance" element={<FormationIAAssurance />} />
    </>
  );
};

export default FormationsRoutes;
