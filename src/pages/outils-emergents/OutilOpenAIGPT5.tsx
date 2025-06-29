
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, MessageSquare, Code, Image, Music, Video, Cpu } from "lucide-react";

const OutilOpenAIGPT5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">OpenAI GPT-5</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            La nouvelle génération d'intelligence artificielle générative d'OpenAI.
            Capacités multimodales avancées et raisonnement de niveau PhD.
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            🧠 Next-Gen AGI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <MessageSquare className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Conversation Avancée</h3>
              <p className="text-sm text-gray-600">Dialogue naturel et contextuel</p>
            </Card>
            <Card className="text-center p-6">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération de Code</h3>
              <p className="text-sm text-gray-600">Programmation assistée par IA</p>
            </Card>
            <Card className="text-center p-6">
              <Image className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Création Visuelle</h3>
              <p className="text-sm text-gray-600">Génération d'images haute qualité</p>
            </Card>
            <Card className="text-center p-6">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Raisonnement Complexe</h3>
              <p className="text-sm text-gray-600">Analyse et déduction avancées</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Capacités Révolutionnaires GPT-5</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                  Intelligence Multimodale
                </h3>
                <p className="text-gray-600 mb-4">
                  GPT-5 intègre nativement texte, image, audio et vidéo
                  pour une compréhension holistique du monde.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Compréhension d'images complexes</li>
                  <li>• Analyse vidéo en temps réel</li>
                  <li>• Génération audio synchronisée</li>
                  <li>• Fusion multimodale avancée</li>
                  <li>• Raisonnement spatial 3D</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Multimodal</Badge>
                  <Badge variant="outline">Vision</Badge>
                  <Badge variant="outline">Audio</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 text-blue-600 mr-2" />
                  Raisonnement de Niveau PhD
                </h3>
                <p className="text-gray-600 mb-4">
                  Capacités de raisonnement scientifique et mathématique
                  équivalentes à un doctorat dans de nombreux domaines.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Résolution de problèmes complexes</li>
                  <li>• Preuves mathématiques formelles</li>
                  <li>• Recherche scientifique assistée</li>
                  <li>• Analyse critique avancée</li>
                  <li>• Synthèse interdisciplinaire</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PhD-Level</Badge>
                  <Badge variant="outline">Reasoning</Badge>
                  <Badge variant="outline">Research</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-green-600 mr-2" />
                  Génération de Code Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Création d'applications complètes, debugging automatique
                  et optimisation de performance en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Applications full-stack complètes</li>
                  <li>• Architecture logicielle optimale</li>
                  <li>• Debugging intelligent</li>
                  <li>• Tests automatisés</li>
                  <li>• Refactoring sémantique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Code Generation</Badge>
                  <Badge variant="outline">Debugging</Badge>
                  <Badge variant="outline">Testing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Agents Autonomes
                </h3>
                <p className="text-gray-600 mb-4">
                  Création d'agents IA capables d'actions autonomes
                  complexes et de planification à long terme.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Planification stratégique</li>
                  <li>• Exécution de tâches complexes</li>
                  <li>• Apprentissage continu</li>
                  <li>• Collaboration inter-agents</li>
                  <li>• Adaptation environnementale</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Agents</Badge>
                  <Badge variant="outline">Planning</Badge>
                  <Badge variant="outline">Learning</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Applications Professionnelles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Assistant Exécutif IA</h3>
                <p className="text-sm text-gray-600">Support décisionnel C-level</p>
              </Card>
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Développement IA</h3>
                <p className="text-sm text-gray-600">Création d'apps complètes</p>
              </Card>
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Recherche & Innovation</h3>
                <p className="text-sm text-gray-600">Découvertes scientifiques</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir de l'IA est Arrivé</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              GPT-5 représente un bond quantique vers l'intelligence artificielle générale.
              Découvrez ses capacités révolutionnaires dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Brain className="mr-2 h-5 w-5" />
                Essayer GPT-5
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="mr-2 h-5 w-5" />
                Documentation
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
