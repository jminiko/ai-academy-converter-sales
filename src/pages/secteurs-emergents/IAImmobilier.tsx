
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Calculator, Eye, MapPin, Users, Target, Zap, BarChart, Search, Camera, Building, Key, DollarSign, Smartphone } from "lucide-react";

const IAImmobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Immobilier</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez le secteur immobilier avec l'intelligence artificielle.
            Évaluation automatique, prédiction de prix et personnalisation des recommandations.
          </p>
          <Badge variant="secondary" className="bg-orange-500/30 text-white px-4 py-2 text-lg mb-6">
            🏠 PropTech AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Évaluation Automatique</h3>
              <p className="text-sm text-gray-600">Prix prédits par IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Recherche Intelligente</h3>
              <p className="text-sm text-gray-600">Matching personnalisé</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Visite Virtuelle IA</h3>
              <p className="text-sm text-gray-600">Tours immersifs automatisés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Marché</h3>
              <p className="text-sm text-gray-600">Tendances prédictives</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Immobilier</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                  Évaluation Immobilière IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Algorithmes d'évaluation automatique basés sur l'analyse
                  de millions de transactions et facteurs de marché.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Automated Valuation Models (AVM)</li>
                  <li>• Analyse comparative de marché</li>
                  <li>• Facteurs géographiques et sociaux</li>
                  <li>• Prédiction d'évolution des prix</li>
                  <li>• Évaluation en temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AVM</Badge>
                  <Badge variant="outline">Price Prediction</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-green-600 mr-2" />
                  Matching & Recommandations
                </h3>
                <p className="text-gray-600 mb-4">
                  Systèmes de recommandation personnalisés qui analysent
                  les préférences et comportements pour suggérer les biens idéaux.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Profiling comportemental des clients</li>
                  <li>• Recommandations collaborative filtering</li>
                  <li>• Critères de recherche intelligents</li>
                  <li>• Alertes proactives personnalisées</li>
                  <li>• Scoring de compatibilité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recommendation Engine</Badge>
                  <Badge variant="outline">Personalization</Badge>
                  <Badge variant="outline">Matching Algorithm</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Camera className="h-6 w-6 text-purple-600 mr-2" />
                  Computer Vision Immobilier
                </h3>
                <p className="text-gray-600 mb-4">
                  Technologies de vision par ordinateur pour automatiser
                  l'analyse des biens et créer des expériences visuelles immersives.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reconnaissance automatique des caractéristiques</li>
                  <li>• Virtual staging automatisé</li>
                  <li>• Estimation surface par images</li>
                  <li>• Détection défauts et rénovations</li>
                  <li>• Tours virtuels 360° générés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Virtual Staging</Badge>
                  <Badge variant="outline">360° Tours</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-orange-600 mr-2" />
                  Analytics & Prédictions Marché
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse prédictive des tendances immobilières pour anticiper
                  les évolutions de marché et optimiser les investissements.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prédiction évolution des quartiers</li>
                  <li>• Analyse des flux démographiques</li>
                  <li>• Impact projets urbains sur prix</li>
                  <li>• Cycles de marché et timing optimal</li>
                  <li>• ROI prédictif des investissements</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Market Prediction</Badge>
                  <Badge variant="outline">ROI Analysis</Badge>
                  <Badge variant="outline">Urban Analytics</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies PropTech IA</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CRM Immobilier IA</h3>
                <p className="text-sm text-gray-600">Gestion clients intelligente</p>
              </Card>
              <Card className="p-6 text-center">
                <Key className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Smart Lock IoT</h3>
                <p className="text-sm text-gray-600">Visites autonomes sécurisées</p>
              </Card>
              <Card className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Apps AR/VR</h3>
                <p className="text-sm text-gray-600">Visualisation immersive</p>
              </Card>
              <Card className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Fintech Immobilier</h3>
                <p className="text-sm text-gray-600">Financement automatisé</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Transformez l'Immobilier</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Adoptez l'IA pour révolutionner votre activité immobilière :
              évaluations précises, expérience client optimale et décisions éclairées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Home className="mr-2 h-5 w-5" />
                Solutions IA Immobilier
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-5 w-5" />
                Évaluateur IA Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAImmobilier;
