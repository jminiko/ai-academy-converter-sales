
import { Route } from "react-router-dom";
import PartenaireAzure from "@/pages/partenaires/PartenaireAzure";
import PartenaireOpenAI from "@/pages/partenaires/PartenaireOpenAI";
import PartenaireGoogle from "@/pages/partenaires/PartenaireGoogle";

const PartenairesRoutes = () => {
  return (
    <>
      <Route path="/partenaire-azure" element={<PartenaireAzure />} />
      <Route path="/partenaire-openai" element={<PartenaireOpenAI />} />
      <Route path="/partenaire-google-cloud" element={<PartenaireGoogle />} />
    </>
  );
};

export default PartenairesRoutes;
