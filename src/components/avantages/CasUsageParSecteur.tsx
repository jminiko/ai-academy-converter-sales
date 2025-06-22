
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CasUsage {
  secteur: string;
  icon: React.ComponentType<any>;
  couleur: string;
  roiMoyen: string;
  economieAnnuelle: string;
  processusAutomatises: string[];
}

interface CasUsageParSecteurProps {
  casUsages: CasUsage[];
}

export const CasUsageParSecteur = ({ casUsages }: CasUsageParSecteurProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Succès Prouvés dans TOUS les Secteurs</h2>
          <p className="text-2xl text-gray-600">Nos clients leaders économisent des millions chaque année</p>
        </div>

        <div className="space-y-12">
          {casUsages.map((secteur, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <secteur.icon className={`h-16 w-16 text-${secteur.couleur}-600 mr-6`} />
                    <div>
                      <CardTitle className="text-3xl">{secteur.secteur}</CardTitle>
                      <p className="text-lg text-gray-600 mt-2">Économies annuelles : {secteur.economieAnnuelle}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-5xl font-bold text-${secteur.couleur}-600`}>{secteur.roiMoyen}</div>
                    <p className="text-gray-600">ROI moyen</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {secteur.processusAutomatises.map((processus, idx) => (
                    <div key={idx} className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                      <CheckCircle className={`h-5 w-5 text-${secteur.couleur}-500 mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-sm font-medium">{processus}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
