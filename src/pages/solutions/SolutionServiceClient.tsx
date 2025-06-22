
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Bot, Clock, Star } from "lucide-react";

const SolutionServiceClient = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Solution Service Client IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Automatisez et améliorez l'expérience client avec l'IA conversationnelle
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Améliorer le service
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Bot className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Chatbots IA</h3>
              <p className="text-gray-600">Réponses intelligentes 24/7</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Temps réel</h3>
              <p className="text-gray-600">Résolution instantanée</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-Bold mb-2">Satisfaction</h3>
              <p className="text-gray-600">Expérience optimisée</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multicanal</h3>
              <p className="text-gray-600">Support unifié</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionServiceClient;
