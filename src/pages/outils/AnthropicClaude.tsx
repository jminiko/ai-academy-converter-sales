
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Code, FileText } from "lucide-react";

const AnthropicClaude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Claude by Anthropic
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Assistant IA conversationnel sûr et utile pour toutes vos tâches
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Utiliser Claude
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversation naturelle</h3>
              <p className="text-gray-600">Dialogue fluide</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Assistance code</h3>
              <p className="text-gray-600">Programmation assistée</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse de documents</h3>
              <p className="text-gray-600">Compréhension textuelle</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Raisonnement complexe</h3>
              <p className="text-gray-600">Logique avancée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnthropicClaude;
