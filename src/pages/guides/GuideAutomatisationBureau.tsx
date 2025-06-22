
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, FileText, Mail, Calculator } from "lucide-react";

const GuideAutomatisationBureau = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Monitor className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide d'Automatisation de Bureau
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Automatisez vos tâches bureautiques quotidiennes avec l'IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Commencer l'automatisation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traitement documents</h3>
              <p className="text-gray-600">Automatisation PDF</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion emails</h3>
              <p className="text-gray-600">Tri automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Calculs automatisés</h3>
              <p className="text-gray-600">Excel intelligent</p>
            </Card>
            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flux de travail</h3>
              <p className="text-gray-600">Processus optimisés</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideAutomatisationBureau;
