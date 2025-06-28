
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Factory, Cog, Settings, TrendingUp } from "lucide-react";

const FormationIAIndustrie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Industrie</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Transformez votre industrie avec l'IA et l'Industrie 4.0
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Industrialiser avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cog className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maintenance prédictive</h3>
              <p className="text-gray-600">Anticipation des pannes</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automatisation intelligente</h3>
              <p className="text-gray-600">Processus optimisés</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation production</h3>
              <p className="text-gray-600">Efficacité maximale</p>
            </Card>
            <Card className="p-6 text-center">
              <Factory className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Usine intelligente</h3>
              <p className="text-gray-600">Smart factory complète</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAIndustrie;
