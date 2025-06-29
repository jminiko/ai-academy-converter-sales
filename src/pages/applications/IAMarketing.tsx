
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Users, Mail, TrendingUp } from "lucide-react";

const IAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA pour le Marketing
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Boostez vos campagnes marketing avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Améliorer mon marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Segmentation client</h3>
              <p className="text-gray-600">Ciblage précis</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email personnalisé</h3>
              <p className="text-gray-600">Contenu adapté</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédiction ROI</h3>
              <p className="text-gray-600">Optimisation budget</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Attribution marketing</h3>
              <p className="text-gray-600">Mesure performance</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAMarketing;
