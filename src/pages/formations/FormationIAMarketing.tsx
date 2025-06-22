
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, Star, ArrowRight, CheckCircle, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const FormationIAMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Marketing
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos campagnes marketing avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Booster mon marketing
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <BarChart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">300%</h3>
              <p className="text-gray-600">ROI campagnes</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">75%</h3>
              <p className="text-gray-600">meilleur ciblage</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">50%</h3>
              <p className="text-gray-600">temps économisé</p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3 jours</h3>
              <p className="text-gray-600">formation complète</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transformez votre marketing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personnalisation automatisée</h3>
                  <p className="text-gray-600">Créez des contenus personnalisés à grande échelle avec l'IA générative.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Analyse prédictive</h3>
                  <p className="text-gray-600">Anticipez les tendances et optimisez vos stratégies marketing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Optimisation temps réel</h3>
                  <p className="text-gray-600">Ajustez automatiquement vos campagnes pour maximiser les performances.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-pink-100 text-pink-800">Formation Intensive</Badge>
                <h3 className="text-2xl font-bold mb-2">21h de formation</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.9/5 (156 avis)</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-pink-600">2 190€</p>
                <p className="text-gray-500">TTC par participant</p>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">Réserver ma formation</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAMarketing;
