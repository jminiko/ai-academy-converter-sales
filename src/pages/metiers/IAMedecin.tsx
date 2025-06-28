
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Stethoscope, Activity, Shield } from "lucide-react";

const IAMedecin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Médecins</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle au service de la médecine moderne
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Médecine IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnostic assisté</h3>
              <p className="text-gray-600">Aide à la décision</p>
            </Card>
            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring patient</h3>
              <p className="text-gray-600">Surveillance continue</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Médecine prédictive</h3>
              <p className="text-gray-600">Prévention des risques</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thérapie personnalisée</h3>
              <p className="text-gray-600">Traitement sur mesure</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAMedecin;
