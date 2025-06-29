
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Calculator, Eye, Users, Zap, Target, BarChart, Database, Brain, Search } from "lucide-react";

const IAImmobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Immobilier</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transformez le secteur immobilier avec l'intelligence artificielle.
            Évaluation automatique, prédiction marché et gestion patrimoniale intelligente.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🏠 PropTech AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Calculator className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Évaluation Automatique</h3>
              <p className="text-sm text-gray-600">Prix biens immobiliers</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prédiction Marché</h3>
              <p className="text-sm text-gray-600">Tendances immobilières</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Recherche Intelligente</h3>
              <p className="text-sm text-gray-600">Matching automatique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Géospatiale</h3>
              <p className="text-sm text-gray-600">Intelligence territoriale</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Immobilier</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-emerald-600 mr-2" />
                  Évaluation Automatique de Biens
                </h3>
                <p className="text-gray-600 mb-4">
                  Obtenez des estimations précises et instantanées de la valeur
                  immobilière grâce à des algorithmes d'apprentissage automatique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Modèles AVM (Automated Valuation Model)</li>
                  <li>• Analyse comparative automatique</li>
                  <li>• Intégration données marché temps réel</li>
                  <li>• Évaluation multi-critères intelligente</li>
                  <li>• Actualisation continue des prix</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AVM</Badge>
                  <Badge variant="outline">Price Prediction</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  Prédiction et Analyse de Marché
                </h3>
                <p className="text-gray-600 mb-4">
                  Anticipez l'évolution du marché immobilier avec des modèles
                  prédictifs basés sur l'analyse de données massives.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Forecasting prix immobiliers</li>
                  <li>• Détection bulles spéculatives</li>
                  <li>• Analyse cycles marché</li>
                  <li>• Prédiction demandes locatives</li>
                  <li>• Intelligence économique territoriale</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Market Forecasting</Badge>
                  <Badge variant="outline">Trend Analysis</Badge>
                  <Badge variant="outline">Economic Intelligence</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-green-600 mr-2" />
                  Matching et Recommandations IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Connectez acheteurs et vendeurs avec des systèmes de
                  recommandation personnalisés et du matching intelligent.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Moteurs recommandation personnalisés</li>
                  <li>• Matching automatique profils</li>
                  <li>• Analyse préférences utilisateurs</li>
                  <li>• Recherche sémantique avancée</li>
                  <li>• Scoring compatibilité biens</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recommendation Engine</Badge>
                  <Badge variant="outline">User Matching</Badge>
                  <Badge variant="outline">Semantic Search</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-purple-600 mr-2" />
                  Vision par Ordinateur Immobilière
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysez automatiquement photos et visites virtuelles pour
                  extraire des informations sur les caractéristiques des biens.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reconnaissance automatique caractéristiques</li>
                  <li>• Génération descriptions IA</li>
                  <li>• Détection défauts et rénovations</li>
                  <li>• Création visites virtuelles 360°</li>
                  <li>• Staging virtuel automatisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Virtual Tours</Badge>
                  <Badge variant="outline">Property Analysis</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies PropTech IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Big Data Immobilier</h3>
                <p className="text-sm text-gray-600">Analytics avancées</p>
              </Card>
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">Modèles prédictifs</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">GIS Intelligence</h3>
                <p className="text-sm text-gray-600">Géolocalisation avancée</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CRM Intelligent</h3>
                <p className="text-sm text-gray-600">Gestion client IA</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez l'Immobilier</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Révolutionnez votre activité immobilière avec des solutions IA
              innovantes pour l'évaluation, la recherche et la gestion patrimoniale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Home className="mr-2 h-5 w-5" />
                Solutions PropTech IA
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-5 w-5" />
                Démo Évaluation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />    </div>
  );
};

export default IAImmobilier;
