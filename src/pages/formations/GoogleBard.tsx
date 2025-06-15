
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, ArrowRight, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const GoogleBard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800">
            🔍 Formation Google Bard
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Exploitez la Puissance de Google Bard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Maîtrisez l'IA conversationnelle de Google pour la recherche, 
            la création de contenu et l'analyse de données.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link to="/contact">Commencer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Découvrir Bard</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">6h</div>
              <p className="text-gray-600">Formation express</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">20</div>
              <p className="text-gray-600">Places disponibles</p>
            </div>
            <div className="text-center">
              <Search className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">50+</div>
              <p className="text-gray-600">Cas d'usage</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">4.6/5</div>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Maîtrisez Google Bard en Une Journée
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Formation intensive et pratique
          </p>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
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

export default GoogleBard;
