
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Target, Zap, Activity } from "lucide-react";

const SanteOncologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Oncologie</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle pour la lutte contre le cancer
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Solutions onco IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thérapie ciblée</h3>
              <p className="text-gray-600">Traitement personnalisé</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Radiothérapie IA</h3>
              <p className="text-gray-600">Précision maximale</p>
            </Card>
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Biomarqueurs</h3>
              <p className="text-gray-600">Analyse prédictive</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prévention IA</h3>
              <p className="text-gray-600">Dépistage intelligent</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanteOncologie;
