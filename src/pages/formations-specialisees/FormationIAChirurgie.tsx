
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stethoscope, Brain, Eye, Heart, Zap, Target, Users, TrendingUp, Shield, Database, Activity, Beaker } from "lucide-react";

const FormationIAChirurgie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Stethoscope className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Chirurgie</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez la chirurgie avec l'intelligence artificielle.
            Techniques de pointe, robotique chirurgicale et diagnostic assisté.
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            🏥 Surgical AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Planification Chirurgicale</h3>
              <p className="text-sm text-gray-600">IA pour opérations complexes</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vision Augmentée</h3>
              <p className="text-sm text-gray-600">Réalité augmentée chirurgicale</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Robotique Chirurgicale</h3>
              <p className="text-sm text-gray-600">Robots assistés par IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chirurgie Cardiaque</h3>
              <p className="text-sm text-gray-600">IA cardiovasculaire</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Chirurgie IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-red-600 mr-2" />
                  Planification Pré-opératoire IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour optimiser la planification chirurgicale avec
                  l'analyse d'images médicales et la modélisation 3D.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse d'images CT/IRM</li>
                  <li>• Modélisation 3D des organes</li>
                  <li>• Simulation pré-opératoire</li>
                  <li>• Prédiction des complications</li>
                  <li>• Optimisation des trajectoires</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Imaging</Badge>
                  <Badge variant="outline">3D Modeling</Badge>
                  <Badge variant="outline">Simulation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="h-6 w-6 text-green-600 mr-2" />
                  Robotique Chirurgicale Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les systèmes robotiques guidés par IA pour
                  des interventions de haute précision.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robots Da Vinci et équivalents</li>
                  <li>• Contrôle par vision artificielle</li>
                  <li>• Apprentissage automatique chirurgical</li>
                  <li>• Télé-chirurgie assistée</li>
                  <li>• Micro-chirurgie robotique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Surgical Robotics</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Remote Surgery</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Réalité Augmentée Chirurgicale
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégrez la réalité augmentée pour une vision améliorée
                  pendant les interventions chirurgicales.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Overlay d'informations patient</li>
                  <li>• Navigation chirurgicale AR</li>
                  <li>• Visualisation temps réel</li>
                  <li>• Guidage par hologrammes</li>
                  <li>• Formation immersive AR/VR</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Augmented Reality</Badge>
                  <Badge variant="outline">Real-time Visualization</Badge>
                  <Badge variant="outline">Holographic Guidance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-purple-600 mr-2" />
                  Sécurité et Éthique IA Médicale
                </h3>
                <p className="text-gray-600 mb-4">
                  Assurez la sécurité des patients et l'éthique dans
                  l'utilisation de l'IA en chirurgie.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Validation des algorithmes médicaux</li>
                  <li>• Gestion des risques IA</li>
                  <li>• Conformité réglementaire</li>
                  <li>• Responsabilité médicale</li>
                  <li>• Protection données patients</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Safety</Badge>
                  <Badge variant="outline">Ethics</Badge>
                  <Badge variant="outline">Regulatory Compliance</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Chirurgie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Devenez expert en IA chirurgicale et transformez la pratique
              médicale avec les technologies les plus avancées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Stethoscope className="mr-2 h-5 w-5" />
                Formation Chirurgie IA
              </Button>
              <Button size="lg" variant="outline">
                <Activity className="mr-2 h-5 w-5" />
                Labs Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAChirurgie;
