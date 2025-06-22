
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Target, TrendingUp } from "lucide-react";

const FormationIALeadership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Leadership</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Dirigez la transformation IA de votre organisation
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Devenir leader IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership équipe</h3>
              <p className="text-gray-600">Diriger les équipes IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vision stratégique</h3>
              <p className="text-gray-600">Définir la vision IA</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transformation</h3>
              <p className="text-gray-600">Piloter le changement</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIALeadership;
