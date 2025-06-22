
import { Route } from "react-router-dom";
import SolutionIAVente from "@/pages/solutions/SolutionIAVente";
import SolutionIAMarketing from "@/pages/solutions/SolutionIAMarketing";

const SolutionsSpecialisees = () => {
  return (
    <>
      <Route path="/solution-ia-vente" element={<SolutionIAVente />} />
      <Route path="/solution-ia-marketing" element={<SolutionIAMarketing />} />
    </>
  );
};

export default SolutionsSpecialisees;
