
import { Route } from "react-router-dom";

// Import des nouvelles pages
import SanteCardiologie from "@/pages/secteurs-specialises/SanteCardiologie";
import IADebutant from "@/pages/formations-niveau/IADebutant";

// Import des concepts IA
import ReseauxNeurones from "@/pages/concepts/ReseauxNeurones";
import ApprentissageAutomatique from "@/pages/concepts/ApprentissageAutomatique";
import IASymbolique from "@/pages/types-ia/IASymbolique";
import IAConnexionniste from "@/pages/types-ia/IAConnexionniste";

const RoutesMassives = () => {
  return (
    <>
      {/* Secteurs spécialisés */}
      <Route path="/sante-cardiologie" element={<SanteCardiologie />} />
      
      {/* Formations par niveau */}
      <Route path="/ia-debutant" element={<IADebutant />} />
      
      {/* Concepts IA */}
      <Route path="/reseaux-neurones" element={<ReseauxNeurones />} />
      <Route path="/apprentissage-automatique" element={<ApprentissageAutomatique />} />
      
      {/* Types d'IA */}
      <Route path="/ia-symbolique" element={<IASymbolique />} />
      <Route path="/ia-connexionniste" element={<IAConnexionniste />} />
    </>
  );
};

export default RoutesMassives;
