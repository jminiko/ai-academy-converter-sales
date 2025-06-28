
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Lightbulb, Users, Target } from "lucide-react";

const CertificationAIProduct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Certification AI Product Manager</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Certification pour les chefs de produit IA et responsables innovation
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Devenir Product Manager IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation IA</h3>
              <p className="text-gray-600">Stratégies d'innovation</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion d'équipe</h3>
              <p className="text-gray-600">Leadership technique</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Roadmap produit</h3>
              <p className="text-gray-600">Planification stratégique</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Validation des compétences</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationAIProduct;
