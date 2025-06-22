
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Departement {
  nom: string;
  processus: string[];
  economie: string;
}

interface AutomatisationParDepartementProps {
  departements: Departement[];
}

export const AutomatisationParDepartement = ({ departements }: AutomatisationParDepartementProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Chaque Département Économise des Milliers</h2>
          <p className="text-2xl text-gray-600">Automatisation transversale = ROI maximisé</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departements.map((dept, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{dept.nom}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{dept.economie}</div>
                    <p className="text-sm text-gray-600">économies</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dept.processus.map((processus, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{processus}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
            <h3 className="text-4xl font-bold mb-4">283 000€ d'économies annuelles</h3>
            <p className="text-2xl mb-6">Juste en automatisant ces 4 départements clés</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-8 py-4" asChild>
              <Link to="/formations">Former mes équipes maintenant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
