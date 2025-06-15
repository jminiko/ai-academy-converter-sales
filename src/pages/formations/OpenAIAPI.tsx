
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Code, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const OpenAIAPI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">
            🔧 Formation API OpenAI
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Intégrez l'IA dans Vos Applications
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Apprenez à utiliser l'API OpenAI pour créer des applications 
            intelligentes. Formation technique complète avec projets pratiques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/contact">Commencer maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Voir les prérequis</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">20h</div>
              <p className="text-gray-600">Formation technique</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">6</div>
              <p className="text-gray-600">Participants max</p>
            </div>
            <div className="text-center">
              <Code className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">5</div>
              <p className="text-gray-600">Projets pratiques</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">4.9/5</div>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Développez Vos Premières Apps IA
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Formation intensive pour développeurs et tech leads
          </p>
          
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              S'inscrire <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenAIAPI;
