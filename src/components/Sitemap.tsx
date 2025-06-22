
import { SitemapGenerator } from "./SitemapGenerator";
import { getRoutesByCategory } from "@/config/siteRoutes";

const Sitemap = () => {
  const routesByCategory = getRoutesByCategory();
  
  const sections = Object.entries(routesByCategory).map(([category, routes]) => ({
    title: category,
    routes: routes.map(route => ({
      path: route.path,
      name: route.name,
      description: route.description
    }))
  }));

  return <SitemapGenerator sections={sections} />;
};

export default Sitemap;
