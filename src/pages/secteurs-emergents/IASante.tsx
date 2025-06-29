
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Brain, Eye, Pill, Users, Shield, BarChart, Monitor, Database, Cpu, Zap } from "lucide-react";

const IASante = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Santé</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez les soins de santé avec l'intelligence artificielle.
            Diagnostic assisté, médecine personnalisée et recherche médicale avancée.
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🏥 Healthcare AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Diagnostic Assisté</h3>
              <p className="text-sm text-gray-600">IA médicale précise</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Imagerie Médicale</h3>
              <p className="text-sm text-gray-600">Analyse radiologique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Pill className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-sm text-gray-600">Découverte médicaments</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Médecine Personnalisée</h3>
              <p className="text-sm text-gray-600">Traitements sur-mesure</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications IA Santé</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Stethoscope className="h-6 w-6 text-blue-600 mr-2" />
                  Diagnostic Médical Assisté
                </h3>
                <p className="text-gray-600 mb-4">
                  Assistez les médecins avec des systèmes de diagnostic IA
                  capables d'analyser symptômes et données cliniques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse ECG automatisée</li>
                  <li>• Détection pathologies rares</li>
                  <li>• Scoring risque patient</li>
                  <li>• Aide décision clinique</li>
                  <li>• Diagnostic différentiel IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Clinical Decision Support</Badge>
                  <Badge variant="outline">Medical Diagnosis</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-green-600 mr-2" />
                  Imagerie Médicale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Révolutionnez l'imagerie médicale avec des algorithmes
                  de deep learning pour l'analyse et le diagnostic.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection tumeurs radiologie</li>
                  <li>• Analyse IRM automatisée</li>
                  <li>• Scanner CT intelligent</li>
                  <li>• Échographie assistée IA</li>
                  <li>• Pathologie numérique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Medical Imaging</Badge>
                  <Badge variant="outline">Radiology AI</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Pill className="h-6 w-6 text-purple-600 mr-2" />
                  Drug Discovery & Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Accélérez la découverte de nouveaux médicaments avec
                  l'IA pour l'analyse moléculaire et les essais cliniques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Criblage virtuel molécules</li>
                  <li>• Prédiction toxicité</li>
                  <li>• Optimisation essais cliniques</li>
                  <li>• Biomarqueurs discovery</li>
                  <li>• Repositionnement médicaments</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Drug Discovery</Badge>
                  <Badge variant="outline">Molecular Analysis</Badge>
                  <Badge variant="outline">Clinical Trials</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-orange-600 mr-2" />
                  Médecine Prédictive IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Anticipez les risques de santé et personnalisez les
                  traitements grâce à l'analyse prédictive avancée.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction épidémies</li>
                  <li>• Médecine génomique</li>
                  <li>• Thérapies personnalisées</li>
                  <li>• Monitoring patient IoT</li>
                  <li>• Prévention maladies chroniques</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Medicine</Badge>
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">Personalized Treatment</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies Santé IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Wearables IoT</h3>
                <p className="text-sm text-gray-600">Monitoring continu</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Health Data</h3>
                <p className="text-sm text-gray-600">Dossiers patients IA</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">GPU Computing</h3>
                <p className="text-sm text-gray-600">Calcul haute performance</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Privacy & Security</h3>
                <p className="text-sm text-gray-600">Protection données santé</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez la Santé</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez les soins de santé avec l'IA : diagnostic plus précis,
              traitements personnalisés et recherche médicale accélérée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Heart className="mr-2 h-5 w-5" />
                Solutions Santé IA
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Études de Cas Médicales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IASante;
