
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, MessageSquare, Languages, Brain } from "lucide-react";

const FormationNLPAvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation NLP Avancé</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez le traitement du langage naturel et les modèles de langage
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Maîtriser le NLP
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Chatbots avancés</h3>
              <p className="text-gray-600">Conversations naturelles</p>
            </Card>
            <Card className="p-6 text-center">
              <Languages className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traduction automatique</h3>
              <p className="text-gray-600">Multi-langues instantané</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Compréhension de texte</h3>
              <p className="text-gray-600">Analyse sémantique</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Génération de texte</h3>
              <p className="text-gray-600">Création automatisée</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationNLPAvance;
