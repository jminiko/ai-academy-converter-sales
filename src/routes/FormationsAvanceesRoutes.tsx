
import { Route } from "react-router-dom";

// Formations avancées spécialisées
import FormationVehiculeAutonome from "@/pages/formations/FormationVehiculeAutonome";
import FormationIAResponsable from "@/pages/formations/FormationIAResponsable";

// Formations techniques existantes
import FormationTensorFlow from "@/pages/formations/FormationTensorFlow";
import FormationPyTorchAvance from "@/pages/formations/FormationPyTorchAvance";
import FormationVisionIA from "@/pages/formations/FormationVisionIA";
import FormationNLPAvance from "@/pages/formations/FormationNLPAvance";

export const FormationsAvanceesRoutes = () => (
  <>
    {/* Nouvelles formations spécialisées */}
    <Route path="/formation-vehicule-autonome" element={<FormationVehiculeAutonome />} />
    <Route path="/formation-ia-responsable" element={<FormationIAResponsable />} />
    
    {/* Formations techniques existantes */}
    <Route path="/formation-tensorflow" element={<FormationTensorFlow />} />
    <Route path="/formation-pytorch-avance" element={<FormationPyTorchAvance />} />
    <Route path="/formation-vision-ia" element={<FormationVisionIA />} />
    <Route path="/formation-nlp-avance" element={<FormationNLPAvance />} />
  </>
);
