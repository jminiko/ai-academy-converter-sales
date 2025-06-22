
import { Route } from "react-router-dom";
import ReseauxNeurones from "@/pages/concepts/ReseauxNeurones";
import ApprentissageAutomatique from "@/pages/concepts/ApprentissageAutomatique";

const ConceptsRoutes = () => {
  return (
    <>
      <Route path="/reseaux-neurones" element={<ReseauxNeurones />} />
      <Route path="/apprentissage-automatique" element={<ApprentissageAutomatique />} />
    </>
  );
};

export default ConceptsRoutes;
