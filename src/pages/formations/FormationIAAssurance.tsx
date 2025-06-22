
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Calculator, FileText, Users } from "lucide-react";

const FormationIAAssurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Assurance
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour le secteur des assurances
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Révolutionner l'assurance
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tarification dynamique</h3>
              <p className="text-gray-600">Prix personnalisés</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion sinistres</h3>
              <p className="text-gray-600">Traitement automatisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Souscription</h3>
              <p className="text-gray-600">Évaluation intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévention risques</h3>
              <p className="text-gray-600">Analyse prédictive</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAAssurance;
