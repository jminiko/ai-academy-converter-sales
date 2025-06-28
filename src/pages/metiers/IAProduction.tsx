
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Factory, Settings, Zap, Activity, BarChart3, Brain, AlertTriangle, Wrench, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Shield } from "lucide-react";

const IAProduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Factory className="h-16 w-16 text-white mb-6" />
              <h1 className="text-5xl font-bold text-white mb-6">IA pour Production Industrielle</h1>
              <p className="text-xl text-slate-100 mb-8">
                Révolutionnez votre production avec l'IA : maintenance prédictive, optimisation des processus 
                et qualité automatisée pour une industrie 4.0 performante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
                  Optimiser ma production
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-600">
                  Voir les performances
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Gains de Performance IA</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Réduction temps d'arrêt</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="bg-white/20" />
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Amélioration qualité</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="bg-white/20" />
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Optimisation énergie</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions IA Production */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions IA pour la Production</h2>
          
          <Tabs defaultValue="maintenance" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="qualite">Qualité</TabsTrigger>
              <TabsTrigger value="optimisation">Optimisation</TabsTrigger>
              <TabsTrigger value="planification">Planification</TabsTrigger>
            </TabsList>

            <TabsContent value="maintenance" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-6 w-6 text-slate-600" />
                      Maintenance Prédictive
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Anticipez les pannes avant qu'elles ne surviennent grâce à l'analyse prédictive 
                      des données de vos équipements industriels.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2">Capteurs IoT</Badge>
                      <Badge variant="secondary" className="mr-2">Analyse vibratoire</Badge>
                      <Badge variant="secondary" className="mr-2">Thermographie</Badge>
                      <Badge variant="secondary">Analyse acoustique</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-slate-600" />
                      Détection d'Anomalies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Système de détection automatique des anomalies en temps réel pour prévenir 
                      les défaillances critiques.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Indicateurs surveillés :</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Température et pression</li>
                        <li>• Vibrations et acoustique</li>
                        <li>• Consommation énergétique</li>
                        <li>• Performance des moteurs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Processus de Maintenance Intelligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                      <h4 className="font-semibold">Collecte données</h4>
                      <p className="text-sm text-gray-600">Capteurs temps réel</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                      <h4 className="font-semibold">Analyse IA</h4>
                      <p className="text-sm text-gray-600">Prédiction des pannes</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                      <h4 className="font-semibold">Alerte préventive</h4>
                      <p className="text-sm text-gray-600">Notification équipes</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                      <h4 className="font-semibold">Intervention ciblée</h4>
                      <p className="text-sm text-gray-600">Maintenance optimisée</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="qualite" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6 text-slate-600" />
                    Contrôle Qualité Automatisé
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    Système de contrôle qualité basé sur l'IA pour une inspection automatisée 
                    et une détection précise des défauts de production.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <Brain className="h-8 w-8 text-slate-600 mb-3" />
                      <h4 className="font-semibold mb-2">Vision par ordinateur</h4>
                      <p className="text-sm text-gray-600">Inspection visuelle automatisée</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <BarChart3 className="h-8 w-8 text-slate-600 mb-3" />
                      <h4 className="font-semibold mb-2">Analyse statistique</h4>
                      <p className="text-sm text-gray-600">Contrôle qualité prédictif</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Target className="h-8 w-8 text-slate-600 mb-3" />
                      <h4 className="font-semibold mb-2">Classification défauts</h4>
                      <p className="text-sm text-gray-600">Catégorisation automatique</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Résultats de performance :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Taux de détection défauts</span>
                        <div className="flex items-center gap-2">
                          <Progress value={98} className="w-24" />
                          <span className="text-sm">98%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Réduction faux positifs</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-24" />
                          <span className="text-sm">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Vitesse d'inspection</span>
                        <div className="flex items-center gap-2">
                          <Progress value={90} className="w-24" />
                          <span className="text-sm">10x plus rapide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="optimisation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-slate-600" />
                    Optimisation Énergétique IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Réduisez votre consommation énergétique et optimisez les performances 
                    avec des algorithmes d'IA adaptatifs.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Optimisation Automatique</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Réglage paramètres machines</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Gestion charge électrique</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Optimisation refroidissement</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Gains Mesurés</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-slate-600" />
                          <span className="text-sm">-35% consommation énergie</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-slate-600" />
                          <span className="text-sm">+25% efficacité production</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-slate-600" />
                          <span className="text-sm">ROI de 280% en 18 mois</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planification" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-slate-600" />
                    Planification Intelligente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Optimisez votre planification de production avec des algorithmes d'IA 
                    qui s'adaptent en temps réel aux contraintes et opportunités.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Fonctionnalités Avancées</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Prévision demande</span>
                          <span className="font-semibold text-green-600">+45% précision</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Optimisation stocks</span>
                          <span className="font-semibold text-blue-600">-30% coûts</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Allocation ressources</span>
                          <span className="font-semibold text-purple-600">+60% efficacité</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Gestion urgences</span>
                          <span className="font-semibold text-orange-600">Temps réel</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Planification Adaptative</h4>
                      <div className="space-y-3">
                        <div className="p-3 border-l-4 border-green-400 bg-green-50">
                          <div className="text-sm font-medium text-green-800">Capacité disponible</div>
                          <div className="text-xs text-green-600">Optimisation automatique</div>
                        </div>
                        <div className="p-3 border-l-4 border-yellow-400 bg-yellow-50">
                          <div className="text-sm font-medium text-yellow-800">Pic de demande</div>
                          <div className="text-xs text-yellow-600">Ajustement ressources</div>
                        </div>
                        <div className="p-3 border-l-4 border-blue-400 bg-blue-50">
                          <div className="text-sm font-medium text-blue-800">Maintenance programmée</div>
                          <div className="text-xs text-blue-600">Réorganisation automatique</div>
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
            <h2 className="text-3xl font-bold mb-8">ROI de l'IA en Production</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow">
                <Clock className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Réduction temps d'arrêt</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Amélioration qualité</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <TrendingUp className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-600 mb-2">65%</div>
                <div className="text-sm text-gray-600">Optimisation énergie</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Wrench className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">Réduction coûts maintenance</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-slate-600 text-white hover:bg-slate-700">
              Calculer votre ROI Production
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAProduction;
