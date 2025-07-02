
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Cpu, Eye, Shield, Zap, Navigation, Gauge, Settings } from "lucide-react";

const FormationIAAutomobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Car className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Automobile</h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'industrie automobile avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-gray-500/30 text-white px-4 py-2 text-lg mb-6">
            🚗 Automotive AI & Autonomous Vehicles
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vision Artificielle</h3>
              <p className="text-sm text-gray-600">Reconnaissance d'objets</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Navigation className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Navigation Autonome</h3>
              <p className="text-sm text-gray-600">Conduite automatisée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité Active</h3>
              <p className="text-sm text-gray-600">Prévention d'accidents</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Gauge className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation Moteur</h3>
              <p className="text-sm text-gray-600">Performance intelligente</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">IA pour l'Automobile du Futur</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Car className="h-6 w-6 text-slate-600 mr-2" />
                  Véhicules Autonomes
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes de conduite autonome utilisant
                  l'IA pour naviguer en toute sécurité.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Computer vision pour détection d'obstacles</li>
                  <li>• Deep learning pour décisions de conduite</li>
                  <li>• Fusion de capteurs (LiDAR, radar, caméras)</li>
                  <li>• Planification de trajectoire en temps réel</li>
                  <li>• Réseaux de neurones convolutionnels</li>
                  <li>• Apprentissage par renforcement</li>
                  <li>• Simulation et test virtuels</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Driving</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-gray-600 mr-2" />
                  Vision et Perception
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de vision artificielle pour
                  la reconnaissance et l'analyse de l'environnement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection d'objets en temps réel</li>
                  <li>• Reconnaissance de panneaux routiers</li>
                  <li>• Suivi de voies et marquages</li>
                  <li>• Classification des véhicules</li>
                  <li>• Détection de piétons et cyclistes</li>
                  <li>• Vision nocturne et conditions adverses</li>
                  <li>• YOLO et modèles de détection avancés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Object Detection</Badge>
                  <Badge variant="outline">YOLO</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Systèmes de Sécurité
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes de sécurité active utilisant l'IA
                  pour prévenir les accidents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Freinage d'urgence automatique</li>
                  <li>• Détection de somnolence du conducteur</li>
                  <li>• Avertissement de collision imminente</li>
                  <li>• Aide au maintien de voie</li>
                  <li>• Régulateur de vitesse adaptatif</li>
                  <li>• Surveillance de l'angle mort</li>
                  <li>• Alerte de trafic transversal</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Safety Systems</Badge>
                  <Badge variant="outline">ADAS</Badge>
                  <Badge variant="outline">Driver Monitoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-2" />
                  Optimisation Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour optimiser les performances et
                  l'efficacité des véhicules.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Gestion intelligente de l'énergie</li>
                  <li>• Optimisation de la consommation</li>
                  <li>• Prédiction de pannes (maintenance)</li>
                  <li>• Routage intelligent et trafic</li>
                  <li>• Adaptation du style de conduite</li>
                  <li>• Contrôle thermique intelligent</li>
                  <li>• Diagnostic prédictif avancé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Maintenance</Badge>
                  <Badge variant="outline">Energy Management</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Technologies Automobiles IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-slate-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Edge Computing</h4>
                <p className="text-sm text-gray-600">Traitement temps réel</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">5G & V2X</h4>
                <p className="text-sm text-gray-600">Communication véhiculaire</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Sensors Fusion</h4>
                <p className="text-sm text-gray-600">Intégration multi-capteurs</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Navigation className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">HD Mapping</h4>
                <p className="text-sm text-gray-600">Cartes haute précision</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir de la Mobilité</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme l'industrie automobile en créant des véhicules
              plus sûrs, plus efficaces et entièrement autonomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
                <Car className="mr-2 h-5 w-5" />
                Formation Auto IA
              </Button>
              <Button size="lg" variant="outline">
                <Navigation className="mr-2 h-5 w-5" />
                Véhicules Autonomes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAAutomobile;
