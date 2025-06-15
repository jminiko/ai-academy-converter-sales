
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ClaudeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-teal-100 text-teal-800">
            🧠 Formation Claude AI
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Découvrez l'IA Conversationnelle Claude
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Apprenez à utiliser Claude AI d'Anthropic pour vos tâches de 
            rédaction, d'analyse et de raisonnement complexe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link to="/contact">Découvrir Claude</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Comparer les IA</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-teal-600">4h</div>
              <p className="text-gray-600">Initiation complète</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-teal-600">25</div>
              <p className="text-gray-600">Participants</p>
            </div>
            <div className="text-center">
              <Brain className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-teal-600">20+</div>
              <p className="text-gray-600">Techniques avancées</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-teal-600">4.8/5</div>
              <p className="text-gray-600">Appréciation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Explorez une Nouvelle Approche de l'IA
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Claude AI : l'assistant IA éthique et performant
          </p>
          
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Essayer <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaudeAI;
