
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Droplets, Sun, Bug, Tractor, Satellite, BarChart3, Leaf } from "lucide-react";

const FormationIAAgriculture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Sprout className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Agriculture</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'agriculture avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🌱 Smart Farming & Precision Agriculture
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Satellite className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Agriculture Satellite</h3>
              <p className="text-sm text-gray-600">Surveillance des cultures</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Irrigation Intelligente</h3>
              <p className="text-sm text-gray-600">Gestion optimale de l'eau</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bug className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Parasites</h3>
              <p className="text-sm text-gray-600">Protection des cultures</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prédiction Rendement</h3>
              <p className="text-sm text-gray-600">Optimisation production</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Agriculture de Précision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Satellite className="h-6 w-6 text-green-600 mr-2" />
                  Surveillance par Satellite
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'imagerie satellite et l'IA pour surveiller
                  la santé des cultures en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse d'images multispectrales</li>
                  <li>• Indices de végétation (NDVI, NDWI)</li>
                  <li>• Détection précoce de stress hydrique</li>
                  <li>• Cartographie des rendements</li>
                  <li>• Suivi phénologique des cultures</li>
                  <li>• Détection de maladies des plantes</li>
                  <li>• Optimisation parcellaire</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Remote Sensing</Badge>
                  <Badge variant="outline">Satellite Imagery</Badge>
                  <Badge variant="outline">NDVI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Droplets className="h-6 w-6 text-blue-600 mr-2" />
                  Gestion Intelligente de l'Eau
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes d'irrigation automatisés
                  basés sur l'IA pour optimiser l'usage de l'eau.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Capteurs IoT d'humidité du sol</li>
                  <li>• Prédiction des besoins en eau</li>
                  <li>• Irrigation de précision variable</li>
                  <li>• Intégration données météorologiques</li>
                  <li>• Optimisation consommation énergétique</li>
                  <li>• Détection fuites et anomalies</li>
                  <li>• Planification irrigation saisonnière</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Smart Irrigation</Badge>
                  <Badge variant="outline">IoT Sensors</Badge>
                  <Badge variant="outline">Water Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bug className="h-6 w-6 text-red-600 mr-2" />
                  Protection des Cultures
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des solutions IA pour détecter et
                  prévenir les maladies et parasites.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Computer vision pour diagnostic</li>
                  <li>• Classification maladies des plantes</li>
                  <li>• Détection précoce d'infestations</li>
                  <li>• Pièges connectés et surveillance</li>
                  <li>• Recommandations de traitement</li>
                  <li>• Prédiction épidémies</li>
                  <li>• Agriculture biologique assistée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Plant Disease Detection</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Integrated Pest Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Tractor className="h-6 w-6 text-yellow-600 mr-2" />
                  Machinisme Intelligent
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes d'automatisation pour
                  les équipements agricoles autonomes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tracteurs et robots autonomes</li>
                  <li>• Navigation GPS de précision</li>
                  <li>• Semis et plantation automatisés</li>
                  <li>• Récolte robotisée intelligente</li>
                  <li>• Épandage variable des intrants</li>
                  <li>• Maintenance prédictive machines</li>
                  <li>• Optimisation trajets et consommation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Farming</Badge>
                  <Badge variant="outline">Precision Agriculture</Badge>
                  <Badge variant="outline">Agricultural Robotics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Écosystème AgTech Intelligent</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Météo Prédictive</h4>
                <p className="text-sm text-gray-600">Anticipation climatique</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Gestion Hydrique</h4>
                <p className="text-sm text-gray-600">Optimisation irrigation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Analytics Agricoles</h4>
                <p className="text-sm text-gray-600">Données actionables</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Durabilité</h4>
                <p className="text-sm text-gray-600">Agriculture responsable</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Agriculture du 21e Siècle</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme l'agriculture en créant des systèmes de production
              plus durables, productifs et respectueux de l'environnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Sprout className="mr-2 h-5 w-5" />
                Formation AgTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Leaf className="mr-2 h-5 w-5" />
                Agriculture Durable
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAAgriculture;
