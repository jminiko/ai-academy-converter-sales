
import { Route } from "react-router-dom";
import OptimizedSitemapPage from "@/pages/OptimizedSitemap";

const OptimizedRoutes = () => {
  return (
    <>
      <Route path="/structure-optimisee" element={<OptimizedSitemapPage />} />
    </>
  );
};

export default OptimizedRoutes;
