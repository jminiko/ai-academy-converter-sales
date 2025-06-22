
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, TrendingUp, Users, Zap } from "lucide-react";

const GuideIAPME = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Store className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide IA pour PME
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle accessible pour les petites et moyennes entreprises
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Digitaliser ma PME
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solutions abordables</h3>
              <p className="text-gray-600">IA accessible</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formation équipes</h3>
              <p className="text-gray-600">Montée en compétences</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation</h3>
              <p className="text-gray-600">Processus optimisés</p>
            </Card>
            <Card className="p-6 text-center">
              <Store className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cas d'usage</h3>
              <p className="text-gray-600">Applications concrètes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideIAPME;
