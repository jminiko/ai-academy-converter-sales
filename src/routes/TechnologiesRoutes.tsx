
import { Route } from "react-router-dom";
import TensorFlow from "@/pages/formations/TensorFlow";
import PyTorch from "@/pages/formations/PyTorch";
import PythonIA from "@/pages/formations/PythonIA";

const TechnologiesRoutes = () => {
  return (
    <>
      <Route path="/tensorflow" element={<TensorFlow />} />
      <Route path="/pytorch" element={<PyTorch />} />
      <Route path="/python-ia" element={<PythonIA />} />
    </>
  );
};

export default TechnologiesRoutes;
