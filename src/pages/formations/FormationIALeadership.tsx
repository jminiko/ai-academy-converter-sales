
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Users, Target, Lightbulb } from "lucide-react";

const FormationIALeadership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Leadership</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Dirigez la révolution IA dans votre organisation
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Devenir leader IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision IA</h3>
              <p className="text-gray-600">Développer une vision claire</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie</h3>
              <p className="text-gray-600">Élaborer la stratégie</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Piloter l'innovation</p>
            </Card>
            <Card className="p-6 text-center">
              <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Atteindre l'excellence</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIALeadership;
