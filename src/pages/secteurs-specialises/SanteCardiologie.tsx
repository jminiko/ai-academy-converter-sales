
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Activity, Monitor, Stethoscope } from "lucide-react";

const SanteCardiologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Cardiologie</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour le diagnostic et traitement cardiaque
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Solutions cardio IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ECG intelligent</h3>
              <p className="text-gray-600">Analyse automatisée</p>
            </Card>
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring continu</h3>
              <p className="text-gray-600">Surveillance temps réel</p>
            </Card>
            <Card className="p-6 text-center">
              <Stethoscope className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic prédictif</h3>
              <p className="text-gray-600">Prévention des risques</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Chirurgie assistée</h3>
              <p className="text-gray-600">Précision chirurgicale</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanteCardiologie;
