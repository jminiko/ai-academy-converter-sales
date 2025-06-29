
import { Route } from "react-router-dom";

// Méthodes avancées
import MethodeRAG from "@/pages/methodes-avancees/MethodeRAG";
import MethodeFewShot from "@/pages/methodes-avancees/MethodeFewShot";

// Technologies émergentes
import EdgeAI from "@/pages/technologies-emergentes/EdgeAI";
import FederatedLearning from "@/pages/technologies-emergentes/FederatedLearning";

// Solutions entreprise
import SolutionIARH from "@/pages/solutions-entreprise/SolutionIARH";
import SolutionIAComptabilite from "@/pages/solutions-entreprise/SolutionIAComptabilite";

// Extension complète des routes - 580+ pages totales
const ExtensionRoutesComplete = () => {
  return (
    <>
      {/* Méthodes avancées */}
      <Route key="methode-rag" path="/methode-rag" element={<MethodeRAG />} />
      <Route key="methode-few-shot" path="/methode-few-shot" element={<MethodeFewShot />} />
      
      {/* Technologies émergentes */}
      <Route key="edge-ai" path="/edge-ai" element={<EdgeAI />} />
      <Route key="federated-learning" path="/federated-learning" element={<FederatedLearning />} />
      
      {/* Solutions entreprise */}
      <Route key="solution-ia-rh" path="/solution-ia-rh" element={<SolutionIARH />} />
      <Route key="solution-ia-comptabilite" path="/solution-ia-comptabilite" element={<SolutionIAComptabilite />} />
    </>
  );
};

export default ExtensionRoutesComplete;
