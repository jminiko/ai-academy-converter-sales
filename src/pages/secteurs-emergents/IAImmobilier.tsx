
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MapPin, Calculator, Eye, Users, Zap, Target } from "lucide-react";

const IAImmobilier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Home className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA en Immobilier</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez le marché immobilier avec l'intelligence artificielle.
            Évaluation automatique, prédiction de prix et gestion intelligente.
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🏠 PropTech AI Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calculator className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Évaluation Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Estimation précise de valeurs immobilières</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Prédiction de Prix</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Anticipation des évolutions de marché</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Analyse Géospatiale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cartographie intelligente des opportunités</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Vision par Ordinateur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analyse automatique d'images immobilières</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Matching Intelligent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Recommandations personnalisées</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Gestion Automatisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Property management intelligent</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Applications IA Immobilier</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                  Automated Valuation Models (AVM)
                </h3>
                <p className="text-gray-600 mb-4">
                  Modèles d'évaluation automatique utilisant machine learning
                  pour estimer précisément la valeur des biens immobiliers.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse comparative de marché</li>
                  <li>• Intégration données multiples</li>
                  <li>• Modèles hédoniques avancés</li>
                  <li>• Correction automatique des biais</li>
                  <li>• Mise à jour temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AVM</Badge>
                  <Badge variant="outline">Valuation</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-purple-600 mr-2" />
                  Computer Vision Immobilier
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse automatique d'images et vidéos pour évaluer
                  l'état, les caractéristiques et la qualité des biens.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Classification automatique de pièces</li>
                  <li>• Détection de défauts structurels</li>
                  <li>• Estimation surface habitable</li>
                  <li>• Analyse qualité finitions</li>
                  <li>• Reconnaissance d'équipements</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Image Analysis</Badge>
                  <Badge variant="outline">Property Assessment</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  Recommandation & Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Systèmes de recommandation intelligents pour connecter
                  acheteurs et vendeurs selon leurs critères et préférences.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Profiling comportemental acheteurs</li>
                  <li>• Recommandations personnalisées</li>
                  <li>• Prédiction temps de vente</li>
                  <li>• Optimisation pricing dynamique</li>
                  <li>• Lead scoring intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recommendation</Badge>
                  <Badge variant="outline">Matching</Badge>
                  <Badge variant="outline">Lead Scoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-2" />
                  Géoanalytics & Location Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyse géospatiale avancée pour identifier les zones
                  d'investissement prometteuses et tendances de marché.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Analyse démographique prédictive</li>
                  <li>• Cartographie des prix</li>
                  <li>• Détection hotspots émergents</li>
                  <li>• Impact infrastructures</li>
                  <li>• Risk assessment géographique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GeoAnalytics</Badge>
                  <Badge variant="outline">Location Intelligence</Badge>
                  <Badge variant="outline">Market Mapping</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Impact IA Immobilier</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Précision évaluations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">Réduction temps traitement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Amélioration matching</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                <div className="text-gray-600">Augmentation ROI</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Digitalisez l'Immobilier</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment l'IA transforme le secteur immobilier
              et créez des avantages concurrentiels durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="mr-2 h-5 w-5" />
                Découvrir nos Solutions
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                Voir les Cas d'Usage
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
