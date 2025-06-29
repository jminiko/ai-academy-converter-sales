
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Database, Brain, Zap } from "lucide-react";

const MethodeRAG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Méthode RAG (Retrieval-Augmented Generation)</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Combinez récupération d'informations et génération de contenu.
            Amélioration de la précision et de la pertinence des réponses IA.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Base de Connaissances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Intégration de documents et sources externes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Génération Contextuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Réponses basées sur des informations récupérées</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Performance Optimisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Équilibre entre vitesse et précision</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodeRAG;
