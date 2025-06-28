
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Zap, Globe, Code, Image, Mic, Video, Star, Rocket, Lightning } from "lucide-react";

const OutilOpenAIGPT5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">OpenAI GPT-5</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Découvrez GPT-5, la prochaine génération d'intelligence artificielle générative.
            Capacités multimodales avancées, raisonnement complexe et performance révolutionnaire.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white">AGI Ready</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Multimodal</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Raisonnement Avancé</Badge>
          </div>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Accéder à GPT-5 Preview
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="integration">Intégration</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Fonctionnalités Révolutionnaires</h2>
                <p className="text-lg text-gray-600">GPT-5 repousse les limites de l'IA générative</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                    <CardTitle>Raisonnement Quantique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Capacités de raisonnement complexe et résolution de problèmes multi-étapes
                    </p>
                    <Progress value={98} className="mb-2" />
                    <span className="text-sm text-gray-500">98% de précision logique</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Compréhension Contextuelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Mémoire à long terme et compréhension nuancée des contextes étendus
                    </p>
                    <Progress value={95} className="mb-2" />
                    <span className="text-sm text-gray-500">2M tokens de contexte</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Génération Multimodale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Création simultanée de texte, images, audio et vidéo haute qualité
                    </p>
                    <Progress value={92} className="mb-2" />
                    <span className="text-sm text-gray-500">4K résolution native</span>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Performance Exceptionnelle</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightning className="h-6 w-6 text-yellow-600" />
                      Vitesse de Traitement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Génération de texte</span>
                        <span className="font-semibold">500 tokens/sec</span>
                      </div>
                      <Progress value={95} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Analyse d'images</span>
                        <span className="font-semibold">50ms/image</span>
                      </div>
                      <Progress value={90} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Synthèse vocale</span>
                        <span className="font-semibold">Temps réel</span>
                      </div>
                      <Progress value={100} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-6 w-6 text-purple-600" />
                      Qualité de Sortie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Cohérence narrative</span>
                        <span className="font-semibold">99.2%</span>
                      </div>
                      <Progress value={99} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Précision factuelle</span>
                        <span className="font-semibold">97.8%</span>
                      </div>
                      <Progress value={98} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Créativité</span>
                        <span className="font-semibold">96.5%</span>
                      </div>
                      <Progress value={97} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Applications Révolutionnaires</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center p-6">
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Développement IA</h3>
                  <p className="text-gray-600">Code autonome et architecture intelligente</p>
                </Card>

                <Card className="text-center p-6">
                  <Video className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Création Vidéo</h3>
                  <p className="text-gray-600">Films et contenus générés par IA</p>
                </Card>

                <Card className="text-center p-6">
                  <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Assistant Vocal</h3>
                  <p className="text-gray-600">Conversations naturelles avancées</p>
                </Card>

                <Card className="text-center p-6">
                  <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Recherche Scientifique</h3>
                  <p className="text-gray-600">Découvertes et hypothèses IA</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Intégration Simplifiée</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>API REST Avancée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>curl -X POST https://api.openai.com/v1/chat/completions \</div>
                      <div className="ml-4">-H "Authorization: Bearer $OPENAI_API_KEY" \</div>
                      <div className="ml-4">-H "Content-Type: application/json" \</div>
                      <div className="ml-4">-d '{"model": "gpt-5", "messages": [...]}'</div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>SDK Multiplateformes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Python SDK optimisé</li>
                        <li>• JavaScript/TypeScript</li>
                        <li>• Java Enterprise</li>
                        <li>• .NET Core</li>
                        <li>• Go et Rust</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Déploiement Cloud</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Azure OpenAI Service</li>
                        <li>• AWS Bedrock</li>
                        <li>• Google Cloud AI</li>
                        <li>• Déploiement on-premise</li>
                        <li>• Edge computing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilOpenAIGPT5;
