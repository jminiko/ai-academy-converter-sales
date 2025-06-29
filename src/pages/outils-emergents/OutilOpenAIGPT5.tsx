
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Globe, Code, MessageSquare, Sparkles, Settings, Eye, Users, Target, Database, Bot } from "lucide-react";

const OutilOpenAIGPT5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">OpenAI GPT-5</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explorez les capacités révolutionnaires de GPT-5.
            Intelligence artificielle générale, raisonnement avancé et multimodalité.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🧠 Next-Gen AI Model
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Raisonnement Avancé</h3>
              <p className="text-sm text-gray-600">Logique complexe</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Multimodalité</h3>
              <p className="text-sm text-gray-600">Texte, image, audio, vidéo</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Code Generation</h3>
              <p className="text-sm text-gray-600">Programmation automatisée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Connaissance Mondiale</h3>
              <p className="text-sm text-gray-600">Base de données étendue</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Capacités GPT-5</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
                  Raisonnement et Logique Avancés
                </h3>
                <p className="text-gray-600 mb-4">
                  GPT-5 introduit des capacités de raisonnement révolutionnaires
                  avec une compréhension profonde des relations causales.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Raisonnement mathématique complexe</li>
                  <li>• Déduction logique multi-étapes</li>
                  <li>• Résolution de problèmes abstraits</li>
                  <li>• Planification stratégique avancée</li>
                  <li>• Analyse critique et évaluation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Advanced Reasoning</Badge>
                  <Badge variant="outline">Logic Processing</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-green-600 mr-2" />
                  Multimodalité Complète
                </h3>
                <p className="text-gray-600 mb-4">
                  Traitez simultanément texte, images, audio et vidéo
                  avec une compréhension contextuelle unifiée.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Compréhension vidéo en temps réel</li>
                  <li>• Analyse audio et reconnaissance vocale</li>
                  <li>• Génération d'images haute qualité</li>
                  <li>• Traduction multimodale</li>
                  <li>• Création de contenu cross-modal</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Multimodal AI</Badge>
                  <Badge variant="outline">Video Understanding</Badge>
                  <Badge variant="outline">Cross-modal Generation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-purple-600 mr-2" />
                  Génération de Code Expert
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des applications complètes avec une compréhension
                  approfondie des architectures et bonnes pratiques.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Développement full-stack automatisé</li>
                  <li>• Optimisations de performance</li>
                  <li>• Tests unitaires automatiques</li>
                  <li>• Documentation technique générée</li>
                  <li>• Refactoring intelligent</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Code Generation</Badge>
                  <Badge variant="outline">Full-stack Dev</Badge>
                  <Badge variant="outline">Automated Testing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-orange-600 mr-2" />
                  Agents Autonomes IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Déployez des agents IA capables d'actions autonomes
                  et de planification à long terme.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Agents web autonomes</li>
                  <li>• Planification multi-étapes</li>
                  <li>• Interaction avec APIs</li>
                  <li>• Gestion de workflows complexes</li>
                  <li>• Apprentissage continu</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Agents</Badge>
                  <Badge variant="outline">Workflow Automation</Badge>
                  <Badge variant="outline">Continuous Learning</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Applications GPT-5</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Assistants Conversationnels</h3>
                <p className="text-sm text-gray-600">Dialogue naturel avancé</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Analyse de Données</h3>
                <p className="text-sm text-gray-600">Insights automatisés</p>
              </Card>
              <Card className="p-6 text-center">
                <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Automatisation</h3>
                <p className="text-sm text-gray-600">Processus intelligents</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Formation IA</h3>
                <p className="text-sm text-gray-600">Tutorat personnalisé</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir de l'IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez GPT-5 et explorez les possibilités infinies d'une
              intelligence artificielle véritablement générale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Brain className="mr-2 h-5 w-5" />
                Explorer GPT-5
              </Button>
              <Button size="lg" variant="outline">
                <Sparkles className="mr-2 h-5 w-5" />
                Cas d'Usage
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilOpenAIGPT5;
