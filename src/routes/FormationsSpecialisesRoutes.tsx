
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
    </>
  );
};

export default FormationsSpecialisesRoutes;
