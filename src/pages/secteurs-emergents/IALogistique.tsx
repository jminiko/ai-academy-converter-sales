
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Clock, BarChart, Globe, Zap, Target, Users, TrendingUp, Database, Bot } from "lucide-react";

const IALogistique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Logistique</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez votre chaîne d'approvisionnement avec l'intelligence artificielle.
            Transport intelligent, gestion d'entrepôts et prédiction de la demande.
          </p>
          <Badge variant="secondary" className="bg-amber-500/30 text-white px-4 py-2 text-lg mb-6">
            📦 Smart Logistics AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Optimisation Routes</h3>
              <p className="text-sm text-gray-600">Algorithmes de routage IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestion Entrepôts</h3>
              <p className="text-sm text-gray-600">Automatisation intelligente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BarChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prédiction Demande</h3>
              <p className="text-sm text-gray-600">Forecasting avancé</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Livraison Temps Réel</h3>
              <p className="text-sm text-gray-600">Tracking intelligent</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Logistique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-orange-600 mr-2" />
                  Optimisation de Routes Intelligente
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez des algorithmes IA avancés pour optimiser les
                  itinéraires de livraison et réduire les coûts de transport.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Algorithmes génétiques pour VRP</li>
                  <li>• Optimisation multi-contraintes</li>
                  <li>• Prédiction trafic temps réel</li>
                  <li>• Planification dynamique</li>
                  <li>• Réduction empreinte carbone</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Route Optimization</Badge>
                  <Badge variant="outline">VRP</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Package className="h-6 w-6 text-blue-600 mr-2" />
                  Gestion Intelligente d'Entrepôts
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatisez et optimisez les opérations d'entrepôt avec
                  des systèmes robotiques guidés par IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robots de picking automatisés</li>
                  <li>• Optimisation placement produits</li>
                  <li>• Gestion inventory intelligent</li>
                  <li>• Prévision besoin stockage</li>
                  <li>• Maintenance prédictive équipements</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Warehouse Automation</Badge>
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">Inventory Management</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-green-600 mr-2" />
                  Prédiction et Planification Demande
                </h3>
                <p className="text-gray-600 mb-4">
                  Anticipez la demande client avec des modèles prédictifs
                  avancés pour optimiser les stocks et la production.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Machine Learning pour forecasting</li>
                  <li>• Analyse données saisonnières</li>
                  <li>• Prédiction trends marché</li>
                  <li>• Optimisation niveaux stock</li>
                  <li>• Réduction ruptures stock</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">Stock Optimization</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-purple-600 mr-2" />
                  Supply Chain Visibility IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Obtenez une visibilité complète sur votre chaîne
                  d'approvisionnement avec des analyses IA en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tracking end-to-end automatisé</li>
                  <li>• Détection anomalies supply chain</li>
                  <li>• Gestion risques fournisseurs</li>
                  <li>• Optimisation réseau distribution</li>
                  <li>• Alertes prédictives disruptions</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Supply Chain Visibility</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                  <Badge variant="outline">Real-time Analytics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Révolutionnez votre Logistique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez votre chaîne d'approvisionnement avec des solutions IA
              sur mesure pour maximiser l'efficacité et réduire les coûts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Truck className="mr-2 h-5 w-5" />
                Solutions Logistique IA
              </Button>
              <Button size="lg" variant="outline">
                <Package className="mr-2 h-5 w-5" />
                Démo Interactive
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
