
import { Route } from "react-router-dom";

// Composants de pages conseils - Architecture complète
import ConseilsIA from "@/pages/conseils/ConseilsIA";
import ConseilsStrategie from "@/pages/conseils/ConseilsStrategie";
import ConseilsImplementation from "@/pages/conseils/ConseilsImplementation";
import ConseilsGouvernance from "@/pages/conseils/ConseilsGouvernance";
import ConseilsConformite from "@/pages/conseils/ConseilsConformite";
import ConseilsOptimisation from "@/pages/conseils/ConseilsOptimisation";
import ConseilsScaling from "@/pages/conseils/ConseilsScaling";
import ConseilsROI from "@/pages/conseils/ConseilsROI";
import ConseilsEquipe from "@/pages/conseils/ConseilsEquipe";
import ConseilsTechnologie from "@/pages/conseils/ConseilsTechnologie";

const ConseilsRoutes = () => {
  return (
    <>
      {/* Routes pour conseils - Expertise et accompagnement */}
      <Route path="/conseils-ia" element={<ConseilsIA />} />
      <Route path="/conseils-strategie" element={<ConseilsStrategie />} />
      <Route path="/conseils-implementation" element={<ConseilsImplementation />} />
      <Route path="/conseils-gouvernance" element={<ConseilsGouvernance />} />
      <Route path="/conseils-conformite" element={<ConseilsConformite />} />
      <Route path="/conseils-optimisation" element={<ConseilsOptimisation />} />
      <Route path="/conseils-scaling" element={<ConseilsScaling />} />
      <Route path="/conseils-roi" element={<ConseilsROI />} />
      <Route path="/conseils-equipe" element={<ConseilsEquipe />} />
      <Route path="/conseils-technologie" element={<ConseilsTechnologie />} />
    </>
  );
};

export default ConseilsRoutes;
