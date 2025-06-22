
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, BookOpen, Languages, Brain } from "lucide-react";

const FormationNLPAvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation NLP Avancée
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Traitement du langage naturel et compréhension automatique du texte
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Comprendre le langage
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analyse de sentiment</h3>
              <p className="text-gray-600">Classification et extraction d'émotions</p>
            </Card>
            <Card className="p-6 text-center">
              <Languages className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Traduction automatique</h3>
              <p className="text-gray-600">Modèles Transformer et BERT</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Génération de texte</h3>
              <p className="text-gray-600">GPT et modèles génératifs</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationNLPAvance;
