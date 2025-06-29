
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Zap, Brain, TrendingUp, FileText, Lightbulb, Code, Users } from "lucide-react";

const MethodeFewShot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode Few-Shot</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Apprentissage avec peu d'exemples : Maximisez les performances
            de vos modèles IA avec des données d'entraînement limitées.
          </p>
          <Badge variant="secondary" className="bg-cyan-500/30 text-white px-4 py-2 text-lg mb-6">
            🎯 Few-Shot Learning Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Learning Efficiency</h3>
              <p className="text-sm text-gray-600">Apprentissage avec peu d'exemples</p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Résultats optimaux rapidement</p>
            </Card>
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Adaptation</h3>
              <p className="text-sm text-gray-600">Adaptation rapide aux domaines</p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Intelligence</h3>
              <p className="text-sm text-gray-600">Généralisation intelligente</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Techniques Few-Shot Avancées</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  In-Context Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprentissage contextuel avec des exemples dans le prompt
                  pour guider le modèle vers les réponses attendues.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Sélection d'exemples représentatifs</li>
                  <li>• Structuration optimale des prompts</li>
                  <li>• Formatage cohérent des données</li>
                  <li>• Démonstrations par analogie</li>
                  <li>• Template engineering avancé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">In-Context</Badge>
                  <Badge variant="outline">Prompting</Badge>
                  <Badge variant="outline">Templates</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-green-600 mr-2" />
                  Meta-Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Apprentissage à apprendre avec des algorithmes spécialisés
                  pour l'adaptation rapide à de nouvelles tâches.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Model-Agnostic Meta-Learning (MAML)</li>
                  <li>• Prototypical Networks</li>
                  <li>• Relation Networks</li>
                  <li>• Memory-Augmented Networks</li>
                  <li>• Gradient-based meta-learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MAML</Badge>
                  <Badge variant="outline">Prototypical</Badge>
                  <Badge variant="outline">Meta-Learning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Transfer Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Transfert de connaissances de modèles pré-entraînés
                  vers des domaines spécifiques avec fine-tuning minimal.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Pre-trained model selection</li>
                  <li>• Layer freezing strategies</li>
                  <li>• Adapter layers insertion</li>
                  <li>• LoRA (Low-Rank Adaptation)</li>
                  <li>• Parameter-efficient fine-tuning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Transfer Learning</Badge>
                  <Badge variant="outline">LoRA</Badge>
                  <Badge variant="outline">Fine-tuning</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  Data Augmentation
                </h3>
                <p className="text-gray-600 mb-4">
                  Techniques d'augmentation de données pour maximiser
                  l'efficacité des quelques exemples disponibles.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Paraphrasing automatique</li>
                  <li>• Synonym replacement</li>
                  <li>• Back-translation</li>
                  <li>• Mixup et CutMix</li>
                  <li>• Synthetic data generation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Augmentation</Badge>
                  <Badge variant="outline">Paraphrasing</Badge>
                  <Badge variant="outline">Synthetic</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Optimisez l'Apprentissage Few-Shot</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Maîtrisez les techniques avancées pour créer des modèles performants
              avec un minimum de données d'entraînement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Target className="mr-2 h-5 w-5" />
                Formation Few-Shot
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Guide Pratique
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeFewShot;
