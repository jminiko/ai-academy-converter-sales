
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Stethoscope, Brain, Activity } from "lucide-react";

const FormationIASante = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Santé
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Applications de l'IA dans le secteur médical et pharmaceutique
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Révolutionner la santé
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic</h3>
              <p className="text-gray-600">IA d'aide au diagnostic</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Imagerie</h3>
              <p className="text-gray-600">Analyse radiologique</p>
            </Card>
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prédictif</h3>
              <p className="text-gray-600">Médecine préventive</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personnalisé</h3>
              <p className="text-gray-600">Traitements sur mesure</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIASante;
