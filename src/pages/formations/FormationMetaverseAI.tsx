
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, VirtualReality, Users, Sparkles, Zap, Eye, Headphones, Camera } from "lucide-react";

const FormationMetaverseAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Metaverse & IA</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Créez des expériences immersives intelligentes dans le métavers
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            🌐 Metaverse + AI
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <VirtualReality className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réalité Virtuelle IA</h3>
              <p className="text-sm text-gray-600">Mondes intelligents</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Avatars Intelligents</h3>
              <p className="text-sm text-gray-600">NPCs adaptatifs</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Procédurale</h3>
              <p className="text-sm text-gray-600">Contenus automatiques</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vision Spatiale</h3>
              <p className="text-sm text-gray-600">Reconnaissance 3D</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Metaverse & IA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-cyan-600 mr-2" />
                  Architecture Metaverse
                </h3>
                <p className="text-gray-600 mb-4">
                  Concevez des environnements virtuels immersifs intégrant
                  l'IA pour des expériences utilisateur révolutionnaires.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Moteurs 3D temps réel (Unity, Unreal)</li>
                  <li>• Réseaux distribués pour metaverse</li>
                  <li>• Blockchain et économies virtuelles</li>
                  <li>• Interopérabilité des mondes virtuels</li>
                  <li>• Infrastructure cloud pour VR/AR</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Unity</Badge>
                  <Badge variant="outline">Blockchain</Badge>
                  <Badge variant="outline">Cloud VR</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Avatars et NPCs Intelligents
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des avatars et personnages non-joueurs
                  dotés d'intelligence artificielle conversationnelle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• IA conversationnelle avancée</li>
                  <li>• Animation procédurale et expressions</li>
                  <li>• Reconnaissance émotionnelle</li>
                  <li>• Personnalité et apprentissage adaptatif</li>
                  <li>• Interaction multimodale (voix, gestes)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Conversational AI</Badge>
                  <Badge variant="outline">Emotion Recognition</Badge>
                  <Badge variant="outline">Procedural Animation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
                  Génération de Contenu IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des systèmes de génération automatique de contenus
                  3D, textures et environnements pour le métavers.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Génération procédurale de terrains</li>
                  <li>• IA générative pour textures 3D</li>
                  <li>• Création automatique d'objets 3D</li>
                  <li>• Narration interactive et dynamique</li>
                  <li>• Adaptation de contenu en temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Procedural Generation</Badge>
                  <Badge variant="outline">3D Content AI</Badge>
                  <Badge variant="outline">Dynamic Storytelling</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Camera className="h-6 w-6 text-purple-600 mr-2" />
                  Expériences Immersives
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des expériences VR/AR intelligentes avec
                  reconnaissance spatiale et interaction naturelle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Computer vision pour VR/AR</li>
                  <li>• Tracking et mapping spatial</li>
                  <li>• Interaction gestuelle naturelle</li>
                  <li>• Audio spatial et synthèse vocale</li>
                  <li>• Optimisation performance temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Spatial Tracking</Badge>
                  <Badge variant="outline">Natural Interaction</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Univers Connecté</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Le métavers enrichi par l'IA crée des expériences immersives
              personnalisées qui redéfinissent notre rapport au numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Globe className="mr-2 h-5 w-5" />
                Formation Metaverse AI
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Immersifs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationMetaverseAI;
