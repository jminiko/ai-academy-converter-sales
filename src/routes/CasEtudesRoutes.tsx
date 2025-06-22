
import { Route } from "react-router-dom";
import CasUsageIA1 from "@/pages/cas-etudes/CasUsageIA1";

const CasEtudesRoutes = () => {
  return (
    <>
      <Route path="/casusageia1" element={<CasUsageIA1 />} />
    </>
  );
};

export default CasEtudesRoutes;
