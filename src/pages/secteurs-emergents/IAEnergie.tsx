
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Sun, Wind, Gauge, TrendingUp, BarChart, Settings, Monitor, Shield, Cpu, Database } from "lucide-react";

const IAEnergie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Énergie</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez le secteur énergétique avec l'intelligence artificielle.
            Optimisation des réseaux, prédiction de consommation et énergies renouvelables.
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            ⚡ Smart Energy AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Gauge className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Smart Grid</h3>
              <p className="text-sm text-gray-600">Réseaux intelligents optimisés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Énergies Renouvelables</h3>
              <p className="text-sm text-gray-600">Prédiction solaire et éolienne</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Battery className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Stockage Intelligent</h3>
              <p className="text-sm text-gray-600">Gestion batteries avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Efficacité Énergétique</h3>
              <p className="text-sm text-gray-600">Optimisation consommation</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Énergie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Gauge className="h-6 w-6 text-blue-600 mr-2" />
                  Smart Grid & Distribution
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez la distribution électrique avec des réseaux intelligents
                  capables de s'auto-réguler et de prédire les pannes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Load balancing automatique</li>
                  <li>• Détection de pannes prédictive</li>
                  <li>• Optimisation flux énergétiques</li>
                  <li>• Intégration micro-réseaux</li>
                  <li>• Peak shaving intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Smart Grid</Badge>
                  <Badge variant="outline">Load Balancing</Badge>
                  <Badge variant="outline">Predictive Maintenance</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sun className="h-6 w-6 text-green-600 mr-2" />
                  Énergies Renouvelables IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maximisez l'efficacité des installations solaires et éoliennes
                  grâce à la prédiction météorologique et l'optimisation ML.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction production solaire</li>
                  <li>• Forecasting éolien avancé</li>
                  <li>• Optimisation angle panneaux</li>
                  <li>• Maintenance prédictive turbines</li>
                  <li>• Intégration météo multi-sources</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Solar Forecasting</Badge>
                  <Badge variant="outline">Wind Prediction</Badge>
                  <Badge variant="outline">Weather ML</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Battery className="h-6 w-6 text-purple-600 mr-2" />
                  Stockage & Batteries IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez les systèmes de stockage d'énergie avec des algorithmes
                  d'apprentissage pour maximiser durée de vie et efficacité.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Gestion charge/décharge optimale</li>
                  <li>• Prédiction dégradation batteries</li>
                  <li>• Arbitrage énergétique automatique</li>
                  <li>• Optimisation cycles de vie</li>
                  <li>• Integration vehicule-to-grid</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Battery Management</Badge>
                  <Badge variant="outline">Energy Arbitrage</Badge>
                  <Badge variant="outline">V2G Integration</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-orange-600 mr-2" />
                  Efficacité Énergétique IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Réduisez la consommation énergétique des bâtiments et industries
                  avec des systèmes de gestion énergétique intelligents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Building Energy Management</li>
                  <li>• HVAC optimization par IA</li>
                  <li>• Détection gaspillages énergétiques</li>
                  <li>• Prédiction consommation</li>
                  <li>• Automated demand response</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">BEMS</Badge>
                  <Badge variant="outline">HVAC Optimization</Badge>
                  <Badge variant="outline">Demand Response</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies IA Énergie</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
                <p className="text-sm text-gray-600">Traitement temps réel</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IoT Analytics</h3>
                <p className="text-sm text-gray-600">Capteurs intelligents</p>
              </Card>
              <Card className="p-6 text-center">
                <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Digital Twins</h3>
                <p className="text-sm text-gray-600">Jumeaux numériques</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Cybersécurité</h3>
                <p className="text-sm text-gray-600">Protection infrastructures</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez l'Énergie</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez votre approche énergétique avec l'IA : réduction des coûts,
              optimisation de l'efficacité et transition vers un avenir durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                <Zap className="mr-2 h-5 w-5" />
                Solutions IA Énergie
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Calculateur ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAEnergie;
