
import { Route } from "react-router-dom";

// Composants de pages formations - Architecture complète
import PythonIA from "@/pages/formations/PythonIA";
import TensorFlow from "@/pages/formations/TensorFlow";
import PyTorch from "@/pages/formations/PyTorch";
import NLP from "@/pages/formations/NLP";
import MLOps from "@/pages/formations/MLOps";
import GenerativeAI from "@/pages/formations/GenerativeAI";
import RoboticsAI from "@/pages/formations/RoboticsAI";
import FormationVisionIA from "@/pages/formations/FormationVisionIA";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";
import FormationReseauxNeurones from "@/pages/formations/FormationReseauxNeurones";
import FormationIAQuantique from "@/pages/formations/FormationIAQuantique";
import FormationIASante from "@/pages/formations/FormationIASante";
import FormationIAFinance from "@/pages/formations/FormationIAFinance";
import FormationIAIndustrie from "@/pages/formations/FormationIAIndustrie";
import FormationIATransport from "@/pages/formations/FormationIATransport";
import FormationIAEnergie from "@/pages/formations/FormationIAEnergie";
import FormationIARetail from "@/pages/formations/FormationIARetail";
import FormationIABanque from "@/pages/formations/FormationIABanque";
import FormationIAAgriculture from "@/pages/formations/FormationIAAgriculture";
import FormationIAAssurance from "@/pages/formations/FormationIAAssurance";
import FormationIAImmobilier from "@/pages/formations/FormationIAImmobilier";
import FormationIALogistique from "@/pages/formations/FormationIALogistique";
import FormationIAEducation from "@/pages/formations/FormationIAEducation";
import FormationIAEthique from "@/pages/formations/FormationIAEthique";
import FormationIAResponsable from "@/pages/formations/FormationIAResponsable";
import FormationMLOpsProduction from "@/pages/formations/FormationMLOpsProduction";
import FormationOptimisationIA from "@/pages/formations/FormationOptimisationIA";
import FormationVehiculeAutonome from "@/pages/formations/FormationVehiculeAutonome";

const FormationsRoutes = () => {
  return (
    <>
      {/* Routes pour formations - Pages complètes et spécialisées */}
      <Route path="/python-ia" element={<PythonIA />} />
      <Route path="/tensorflow" element={<TensorFlow />} />
      <Route path="/pytorch" element={<PyTorch />} />
      <Route path="/nlp" element={<NLP />} />
      <Route path="/mlops" element={<MLOps />} />
      <Route path="/generative-ai" element={<GenerativeAI />} />
      <Route path="/robotics-ai" element={<RoboticsAI />} />
      <Route path="/formation-vision-ia" element={<FormationVisionIA />} />
      <Route path="/formation-nlp-avance" element={<FormationNLPAvance />} />
      <Route path="/formation-reseaux-neurones" element={<FormationReseauxNeurones />} />
      <Route path="/formation-ia-quantique" element={<FormationIAQuantique />} />
      <Route path="/formation-ia-sante" element={<FormationIASante />} />
      <Route path="/formation-ia-finance" element={<FormationIAFinance />} />
      <Route path="/formation-ia-industrie" element={<FormationIAIndustrie />} />
      <Route path="/formation-ia-transport" element={<FormationIATransport />} />
      <Route path="/formation-ia-energie" element={<FormationIAEnergie />} />
      <Route path="/formation-ia-retail" element={<FormationIARetail />} />
      <Route path="/formation-ia-banque" element={<FormationIABanque />} />
      <Route path="/formation-ia-agriculture" element={<FormationIAAgriculture />} />
      <Route path="/formation-ia-assurance" element={<FormationIAAssurance />} />
      <Route path="/formation-ia-immobilier" element={<FormationIAImmobilier />} />
      <Route path="/formation-ia-logistique" element={<FormationIALogistique />} />
      <Route path="/formation-ia-education" element={<FormationIAEducation />} />
      <Route path="/formation-ia-ethique" element={<FormationIAEthique />} />
      <Route path="/formation-ia-responsable" element={<FormationIAResponsable />} />
      <Route path="/formation-mlops-production" element={<FormationMLOpsProduction />} />
      <Route path="/formation-optimisation-ia" element={<FormationOptimisationIA />} />
      <Route path="/formation-vehicule-autonome" element={<FormationVehiculeAutonome />} />
    </>
  );
};

export default FormationsRoutes;
