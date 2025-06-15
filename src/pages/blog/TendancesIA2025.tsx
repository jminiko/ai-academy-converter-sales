
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, User, Calendar } from "lucide-react";

const TendancesIA2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Tendances IA 2025 : Ce qui nous attend
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 juin 2024</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Par l'équipe Twenty One Talents</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              L'intelligence artificielle continue d'évoluer à un rythme effréné. 
              Découvrez les tendances qui définiront 2025 et préparez-vous aux changements à venir.
            </p>
            
            <h2>Les grandes tendances à surveiller</h2>
            <p>
              L'année 2025 s'annonce révolutionnaire pour l'IA avec plusieurs développements majeurs...
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default TendancesIA2025;
