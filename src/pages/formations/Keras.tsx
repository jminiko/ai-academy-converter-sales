
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Brain, Zap, Code, Settings, Target, TrendingUp, Database } from "lucide-react";

const Keras = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation Keras</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez Keras pour le deep learning simplifié et accessible
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            🧠 Deep Learning Simplifié
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Réseaux de Neurones</h3>
              <p className="text-sm text-gray-600">Architecture simplifiée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Layers className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">API High-Level</h3>
              <p className="text-sm text-gray-600">Interface intuitive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Rapid Prototyping</h3>
              <p className="text-sm text-gray-600">Développement rapide</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Transfer Learning</h3>
              <p className="text-sm text-gray-600">Modèles pré-entraînés</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation Keras</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Layers className="h-6 w-6 text-indigo-600 mr-2" />
                  API Sequential et Functional
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les deux approches principales de Keras pour construire
                  des modèles de deep learning efficaces et modulaires.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Sequential API pour modèles linéaires</li>
                  <li>• Functional API pour architectures complexes</li>
                  <li>• Couches Dense, Conv2D, LSTM</li>
                  <li>• Activation et normalisation</li>
                  <li>• Dropout et régularisation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Sequential</Badge>
                  <Badge variant="outline">Functional</Badge>
                  <Badge variant="outline">Layers</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Modèles Pré-entraînés
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploitez la puissance des modèles pré-entraînés pour
                  accélérer vos projets de vision et NLP.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• VGG, ResNet, InceptionV3</li>
                  <li>• Transfer learning et fine-tuning</li>
                  <li>• Feature extraction</li>
                  <li>• Modèles pour classification d'images</li>
                  <li>• Adaptation aux données personnalisées</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pre-trained</Badge>
                  <Badge variant="outline">Transfer Learning</Badge>
                  <Badge variant="outline">Fine-tuning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-2" />
                  Entraînement et Optimisation
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les techniques d'entraînement, de validation
                  et d'optimisation des modèles Keras.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Callbacks et monitoring</li>
                  <li>• Early stopping et model checkpoints</li>
                  <li>• Learning rate scheduling</li>
                  <li>• Validation et métriques personnalisées</li>
                  <li>• Optimiseurs Adam, SGD, RMSprop</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Callbacks</Badge>
                  <Badge variant="outline">Optimization</Badge>
                  <Badge variant="outline">Monitoring</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-orange-600 mr-2" />
                  Production et Déploiement
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à déployer vos modèles Keras en production
                  avec TensorFlow Serving et d'autres solutions.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• SavedModel et export H5</li>
                  <li>• TensorFlow Serving</li>
                  <li>• API REST et gRPC</li>
                  <li>• Optimisation pour la production</li>
                  <li>• Monitoring des performances</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Production</Badge>
                  <Badge variant="outline">TF Serving</Badge>
                  <Badge variant="outline">API</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Simplicité et Puissance</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Keras combine simplicité d'utilisation et puissance du deep learning
              pour créer des modèles IA performants rapidement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Layers className="mr-2 h-5 w-5" />
                Formation Keras
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
                Projets Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Keras;
