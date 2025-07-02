
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, MapPin, BarChart3, Clock, Route, Warehouse, TrendingUp } from "lucide-react";

const FormationIALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Logistique</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne d'approvisionnement avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-amber-500/30 text-white px-4 py-2 text-lg mb-6">
            📦 Supply Chain AI & Smart Logistics
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Package className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestion Stocks</h3>
              <p className="text-sm text-gray-600">Prédiction demande</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Route className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation Routes</h3>
              <p className="text-sm text-gray-600">Livraison efficace</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Warehouse className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Entrepôts Intelligents</h3>
              <p className="text-sm text-gray-600">Automatisation complète</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Avancés</h3>
              <p className="text-sm text-gray-600">Insights prédictifs</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">IA pour la Supply Chain 4.0</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Package className="h-6 w-6 text-orange-600 mr-2" />
                  Prédiction de Demande
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez l'IA pour anticiper les besoins et optimiser
                  vos niveaux de stock avec précision.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Machine learning pour prévisions</li>
                  <li>• Analyse de tendances saisonnières</li>
                  <li>• Facteurs externes (météo, événements)</li>
                  <li>• Optimisation safety stock</li>
                  <li>• Réapprovisionnement automatique</li>
                  <li>• Gestion multi-échelons</li>
                  <li>• Alertes prédictives de rupture</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">Inventory Management</Badge>
                  <Badge variant="outline">Time Series</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Route className="h-6 w-6 text-amber-600 mr-2" />
                  Optimisation Transport
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des algorithmes d'optimisation pour réduire
                  les coûts et délais de livraison.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Algorithmes de routage intelligent</li>
                  <li>• Vehicle Routing Problem (VRP)</li>
                  <li>• Optimisation multi-objectifs</li>
                  <li>• Gestion de flotte dynamique</li>
                  <li>• Prédiction temps de trajet</li>
                  <li>• Consolidation de charges</li>
                  <li>• Livraison last-mile optimisée</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Route Optimization</Badge>
                  <Badge variant="outline">VRP</Badge>
                  <Badge variant="outline">Fleet Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Warehouse className="h-6 w-6 text-blue-600 mr-2" />
                  Entrepôts Autonomes
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes d'automatisation complète pour
                  les opérations d'entreposage.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robotique collaborative (cobots)</li>
                  <li>• Vision par ordinateur pour tri</li>
                  <li>• Systèmes de stockage automatisés</li>
                  <li>• Picking et packing intelligents</li>
                  <li>• Maintenance prédictive équipements</li>
                  <li>• WMS (Warehouse Management System)</li>
                  <li>• IoT et capteurs intelligents</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Warehouse Automation</Badge>
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">IoT</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="h-6 w-6 text-green-600 mr-2" />
                  Analytics Supply Chain
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes d'analyse avancée pour
                  optimiser toute la chaîne d'approvisionnement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Dashboards temps réel</li>
                  <li>• KPIs et métriques automatisées</li>
                  <li>• Détection d'anomalies</li>
                  <li>• Analyse de performance fournisseurs</li>
                  <li>• Simulation et modélisation</li>
                  <li>• Risk management prédictif</li>
                  <li>• Optimisation coûts globaux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Supply Chain Analytics</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                  <Badge variant="outline">Business Intelligence</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Écosystème Logistique Intelligent</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Temps Réel</h4>
                <p className="text-sm text-gray-600">Suivi et pilotage instantané</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Géolocalisation</h4>
                <p className="text-sm text-gray-600">Traçabilité complète</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Prédictions</h4>
                <p className="text-sm text-gray-600">Anticipation des besoins</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h4 className="font-bold mb-2">Automatisation</h4>
                <p className="text-sm text-gray-600">Processus autonomes</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Logistique du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA révolutionne la logistique en créant des chaînes d'approvisionnement
              intelligentes, agiles et entièrement optimisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Truck className="mr-2 h-5 w-5" />
                Formation Logistique IA
              </Button>
              <Button size="lg" variant="outline">
                <Package className="mr-2 h-5 w-5" />
                Supply Chain 4.0
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIALogistique;
