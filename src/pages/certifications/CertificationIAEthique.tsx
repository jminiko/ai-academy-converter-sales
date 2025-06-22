
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Scale, Users } from "lucide-react";

const CertificationIAEthique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification IA Éthique
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Devenez expert en développement d'IA éthique et responsable
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Obtenir la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Principes éthiques</h3>
              <p className="text-gray-600">Fondements moraux</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Biais et équité</h3>
              <p className="text-gray-600">Justice algorithmique</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Impact sociétal</h3>
              <p className="text-gray-600">Bien-être collectif</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gouvernance IA</h3>
              <p className="text-gray-600">Cadre réglementaire</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationIAEthique;
