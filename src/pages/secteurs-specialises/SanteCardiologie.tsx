
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Activity, Stethoscope, Monitor } from "lucide-react";

const SanteCardiologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Cardiologie</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour la santé cardiovasculaire
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Améliorer les soins cardiaques
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ECG Intelligent</h3>
              <p className="text-gray-600">Analyse automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Stethoscope className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic</h3>
              <p className="text-gray-600">Détection précoce</p>
            </Card>
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Surveillance continue</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévention</h3>
              <p className="text-gray-600">Prédiction des risques</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanteCardiologie;
