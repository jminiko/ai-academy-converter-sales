
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Target, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const PromptEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            🎯 Formation Prompt Engineering
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maîtrisez l'Art du Prompt Engineering
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Devenez expert en conception de prompts pour maximiser les performances 
            de l'IA générative. Formation pratique avec cas d'usage réels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link to="/contact">S'inscrire maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Programme détaillé</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">12h</div>
              <p className="text-gray-600">Formation complète</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">8</div>
              <p className="text-gray-600">Participants max</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">4.8/5</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <p className="text-gray-600">Taux de réussite</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Devenir Expert en Prompts ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Rejoignez notre formation et transformez votre approche de l'IA
          </p>
          
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Réserver ma place <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromptEngineering;
