
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SitemapSection {
  title: string;
  routes: Array<{
    path: string;
    name: string;
    description?: string;
  }>;
}

interface SitemapGeneratorProps {
  sections: SitemapSection[];
}

export const SitemapGenerator = ({ sections }: SitemapGeneratorProps) => {
  const totalPages = sections.reduce((acc, section) => acc + section.routes.length, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Plan du Site</h1>
        <p className="text-xl text-gray-600 mb-6">
          Découvrez toutes nos pages et ressources IA
        </p>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {totalPages} pages disponibles
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.routes.map((route, routeIndex) => (
                <div key={routeIndex} className="border-l-2 border-blue-100 pl-3">
                  <Link 
                    to={route.path}
                    className="text-blue-600 hover:text-blue-800 font-medium block"
                  >
                    {route.name}
                  </Link>
                  {route.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {route.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <Badge variant="secondary" className="mt-4">
              {section.routes.length} pages
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
};
