
import { Route } from "react-router-dom";

// Technologies spécialisées
import TensorFlowLite from "@/pages/technologies/TensorFlowLite";
import PyTorchMobile from "@/pages/technologies/PyTorchMobile";

export const TechnologiesRoutes = () => (
  <>
    <Route path="/technologie-tensorflow-lite" element={<TensorFlowLite />} />
    <Route path="/technologie-pytorch-mobile" element={<PyTorchMobile />} />
  </>
);
