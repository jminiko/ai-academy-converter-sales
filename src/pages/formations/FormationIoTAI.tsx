
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Cloud, Zap, Settings, Shield, Database, Activity } from "lucide-react";

const FormationIoTAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Wifi className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IoT & IA</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Connectez et rendez intelligents tous vos objets avec l'IoT et l'IA
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🌐 Internet of Things + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Activity className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Capteurs Intelligents</h3>
              <p className="text-sm text-gray-600">Data collection avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cloud className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
              <p className="text-sm text-gray-600">Traitement local IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Temps Réel</h3>
              <p className="text-sm text-gray-600">Insights instantanés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité IoT</h3>
              <p className="text-sm text-gray-600">Protection des données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation IoT & IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Wifi className="h-6 w-6 text-emerald-600 mr-2" />
                  Architecture IoT Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Concevez des architectures IoT robustes intégrant l'IA
                  pour des solutions connectées performantes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Protocoles IoT (MQTT, CoAP, LoRaWAN)</li>
                  <li>• Microcontrôleurs et SoC (ESP32, Raspberry Pi)</li>
                  <li>• Gateways et edge computing</li>
                  <li>• Cloud platforms (AWS IoT, Azure IoT)</li>
                  <li>• Device management et provisioning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MQTT</Badge>
                  <Badge variant="outline">ESP32</Badge>
                  <Badge variant="outline">Edge Computing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="h-6 w-6 text-teal-600 mr-2" />
                  Capteurs et Acquisition
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'intégration de capteurs intelligents et
                  l'acquisition de données pour l'analyse IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Capteurs environnementaux (température, humidité)</li>
                  <li>• Vision industrielle et caméras intelligentes</li>
                  <li>• Accéléromètres et gyroscopes</li>
                  <li>• Fusion de données multi-capteurs</li>
                  <li>• Preprocessing et filtrage des signaux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Sensors</Badge>
                  <Badge variant="outline">Data Fusion</Badge>
                  <Badge variant="outline">Signal Processing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  Analytics et Prédictif
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes d'analyse prédictive pour
                  extraire des insights des données IoT.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Time series analysis et forecasting</li>
                  <li>• Anomaly detection en temps réel</li>
                  <li>• Machine learning on the edge</li>
                  <li>• Predictive maintenance IoT</li>
                  <li>• Dashboard et visualisation temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Time Series</Badge>
                  <Badge variant="outline">Anomaly Detection</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-2" />
                  Applications Sectorielles
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des solutions IoT+IA spécialisées pour différents
                  secteurs industriels et commerciaux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Smart buildings et domotique</li>
                  <li>• Agriculture de précision et irrigation</li>
                  <li>• Industrie 4.0 et usines connectées</li>
                  <li>• Smart cities et transport intelligent</li>
                  <li>• Healthcare monitoring et wearables</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Smart Buildings</Badge>
                  <Badge variant="outline">Smart Agriculture</Badge>
                  <Badge variant="outline">Industry 4.0</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Écosystème Connecté</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IoT combiné à l'IA crée un monde intelligemment connecté où
              chaque objet peut apprendre, décider et communiquer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Wifi className="mr-2 h-5 w-5" />
                Formation IoT+IA
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Connectés
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIoTAI;
