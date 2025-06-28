
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Microscope, Dna, TestTube, Heart, Brain, Zap, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const IABiotechnologie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Microscope className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Biotechnologie</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la recherche et développement biotechnologique avec l'intelligence artificielle.
            Découverte de médicaments, génomique, et thérapies personnalisées.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Explorer les Solutions Biotech IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Dna className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Découverte de Médicaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accélération du processus de découverte avec l'IA prédictive et le criblage virtuel.
                </p>
                <Progress value={85} className="mb-2" />
                <span className="text-sm text-gray-500">85% d'efficacité</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TestTube className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Analyse Génomique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analyse de séquences ADN et identification de variants génétiques avec l'IA.
                </p>
                <Progress value={92} className="mb-2" />
                <span className="text-sm text-gray-500">92% de précision</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Médecine Personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Thérapies sur mesure basées sur le profil génétique et les données patient.
                </p>
                <Progress value={78} className="mb-2" />
                <span className="text-sm text-gray-500">78% d'amélioration</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Applications Biotechnologie IA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">01</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Protéomique Prédictive</h3>
                  <p className="text-gray-600">Prédiction de la structure et fonction des protéines</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">02</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Diagnostic Moléculaire</h3>
                  <p className="text-gray-600">Détection précoce de maladies par analyse moléculaire</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">03</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thérapie Génique</h3>
                  <p className="text-gray-600">Optimisation des vecteurs et ciblage thérapeutique</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">04</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Biomarqueurs IA</h3>
                  <p className="text-gray-600">Identification de biomarqueurs prédictifs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">05</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Épidémiologie Computationnelle</h3>
                  <p className="text-gray-600">Modélisation de la propagation des maladies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Badge variant="secondary" className="mt-1">06</Badge>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bio-informatique Avancée</h3>
                  <p className="text-gray-600">Analyse de données biologiques complexes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IABiotechnologie;
