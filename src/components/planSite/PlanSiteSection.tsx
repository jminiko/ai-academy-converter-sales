
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface Page {
  nom: string;
  url: string;
  description: string;
}

interface PlanSiteSectionProps {
  titre: string;
  icon: LucideIcon;
  pages: Page[];
}

export const PlanSiteSection = ({ titre, icon: Icon, pages }: PlanSiteSectionProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <Icon className="h-6 w-6 text-green-600" />
          </div>
          {titre}
          <Badge className="ml-4 bg-green-100 text-green-800">
            {pages.length} pages
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Link to={page.url} className="block">
                <h4 className="font-semibold text-green-700 mb-2 hover:text-green-800">
                  {page.nom}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                <span className="text-xs text-green-600 font-mono">{page.url}</span>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
