
import { Route } from "react-router-dom";
import AgricultureIA from "@/pages/industries/AgricultureIA";

const ApplicationsRoutes = () => {
  return (
    <>
      <Route path="/agriculture-ia" element={<AgricultureIA />} />
    </>
  );
};

export default ApplicationsRoutes;
