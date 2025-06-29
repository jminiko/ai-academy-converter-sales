
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, Chain, Code, Database, Zap, Users, Globe, Download, Upload, Star, GitBranch, Cpu, Monitor, Bot, Settings } from "lucide-react";

const OutilLangChain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Chain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">LangChain Framework</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Le framework de référence pour développer des applications LLM avancées.
            Chaînage de prompts, agents intelligents et intégrations multiples.
          </p>
          <Badge variant="secondary" className="bg-teal-500/30 text-white px-4 py-2 text-lg mb-6">
            🔗 LLM Application Builder
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Chain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Chaînes Complexes</h3>
              <p className="text-sm text-gray-600">Orchestration de prompts avancée</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Bot className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Agents Intelligents</h3>
              <p className="text-sm text-gray-600">Prise de décision autonome</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Vector Stores</h3>
              <p className="text-sm text-gray-600">Intégration bases vectorielles</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">100+ Intégrations</h3>
              <p className="text-sm text-gray-600">APIs et services connectés</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Composants LangChain Essentiels</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Chain className="h-6 w-6 text-blue-600 mr-2" />
                  Chains & Prompt Templates
                </h3>
                <p className="text-gray-600 mb-4">
                  Créez des chaînes de traitement sophistiquées avec des templates
                  de prompts réutilisables et modulaires.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• PromptTemplate avancés avec variables</li>
                  <li>• Chaînes séquentielles et parallèles</li>
                  <li>• Conditional chains avec logique</li>
                  <li>• Map-Reduce pour gros documents</li>
                  <li>• Router chains pour multi-domaines</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Prompt Engineering</Badge>
                  <Badge variant="outline">Chain Composition</Badge>
                  <Badge variant="outline">Templates</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-green-600 mr-2" />
                  Agents & Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Développez des agents autonomes capables d'utiliser des outils
                  externes et de prendre des décisions complexes.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• ReAct agents avec reasoning</li>
                  <li>• Tool calling automatique</li>
                  <li>• Custom tools development</li>
                  <li>• Multi-agent orchestration</li>
                  <li>• Memory et conversation state</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ReAct</Badge>
                  <Badge variant="outline">Tool Usage</Badge>
                  <Badge variant="outline">Autonomous Agents</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="h-6 w-6 text-purple-600 mr-2" />
                  Vector Stores & Retrievers
                </h3>
                <p className="text-gray-600 mb-4">
                  Intégrez facilement des bases de données vectorielles pour
                  des applications RAG (Retrieval-Augmented Generation).
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Support Pinecone, Weaviate, Chroma</li>
                  <li>• Document loaders pour tous formats</li>
                  <li>• Text splitters intelligents</li>
                  <li>• Similarity search avancée</li>
                  <li>• Hybrid retrieval strategies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">RAG</Badge>
                  <Badge variant="outline">Vector Search</Badge>
                  <Badge variant="outline">Document Processing</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Settings className="h-6 w-6 text-orange-600 mr-2" />
                  LangSmith & Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Surveillez, déboguez et optimisez vos applications LLM
                  avec les outils de monitoring intégrés.
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Tracing complet des exécutions</li>
                  <li>• Debugging visuel des chaînes</li>
                  <li>• Performance monitoring</li>
                  <li>• A/B testing de prompts</li>
                  <li>• Cost tracking et optimization</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">LangSmith</Badge>
                  <Badge variant="outline">Monitoring</Badge>
                  <Badge variant="outline">Debugging</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Intégrations LangChain Populaires</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">OpenAI GPT</h3>
                <p className="text-sm text-gray-600">Modèles conversationnels</p>
              </Card>
              <Card className="p-6 text-center">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Pinecone DB</h3>
                <p className="text-sm text-gray-600">Base vectorielle managée</p>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Serp API</h3>
                <p className="text-sm text-gray-600">Recherche web en temps réel</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Streamlit</h3>
                <p className="text-sm text-gray-600">Interface utilisateur rapide</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Maîtrisez LangChain</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Apprenez à construire des applications LLM robustes et scalables
              avec le framework le plus populaire de l'écosystème IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Chain className="mr-2 h-5 w-5" />
                Formation LangChain
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

export default OutilLangChain;
