
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Users, Building, Heart } from "lucide-react";

const RevolutionIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Révolution IA 2025</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Comment l'intelligence artificielle transforme notre société
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Comprendre la révolution
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Société augmentée</h3>
              <p className="text-gray-600">Humain + IA collaborative</p>
            </Card>
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entreprises transformées</h3>
              <p className="text-gray-600">Nouveaux modèles économiques</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Santé révolutionnée</h3>
              <p className="text-gray-600">Médecine personnalisée IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Impact planétaire</h3>
              <p className="text-gray-600">Solutions climat & énergie</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RevolutionIA2025;
