
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Bot, Target, Users, Zap, Trophy, Joystick, Brain } from "lucide-react";

const FormationGameAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Game AI</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des intelligences artificielles pour les jeux vidéo
          </p>
          <Badge variant="secondary" className="bg-indigo-500/30 text-white px-4 py-2 text-lg mb-6">
            🎮 Game Development + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">NPCs Intelligents</h3>
              <p className="text-sm text-gray-600">Comportements adaptatifs</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Stratégie Adaptative</h3>
              <p className="text-sm text-gray-600">IA tactique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Matchmaking IA</h3>
              <p className="text-sm text-gray-600">Équilibrage intelligent</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Agents Champions</h3>
              <p className="text-sm text-gray-600">RL pour jeux</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Game AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Gamepad2 className="h-6 w-6 text-purple-600 mr-2" />
                  IA Comportementale
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des NPCs avec des comportements réalistes et
                  adaptatifs pour des expériences de jeu immersives.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Finite State Machines (FSM)</li>
                  <li>• Behavior Trees pour NPCs</li>
                  <li>• Goal-Oriented Action Planning</li>
                  <li>• Emotional AI et personnalité</li>
                  <li>• Learning from player behavior</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Behavior Trees</Badge>
                  <Badge variant="outline">FSM</Badge>
                  <Badge variant="outline">Emotional AI</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-indigo-600 mr-2" />
                  IA Stratégique
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes d'IA capables de planifier des stratégies
                  complexes pour les jeux de stratégie et tactique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Minimax et Alpha-Beta pruning</li>
                  <li>• Monte Carlo Tree Search (MCTS)</li>
                  <li>• Real-time strategy AI</li>
                  <li>• Pathfinding avancé (A*, D*)</li>
                  <li>• Multi-agent coordination</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MCTS</Badge>
                  <Badge variant="outline">Minimax</Badge>
                  <Badge variant="outline">Pathfinding</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-pink-600 mr-2" />
                  Apprentissage par Renforcement
                </h3>
                <p className="text-gray-600 mb-4">
                  Entraînez des agents IA qui apprennent à jouer et s'améliorent
                  continuellement par l'expérience.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Deep Q-Networks (DQN) pour jeux</li>
                  <li>• Policy Gradient methods</li>
                  <li>• Self-play et competitive learning</li>
                  <li>• Multi-agent reinforcement learning</li>
                  <li>• Curriculum learning pour jeux</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">DQN</Badge>
                  <Badge variant="outline">Self-play</Badge>
                  <Badge variant="outline">MARL</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Joystick className="h-6 w-6 text-orange-600 mr-2" />
                  Applications Pratiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Implémentez des systèmes d'IA pour différents genres de jeux
                  et plateformes de développement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Unity ML-Agents framework</li>
                  <li>• Unreal Engine AI systems</li>
                  <li>• Procedural content generation</li>
                  <li>• Player modeling et analytics</li>
                  <li>• Dynamic difficulty adjustment</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Unity ML-Agents</Badge>
                  <Badge variant="outline">Procedural Generation</Badge>
                  <Badge variant="outline">Dynamic Difficulty</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'IA Ludique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'intelligence artificielle révolutionne le game design en créant
              des expériences plus immersives, challengeantes et personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Formation Game AI
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Ludiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationGameAI;
