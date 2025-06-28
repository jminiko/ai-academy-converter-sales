
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Calendar, Eye, Star } from "lucide-react";

const TendancesIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Tendances IA 2025</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Découvrez les principales tendances qui façonneront l'IA en 2025
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Explorer les tendances
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Générative</h3>
              <p className="text-gray-600">Explosion créative</p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision augmentée</h3>
              <p className="text-gray-600">Réalité mixte IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IA Quantique</h3>
              <p className="text-gray-600">Calculs révolutionnaires</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AutoML 2.0</h3>
              <p className="text-gray-600">Démocratisation totale</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TendancesIA2025;
