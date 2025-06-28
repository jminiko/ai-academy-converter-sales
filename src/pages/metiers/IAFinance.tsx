
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Shield, BarChart3, DollarSign, CheckCircle, AlertTriangle, Brain, Zap, Target } from "lucide-react";

const IAFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Finance</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos services financiers avec l'IA : détection de fraudes, 
            analyse de risques et trading algorithmique pour une finance intelligente et sécurisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Sécuriser mes finances
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Analyser les risques
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Finance</h2>
          
          <Tabs defaultValue="fraude" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="fraude">Anti-Fraude</TabsTrigger>
              <TabsTrigger value="risques">Gestion Risques</TabsTrigger>
              <TabsTrigger value="trading">Trading IA</TabsTrigger>
              <TabsTrigger value="credit">Scoring Crédit</TabsTrigger>
            </TabsList>

            <TabsContent value="fraude" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-600" />
                    Détection de Fraudes IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Protégez vos transactions avec l'IA de détection de fraudes qui analyse 
                    en temps réel les patterns suspects et bloque les tentatives frauduleuses avec 99.9% de précision.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Détection temps réel
                      </h4>
                      <p className="text-sm text-gray-600">Analyse instantanée des transactions</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Machine Learning adaptatif
                      </h4>
                      <p className="text-sm text-gray-600">Amélioration continue des modèles</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Performance prouvée :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 99.9% de précision de détection</li>
                      <li>• -95% de faux positifs</li>
                      <li>• Réduction de 80% des pertes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risques" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-green-600" />
                    Gestion des Risques IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Évaluez et gérez vos risques financiers avec l'IA qui analyse des milliers de variables 
                    pour prédire et anticiper les risques de marché, crédit et opérationnels.
                  </p>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analyse de risque de marché
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Stress testing automatisé
                    </Badge>
                    <Badge variant="secondary" className="p-3 justify-start w-full">
                      <Target className="h-4 w-4 mr-2" />
                      Optimisation de portefeuille
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trading" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-green-600" />
                    Trading Algorithmique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Maximisez vos performances de trading avec des algorithmes IA qui analysent 
                    les marchés 24/7 et exécutent des stratégies optimisées en microsecondes.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Analyse Technique</h4>
                      <p className="text-sm text-gray-600">Patterns avancés</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Exécution Rapide</h4>
                      <p className="text-sm text-gray-600">Ordres microsecondes</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Performance</h4>
                      <p className="text-sm text-gray-600">+45% rendement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="credit" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                    Scoring Crédit IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Évaluez la solvabilité de vos clients avec des modèles IA qui analysent 
                    des centaines de variables pour un scoring crédit précis et équitable.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Précision du scoring</span>
                      <span className="text-sm text-green-600 font-semibold">96% précision</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Temps de traitement</span>
                      <span className="text-sm text-green-600 font-semibold">&lt; 1 seconde</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Réduction des impayés</span>
                      <span className="text-sm text-green-600 font-semibold">-65%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAFinance;
