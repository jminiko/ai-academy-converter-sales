
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, Search, Target, TrendingUp, Brain, Clock, Shield, Award, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";

const IAHR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="h-16 w-16 text-white mb-6" />
              <h1 className="text-5xl font-bold text-white mb-6">IA pour Ressources Humaines</h1>
              <p className="text-xl text-purple-100 mb-8">
                Transformez vos RH avec l'intelligence artificielle. Recrutez mieux, 
                gérez plus efficacement et développez vos talents avec des outils IA de pointe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Découvrir nos solutions
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                  Voir les résultats
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Impact mesuré de l'IA RH</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Réduction du temps de recrutement</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="bg-white/20" />
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Amélioration de la rétention</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="bg-white/20" />
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Optimisation des performances</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions complètes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA Complètes pour les RH</h2>
          
          <Tabs defaultValue="recrutement" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="recrutement">Recrutement</TabsTrigger>
              <TabsTrigger value="evaluation">Évaluation</TabsTrigger>
              <TabsTrigger value="developpement">Développement</TabsTrigger>
              <TabsTrigger value="analytics">Analytics RH</TabsTrigger>
            </TabsList>

            <TabsContent value="recrutement" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-6 w-6 text-purple-600" />
                      Sourcing Intelligent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Notre IA analyse des millions de profils pour identifier les candidats parfaits, 
                      même ceux qui ne postulent pas activement.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2">LinkedIn</Badge>
                      <Badge variant="secondary" className="mr-2">GitHub</Badge>
                      <Badge variant="secondary" className="mr-2">Indeed</Badge>
                      <Badge variant="secondary">CV thèques</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-purple-600" />
                      Évaluation Automatisée
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Analysez automatiquement les CV, évaluez les compétences et classez les candidats 
                      selon vos critères personnalisés.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Fonctionnalités :</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Scoring automatique des CV</li>
                        <li>• Tests techniques IA</li>
                        <li>• Analyse de personnalité</li>
                        <li>• Prédiction de fit culturel</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Processus de Recrutement Optimisé</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                      <h4 className="font-semibold">Analyse du besoin</h4>
                      <p className="text-sm text-gray-600">IA définit le profil idéal</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                      <h4 className="font-semibold">Sourcing massif</h4>
                      <p className="text-sm text-gray-600">Identification automatique</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                      <h4 className="font-semibold">Tri intelligent</h4>
                      <p className="text-sm text-gray-600">Classement par pertinence</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                      <h4 className="font-semibold">Entretiens ciblés</h4>
                      <p className="text-sm text-gray-600">Questions générées par IA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evaluation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-purple-600" />
                    Évaluation des Performances IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    Système d'évaluation 360° alimenté par l'IA pour une analyse objective et complète 
                    des performances de vos collaborateurs.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <BarChart3 className="h-8 w-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold mb-2">Analyse quantitative</h4>
                      <p className="text-sm text-gray-600">Métriques de performance automatisées</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Brain className="h-8 w-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold mb-2">Évaluation qualitative</h4>
                      <p className="text-sm text-gray-600">Analyse des soft skills par IA</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Award className="h-8 w-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold mb-2">Recommandations</h4>
                      <p className="text-sm text-gray-600">Plans de développement personnalisés</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Exemple de rapport IA :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Leadership</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-24" />
                          <span className="text-sm">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Communication</span>
                        <div className="flex items-center gap-2">
                          <Progress value={92} className="w-24" />
                          <span className="text-sm">92%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Innovation</span>
                        <div className="flex items-center gap-2">
                          <Progress value={78} className="w-24" />
                          <span className="text-sm">78%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="developpement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    Développement des Talents IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Plans de carrière personnalisés et formations adaptatives basées sur l'analyse IA 
                    des compétences et aspirations de chaque collaborateur.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Formation Adaptative</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Parcours personnalisés par IA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Micro-learning intelligent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Évaluation continue</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Planification de Carrière</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Analyse des aspirations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Identification des opportunités</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Roadmap personnalisée</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    Analytics RH Avancés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Tableaux de bord intelligents et analyses prédictives pour optimiser 
                    votre stratégie RH basée sur des données.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Indicateurs Clés</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Taux de rétention</span>
                          <span className="font-semibold text-green-600">+15%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time to hire</span>
                          <span className="font-semibold text-blue-600">-45 jours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Satisfaction employés</span>
                          <span className="font-semibold text-purple-600">8.7/10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Coût par recrutement</span>
                          <span className="font-semibold text-orange-600">-3,200€</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Analyses Prédictives</h4>
                      <div className="space-y-3">
                        <div className="p-3 border-l-4 border-red-400 bg-red-50">
                          <div className="text-sm font-medium text-red-800">Risque de départ élevé</div>
                          <div className="text-xs text-red-600">3 employés clés à surveiller</div>
                        </div>
                        <div className="p-3 border-l-4 border-yellow-400 bg-yellow-50">
                          <div className="text-sm font-medium text-yellow-800">Pic de recrutement prévu</div>
                          <div className="text-xs text-yellow-600">Q2 2024 - Équipe Tech</div>
                        </div>
                        <div className="p-3 border-l-4 border-green-400 bg-green-50">
                          <div className="text-sm font-medium text-green-800">Potentiel de promotion</div>
                          <div className="text-xs text-green-600">5 candidats internes identifiés</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">ROI Prouvé de l'IA RH</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-sm text-gray-600">Réduction du temps de recrutement</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-sm text-gray-600">Amélioration de la rétention</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Réduction des coûts RH</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Satisfaction des managers</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              Calculer votre ROI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAHR;
