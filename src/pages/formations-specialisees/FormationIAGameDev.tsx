
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Brain, Zap, Users, Target, Bot, Cpu, Trophy } from "lucide-react";

const FormationIAGameDev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Game Development</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'intelligence artificielle dans le développement de jeux vidéo.
            IA comportementale, génération procédurale et gameplay adaptatif.
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            🎮 Gaming AI Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Bot className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">IA Comportementale</h3>
              <p className="text-sm text-gray-600">NPCs intelligents et réactifs</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Procédurale</h3>
              <p className="text-sm text-gray-600">Mondes et contenus automatiques</p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">Apprentissage adaptatif</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gameplay Analytics</h3>
              <p className="text-sm text-gray-600">Analyse du comportement joueur</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Programme de Formation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-purple-600 mr-2" />
                  Module 1: IA Comportementale
                </h3>
                <p className="text-gray-600 mb-4">
                  Développement d'intelligences artificielles pour personnages non-joueurs (NPCs)
                  avec des comportements complexes et adaptatifs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Finite State Machines (FSM)</li>
                  <li>• Behavior Trees avancés</li>
                  <li>• Goal-Oriented Action Planning</li>
                  <li>• Utility-Based AI</li>
                  <li>• Pathfinding intelligent (A*, Flow Fields)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">FSM</Badge>
                  <Badge variant="outline">Behavior Trees</Badge>
                  <Badge variant="outline">GOAP</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                  Module 2: Génération Procédurale
                </h3>
                <p className="text-gray-600 mb-4">
                  Techniques avancées pour créer automatiquement du contenu de jeu
                  avec des algorithmes intelligents et des réseaux de neurones.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Génération de terrains et niveaux</li>
                  <li>• Création d'objets et items</li>
                  <li>• Narrative procédurale</li>
                  <li>• Réseaux adversaires génératifs (GANs)</li>
                  <li>• Wave Function Collapse</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PCG</Badge>
                  <Badge variant="outline">GANs</Badge>
                  <Badge variant="outline">WFC</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  Module 3: Machine Learning Gaming
                </h3>
                <p className="text-gray-600 mb-4">
                  Application du machine learning pour créer des expériences de jeu
                  personnalisées et adaptatives basées sur le comportement des joueurs.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reinforcement Learning pour NPCs</li>
                  <li>• Dynamic Difficulty Adjustment</li>
                  <li>• Player Modeling et Profiling</li>
                  <li>• Recommendation Systems</li>
                  <li>• Apprentissage par imitation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">RL</Badge>
                  <Badge variant="outline">DDA</Badge>
                  <Badge variant="outline">Player Analytics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  Module 4: Analytics & Optimisation
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisation de l'IA pour analyser le comportement des joueurs
                  et optimiser l'expérience de jeu en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Telemetry et Data Mining</li>
                  <li>• A/B Testing automatisé</li>
                  <li>• Churn Prediction</li>
                  <li>• Monetization Optimization</li>
                  <li>• Real-time Balancing</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">A/B Testing</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Projets Pratiques</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">FPS IA Enemy</h3>
                <p className="text-sm text-gray-600">Création d'ennemis intelligents pour jeu de tir</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">RPG Companion</h3>
                <p className="text-sm text-gray-600">Compagnon IA adaptatif pour RPG</p>
              </Card>
              <Card className="p-6 text-center">
                <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Racing AI</h3>
                <p className="text-sm text-gray-600">Pilotes IA pour jeu de course</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Devenez un Expert en Gaming AI</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les technologies IA les plus avancées du gaming et créez
              des expériences de jeu révolutionnaires qui marquent les joueurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Gamepad2 className="mr-2 h-5 w-5" />
                S'inscrire à la Formation
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Programme Détaillé
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
