
import { Route } from "react-router-dom";
import PartenaireAzure from "@/pages/partenaires/PartenaireAzure";

const PartenairesRoutes = () => {
  return (
    <>
      <Route path="/partenaire-azure" element={<PartenaireAzure />} />
    </>
  );
};

export default PartenairesRoutes;
