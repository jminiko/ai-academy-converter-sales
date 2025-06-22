
import { Route } from "react-router-dom";

// Composants de pages outils - Architecture complète
import OutilsIA from "@/pages/outils/OutilsIA";
import CalculatriceROI from "@/pages/outils/CalculatriceROI";
import TesteurPerformance from "@/pages/outils/TesteurPerformance";
import GenerateurDataset from "@/pages/outils/GenerateurDataset";
import AnalyseurBiais from "@/pages/outils/AnalyseurBiais";
import ValidateurModele from "@/pages/outils/ValidateurModele";
import OptimisateurHyperparamètres from "@/pages/outils/OptimisateurHyperparamètres";
import ComparateurAlgorithmes from "@/pages/outils/ComparateurAlgorithmes";
import VisualisateurDonnées from "@/pages/outils/VisualisateurDonnées";
import MonitoringIA from "@/pages/outils/MonitoringIA";

const OutilsRoutes = () => {
  return (
    <>
      {/* Routes pour outils - Applications pratiques */}
      <Route path="/outils-ia" element={<OutilsIA />} />
      <Route path="/calculatrice-roi" element={<CalculatriceROI />} />
      <Route path="/testeur-performance" element={<TesteurPerformance />} />
      <Route path="/generateur-dataset" element={<GenerateurDataset />} />
      <Route path="/analyseur-biais" element={<AnalyseurBiais />} />
      <Route path="/validateur-modele" element={<ValidateurModele />} />
      <Route path="/optimisateur-hyperparametres" element={<OptimisateurHyperparamètres />} />
      <Route path="/comparateur-algorithmes" element={<ComparateurAlgorithmes />} />
      <Route path="/visualisateur-donnees" element={<VisualisateurDonnées />} />
      <Route path="/monitoring-ia" element={<MonitoringIA />} />
    </>
  );
};

export default OutilsRoutes;
