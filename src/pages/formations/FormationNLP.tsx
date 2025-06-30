
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, BookOpen, Mic, Languages, Brain, Bot, Search, Globe } from "lucide-react";

const FormationNLP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation NLP - Traitement du Langage Naturel</h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les technologies de traitement automatique du langage naturel
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg mb-6">
            🗣️ Natural Language Processing
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Analyse de Texte</h3>
              <p className="text-sm text-gray-600">Extraction d'informations</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Mic className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Reconnaissance Vocale</h3>
              <p className="text-sm text-gray-600">Speech-to-Text</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Languages className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Traduction Automatique</h3>
              <p className="text-sm text-gray-600">Multilangue IA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chatbots Intelligents</h3>
              <p className="text-sm text-gray-600">Agents conversationnels</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Modules Formation NLP</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-violet-600 mr-2" />
                  Fondamentaux du NLP
                </h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les concepts essentiels du traitement du langage naturel,
                  de la tokenisation aux modèles de langue avancés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tokenisation et normalisation</li>
                  <li>• Analyse morphologique et syntaxique</li>
                  <li>• Named Entity Recognition (NER)</li>
                  <li>• Part-of-Speech Tagging</li>
                  <li>• Dependency parsing et relations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tokenization</Badge>
                  <Badge variant="outline">NER</Badge>
                  <Badge variant="outline">POS Tagging</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Modèles de Langue Avancés
                </h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les architectures modernes comme BERT, GPT et T5
                  pour créer des applications NLP performantes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Transformers et attention mechanisms</li>
                  <li>• BERT et modèles bidirectionnels</li>
                  <li>• GPT et génération de texte</li>
                  <li>• Fine-tuning et transfer learning</li>
                  <li>• Prompt engineering et few-shot learning</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">BERT</Badge>
                  <Badge variant="outline">GPT</Badge>
                  <Badge variant="outline">Transformers</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-indigo-600 mr-2" />
                  Analyse Sémantique
                </h3>
                <p className="text-gray-600 mb-4">
                  Explorez les techniques d'analyse sémantique pour comprendre
                  le sens et les relations dans les textes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Word embeddings (Word2Vec, FastText)</li>
                  <li>• Sentence embeddings et similarité</li>
                  <li>• Topic modeling (LDA, NMF)</li>
                  <li>• Sentiment analysis et classification</li>
                  <li>• Question answering et retrieval</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Embeddings</Badge>
                  <Badge variant="outline">Sentiment Analysis</Badge>
                  <Badge variant="outline">Topic Modeling</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-pink-600 mr-2" />
                  Applications Pratiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des applications concrètes utilisant les technologies
                  NLP pour résoudre des problèmes métier réels.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chatbots et assistants virtuels</li>
                  <li>• Systèmes de recommandation textuelle</li>
                  <li>• Extraction d'informations automatique</li>
                  <li>• Résumé automatique de documents</li>
                  <li>• Détection de spam et modération</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chatbots</Badge>
                  <Badge variant="outline">Information Extraction</Badge>
                  <Badge variant="outline">Text Summarization</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">L'IA qui Comprend le Langage</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Le NLP révolutionne l'interaction homme-machine en permettant aux
              ordinateurs de comprendre et générer du langage naturel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Formation NLP
              </Button>
              <Button size="lg" variant="outline">
                <Bot className="mr-2 h-5 w-5" />
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

export default FormationNLP;
