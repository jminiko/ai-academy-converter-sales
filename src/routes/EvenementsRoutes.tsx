
import { Route } from "react-router-dom";
import ConferenceMondialIA2025 from "@/pages/evenements/ConferenceMondialIA2025";
import SommetIA2025 from "@/pages/evenements/SommetIA2025";
import HackathonIA2025 from "@/pages/evenements/HackathonIA2025";

const EvenementsRoutes = () => {
  return (
    <>
      <Route path="/conference-mondiale-ia-2025" element={<ConferenceMondialIA2025 />} />
      <Route path="/sommet-ia-2025" element={<SommetIA2025 />} />
      <Route path="/hackathon-ia-2025" element={<HackathonIA2025 />} />
    </>
  );
};

export default EvenementsRoutes;
