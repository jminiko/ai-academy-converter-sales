
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Database, Search, Zap, BookOpen, Target, Users, TrendingUp, Code, FileText, Globe, Shield, Lightbulb, Settings } from "lucide-react";

const MethodeRAG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode RAG</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Retrieval-Augmented Generation : Combinez la puissance des LLM
            avec vos données propriétaires pour des réponses précises et contextuelles.
          </p>
          <Badge variant="secondary" className="bg-purple-500/30 text-white px-4 py-2 text-lg">
            🔍 RAG Expert
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Recherche Intelligente</h3>
              <p className="text-sm text-gray-600">Récupération de contexte pertinent</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Génération Augmentée</h3>
              <p className="text-sm text-gray-600">LLM enrichi par les données</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Précision Maximale</h3>
              <p className="text-sm text-gray-600">Réponses basées sur vos sources</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Contrôle Total</h3>
              <p className="text-sm text-gray-600">Maîtrise des sources de données</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Architecture RAG Complète</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  Vector Database
                </h3>
                <p className="text-gray-600 mb-4">
                  Stockage et indexation des embeddings pour une recherche
                  sémantique ultra-rapide dans vos documents.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Pinecone, Weaviate, Chroma</li>
                  <li>• Embeddings OpenAI, Sentence Transformers</li>
                  <li>• Indexation hiérarchique intelligente</li>
                  <li>• Recherche hybride (dense + sparse)</li>
                  <li>• Mise à jour temps réel</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vector DB</Badge>
                  <Badge variant="outline">Embeddings</Badge>
                  <Badge variant="outline">Semantic Search</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-green-600 mr-2" />
                  Document Processing
                </h3>
                <p className="text-gray-600 mb-4">
                  Pipeline de traitement avancé pour extraire, chunker
                  et enrichir vos documents de toute nature.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• OCR et extraction de texte</li>
                  <li>• Chunking intelligent par contexte</li>
                  <li>• Métadonnées automatiques</li>
                  <li>• Support multi-formats (PDF, Word, Web)</li>
                  <li>• Preprocessing personnalisé</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">OCR</Badge>
                  <Badge variant="outline">Chunking</Badge>
                  <Badge variant="outline">Preprocessing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-purple-600 mr-2" />
                  Retrieval Strategy
                </h3>
                <p className="text-gray-600 mb-4">
                  Stratégies de récupération sophistiquées pour identifier
                  le contexte le plus pertinent selon la requête.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Similarity search avancée</li>
                  <li>• Reranking par score de pertinence</li>
                  <li>• Multi-query expansion</li>
                  <li>• Contextual compression</li>
                  <li>• Filtrage par métadonnées</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Similarity</Badge>
                  <Badge variant="outline">Reranking</Badge>
                  <Badge variant="outline">Multi-query</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-orange-600 mr-2" />
                  Generation Pipeline
                </h3>
                <p className="text-gray-600 mb-4">
                  Pipeline de génération optimisé qui combine contexte
                  récupéré et capacités de raisonnement du LLM.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Prompt engineering contextualisé</li>
                  <li>• Chain-of-thought avec sources</li>
                  <li>• Citation automatique des sources</li>
                  <li>• Hallucination detection</li>
                  <li>• Response validation</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Prompting</Badge>
                  <Badge variant="outline">Citations</Badge>
                  <Badge variant="outline">Validation</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Cas d'Usage RAG Avancés</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Knowledge Base</h3>
                <p className="text-sm text-gray-600">Support client intelligent</p>
              </Card>
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Code Assistant</h3>
                <p className="text-sm text-gray-600">Documentation technique</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Research Assistant</h3>
                <p className="text-sm text-gray-600">Synthèse de publications</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">HR Chatbot</h3>
                <p className="text-sm text-gray-600">Politiques entreprise</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez la Méthode RAG</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Apprenez à implémenter des systèmes RAG robustes et performants
              pour transformer vos données en intelligence actionnable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Database className="mr-2 h-5 w-5" />
                Formation RAG
              </Button>
              <Button size="lg" variant="outline">
                <Code className="mr-2 h-5 w-5" />
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

export default MethodeRAG;
