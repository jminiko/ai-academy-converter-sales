
import { Route } from "react-router-dom";
import Finance from "@/pages/secteurs/Finance";
import Sante from "@/pages/secteurs/Sante";
import Industrie from "@/pages/secteurs/Industrie";

const SecteursRoutes = () => {
  return (
    <>
      <Route path="/finance" element={<Finance />} />
      <Route path="/sante" element={<Sante />} />
      <Route path="/industrie" element={<Industrie />} />
    </>
  );
};

export default SecteursRoutes;
