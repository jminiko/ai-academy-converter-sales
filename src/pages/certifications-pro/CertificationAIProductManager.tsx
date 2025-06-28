
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Target, Users, TrendingUp } from "lucide-react";

const CertificationAIProductManager = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Certification AI Product Manager</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Dirigez des projets IA avec expertise et vision stratégique
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Devenir Product Manager IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie produit</h3>
              <p className="text-gray-600">Vision IA long-terme</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Management équipes</h3>
              <p className="text-gray-600">Leadership technique</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI projets</h3>
              <p className="text-gray-600">Rentabilité garantie</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestion projet</h3>
              <p className="text-gray-600">Méthodologies agiles IA</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationAIProductManager;
