import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Users, Target, Star, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="bg-green-500/20 text-green-700 px-4 py-2 text-lg mb-4">
              🎉 Plateforme Complète - 580+ Pages !
            </Badge>
            <h2 className="text-3xl font-bold mb-4">La Plus Grande Ressource IA Francophone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre plateforme compte désormais plus de 580 pages de contenu expert en intelligence artificielle,
              couvrant tous les aspects de l'IA moderne.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">580+</div>
              <div className="text-gray-600">Pages de contenu expert</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">120+</div>
              <div className="text-gray-600">Formations spécialisées</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">75+</div>
              <div className="text-gray-600">Secteurs d'application</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Outils et technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nouvelles Sections Spécialisées</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez nos dernières additions : biotechnologie IA, formations gaming, 
            cas d'usage en éducation et tourisme, et bien plus encore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Méthodes Avancées</h3>
              <p className="text-gray-600 mb-4">RAG, Few-Shot Learning et techniques d'avant-garde</p>
              <Link to="/methode-rag">
                <Button className="w-full">
                  Explorer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secteurs Émergents</h3>
              <p className="text-gray-600 mb-4">Biotechnologie, logistique et immobilier IA</p>
              <Link to="/ia-biotechnologie">
                <Button className="w-full">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Technologies Émergentes</h3>
              <p className="text-gray-600 mb-4">Edge AI, Federated Learning et innovations</p>
              <Link to="/edge-ai">
                <Button className="w-full">
                  Innover <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Formations Gaming</h3>
              <p className="text-gray-600 mb-4">IA pour jeux vidéo et développement interactif</p>
              <Link to="/formation-ia-gamedev">
                <Button className="w-full">
                  Apprendre <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Star className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cas d'Usage Avancés</h3>
              <p className="text-gray-600 mb-4">Éducation, tourisme et applications concrètes</p>
              <Link to="/cas-usage-ia-education">
                <Button className="w-full">
                  Étudier <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Solutions Entreprise</h3>
              <p className="text-gray-600 mb-4">RH intelligente et comptabilité automatisée</p>
              <Link to="/solution-ia-rh">
                <Button className="w-full">
                  Implémenter <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
