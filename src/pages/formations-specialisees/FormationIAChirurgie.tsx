
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Microscope, Target, Shield, Users, Zap, Activity } from "lucide-react";

const FormationIAChirurgie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Chirurgie</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle appliquée à la chirurgie moderne.
            Robotique chirurgicale, imagerie assistée et aide à la décision opératoire.
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            🏥 MedTech AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chirurgie Assistée</h3>
              <p className="text-sm text-gray-600">IA pour assistance opératoire</p>
            </Card>
            <Card className="text-center p-6">
              <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Imagerie Médicale</h3>
              <p className="text-sm text-gray-600">Analyse d'images pré/per-opératoires</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Navigation Chirurgicale</h3>
              <p className="text-sm text-gray-600">Guidage précis par IA</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité Opératoire</h3>
              <p className="text-sm text-gray-600">Prévention des risques</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Programme de Formation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-red-600 mr-2" />
                  Module 1: IA en Chirurgie Robotique
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrise des systèmes robotiques chirurgicaux assistés par IA.
                  Da Vinci, Mako, et systèmes émergents de nouvelle génération.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Systèmes Da Vinci Xi/X</li>
                  <li>• Robotique orthopédique MAKO</li>
                  <li>• Navigation cranienne StealthStation</li>
                  <li>• IA pour contrôle de mouvement</li>
                  <li>• Apprentissage gestuel automatique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotique</Badge>
                  <Badge variant="outline">Navigation</Badge>
                  <Badge variant="outline">Contrôle IA</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Microscope className="h-6 w-6 text-blue-600 mr-2" />
                  Module 2: Imagerie Médicale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Technologies d'imagerie augmentée par intelligence artificielle
                  pour diagnostic pré-opératoire et guidage per-opératoire.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Deep Learning pour IRM/Scanner</li>
                  <li>• Segmentation automatique 3D</li>
                  <li>• Réalité augmentée chirurgicale</li>
                  <li>• Fusion d'images multimodales</li>
                  <li>• Prédiction de résultats opératoires</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">3D Reconstruction</Badge>
                  <Badge variant="outline">AR/VR</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Module 3: Navigation et Planification
                </h3>
                <p className="text-gray-600 mb-4">
                  Systèmes de navigation chirurgicale intelligents et planification
                  pré-opératoire assistée par algorithmes d'optimisation.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Planification trajectoire optimale</li>
                  <li>• Navigation temps réel</li>
                  <li>• Détection collision automatique</li>
                  <li>• Compensation mouvement patient</li>
                  <li>• Optimisation gestes chirurgicaux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Navigation</Badge>
                  <Badge variant="outline">Planning</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="h-6 w-6 text-purple-600 mr-2" />
                  Module 4: Monitoring et Sécurité
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillance intelligente per-opératoire et systèmes d'alerte
                  précoce pour optimiser la sécurité patient et les résultats.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Monitoring vital intelligent</li>
                  <li>• Détection complications précoce</li>
                  <li>• Prédiction saignement</li>
                  <li>• Analyse vidéo comportementale</li>
                  <li>• Score de risque dynamique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Monitoring</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Spécialisations Chirurgicales</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Chirurgie Cardiaque</h3>
                <p className="text-sm text-gray-600">IA pour chirurgie cardiovasculaire</p>
              </Card>
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Neurochirurgie</h3>
                <p className="text-sm text-gray-600">IA pour chirurgie du cerveau</p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Chirurgie Minimale</h3>
                <p className="text-sm text-gray-600">Laparoscopie assistée IA</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Devenez Expert en Chirurgie IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies les plus avancées de la chirurgie assistée
              par intelligence artificielle et révolutionnez la pratique chirurgicale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Heart className="mr-2 h-5 w-5" />
                S'inscrire à la Formation
              </Button>
              <Button size="lg" variant="outline">
                <Microscope className="mr-2 h-5 w-5" />
                Programme Détaillé
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
