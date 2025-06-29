
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Download, Upload, Star, Users, Globe, Code, Zap, Heart, GitBranch, Database, Monitor } from "lucide-react";

const OutilHuggingFace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Hugging Face Hub</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            La plateforme collaborative pour les modèles d'IA open source.
            Plus de 500k modèles, datasets et espaces de démonstration.
          </p>
          <Badge variant="secondary" className="bg-red-500/30 text-white px-4 py-2 text-lg mb-6">
            🤗 Open Source AI Hub
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">500k+ Modèles</h3>
              <p className="text-sm text-gray-600">Bibliothèque massive d'IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Communauté Active</h3>
              <p className="text-sm text-gray-600">Millions de développeurs</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Transformers Library</h3>
              <p className="text-sm text-gray-600">Framework de référence</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Déploiement Facile</h3>
              <p className="text-sm text-gray-600">Inference API intégrée</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Écosystème Hugging Face</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  Model Hub & Repository
                </h3>
                <p className="text-gray-600 mb-4">
                  Accédez à la plus grande collection de modèles pré-entraînés
                  pour toutes les tâches d'IA imaginables.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• BERT, GPT, T5 et variantes</li>
                  <li>• Modèles multimodaux (CLIP, DALL-E)</li>
                  <li>• Computer vision (ResNet, ViT)</li>
                  <li>• Audio processing (Wav2Vec, Whisper)</li>
                  <li>• Versioning et reproductibilité</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pre-trained Models</Badge>
                  <Badge variant="outline">Version Control</Badge>
                  <Badge variant="outline">Model Cards</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-green-600 mr-2" />
                  Transformers Library
                </h3>
                <p className="text-gray-600 mb-4">
                  La bibliothèque Python de référence pour utiliser facilement
                  les modèles Transformer state-of-the-art.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• API unifiée pour tous modèles</li>
                  <li>• Support PyTorch, TensorFlow, JAX</li>
                  <li>• Tokenizers ultra-rapides</li>
                  <li>• Fine-tuning simplifié</li>
                  <li>• Production-ready pipelines</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">JAX</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-purple-600 mr-2" />
                  Datasets & Preprocessing
                </h3>
                <p className="text-gray-600 mb-4">
                  Bibliothèque complète de datasets avec outils de preprocessing
                  optimisés pour l'entraînement de modèles à grande échelle.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• 100k+ datasets publics</li>
                  <li>• Streaming pour gros datasets</li>
                  <li>• Preprocessing automatique</li>
                  <li>• Caching intelligent</li>
                  <li>• Multi-processing optimisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Big Data</Badge>
                  <Badge variant="outline">Streaming</Badge>
                  <Badge variant="outline">Preprocessing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-orange-600 mr-2" />
                  Spaces & Gradio
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez et partagez des démonstrations interactives de vos
                  modèles avec l'écosystème Spaces et Gradio.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Interface web automatique</li>
                  <li>• Déploiement en un clic</li>
                  <li>• Intégration Docker</li>
                  <li>• Collaborative development</li>
                  <li>• GPU inference gratuite</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gradio</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Outils Hugging Face Populaires</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">AutoTrain</h3>
                <p className="text-sm text-gray-600">No-code model training</p>
              </Card>
              <Card className="p-6 text-center">
                <GitBranch className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Hub Client</h3>
                <p className="text-sm text-gray-600">Git-like model versioning</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Inference API</h3>
                <p className="text-sm text-gray-600">Production deployment</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Model Evaluation</h3>
                <p className="text-sm text-gray-600">Benchmarking automatique</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Rejoignez la Révolution IA</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Exploitez la puissance de l'écosystème Hugging Face pour accélérer
              vos projets d'IA avec les meilleurs modèles open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Heart className="mr-2 h-5 w-5" />
                Explorer Hugging Face
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
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

export default OutilHuggingFace;
