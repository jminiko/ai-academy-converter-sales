
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Code, Lightbulb } from "lucide-react";

const PartenaireOpenAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Partenaire OpenAI</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Solutions avec GPT et IA générative de dernière génération
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Intégrer OpenAI
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GPT-4 & ChatGPT</h3>
              <p className="text-gray-600">Conversation intelligente</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Codex</h3>
              <p className="text-gray-600">Génération de code</p>
            </Card>
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">DALL-E</h3>
              <p className="text-gray-600">Création d'images IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">API avancées</h3>
              <p className="text-gray-600">Intégration personnalisée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartenaireOpenAI;
