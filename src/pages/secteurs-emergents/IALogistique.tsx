
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Clock, Zap, Target, Users, TrendingUp, Route, Warehouse, Plane, Ship, BarChart, AlertTriangle, Gauge } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Logistique</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne d'approvisionnement avec l'intelligence artificielle.
            Prédiction de demande, routage intelligent et gestion automatisée des stocks.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🚚 Supply Chain AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Route className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Routage Intelligent</h3>
              <p className="text-sm text-gray-600">Optimisation des trajets par IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestion Stocks IA</h3>
              <p className="text-sm text-gray-600">Prédiction et automatisation</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prédiction Demande</h3>
              <p className="text-sm text-gray-600">Forecasting ML avancé</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Warehouse className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Entrepôt Intelligent</h3>
              <p className="text-sm text-gray-600">Automatisation complète</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Logistique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Route className="h-6 w-6 text-blue-600 mr-2" />
                  Optimisation de Routes IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Algorithmes d'optimisation avancés pour réduire les coûts
                  de transport et améliorer les délais de livraison.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Algorithmes génétiques pour VRP</li>
                  <li>• Optimisation multi-objectifs</li>
                  <li>• Prise en compte trafic temps réel</li>
                  <li>• Contraintes véhicules et conducteurs</li>
                  <li>• Optimization dynamique en cours</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">VRP</Badge>
                  <Badge variant="outline">Genetic Algorithm</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-green-600 mr-2" />
                  Prédiction de Demande
                </h3>
                <p className="text-gray-600 mb-4">
                  Modèles prédictifs sophistiqués pour anticiper la demande
                  et optimiser les niveaux de stock.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Time series forecasting avancé</li>
                  <li>• Facteurs externes (météo, événements)</li>
                  <li>• Saisonnalité et tendances ML</li>
                  <li>• Interval de confiance adaptatifs</li>
                  <li>• Mise à jour en temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Time Series</Badge>
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">ML Prediction</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Warehouse className="h-6 w-6 text-purple-600 mr-2" />
                  Automatisation Entrepôt
                </h3>
                <p className="text-gray-600 mb-4">
                  Solutions robotiques et IA pour automatiser complètement
                  les opérations d'entrepôt et de fulfillment.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robotique mobile autonome (AMR)</li>
                  <li>• Picking et packing automatisés</li>
                  <li>• Slotting optimization par IA</li>
                  <li>• Computer vision pour contrôle</li>
                  <li>• Orchestration workflow intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Automation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                  Gestion des Risques IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Identification proactive des risques supply chain et
                  mitigation automatique par intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Early warning systems</li>
                  <li>• Analyse des fournisseurs</li>
                  <li>• Prédiction de disruptions</li>
                  <li>• Plans de contingence automatiques</li>
                  <li>• Monitoring multi-sources</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Risk Management</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Supply Chain</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies IA Logistique</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">TMS Intelligence</h3>
                <p className="text-sm text-gray-600">Transport Management IA</p>
              </Card>
              <Card className="p-6 text-center">
                <Warehouse className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">WMS Autonome</h3>
                <p className="text-sm text-gray-600">Warehouse automatisé</p>
              </Card>
              <Card className="p-6 text-center">
                <Gauge className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IoT Predictive</h3>
                <p className="text-sm text-gray-600">Capteurs intelligents</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Real-time Analytics</h3>
                <p className="text-sm text-gray-600">Décisions instantanées</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Optimisez votre Supply Chain</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez votre logistique avec l'IA : réduction des coûts,
              amélioration des délais et satisfaction client maximale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Truck className="mr-2 h-5 w-5" />
                Solutions IA Logistique
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IALogistique;
