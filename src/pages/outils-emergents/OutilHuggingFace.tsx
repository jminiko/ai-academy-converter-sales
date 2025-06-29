
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Zap, Users, Globe, Download, Upload, Star, Heart, Share, GitBranch, Cpu, Monitor } from "lucide-react";

const OutilHuggingFace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">HuggingFace Hub</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            La plateforme collaborative incontournable pour l'IA open source.
            Plus de 500,000 modèles, datasets et spaces disponibles.
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
              <h3 className="text-lg font-bold mb-2">500K+ Modèles</h3>
              <p className="text-sm text-gray-600">Bibliothèque de modèles massive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">100K+ Datasets</h3>
              <p className="text-sm text-gray-600">Données prêtes à l'emploi</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Monitor className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Spaces Interactifs</h3>
              <p className="text-sm text-gray-600">Démos et applications web</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Communauté</h3>
              <p className="text-sm text-gray-600">Millions de développeurs IA</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Écosystème HuggingFace Complet</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-blue-600 mr-2" />
                  Transformers Library
                </h3>
                <p className="text-gray-600 mb-4">
                  Bibliothèque Python de référence pour utiliser des modèles
                  pré-entraînés avec une API simple et unifiée.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Support PyTorch, TensorFlow, JAX</li>
                  <li>• API unifiée pour tous les modèles</li>
                  <li>• Pipeline simple pour l'inférence</li>
                  <li>• Fine-tuning facilité</li>
                  <li>• AutoModel pour auto-détection</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Pipeline</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-green-600 mr-2" />
                  Datasets Hub
                </h3>
                <p className="text-gray-600 mb-4">
                  Accès instantané à des milliers de datasets de qualité
                  pour entraîner et évaluer vos modèles d'IA.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Datasets multilingues et multimodaux</li>
                  <li>• Streaming pour gros datasets</li>
                  <li>• Preprocessing automatique</li>
                  <li>• Métriques d'évaluation intégrées</li>
                  <li>• Partage de datasets privés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Multimodal</Badge>
                  <Badge variant="outline">Streaming</Badge>
                  <Badge variant="outline">Evaluation</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 text-purple-600 mr-2" />
                  Spaces & Gradio
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez et partagez des démos interactives de vos modèles IA
                  avec Gradio, Streamlit ou des applications custom.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Interface Gradio en quelques lignes</li>
                  <li>• Déploiement automatique</li>
                  <li>• Partage public ou privé</li>
                  <li>• Intégration avec modèles Hub</li>
                  <li>• GPU gratuit pour l'inférence</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gradio</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Auto Deploy</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-orange-600 mr-2" />
                  Inference API
                </h3>
                <p className="text-gray-600 mb-4">
                  API d'inférence gratuite et payante pour utiliser n'importe
                  quel modèle du Hub sans infrastructure.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• API REST simple</li>
                  <li>• Inférence temps réel</li>
                  <li>• Scaling automatique</li>
                  <li>• Support multimodal</li>
                  <li>• Endpoints personnalisés</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">REST API</Badge>
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Serverless</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Modèles Populaires HuggingFace</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">BERT, RoBERTa</h3>
                <p className="text-sm text-gray-600">NLP Classification</p>
              </Card>
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">GPT, T5</h3>
                <p className="text-sm text-gray-600">Génération de texte</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">CLIP, BLIP</h3>
                <p className="text-sm text-gray-600">Vision-Language</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Whisper, Wav2Vec</h3>
                <p className="text-sm text-gray-600">Audio & Speech</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez HuggingFace</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Apprenez à exploiter pleinement l'écosystème HuggingFace pour vos projets IA :
              de l'utilisation de modèles à la création de vos propres contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Heart className="mr-2 h-5 w-5" />
                Formation HuggingFace
              </Button>
              <Button size="lg" variant="outline">
                <Share className="mr-2 h-5 w-5" />
                Workshop Pratique
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
