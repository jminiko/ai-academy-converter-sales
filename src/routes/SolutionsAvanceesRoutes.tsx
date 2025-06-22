
import { Route } from "react-router-dom";
import ConseilTransition from "@/pages/services/ConseilTransition";
import ConsultingStrategique from "@/pages/services/ConsultingStrategique";
import FormationPersonnalisee from "@/pages/services/FormationPersonnalisee";
import IAEthiqueResponsable from "@/pages/services/IA-Ethique-Responsable";

const SolutionsAvanceesRoutes = () => {
  return (
    <>
      <Route path="/conseil-transition" element={<ConseilTransition />} />
      <Route path="/consulting-strategique" element={<ConsultingStrategique />} />
      <Route path="/formation-personnalisee" element={<FormationPersonnalisee />} />
      <Route path="/ia-ethique-responsable" element={<IAEthiqueResponsable />} />
    </>
  );
};

export default SolutionsAvanceesRoutes;
