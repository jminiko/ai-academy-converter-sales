
import { Route } from "react-router-dom";
import MLOps from "@/pages/formations/MLOps";
import RoboticsAI from "@/pages/formations/RoboticsAI";
import GenerativeAI from "@/pages/formations/GenerativeAI";
import NLP from "@/pages/formations/NLP";
import GraphQL from "@/pages/formations/GraphQL";
import RealtimeAI from "@/pages/formations/RealtimeAI";
import IAEthics from "@/pages/formations/IAEthics";
import ReactIA from "@/pages/formations/ReactIA";
import IAMusic from "@/pages/formations/IAMusic";
import IACreative from "@/pages/formations/IACreative";
import FormationVehiculeAutonome from "@/pages/formations/FormationVehiculeAutonome";
import FormationVisionIA from "@/pages/formations/FormationVisionIA";
import FormationReseauxNeurones from "@/pages/formations/FormationReseauxNeurones";
import MachineLearning from "@/pages/formations/MachineLearning";

const FormationsAvanceesRoutes = () => {
  return (
    <>
      <Route path="/mlops" element={<MLOps />} />
      <Route path="/robotics-ai" element={<RoboticsAI />} />
      <Route path="/generative-ai" element={<GenerativeAI />} />
      <Route path="/nlp" element={<NLP />} />
      <Route path="/graphql" element={<GraphQL />} />
      <Route path="/realtime-ai" element={<RealtimeAI />} />
      <Route path="/ia-ethics" element={<IAEthics />} />
      <Route path="/react-ia" element={<ReactIA />} />
      <Route path="/ia-music" element={<IAMusic />} />
      <Route path="/ia-creative" element={<IACreative />} />
      <Route path="/formation-vehicule-autonome" element={<FormationVehiculeAutonome />} />
      <Route path="/formation-vision-ia" element={<FormationVisionIA />} />
      <Route path="/formation-reseaux-neurones" element={<FormationReseauxNeurones />} />
      <Route path="/machine-learning" element={<MachineLearning />} />
    </>
  );
};

export default FormationsAvanceesRoutes;
