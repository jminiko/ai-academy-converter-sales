
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Database, Brain, Zap, FileText, Target, Network, Cpu } from "lucide-react";

const MethodeRAG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode RAG</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Retrieval-Augmented Generation : La révolution de l'IA générative
            avec accès aux données en temps réel et contexte spécialisé.
          </p>
          <Badge variant="secondary" className="bg-emerald-500/30 text-white px-4 py-2 text-lg mb-6">
            🔍 RAG Expert Method
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Knowledge Base</h3>
              <p className="text-sm text-gray-600">Base de connaissances vectorielle</p>
            </Card>
            <Card className="text-center p-6">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Retrieval</h3>
              <p className="text-sm text-gray-600">Recherche sémantique avancée</p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Generation</h3>
              <p className="text-sm text-gray-600">Génération contextuelle</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Accuracy</h3>
              <p className="text-sm text-gray-600">Précision et pertinence</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Architecture RAG Complète</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-green-600 mr-2" />
                  Preprocessing & Indexing
                </h3>
                <p className="text-gray-600 mb-4">
                  Préparation et indexation des documents avec embeddings
                  vectoriels pour une recherche sémantique optimale.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Chunking intelligent des documents</li>
                  <li>• Embeddings avec modèles spécialisés</li>
                  <li>• Indexation dans base vectorielle</li>
                  <li>• Métadonnées enrichies</li>
                  <li>• Optimisation des performances</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vector DB</Badge>
                  <Badge variant="outline">Embeddings</Badge>
                  <Badge variant="outline">Chunking</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Search className="h-6 w-6 text-blue-600 mr-2" />
                  Retrieval Engine
                </h3>
                <p className="text-gray-600 mb-4">
                  Moteur de recherche sémantique avancé avec ranking
                  et filtrage pour récupérer le contexte le plus pertinent.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Recherche par similarité cosinus</li>
                  <li>• Hybrid search (dense + sparse)</li>
                  <li>• Re-ranking avec modèles spécialisés</li>
                  <li>• Filtrage par métadonnées</li>
                  <li>• Score de pertinence dynamique</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Semantic Search</Badge>
                  <Badge variant="outline">Hybrid</Badge>
                  <Badge variant="outline">Re-ranking</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-purple-600 mr-2" />
                  Generation Pipeline
                </h3>
                <p className="text-gray-600 mb-4">
                  Pipeline de génération avec injection de contexte
                  et prompting avancé pour des réponses précises.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Context injection intelligente</li>
                  <li>• Prompt engineering spécialisé</li>
                  <li>• Chain-of-thought reasoning</li>
                  <li>• Citation et traçabilité</li>
                  <li>• Validation des réponses</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">LLM</Badge>
                  <Badge variant="outline">Prompting</Badge>
                  <Badge variant="outline">Citations</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-orange-600 mr-2" />
                  Optimization & Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation continue et monitoring des performances
                  pour maintenir la qualité et l'efficacité du système.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• A/B testing des pipelines</li>
                  <li>• Metrics de performance</li>
                  <li>• Feedback loop utilisateur</li>
                  <li>• Caching intelligent</li>
                  <li>• Auto-scaling</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Monitoring</Badge>
                  <Badge variant="outline">A/B Testing</Badge>
                  <Badge variant="outline">Caching</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Cas d'Usage RAG</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Documentation QA</h3>
                <p className="text-sm text-gray-600">Assistant documentaire intelligent</p>
              </Card>
              <Card className="p-6 text-center">
                <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Knowledge Management</h3>
                <p className="text-sm text-gray-600">Gestion des connaissances</p>
              </Card>
              <Card className="p-6 text-center">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Technical Support</h3>
                <p className="text-sm text-gray-600">Support technique automatisé</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez le RAG</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment implémenter et optimiser des systèmes RAG
              pour créer des applications IA contextuelles et précises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Search className="mr-2 h-5 w-5" />
                Formation RAG Avancée
              </Button>
              <Button size="lg" variant="outline">
                <Database className="mr-2 h-5 w-5" />
                Guide Technique
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
