
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Image, Sparkles, Wand2, Eye, Layers, Zap, Monitor, Users, Settings, Globe, Heart } from "lucide-react";

const OutilMidjourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Palette className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Midjourney AI Art</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Créez des œuvres d'art exceptionnelles avec l'IA générative.
            Le leader de la génération d'images par intelligence artificielle.
          </p>
          <Badge variant="secondary" className="bg-pink-500/30 text-white px-4 py-2 text-lg mb-6">
            🎨 AI Art Generator
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Image className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Images</h3>
              <p className="text-sm text-gray-600">Art IA haute qualité</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Wand2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Styles Artistiques</h3>
              <p className="text-sm text-gray-600">Diversité créative</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Prompts Avancés</h3>
              <p className="text-sm text-gray-600">Contrôle créatif</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Qualité Premium</h3>
              <p className="text-sm text-gray-600">Résolution 4K+</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités Midjourney</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Image className="h-6 w-6 text-blue-600 mr-2" />
                  Génération d'Images IA
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des images époustouflantes à partir de simples descriptions
                  textuelles avec la technologie IA la plus avancée.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Text-to-image generation</li>
                  <li>• Styles artistiques variés</li>
                  <li>• Résolutions haute définition</li>
                  <li>• Paramètres de qualité ajustables</li>
                  <li>• Rendu photoréaliste</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Text-to-Image</Badge>
                  <Badge variant="outline">High Resolution</Badge>
                  <Badge variant="outline">Photorealistic</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Wand2 className="h-6 w-6 text-green-600 mr-2" />
                  Contrôle Artistique Avancé
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez parfaitement le style et l'esthétique de vos créations
                  avec des paramètres de contrôle sophistiqués.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Style parameters (--style)</li>
                  <li>• Aspect ratio control</li>
                  <li>• Chaos et stylize settings</li>
                  <li>• Seed consistency</li>
                  <li>• Version model selection</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Style Control</Badge>
                  <Badge variant="outline">Parameters</Badge>
                  <Badge variant="outline">Consistency</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-purple-600 mr-2" />
                  Prompt Engineering Masterclass
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez l'art du prompt engineering pour obtenir exactement
                  les résultats visuels que vous imaginez.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prompt crafting techniques</li>
                  <li>• Negative prompts usage</li>
                  <li>• Weight control (::)</li>
                  <li>• Multi-prompts blending</li>
                  <li>• Reference image integration</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Prompt Engineering</Badge>
                  <Badge variant="outline">Weight Control</Badge>
                  <Badge variant="outline">Blending</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Layers className="h-6 w-6 text-orange-600 mr-2" />
                  Workflow Créatif Professionnel
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégrez Midjourney dans votre processus créatif professionnel
                  pour maximiser votre productivité artistique.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Batch processing optimisé</li>
                  <li>• Image variations et remix</li>
                  <li>• Upscaling et enhancement</li>
                  <li>• Export formats multiples</li>
                  <li>• Collaboration team features</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Batch Processing</Badge>
                  <Badge variant="outline">Upscaling</Badge>
                  <Badge variant="outline">Team Collaboration</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Applications Midjourney</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Design Graphique</h3>
                <p className="text-sm text-gray-600">Créations professionnelles</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Marketing Visual</h3>
                <p className="text-sm text-gray-600">Campagnes impactantes</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Concept Art</h3>
                <p className="text-sm text-gray-600">Pré-production créative</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Art Personnel</h3>
                <p className="text-sm text-gray-600">Expression artistique</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Libérez votre Créativité</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Exploitez la puissance de Midjourney pour créer des œuvres d'art
              extraordinaires et révolutionner votre processus créatif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Palette className="mr-2 h-5 w-5" />
                Commencer avec Midjourney
              </Button>
              <Button size="lg" variant="outline">
                <Sparkles className="mr-2 h-5 w-5" />
                Guide Prompts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilMidjourney;
