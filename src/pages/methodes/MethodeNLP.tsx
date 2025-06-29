
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, BookOpen, Zap, Globe, Code, Users, Settings, Database, Monitor, Cpu, Eye } from "lucide-react";

const MethodeNLP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode NLP</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Méthodologie complète pour maîtriser le traitement du langage naturel.
            De la théorie à l'implémentation pratique avec les dernières techniques.
          </p>
          <Badge variant="secondary" className="bg-blue-500/30 text-white px-4 py-2 text-lg mb-6">
            🗣️ Natural Language Processing
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Compréhension Texte</h3>
              <p className="text-sm text-gray-600">Analyse sémantique</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Multilingue</h3>
              <p className="text-sm text-gray-600">Support universel</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Transformers</h3>
              <p className="text-sm text-gray-600">Architecture moderne</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Applications Pratiques</h3>
              <p className="text-sm text-gray-600">Solutions concrètes</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Méthode NLP</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                  Fondamentaux NLP
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les concepts essentiels du traitement du langage naturel
                  et les techniques de préprocessing textuel.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tokenization et preprocessing</li>
                  <li>• Part-of-speech tagging</li>
                  <li>• Named entity recognition</li>
                  <li>• Syntactic parsing</li>
                  <li>• Semantic analysis basics</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tokenization</Badge>
                  <Badge variant="outline">POS Tagging</Badge>
                  <Badge variant="outline">NER</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-green-600 mr-2" />
                  Transformers & LLMs
                </h3>
                <p className="text-gray-600 mb-4">
                  Approfondissez l'architecture Transformer et l'utilisation
                  des grands modèles de langage modernes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Architecture Transformer détaillée</li>
                  <li>• BERT, GPT, T5 et variantes</li>
                  <li>• Fine-tuning techniques</li>
                  <li>• Prompt engineering avancé</li>
                  <li>• In-context learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Transformers</Badge>
                  <Badge variant="outline">BERT</Badge>
                  <Badge variant="outline">GPT</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-6 w-6 text-purple-600 mr-2" />
                  Implémentation Pratique
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des applications NLP concrètes avec les frameworks
                  et outils les plus populaires de l'écosystème.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• spaCy et NLTK mastery</li>
                  <li>• Hugging Face Transformers</li>
                  <li>• PyTorch pour NLP</li>
                  <li>• APIs et deployment</li>
                  <li>• Performance optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">spaCy</Badge>
                  <Badge variant="outline">Hugging Face</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  Applications Métier
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des solutions NLP pour répondre aux besoins spécifiques
                  des entreprises et des secteurs d'activité.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots et assistants virtuels</li>
                  <li>• Analyse de sentiment</li>
                  <li>• Résumé automatique</li>
                  <li>• Question-answering systems</li>
                  <li>• Document classification</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbots</Badge>
                  <Badge variant="outline">Sentiment Analysis</Badge>
                  <Badge variant="outline">Q&A Systems</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies NLP</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Vector Databases</h3>
                <p className="text-sm text-gray-600">Embeddings storage</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">MLOps for NLP</h3>
                <p className="text-sm text-gray-600">Production pipelines</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">GPU Acceleration</h3>
                <p className="text-sm text-gray-600">Calcul haute performance</p>
              </Card>
              <Card className="p-6 text-center">
                <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Model Monitoring</h3>
                <p className="text-sm text-gray-600">Performance tracking</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez le NLP</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Développez votre expertise en traitement du langage naturel avec une
              méthodologie complète, de la théorie à l'application pratique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Formation NLP Complète
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
                Labs Pratiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeNLP;
