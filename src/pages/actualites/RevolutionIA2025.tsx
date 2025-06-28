
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Flame, Award } from "lucide-react";

const RevolutionIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Révolution IA 2025</h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Comment l'IA transforme radicalement notre société et nos entreprises
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Comprendre la révolution
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AGI proche</h3>
              <p className="text-gray-600">Intelligence générale artificielle</p>
            </Card>
            <Card className="p-6 text-center">
              <Flame className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transformation</h3>
              <p className="text-gray-600">Métiers révolutionnés</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence IA</h3>
              <p className="text-gray-600">Nouveaux standards</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Créativité augmentée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RevolutionIA2025;
