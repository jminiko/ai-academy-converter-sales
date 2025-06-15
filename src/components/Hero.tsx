
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
          🚀 Leader en formation IA & Automatisation
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transformez votre entreprise avec l'
          <span className="text-blue-600">Intelligence Artificielle</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Formations expertes, implémentations sur-mesure et automatisation intelligente 
          pour propulser votre entreprise vers le futur. Rejoignez les 500+ entreprises 
          qui nous font confiance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" asChild>
            <Link to="/formations">
              Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Consultation gratuite</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <Brain className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">IA Générative</h3>
            <p className="text-gray-600 text-center">
              Maîtrisez ChatGPT, Claude, et les dernières technologies IA pour votre métier
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <Zap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automatisation</h3>
            <p className="text-gray-600 text-center">
              Automatisez vos processus métier et gagnez jusqu'à 40% de productivité
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Implémentation</h3>
            <p className="text-gray-600 text-center">
              Accompagnement personnalisé pour intégrer l'IA dans votre organisation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
