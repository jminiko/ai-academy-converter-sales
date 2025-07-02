
import { Route } from "react-router-dom";
import TensorFlow from "@/pages/formations/TensorFlow";
import PyTorch from "@/pages/formations/PyTorch";
import Keras from "@/pages/formations/Keras";
import Pandas from "@/pages/formations/Pandas";
import NumPy from "@/pages/formations/NumPy";
import ScikitLearn from "@/pages/formations/ScikitLearn";
import Matplotlib from "@/pages/formations/Matplotlib";
import Seaborn from "@/pages/formations/Seaborn";
import Plotly from "@/pages/formations/Plotly";
import OpenCV from "@/pages/formations/OpenCV";
import PythonIA from "@/pages/formations/PythonIA";
import FormationNLP from "@/pages/formations/FormationNLP";
import FormationComputerVision from "@/pages/formations/FormationComputerVision";
import FormationRobotics from "@/pages/formations/FormationRobotics";
import FormationIoTAI from "@/pages/formations/FormationIoTAI";
import FormationBlockchainAI from "@/pages/formations/FormationBlockchainAI";
import FormationCybersecurityAI from "@/pages/formations/FormationCybersecurityAI";
import FormationGameAI from "@/pages/formations/FormationGameAI";
import FormationQuantumAI from "@/pages/formations/FormationQuantumAI";
import FormationMetaverseAI from "@/pages/formations/FormationMetaverseAI";
import FormationBiotechAI from "@/pages/formations/FormationBiotechAI";
import FormationAutomatisationRPA from "@/pages/formations/FormationAutomatisationRPA";
import FormationDataSciencePro from "@/pages/formations/FormationDataSciencePro";
import FormationMLOpsPro from "@/pages/formations/FormationMLOpsPro";
import FormationRPAZapier from "@/pages/formations/FormationRPAZapier";
import FormationIAEthique from "@/pages/formations/FormationIAEthique";
import FormationIAEducation from "@/pages/formations/FormationIAEducation";
import FormationIASanteMentale from "@/pages/formations/FormationIASanteMentale";
import FormationIAAutomobile from "@/pages/formations/FormationIAAutomobile";
import FormationIALogistique from "@/pages/formations/FormationIALogistique";
import FormationIAAgriculture from "@/pages/formations/FormationIAAgriculture";

const FormationsSpecialisesRoutes = () => {
  return (
    <>
      <Route path="/tensorflow" element={<TensorFlow />} />
      <Route path="/pytorch" element={<PyTorch />} />
      <Route path="/keras" element={<Keras />} />
      <Route path="/pandas" element={<Pandas />} />
      <Route path="/numpy" element={<NumPy />} />
      <Route path="/scikit-learn" element={<ScikitLearn />} />
      <Route path="/matplotlib" element={<Matplotlib />} />
      <Route path="/seaborn" element={<Seaborn />} />
      <Route path="/plotly" element={<Plotly />} />
      <Route path="/opencv" element={<OpenCV />} />
      <Route path="/python-ia" element={<PythonIA />} />
      <Route path="/formation-nlp" element={<FormationNLP />} />
      <Route path="/formation-computer-vision" element={<FormationComputerVision />} />
      <Route path="/formation-robotics" element={<FormationRobotics />} />
      <Route path="/formation-iot-ai" element={<FormationIoTAI />} />
      <Route path="/formation-blockchain-ai" element={<FormationBlockchainAI />} />
      <Route path="/formation-cybersecurity-ai" element={<FormationCybersecurityAI />} />
      <Route path="/formation-game-ai" element={<FormationGameAI />} />
      <Route path="/formation-quantum-ai" element={<FormationQuantumAI />} />
      <Route path="/formation-metaverse-ai" element={<FormationMetaverseAI />} />
      <Route path="/formation-biotech-ai" element={<FormationBiotechAI />} />
      <Route path="/formation-automatisation-rpa" element={<FormationAutomatisationRPA />} />
      <Route path="/formation-data-science-pro" element={<FormationDataSciencePro />} />
      <Route path="/formation-mlops-pro" element={<FormationMLOpsPro />} />
      <Route path="/formation-rpa-zapier" element={<FormationRPAZapier />} />
      <Route path="/formation-ia-ethique" element={<FormationIAEthique />} />
      <Route path="/formation-ia-education" element={<FormationIAEducation />} />
      <Route path="/formation-ia-sante-mentale" element={<FormationIASanteMentale />} />
      <Route path="/formation-ia-automobile" element={<FormationIAAutomobile />} />
      <Route path="/formation-ia-logistique" element={<FormationIALogistique />} />
      <Route path="/formation-ia-agriculture" element={<FormationIAAgriculture />} />
    </>
  );
};

export default FormationsSpecialisesRoutes;
