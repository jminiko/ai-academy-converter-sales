
import { Route } from "react-router-dom";
import OutilAnalyseDonnees from "@/pages/outils/OutilAnalyseDonnees";
import OutilGenerationTexte from "@/pages/outils/OutilGenerationTexte";

const OutilsSpecialisesRoutes = () => {
  return (
    <>
      <Route path="/outil-analyse-donnees" element={<OutilAnalyseDonnees />} />
      <Route path="/outil-generation-texte" element={<OutilGenerationTexte />} />
    </>
  );
};

export default OutilsSpecialisesRoutes;
