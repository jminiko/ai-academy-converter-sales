
import { Route } from "react-router-dom";
import AgricultureIA from "@/pages/industries/AgricultureIA";
import Industrie40 from "@/pages/industries/Industrie40";

const IndustriesRoutes = () => {
  return (
    <>
      <Route path="/agriculture-ia" element={<AgricultureIA />} />
      <Route path="/industrie-40" element={<Industrie40 />} />
    </>
  );
};

export default IndustriesRoutes;
