
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, Heart, Brain, Zap, Target, Users, TrendingUp, Shield, Database, Activity, Beaker, Atom, FlaskConical } from "lucide-react";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Dna className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Biotechnologie</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la recherche biomédicale avec l'intelligence artificielle.
            Drug discovery, génomique et thérapies personnalisées.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 BioTech AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <FlaskConical className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-sm text-gray-600">Découverte de médicaments IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Dna className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génomique</h3>
              <p className="text-sm text-gray-600">Analyse génétique avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Microscope className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Biologie Computationnelle</h3>
              <p className="text-sm text-gray-600">Modélisation moléculaire IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Médecine Personnalisée</h3>
              <p className="text-sm text-gray-600">Thérapies sur mesure</p>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Biotechnologie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Exploitez la puissance de l'IA pour accélérer la recherche biomédicale
              et développer les thérapies de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Dna className="mr-2 h-5 w-5" />
                Solutions BioTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Recherche & Développement
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IABiotechnologie;
