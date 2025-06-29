
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Brain, Zap, Users, Target, Trophy, Cpu, Joystick, Monitor, Code, Bot, Star, Sparkles, Rocket } from "lucide-react";

const FormationIAGameDev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Game Dev</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des jeux révolutionnaires avec l'intelligence artificielle.
            NPCs intelligents, génération procédurale et gameplay adaptatif.
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            🎮 Game AI Master
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">NPCs Intelligents</h3>
              <p className="text-sm text-gray-600">Comportements IA réalistes</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Procédurale</h3>
              <p className="text-sm text-gray-600">Mondes créés par IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gameplay Adaptatif</h3>
              <p className="text-sm text-gray-600">Difficulté dynamique IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Player Analytics</h3>
              <p className="text-sm text-gray-600">Analyse comportementale IA</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Game AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-blue-600 mr-2" />
                  Intelligence Artificielle NPCs
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des personnages non-joueurs avec des comportements
                  réalistes, adaptatifs et émergents grâce à l'IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Behavior Trees avancés</li>
                  <li>• State Machines intelligentes</li>
                  <li>• Pathfinding A* optimisé</li>
                  <li>• Decision making ML</li>
                  <li>• Dialogue génératif IA</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Behavior Trees</Badge>
                  <Badge variant="outline">ML Decision</Badge>
                  <Badge variant="outline">NLP Dialogue</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-green-600 mr-2" />
                  Génération Procédurale IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de génération automatique de contenu :
                  levels, textures, quêtes et narration par IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Level design génératif</li>
                  <li>• Texture synthesis IA</li>
                  <li>• Quest generation dynamique</li>
                  <li>• Procedural animation</li>
                  <li>• Audio génératif</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Procedural Gen</Badge>
                  <Badge variant="outline">GANs</Badge>
                  <Badge variant="outline">Auto Generation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-purple-600 mr-2" />
                  Gameplay Adaptatif
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes de difficulté dynamique qui
                  s'adaptent en temps réel aux compétences du joueur.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Dynamic Difficulty Adjustment</li>
                  <li>• Player skill assessment</li>
                  <li>• Adaptive content delivery</li>
                  <li>• Flow state optimization</li>
                  <li>• Reinforcement Learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DDA</Badge>
                  <Badge variant="outline">RL</Badge>
                  <Badge variant="outline">Player Modeling</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-orange-600 mr-2" />
                  Game Analytics IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysez le comportement des joueurs avec l'IA pour
                  optimiser l'engagement et la rétention.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Player behavior analytics</li>
                  <li>• Churn prediction ML</li>
                  <li>• A/B testing automatisé</li>
                  <li>• Monetization optimization</li>
                  <li>• Social network analysis</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">Churn Prediction</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies Game AI</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Unity ML-Agents</h3>
                <p className="text-sm text-gray-600">Framework IA Unity</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Unreal Engine AI</h3>
                <p className="text-sm text-gray-600">Blueprints IA avancés</p>
              </Card>
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">TensorFlow Gaming</h3>
                <p className="text-sm text-gray-600">Deep RL pour jeux</p>
              </Card>
              <Card className="p-6 text-center">
                <Rocket className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">OpenAI Gym</h3>
                <p className="text-sm text-gray-600">Environnements d'entraînement</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Créez les Jeux du Futur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez la révolution du game development IA et créez des expériences
              de jeu uniques, immersives et intelligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Commencer la Formation
              </Button>
              <Button size="lg" variant="outline">
                <Trophy className="mr-2 h-5 w-5" />
                Projet Final
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
