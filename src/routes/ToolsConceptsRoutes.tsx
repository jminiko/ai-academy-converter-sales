
import { Route } from "react-router-dom";

// Import tools and concepts pages
import OutilAnalyseDonnees from "@/pages/outils/OutilAnalyseDonnees";
import OutilGenerationTexte from "@/pages/outils/OutilGenerationTexte";
import OutilGPT4 from "@/pages/outils/OutilGPT4";
import ReseauxNeurones from "@/pages/concepts/ReseauxNeurones";
import ApprentissageAutomatique from "@/pages/concepts/ApprentissageAutomatique";
import IASymbolique from "@/pages/types-ia/IASymbolique";
import IAConnexionniste from "@/pages/types-ia/IAConnexionniste";

export const ToolsConceptsRoutes = () => {
  return (
    <>
      {/* Outils */}
      <Route key="outil-analyse-donnees" path="/outil-analyse-donnees" element={<OutilAnalyseDonnees />} />
      <Route key="outil-generation-texte" path="/outil-generation-texte" element={<OutilGenerationTexte />} />
      <Route key="outilgpt4" path="/outilgpt4" element={<OutilGPT4 />} />
      
      {/* Concepts */}
      <Route key="reseaux-neurones" path="/reseaux-neurones" element={<ReseauxNeurones />} />
      <Route key="apprentissage-automatique" path="/apprentissage-automatique" element={<ApprentissageAutomatique />} />
      <Route key="ia-symbolique" path="/ia-symbolique" element={<IASymbolique />} />
      <Route key="ia-connexionniste" path="/ia-connexionniste" element={<IAConnexionniste />} />
    </>
  );
};
