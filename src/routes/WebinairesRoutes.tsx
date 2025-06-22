import { Route } from "react-router-dom";
import Webinaires from "@/pages/Webinaires";

export const WebinairesRoutes = () => (
  <>
    <Route path="/webinaires" element={<Webinaires />} />
  </>
);
