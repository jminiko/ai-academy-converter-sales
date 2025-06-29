
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Layers, Zap, Code, Settings, Target, TrendingUp, Database } from "lucide-react";

const TensorFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation TensorFlow</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez TensorFlow pour créer des modèles d'IA performants et évolutifs
          </p>
          <Badge variant="secondary" className="bg-red-500/30 text-white px-4 py-2 text-lg mb-6">
            🧠 Deep Learning Framework
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Layers className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Architecture Flexible</h3>
              <p className="text-sm text-gray-600">Graphes de calcul</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Performance GPU</h3>
              <p className="text-sm text-gray-600">Calcul parallèle</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">APIs Multiples</h3>
              <p className="text-sm text-gray-600">Keras, Core, Lite</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Production Ready</h3>
              <p className="text-sm text-gray-600">Déploiement industriel</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation TensorFlow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-orange-600 mr-2" />
                  Fondamentaux TensorFlow
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les concepts fondamentaux de TensorFlow pour créer
                  vos premiers modèles de machine learning robustes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tenseurs et opérations de base</li>
                  <li>• Graphes de computation</li>
                  <li>• Sessions et exécution eager</li>
                  <li>• Variables et constantes</li>
                  <li>• Gradient Descent et optimisation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tensors</Badge>
                  <Badge variant="outline">Graphs</Badge>
                  <Badge variant="outline">Optimization</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Layers className="h-6 w-6 text-red-600 mr-2" />
                  Réseaux de Neurones Avancés
                </h3>
                <p className="text-gray-600 mb-4">
                  Construisez des architectures de deep learning complexes
                  avec TensorFlow pour résoudre des problèmes sophistiqués.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• CNN pour la vision par ordinateur</li>
                  <li>• RNN et LSTM pour les séquences</li>
                  <li>• Transformers et attention</li>
                  <li>• GANs et modèles génératifs</li>
                  <li>• Autoencoders et compression</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">CNN</Badge>
                  <Badge variant="outline">RNN</Badge>
                  <Badge variant="outline">Transformers</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-yellow-600 mr-2" />
                  TensorFlow Extended (TFX)
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'écosystème TFX pour créer des pipelines
                  ML complets de la collecte de données au déploiement.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Data validation avec TFX</li>
                  <li>• Feature engineering pipelines</li>
                  <li>• Model analysis et validation</li>
                  <li>• TensorFlow Serving</li>
                  <li>• Orchestration avec Apache Beam</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TFX</Badge>
                  <Badge variant="outline">Pipelines</Badge>
                  <Badge variant="outline">Serving</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Optimisation et Performance
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisez vos modèles TensorFlow pour obtenir les meilleures
                  performances en production et sur différentes plateformes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Quantization et pruning</li>
                  <li>• TensorFlow Lite pour mobile</li>
                  <li>• TensorFlow.js pour le web</li>
                  <li>• Distributed training</li>
                  <li>• Profiling et monitoring</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Optimization</Badge>
                  <Badge variant="outline">Mobile</Badge>
                  <Badge variant="outline">Distributed</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Framework de Référence</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              TensorFlow est le framework de deep learning le plus utilisé au monde,
              offrant flexibilité et performance pour tous vos projets IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Brain className="mr-2 h-5 w-5" />
                Formation TensorFlow
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

export default TensorFlow;
