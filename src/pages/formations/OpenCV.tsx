
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, Scan, Image, Video, Zap, Settings, Target } from "lucide-react";

const OpenCV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation OpenCV</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez OpenCV pour la vision par ordinateur et le traitement d'images
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            👁️ Computer Vision
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Image className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Traitement d'Images</h3>
              <p className="text-sm text-gray-600">Manipulation et filtrage</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Video className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Vidéo</h3>
              <p className="text-sm text-gray-600">Détection en temps réel</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Scan className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection Objets</h3>
              <p className="text-sm text-gray-600">Recognition patterns</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Caméra Integration</h3>
              <p className="text-sm text-gray-600">Capture et analyse</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation OpenCV</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Image className="h-6 w-6 text-emerald-600 mr-2" />
                  Traitement d'Images Avancé
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez les techniques fondamentales de traitement d'images
                  avec OpenCV pour manipuler et améliorer vos données visuelles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Filtrage et convolution</li>
                  <li>• Morphologie mathématique</li>
                  <li>• Détection de contours</li>
                  <li>• Transformation géométrique</li>
                  <li>• Correction colorimétrique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Image Processing</Badge>
                  <Badge variant="outline">Filters</Badge>
                  <Badge variant="outline">Morphology</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-teal-600 mr-2" />
                  Détection et Reconnaissance
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les algorithmes de détection d'objets, de visages
                  et de patterns pour créer des applications intelligentes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Haar Cascades pour visages</li>
                  <li>• HOG descriptors</li>
                  <li>• SIFT et SURF features</li>
                  <li>• Template matching</li>
                  <li>• Machine learning integration</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Object Detection</Badge>
                  <Badge variant="outline">Face Recognition</Badge>
                  <Badge variant="outline">Features</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Video className="h-6 w-6 text-blue-600 mr-2" />
                  Analyse Vidéo Temps Réel
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des applications de vision en temps réel
                  pour l'analyse de flux vidéo et la surveillance.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Capture vidéo multi-sources</li>
                  <li>• Tracking d'objets</li>
                  <li>• Détection de mouvement</li>
                  <li>• Background subtraction</li>
                  <li>• Optimisation performances</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Video Analysis</Badge>
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Tracking</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-purple-600 mr-2" />
                  Applications Pratiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des projets concrets combinant OpenCV avec d'autres
                  technologies pour des solutions industrielles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Contrôle qualité industriel</li>
                  <li>• Réalité augmentée</li>
                  <li>• OCR et lecture automatique</li>
                  <li>• Mesures et calibration</li>
                  <li>• Integration IoT</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Industrial</Badge>
                  <Badge variant="outline">AR</Badge>
                  <Badge variant="outline">OCR</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Vision par Ordinateur</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              OpenCV vous permet de créer des applications de vision révolutionnaires
              pour l'industrie, la sécurité et l'innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Eye className="mr-2 h-5 w-5" />
                Formation OpenCV
              </Button>
              <Button size="lg" variant="outline">
                <Camera className="mr-2 h-5 w-5" />
                Projets Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenCV;
