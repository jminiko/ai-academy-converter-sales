
import { Route } from "react-router-dom";
import Webinaires from "@/pages/Webinaires";

const WebinairesRoutes = () => {
  return (
    <>
      <Route path="/webinaires" element={<Webinaires />} />
    </>
  );
};

export default WebinairesRoutes;
