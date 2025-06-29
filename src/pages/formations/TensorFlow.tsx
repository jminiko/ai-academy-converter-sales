
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Brain, Layers, Database, Code, Zap, Target, Users } from "lucide-react";

const TensorFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Cpu className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation TensorFlow</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez TensorFlow pour créer des modèles d'apprentissage automatique performants
          </p>
          <Badge variant="secondary" className="bg-red-500/30 text-white px-4 py-2 text-lg mb-6">
            🔥 Framework ML Leader
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Deep Learning</h3>
              <p className="text-sm text-gray-600">Réseaux de neurones avancés</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Layers className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Keras Integration</h3>
              <p className="text-sm text-gray-600">API haut niveau simplifiée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">TensorFlow Serving</h3>
              <p className="text-sm text-gray-600">Déploiement en production</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">TensorFlow.js</h3>
              <p className="text-sm text-gray-600">IA dans le navigateur</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules de Formation TensorFlow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-orange-600 mr-2" />
                  Fondamentaux TensorFlow
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprenez les concepts de base de TensorFlow et créez vos premiers modèles
                  d'apprentissage automatique avec ce framework puissant.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tenseurs et opérations de base</li>
                  <li>• Graphes computationnels</li>
                  <li>• Sessions et exécution</li>
                  <li>• Variables et placeholders</li>
                  <li>• Optimiseurs et fonctions de coût</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tensors</Badge>
                  <Badge variant="outline">Computational Graphs</Badge>
                  <Badge variant="outline">Basic Operations</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Layers className="h-6 w-6 text-blue-600 mr-2" />
                  Keras et High-Level APIs
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilisez Keras intégré dans TensorFlow pour créer rapidement
                  des modèles de deep learning avec une API intuitive.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Sequential et Functional API</li>
                  <li>• Couches prédéfinies et personnalisées</li>
                  <li>• Callbacks et monitoring</li>
                  <li>• Transfer learning</li>
                  <li>• Model subclassing</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Keras</Badge>
                  <Badge variant="outline">High-level API</Badge>
                  <Badge variant="outline">Transfer Learning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-green-600 mr-2" />
                  Déploiement et Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Déployez vos modèles TensorFlow en production avec TensorFlow Serving,
                  TensorFlow Lite et les outils d'optimisation.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• TensorFlow Serving pour APIs</li>
                  <li>• TensorFlow Lite pour mobile</li>
                  <li>• Optimisation et quantification</li>
                  <li>• Monitoring en production</li>
                  <li>• Pipelines MLOps</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TF Serving</Badge>
                  <Badge variant="outline">TF Lite</Badge>
                  <Badge variant="outline">Production</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-purple-600 mr-2" />
                  TensorFlow.js et Web ML
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez TensorFlow.js pour créer des applications ML
                  qui s'exécutent directement dans le navigateur web.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Modèles dans le navigateur</li>
                  <li>• GPU acceleration avec WebGL</li>
                  <li>• Transfer learning en JS</li>
                  <li>• Applications temps réel</li>
                  <li>• Conversion Python vers JS</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow.js</Badge>
                  <Badge variant="outline">Web ML</Badge>
                  <Badge variant="outline">Browser AI</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez TensorFlow</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Devenez expert en TensorFlow et créez des solutions d'IA
              robustes pour tous types d'applications et environnements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Cpu className="mr-2 h-5 w-5" />
                Formation TensorFlow
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
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
