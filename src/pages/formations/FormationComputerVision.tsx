
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, Scan, Image, Video, Zap, Target, Settings } from "lucide-react";

const FormationComputerVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Computer Vision</h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Donnez la vue à vos applications avec la vision par ordinateur
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            👁️ Vision Artificielle
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Camera className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Détection d'Objets</h3>
              <p className="text-sm text-gray-600">YOLO, R-CNN, SSD</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Scan className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Reconnaissance Faciale</h3>
              <p className="text-sm text-gray-600">Identification biométrique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Image className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Segmentation</h3>
              <p className="text-sm text-gray-600">Pixel-level classification</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse Vidéo</h3>
              <p className="text-sm text-gray-600">Tracking et mouvement</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Computer Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Camera className="h-6 w-6 text-cyan-600 mr-2" />
                  Détection et Classification
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à détecter, localiser et classifier des objets dans
                  les images avec les algorithmes les plus performants.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• CNN architectures (ResNet, EfficientNet)</li>
                  <li>• Object detection (YOLO v5/v8, DETR)</li>
                  <li>• Image classification et fine-tuning</li>
                  <li>• Data augmentation et preprocessing</li>
                  <li>• Transfer learning et model optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">YOLO</Badge>
                  <Badge variant="outline">CNN</Badge>
                  <Badge variant="outline">Classification</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Scan className="h-6 w-6 text-blue-600 mr-2" />
                  Reconnaissance et Identification
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques de reconnaissance faciale, OCR
                  et identification automatique d'éléments complexes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Reconnaissance faciale (FaceNet, ArcFace)</li>
                  <li>• OCR et extraction de texte</li>
                  <li>• Biométrie et authentification</li>
                  <li>• Landmarks detection et pose estimation</li>
                  <li>• Emotion recognition et analyse comportementale</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Face Recognition</Badge>
                  <Badge variant="outline">OCR</Badge>
                  <Badge variant="outline">Biometrics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Image className="h-6 w-6 text-indigo-600 mr-2" />
                  Segmentation Avancée
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les techniques de segmentation pour analyser
                  les images au niveau du pixel avec une précision maximale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Semantic segmentation (U-Net, DeepLab)</li>
                  <li>• Instance segmentation (Mask R-CNN)</li>
                  <li>• Panoptic segmentation</li>
                  <li>• Medical image segmentation</li>
                  <li>• Real-time segmentation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">U-Net</Badge>
                  <Badge variant="outline">Mask R-CNN</Badge>
                  <Badge variant="outline">Segmentation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Video className="h-6 w-6 text-purple-600 mr-2" />
                  Analyse Vidéo Temps Réel
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des systèmes d'analyse vidéo pour le tracking,
                  la surveillance et l'analyse comportementale en temps réel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Object tracking (SORT, DeepSORT)</li>
                  <li>• Action recognition et classification</li>
                  <li>• Crowd analysis et counting</li>
                  <li>• Motion detection et optical flow</li>
                  <li>• Real-time processing optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tracking</Badge>
                  <Badge variant="outline">Action Recognition</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'Œil Artificiel</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              La computer vision permet aux machines de voir, comprendre et
              interagir avec le monde visuel comme jamais auparavant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Eye className="mr-2 h-5 w-5" />
                Formation Computer Vision
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Projets Visuels
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationComputerVision;
