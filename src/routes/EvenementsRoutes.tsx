
import { Route } from "react-router-dom";
import ConferenceMondialIA2025 from "@/pages/evenements/ConferenceMondialIA2025";

const EvenementsRoutes = () => {
  return (
    <>
      <Route path="/conference-mondiale-ia-2025" element={<ConferenceMondialIA2025 />} />
    </>
  );
};

export default EvenementsRoutes;
