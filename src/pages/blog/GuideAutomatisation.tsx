
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Clock, User, Calendar } from "lucide-react";

const GuideAutomatisation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <Zap className="h-16 w-16 text-orange-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Guide Complet de l'Automatisation IA
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>12 juin 2024</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Par Marc Dubois</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min de lecture</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              L'automatisation intelligente transforme les entreprises. 
              Découvrez comment implémenter l'IA pour automatiser vos processus.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideAutomatisation;
