
import { Route } from "react-router-dom";
import OutilGPT4 from "@/pages/outils/OutilGPT4";

const OutilsRoutes = () => {
  return (
    <>
      <Route path="/outilgpt4" element={<OutilGPT4 />} />
    </>
  );
};

export default OutilsRoutes;
