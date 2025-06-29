
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, Database, Cog, Zap } from "lucide-react";

const OutilLangChain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Link className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">LangChain Framework</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Framework pour développer des applications avec des modèles de langage.
            Chaînes de prompts, agents intelligents et intégrations multiples.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cog className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Chaînes de Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Orchestration de workflows complexes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Intégrations Multiples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connexion avec bases de données et APIs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Agents Autonomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Agents qui prennent des décisions automatiquement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilLangChain;
