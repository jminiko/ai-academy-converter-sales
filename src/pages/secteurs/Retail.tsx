
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Users, TrendingUp, Target, Zap, Brain, Settings } from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour le Retail</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez l'expérience d'achat avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-rose-500/30 text-white px-4 py-2 text-lg mb-6">
            🛍️ Retail Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Recommandations</h3>
              <p className="text-sm text-gray-600">Personnalisation avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Visuelle</h3>
              <p className="text-sm text-gray-600">Reconnaissance produits</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prévision Demande</h3>
              <p className="text-sm text-gray-600">Optimisation stocks</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Clientèle</h3>
              <p className="text-sm text-gray-600">Comportement consommateur</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Retail</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-pink-600 mr-2" />
                  Personnalisation et Recommandations
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des expériences d'achat uniques avec des recommandations
                  personnalisées alimentées par l'IA et l'analyse comportementale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Moteurs de recommandation avancés</li>
                  <li>• Personnalisation en temps réel</li>
                  <li>• Cross-selling et up-selling intelligents</li>
                  <li>• Analyse des préférences clients</li>
                  <li>• Optimisation du parcours d'achat</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Recommendations</Badge>
                  <Badge variant="outline">Customer Journey</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Gestion Intelligente des Stocks
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez votre chaîne d'approvisionnement avec des prévisions
                  de demande précises et une gestion automatisée des stocks.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prévisions de demande IA</li>
                  <li>• Optimisation automatique des stocks</li>
                  <li>• Détection de tendances émergentes</li>
                  <li>• Réapprovisionnement intelligent</li>
                  <li>• Réduction des ruptures de stock</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Demand Forecasting</Badge>
                  <Badge variant="outline">Inventory Management</Badge>
                  <Badge variant="outline">Supply Chain</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-rose-600 mr-2" />
                  Vision par Ordinateur Retail
                </h3>
                <p className="text-gray-600 mb-4">
                  Révolutionnez vos magasins avec la reconnaissance visuelle
                  pour l'analyse clientèle et la gestion des produits.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reconnaissance de produits automatique</li>
                  <li>• Analyse du trafic en magasin</li>
                  <li>• Checkout automatisé sans caisse</li>
                  <li>• Détection de vol et sécurité</li>
                  <li>• Analyse des émotions clients</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Automated Checkout</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Optimisation des Prix Dynamique
                </h3>
                <p className="text-gray-600 mb-4">
                  Maximisez vos marges avec des stratégies de prix intelligentes
                  qui s'adaptent au marché et au comportement client.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Pricing dynamique en temps réel</li>
                  <li>• Analyse de la concurrence automatisée</li>
                  <li>• Optimisation des promotions</li>
                  <li>• Élasticité prix intelligente</li>
                  <li>• ROI maximisé par segment</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Dynamic Pricing</Badge>
                  <Badge variant="outline">Competitor Analysis</Badge>
                  <Badge variant="outline">ROI Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Commerce du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'IA transforme le retail avec des expériences personnalisées,
              une gestion optimisée et des innovations révolutionnaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Solutions Retail IA
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Personnalisation Avancée
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retail;
