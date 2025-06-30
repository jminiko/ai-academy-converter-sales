
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dna, Microscope, Activity, Pill, Zap, FlaskConical, Heart, Brain } from "lucide-react";

const FormationBiotechAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Dna className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Biotech & IA</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la biotechnologie avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🧬 Biotechnology + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Pill className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Découverte Médicaments</h3>
              <p className="text-sm text-gray-600">Drug discovery IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Microscope className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Génomique</h3>
              <p className="text-sm text-gray-600">Séquençage intelligent</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <FlaskConical className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Bioingénierie IA</h3>
              <p className="text-sm text-gray-600">Conception assistée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Diagnostic Prédictif</h3>
              <p className="text-sm text-gray-600">Médecine préventive</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Biotech & IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Dna className="h-6 w-6 text-green-600 mr-2" />
                  Génomique et IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysez les données génomiques massives avec l'IA
                  pour découvrir de nouveaux biomarqueurs et thérapies.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse de séquences ADN/ARN avec ML</li>
                  <li>• Prédiction de la fonction des gènes</li>
                  <li>• Identification de variants génétiques</li>
                  <li>• Médecine de précision personnalisée</li>
                  <li>• Phylogénie et évolution moléculaire</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">Gene Prediction</Badge>
                  <Badge variant="outline">Precision Medicine</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Pill className="h-6 w-6 text-emerald-600 mr-2" />
                  Drug Discovery IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélérez la découverte de médicaments avec des modèles
                  d'IA pour la conception moléculaire et les tests virtuels.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Conception de molécules assistée par IA</li>
                  <li>• Prédiction de propriétés ADMET</li>
                  <li>• Virtual screening et docking</li>
                  <li>• Optimisation de leads compounds</li>
                  <li>• Prédiction de toxicité et effets secondaires</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Molecular Design</Badge>
                  <Badge variant="outline">Virtual Screening</Badge>
                  <Badge variant="outline">ADMET Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FlaskConical className="h-6 w-6 text-teal-600 mr-2" />
                  Bioingénierie Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes biologiques synthétiques
                  optimisés par l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Conception de circuits génétiques</li>
                  <li>• Optimisation des voies métaboliques</li>
                  <li>• Ingénierie des protéines avec IA</li>
                  <li>• Biomanufacturing intelligent</li>
                  <li>• Biosensors et dispositifs biomédicaux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Synthetic Biology</Badge>
                  <Badge variant="outline">Protein Engineering</Badge>
                  <Badge variant="outline">Biomanufacturing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-blue-600 mr-2" />
                  Applications Cliniques
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des solutions d'IA pour le diagnostic,
                  le traitement et le suivi médical personnalisé.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Diagnostic par imagerie médicale IA</li>
                  <li>• Prédiction de progression des maladies</li>
                  <li>• Optimisation des protocoles thérapeutiques</li>
                  <li>• Monitoring des patients temps réel</li>
                  <li>• Essais cliniques virtuels et adaptatifs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Imaging</Badge>
                  <Badge variant="outline">Clinical Prediction</Badge>
                  <Badge variant="outline">Virtual Trials</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">La Révolution Biotech</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme la biotechnologie en accélérant la recherche,
              la découverte et le développement de thérapies innovantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Dna className="mr-2 h-5 w-5" />
                Formation Biotech AI
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Biotech
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationBiotechAI;
