
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Zap, Shield, Navigation, Eye, Cpu, Gauge, MapPin, Users, Settings, Monitor, Database } from "lucide-react";

const IAAutomobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Car className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Automobile</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'industrie automobile avec l'intelligence artificielle.
            Véhicules autonomes, maintenance prédictive et expérience utilisateur optimisée.
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            🚗 Automotive AI Revolution
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Navigation className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Conduite Autonome</h3>
              <p className="text-sm text-gray-600">Navigation intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité Active</h3>
              <p className="text-sm text-gray-600">Prévention accidents</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Gauge className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Maintenance Prédictive</h3>
              <p className="text-sm text-gray-600">Diagnostic intelligent</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vision Artificielle</h3>
              <p className="text-sm text-gray-600">Reconnaissance d'objets</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Automobile</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                  Véhicules Autonomes IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes de conduite autonome utilisant l'apprentissage
                  profond pour la navigation, la détection et la prise de décision.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Computer vision pour détection obstacles</li>
                  <li>• LIDAR et sensor fusion</li>
                  <li>• Path planning et navigation</li>
                  <li>• Decision making en temps réel</li>
                  <li>• Simulation et testing avancés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Driving</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Sensor Fusion</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Sécurité & ADAS Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes d'assistance avancés utilisant l'IA
                  pour améliorer la sécurité et prévenir les accidents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Détection fatigue conducteur</li>
                  <li>• Freinage d'urgence automatique</li>
                  <li>• Reconnaissance panneaux routiers</li>
                  <li>• Monitoring angle mort</li>
                  <li>• Adaptive cruise control IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ADAS</Badge>
                  <Badge variant="outline">Safety Systems</Badge>
                  <Badge variant="outline">Driver Monitoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Gauge className="h-6 w-6 text-purple-600 mr-2" />
                  Maintenance Prédictive Auto
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez la maintenance véhicule avec des modèles prédictifs
                  qui anticipent les pannes et optimisent les performances.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Diagnostic moteur intelligent</li>
                  <li>• Prédiction usure composants</li>
                  <li>• Optimisation consommation</li>
                  <li>• Gestion flotte automatisée</li>
                  <li>• Alertes maintenance préventive</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Maintenance</Badge>
                  <Badge variant="outline">Fleet Management</Badge>
                  <Badge variant="outline">Diagnostics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  Expérience Utilisateur IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des interfaces véhicules intelligentes qui s'adaptent
                  aux préférences et comportements des conducteurs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Assistants vocaux embarqués</li>
                  <li>• Personnalisation interface</li>
                  <li>• Recommandations trajets IA</li>
                  <li>• Intégration écosystème connecté</li>
                  <li>• Emotion recognition dashboard</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Voice Assistant</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Connected Car</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies Auto IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
                <p className="text-sm text-gray-600">Traitement embarqué</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">5G Connectivity</h3>
                <p className="text-sm text-gray-600">Communication V2X</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Big Data Analytics</h3>
                <p className="text-sm text-gray-600">Analyse comportementale</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">GPS Intelligent</h3>
                <p className="text-sm text-gray-600">Navigation optimisée</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez l'Automobile</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Révolutionnez l'industrie automobile avec l'IA : sécurité renforcée,
              efficacité optimisée et expérience utilisateur exceptionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Car className="mr-2 h-5 w-5" />
                Solutions Auto IA
              </Button>
              <Button size="lg" variant="outline">
                <Settings className="mr-2 h-5 w-5" />
                Consultation Technique
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAAutomobile;
