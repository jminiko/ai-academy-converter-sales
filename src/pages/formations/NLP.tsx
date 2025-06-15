
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Users, Trophy } from "lucide-react";

const NLP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation NLP (Traitement du Langage Naturel)
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez le traitement automatique du langage naturel
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Comprendre le langage
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NLP;
