
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Users, BarChart, Zap, Eye, MessageSquare, Globe, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";

const IAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-6">IA pour Marketing</h1>
            <p className="text-xl text-orange-100 mb-8">
              Révolutionnez votre marketing avec l'intelligence artificielle. 
              Créez des campagnes ultra-personnalisées, optimisez vos performances et maximisez votre ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Transformer mon marketing
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                Voir les cas clients
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques impressionnantes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">+250%</div>
              <div className="text-gray-600">ROI campagnes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">-70%</div>
              <div className="text-gray-600">Coût d'acquisition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">+180%</div>
              <div className="text-gray-600">Taux d'engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Précision ciblage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Marketing IA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions Marketing IA Complètes</h2>
          
          <Tabs defaultValue="ciblage" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="ciblage">Ciblage</TabsTrigger>
              <TabsTrigger value="contenu">Contenu</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="ciblage" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-orange-600" />
                      Ciblage Hyper-Précis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Notre IA analyse des milliers de points de données pour identifier vos prospects idéaux 
                      avec une précision chirurgicale.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Analyse comportementale avancée :</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Parcours de navigation détaillé</li>
                        <li>• Interactions cross-canal</li>
                        <li>• Prédiction d'intention d'achat</li>
                        <li>• Segmentation dynamique temps réel</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-orange-600" />
                      Personas IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Création automatique de personas détaillés basés sur l'analyse de vos données clients 
                      et des tendances du marché.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Démographie avancée</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Psychographie détaillée</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-sm">Patterns comportementaux</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Exemples de Ciblage IA Réussis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border-l-4 border-orange-400 bg-orange-50">
                      <h4 className="font-semibold mb-2">E-commerce Mode</h4>
                      <p className="text-sm text-gray-600 mb-2">+340% ROI sur campagnes Facebook</p>
                      <Badge variant="secondary">Lookalike IA</Badge>
                    </div>
                    <div className="p-4 border-l-4 border-orange-400 bg-orange-50">
                      <h4 className="font-semibold mb-2">SaaS B2B</h4>
                      <p className="text-sm text-gray-600 mb-2">-60% coût par lead qualifié</p>
                      <Badge variant="secondary">Intent Data</Badge>
                    </div>
                    <div className="p-4 border-l-4 border-orange-400 bg-orange-50">
                      <h4 className="font-semibold mb-2">Immobilier</h4>
                      <p className="text-sm text-gray-600 mb-2">+180% taux de conversion</p>
                      <Badge variant="secondary">Géolocalisation IA</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contenu" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-orange-600" />
                    Création de Contenu IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    Générez du contenu marketing performant à grande échelle avec notre IA spécialisée 
                    dans la création de contenu persuasif et engageant.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Types de Contenu Générés</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
                          <MessageSquare className="h-5 w-5 text-orange-600" />
                          <span>Posts réseaux sociaux</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
                          <Globe className="h-5 w-5 text-orange-600" />
                          <span>Articles de blog SEO</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
                          <Eye className="h-5 w-5 text-orange-600" />
                          <span>Publicités optimisées</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
                          <Zap className="h-5 w-5 text-orange-600" />
                          <span>Emails personnalisés</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Optimisation Continue</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">A/B testing automatique</span>
                          <ArrowRight className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Adaptation ton & style</span>
                          <ArrowRight className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Optimisation SEO</span>
                          <ArrowRight className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Performance analytics</span>
                          <ArrowRight className="h-4 w-4 text-orange-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Exemple de Performance :</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">10x</div>
                        <div className="text-sm text-gray-600">Plus rapide</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">+75%</div>
                        <div className="text-sm text-gray-600">Engagement</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">-80%</div>
                        <div className="text-sm text-gray-600">Coût création</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Marketing Automation IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    Automatisez l'intégralité de vos parcours marketing avec des workflows intelligents 
                    qui s'adaptent en temps réel au comportement de vos prospects.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Workflows Intelligents</h4>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                          <span>Lead Scoring Dynamique</span>
                          <Badge variant="outline">Auto</Badge>
                        </div>
                        <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                          <span>Nurturing Personnalisé</span>
                          <Badge variant="outline">IA</Badge>
                        </div>
                        <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                          <span>Retargeting Intelligent</span>
                          <Badge variant="outline">ML</Badge>
                        </div>
                        <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                          <span>Attribution Multi-touch</span>
                          <Badge variant="outline">Prédictif</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Canaux Intégrés</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 text-center bg-orange-50 rounded">
                          <MessageSquare className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">Email</div>
                        </div>
                        <div className="p-3 text-center bg-orange-50 rounded">
                          <Users className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">Social</div>
                        </div>
                        <div className="p-3 text-center bg-orange-50 rounded">
                          <Globe className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">Web</div>
                        </div>
                        <div className="p-3 text-center bg-orange-50 rounded">
                          <Eye className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">Display</div>
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
                    <BarChart className="h-6 w-6 text-orange-600" />
                    Analytics Marketing IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    Dashboards intelligents et analyses prédictives pour optimiser en continu 
                    vos performances marketing et maximiser votre ROI.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Attribution IA</h4>
                      <p className="text-sm text-gray-600">Suivi précis de chaque touchpoint</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <Target className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Prédictions</h4>
                      <p className="text-sm text-gray-600">Forecast des performances futures</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <Lightbulb className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Insights</h4>
                      <p className="text-sm text-gray-600">Recommandations automatiques</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Dashboard Temps Réel</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">ROI Campagnes</span>
                          <span className="text-lg font-bold text-green-600">+285%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Coût par acquisition</span>
                          <span className="text-lg font-bold text-blue-600">-47€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Lifetime Value</span>
                          <span className="text-lg font-bold text-purple-600">+1,240€</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Taux conversion</span>
                          <span className="text-lg font-bold text-orange-600">12.4%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Engagement rate</span>
                          <span className="text-lg font-bold text-cyan-600">8.9%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Reach organique</span>
                          <span className="text-lg font-bold text-indigo-600">+185%</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à révolutionner votre marketing ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les 2000+ marketers qui ont déjà multiplié leurs performances avec notre IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Démo personnalisée gratuite
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              Télécharger le guide ROI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAMarketing;
