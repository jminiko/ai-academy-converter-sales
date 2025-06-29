
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Brain, Users, Zap, Target, Eye, Settings, Monitor, Code, Sparkles, Bot, Trophy } from "lucide-react";

const FormationIAGameDev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Game Development</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des jeux vidéo intelligents avec l'IA.
            NPCs réalistes, génération procédurale et gameplay adaptatif.
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🎮 AI Game Innovation
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">NPCs Intelligents</h3>
              <p className="text-sm text-gray-600">Comportements réalistes</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Procédurale</h3>
              <p className="text-sm text-gray-600">Mondes infinis IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gameplay Adaptatif</h3>
              <p className="text-sm text-gray-600">Difficulté dynamique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">IA Compétitive</h3>
              <p className="text-sm text-gray-600">Adversaires intelligents</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules IA Game Development</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-purple-600 mr-2" />
                  NPCs et Agents Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des personnages non-joueurs avec des comportements
                  complexes et réalistes utilisant l'apprentissage automatique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Systèmes de comportement IA</li>
                  <li>• Machine Learning pour NPCs</li>
                  <li>• Pathfinding intelligent</li>
                  <li>• Prise de décision contextuelle</li>
                  <li>• Émotions et personnalités IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Behavior Trees</Badge>
                  <Badge variant="outline">ML Agents</Badge>
                  <Badge variant="outline">Pathfinding</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
                  Génération Procédurale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des mondes, niveaux et contenus uniques automatiquement
                  avec des algorithmes génératifs avancés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Génération de terrains IA</li>
                  <li>• Création automatique de niveaux</li>
                  <li>• GANs pour assets graphiques</li>
                  <li>• Narratives génératives</li>
                  <li>• Musique et sons procéduraux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Procedural Generation</Badge>
                  <Badge variant="outline">GANs</Badge>
                  <Badge variant="outline">Level Design</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Gameplay Adaptatif et Personnalisation
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes qui s'adaptent au style de jeu
                  et aux préférences de chaque joueur en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Dynamic Difficulty Adjustment</li>
                  <li>• Analyse du comportement joueur</li>
                  <li>• Recommandations personnalisées</li>
                  <li>• Équilibrage automatique</li>
                  <li>• Métriques et analytics IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DDA</Badge>
                  <Badge variant="outline">Player Analytics</Badge>
                  <Badge variant="outline">Personalization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Trophy className="h-6 w-6 text-orange-600 mr-2" />
                  IA Compétitive et Esports
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des adversaires IA de niveau professionnel
                  pour l'entraînement et la compétition esportive.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reinforcement Learning avancé</li>
                  <li>• Bots de niveau professionnel</li>
                  <li>• Stratégies multi-agents</li>
                  <li>• Adaptation en temps réel</li>
                  <li>• Entraînement contre IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Reinforcement Learning</Badge>
                  <Badge variant="outline">Multi-Agent</Badge>
                  <Badge variant="outline">Esports AI</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies Game AI</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Unity ML-Agents</h3>
                <p className="text-sm text-gray-600">Framework IA Unity</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Unreal Engine AI</h3>
                <p className="text-sm text-gray-600">Outils IA Unreal</p>
              </Card>
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">TensorFlow Gaming</h3>
                <p className="text-sm text-gray-600">ML pour jeux</p>
              </Card>
              <Card className="p-6 text-center">
                <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">OpenAI Gym</h3>
                <p className="text-sm text-gray-600">Environnements RL</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Créez l'Avenir du Gaming</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez l'IA appliquée au développement de jeux vidéo et créez
              des expériences de jeu révolutionnaires et immersives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Formation Game AI
              </Button>
              <Button size="lg" variant="outline">
                <Bot className="mr-2 h-5 w-5" />
                Projets Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAGameDev;
