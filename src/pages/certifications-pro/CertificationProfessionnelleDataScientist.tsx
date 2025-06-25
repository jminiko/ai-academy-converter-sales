
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, CheckCircle } from "lucide-react";

const CertificationProfessionnelleDataScientist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Certification Data Scientist Pro</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Certification professionnelle reconnue en Data Science et IA
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            S'inscrire à la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Formation complète</h3>
              <p className="text-gray-600">200h de formation</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mentorat expert</h3>
              <p className="text-gray-600">Accompagnement personnalisé</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Projets pratiques</h3>
              <p className="text-gray-600">Portfolio professionnel</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Diplôme reconnu</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationProfessionnelleDataScientist;
