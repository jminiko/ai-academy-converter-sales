
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Users, BarChart, FileText } from "lucide-react";

const FormationIAGestion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Gestion</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Gérer efficacement vos projets IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Maîtriser la gestion IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion d'équipe</h3>
              <p className="text-gray-600">Manager les équipes IA</p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suivi projets</h3>
              <p className="text-gray-600">Monitorer les performances</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-600">Documenter les processus</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Optimiser les workflows</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAGestion;
