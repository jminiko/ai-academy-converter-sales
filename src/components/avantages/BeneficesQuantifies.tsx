
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Benefice {
  titre: string;
  icon: React.ComponentType<any>;
  valeur: string;
  economieEuros: string;
  exemple: string;
  couleur: string;
  processus: string[];
}

interface BeneficesQuantifiesProps {
  benefices: Benefice[];
}

export const BeneficesQuantifies = ({ benefices }: BeneficesQuantifiesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bénéfices Mesurés et Garantis</h2>
          <p className="text-2xl text-gray-600">Chaque automatisation génère des économies immédiates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefices.map((benefice, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <benefice.icon className={`h-12 w-12 text-${benefice.couleur}-600 mr-4`} />
                    <div>
                      <CardTitle className="text-2xl">{benefice.titre}</CardTitle>
                      <div className="text-4xl font-bold text-green-600">{benefice.economieEuros}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-5xl font-bold text-${benefice.couleur}-600`}>{benefice.valeur}</div>
                    <p className="text-gray-600">amélioration</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-lg font-semibold text-center">{benefice.exemple}</p>
                </div>
                
                <h4 className="font-semibold mb-3">Processus automatisables :</h4>
                <div className="grid grid-cols-2 gap-2">
                  {benefice.processus.map((processus, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className={`h-4 w-4 text-${benefice.couleur}-500 mr-2 flex-shrink-0`} />
                      <span>{processus}</span>
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
