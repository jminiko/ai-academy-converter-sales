
import { Route } from "react-router-dom";
import ExpertiseDataScience from "@/pages/expertises/ExpertiseDataScience";
import ExpertiseMLOps from "@/pages/expertises/ExpertiseMLOps";

const ExpertisesRoutes = () => {
  return (
    <>
      <Route path="/expertise-data-science" element={<ExpertiseDataScience />} />
      <Route path="/expertise-mlops" element={<ExpertiseMLOps />} />
    </>
  );
};

export default ExpertisesRoutes;
