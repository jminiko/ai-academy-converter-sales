
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Scale, Users } from "lucide-react";

const FormationIAEthique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Éthique
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle responsable et éthique
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Développer l'IA éthique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Biais algorithmiques</h3>
              <p className="text-gray-600">Détection et prévention</p>
            </Card>
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conformité légale</h3>
              <p className="text-gray-600">Réglementations IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Impact sociétal</h3>
              <p className="text-gray-600">Responsabilité sociale</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gouvernance</h3>
              <p className="text-gray-600">Cadres éthiques</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAEthique;
