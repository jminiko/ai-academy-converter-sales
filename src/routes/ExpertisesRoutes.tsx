
import { Route } from "react-router-dom";
import ExpertiseDataScience from "@/pages/expertises/ExpertiseDataScience";
import ExpertiseMLOps from "@/pages/expertises/ExpertiseMLOps";
import ExpertiseVisionParOrdinateur from "@/pages/expertises/ExpertiseVisionParOrdinateur";
import ExpertiseNLP from "@/pages/expertises/ExpertiseNLP";

const ExpertisesRoutes = () => {
  return (
    <>
      <Route path="/expertise-data-science" element={<ExpertiseDataScience />} />
      <Route path="/expertise-mlops" element={<ExpertiseMLOps />} />
      <Route path="/expertise-vision-ordinateur" element={<ExpertiseVisionParOrdinateur />} />
      <Route path="/expertise-nlp" element={<ExpertiseNLP />} />
    </>
  );
};

export default ExpertisesRoutes;
