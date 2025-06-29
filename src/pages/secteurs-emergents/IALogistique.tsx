
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Clock, BarChart, Zap, Globe, Activity } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Logistique</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne d'approvisionnement avec l'intelligence artificielle.
            Prédiction, optimisation et automation pour une logistique intelligente.
          </p>
          <Badge variant="secondary" className="bg-red-500/30 text-white px-4 py-2 text-lg mb-6">
            🚛 Smart Logistics AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Gestion Intelligente des Stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Optimisation automatique des inventaires</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Optimisation de Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Calcul intelligent des itinéraires</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Prédiction de Demande</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Anticipation des besoins clients</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Analytics Avancés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tableaux de bord prédictifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Automation Entrepôt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Robotisation intelligente</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Supply Chain Globale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Orchestration mondiale des flux</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour la Logistique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Package className="h-6 w-6 text-orange-600 mr-2" />
                  Inventory Management IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Gestion intelligente des stocks avec prédiction de demande,
                  optimisation des niveaux et réapprovisionnement automatique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction de demande multi-variable</li>
                  <li>• Optimisation des seuils de réappro</li>
                  <li>• Gestion automatique des ruptures</li>
                  <li>• ABC analysis intelligente</li>
                  <li>• Safety stock optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">Inventory Optimization</Badge>
                  <Badge variant="outline">Stock Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  Transport & Route Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des tournées et transport avec algorithmes
                  génétiques et machine learning pour réduire coûts et délais.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Vehicle Routing Problem (VRP)</li>
                  <li>• Optimisation multi-contraintes</li>
                  <li>• Planification dynamique temps réel</li>
                  <li>• Load optimization</li>
                  <li>• Fleet management intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Route Optimization</Badge>
                  <Badge variant="outline">VRP</Badge>
                  <Badge variant="outline">Fleet Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Warehouse Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisation complète des entrepôts avec robots autonomes,
                  systèmes de tri intelligents et gestion automatisée des flux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robots de picking autonomes</li>
                  <li>• Systèmes de tri automatiques</li>
                  <li>• WMS intelligent</li>
                  <li>• Slotting optimization</li>
                  <li>• Computer vision pour contrôle qualité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">WMS</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="h-6 w-6 text-purple-600 mr-2" />
                  Predictive Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Analytics prédictifs pour anticiper les disruptions,
                  optimiser les performances et améliorer la prise de décision.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction de pannes équipements</li>
                  <li>• Analyse des risques supply chain</li>
                  <li>• Optimisation KPIs logistiques</li>
                  <li>• Détection d'anomalies</li>
                  <li>• Simulation de scénarios</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Predictive Maintenance</Badge>
                  <Badge variant="outline">Risk Analysis</Badge>
                  <Badge variant="outline">KPI Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">ROI Logistique IA</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
                <div className="text-gray-600">Réduction coûts transport</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-gray-600">Optimisation stocks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Amélioration délais</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Précision prévisions</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez votre Logistique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment l'IA révolutionne la chaîne d'approvisionnement
              et optimise vos opérations logistiques de A à Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Truck className="mr-2 h-5 w-5" />
                Découvrir nos Solutions
              </Button>
              <Button size="lg" variant="outline">
                <BarChart className="mr-2 h-5 w-5" />
                Calculer votre ROI
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
