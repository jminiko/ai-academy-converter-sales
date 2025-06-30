
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Cpu, Zap, Settings, Cog, Target, Move, Shield } from "lucide-react";

const FormationRobotics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Robotique IA</h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Créez des robots intelligents avec l'intelligence artificielle
          </p>
          <Badge variant="secondary" className="bg-slate-500/30 text-white px-4 py-2 text-lg mb-6">
            🤖 Robotique Intelligente
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cpu className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contrôle Intelligent</h3>
              <p className="text-sm text-gray-600">Algorithmes adaptatifs</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Move className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Navigation Autonome</h3>
              <p className="text-sm text-gray-600">SLAM et pathfinding</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sécurité Robotique</h3>
              <p className="text-sm text-gray-600">Interaction humain-robot</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Cog className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Apprentissage Robot</h3>
              <p className="text-sm text-gray-600">Adaptation continue</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Robotique IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-gray-600 mr-2" />
                  Fondamentaux Robotique
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les principes fondamentaux de la robotique moderne
                  intégrée avec l'intelligence artificielle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Cinématique et dynamique robotique</li>
                  <li>• Capteurs et actionneurs intelligents</li>
                  <li>• ROS (Robot Operating System)</li>
                  <li>• Architecture logicielle robotique</li>
                  <li>• Simulation et modélisation 3D</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ROS</Badge>
                  <Badge variant="outline">Kinematics</Badge>
                  <Badge variant="outline">Sensors</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Move className="h-6 w-6 text-blue-600 mr-2" />
                  Navigation et Cartographie
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les algorithmes de navigation autonome et de
                  cartographie simultanée pour robots mobiles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• SLAM (Simultaneous Localization and Mapping)</li>
                  <li>• Path planning et obstacle avoidance</li>
                  <li>• Visual odometry et GPS fusion</li>
                  <li>• Particle filters et Kalman filters</li>
                  <li>• Multi-robot coordination</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">SLAM</Badge>
                  <Badge variant="outline">Path Planning</Badge>
                  <Badge variant="outline">Localization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cog className="h-6 w-6 text-orange-600 mr-2" />
                  Apprentissage Robotique
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les techniques d'apprentissage par renforcement
                  et d'adaptation pour robots autonomes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reinforcement learning pour robots</li>
                  <li>• Imitation learning et démonstration</li>
                  <li>• Transfer learning en robotique</li>
                  <li>• Adaptive control systems</li>
                  <li>• Learning from human feedback</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Reinforcement Learning</Badge>
                  <Badge variant="outline">Imitation Learning</Badge>
                  <Badge variant="outline">Adaptive Control</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Applications Spécialisées
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des robots spécialisés pour l'industrie,
                  la médecine, l'agriculture et les services.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Robots industriels collaboratifs (cobots)</li>
                  <li>• Robots médicaux et chirurgicaux</li>
                  <li>• Drones autonomes et aériens</li>
                  <li>• Robots de service et domestiques</li>
                  <li>• Essaims robotiques et swarm intelligence</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cobots</Badge>
                  <Badge variant="outline">Medical Robotics</Badge>
                  <Badge variant="outline">Swarm Intelligence</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Avenir de la Robotique</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              L'intelligence artificielle transforme la robotique en créant
              des machines capables d'apprendre, s'adapter et collaborer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-600 hover:bg-gray-700">
                <Bot className="mr-2 h-5 w-5" />
                Formation Robotique
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Robotiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationRobotics;
