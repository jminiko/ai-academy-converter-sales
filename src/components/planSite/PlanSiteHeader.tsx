
import { Map } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlanSiteHeaderProps {
  totalPages: number;
  totalSections: number;
}

export const PlanSiteHeader = ({ totalPages, totalSections }: PlanSiteHeaderProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <Map className="h-16 w-16 text-white mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-white mb-6">
          Plan du Site
        </h1>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
          Navigation complète de notre site web. Trouvez rapidement toutes nos 
          formations, services et ressources sur l'intelligence artificielle.
        </p>
        <div className="flex justify-center space-x-4">
          <Badge className="bg-white text-green-600 px-4 py-2 text-lg">
            {totalPages} pages disponibles
          </Badge>
          <Badge className="bg-green-700 text-white px-4 py-2 text-lg">
            {totalSections} sections principales
          </Badge>
        </div>
      </div>
    </section>
  );
};
