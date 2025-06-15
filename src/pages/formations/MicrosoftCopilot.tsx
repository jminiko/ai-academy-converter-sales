
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const MicrosoftCopilot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            💼 Formation Microsoft Copilot
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maximisez Votre Productivité avec Copilot
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez toutes les fonctionnalités de Microsoft Copilot pour 
            transformer votre façon de travailler avec Office 365.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">Démarrer la formation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Demo gratuite</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">8h</div>
              <p className="text-gray-600">Formation pratique</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">15</div>
              <p className="text-gray-600">Participants max</p>
            </div>
            <div className="text-center">
              <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <p className="text-gray-600">Cas pratiques</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">4.7/5</div>
              <p className="text-gray-600">Évaluation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformez Votre Quotidien Professionnel
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Formation certifiante Microsoft Copilot
          </p>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Réserver <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicrosoftCopilot;
