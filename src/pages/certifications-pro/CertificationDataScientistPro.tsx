
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Award, Users, Clock } from "lucide-react";

const CertificationDataScientistPro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Certification Data Scientist Pro</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Certification professionnelle reconnue pour devenir Data Scientist expert
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Obtenir la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification reconnue</h3>
              <p className="text-gray-600">Validée par l'industrie</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formation pratique</h3>
              <p className="text-gray-600">Projets réels d'entreprise</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">6 mois</h3>
              <p className="text-gray-600">Programme intensif</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Big Data</h3>
              <p className="text-gray-600">Technologies avancées</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationDataScientistPro;
