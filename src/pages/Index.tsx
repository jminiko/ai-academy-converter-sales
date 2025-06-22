
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap, Target, Users, Trophy, Star, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      {/* Nouvelle section ROI Calculator intégrée */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">
              💰 Calculateur ROI Gratuit
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Découvrez Votre Potentiel d'Économies
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Calculez en 2 minutes exactement combien vous pouvez économiser avec l'IA
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center p-6 border-2 border-green-200">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">340%</h3>
                <p className="text-gray-600">ROI moyen clients</p>
              </Card>
              <Card className="text-center p-6 border-2 border-blue-200">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">3.2 mois</h3>
                <p className="text-gray-600">Retour investissement</p>
              </Card>
              <Card className="text-center p-6 border-2 border-purple-200">
                <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-600 mb-2">95%</h3>
                <p className="text-gray-600">Précision prédictions</p>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4" asChild>
                <Link to="/calculateur-roi">Calculer mon ROI gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo-interactive">Voir une démo interactive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      {/* Nouvelle section témoignages intégrée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils Ont Transformé leur Entreprise
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Plus de 500 entreprises nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <div className="flex items-start">
                <img src="/placeholder.svg" alt="Client" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-3">
                    "ROI de 380% en 4 mois. L'automatisation a révolutionné notre production."
                  </blockquote>
                  <cite className="font-semibold">Alexandre Petit, AutoIndustrie SA</cite>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start">
                <img src="/placeholder.svg" alt="Client" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-3">
                    "Nos campagnes IA génèrent 5x plus de leads. Marges augmentées de 30%."
                  </blockquote>
                  <cite className="font-semibold">Isabelle Girard, FashionForward</cite>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/temoignages-clients">
                Voir tous les témoignages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
