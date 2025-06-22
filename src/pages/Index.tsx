
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Users, Target, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Pages de contenu</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <div className="text-gray-600">Formations IA</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Secteurs couverts</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">25+</div>
              <div className="text-gray-600">Outils IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explorez nos ressources IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Formations Avancées</h3>
              <p className="text-gray-600 mb-4">Plus de 100 formations spécialisées en IA</p>
              <Link to="/formations">
                <Button className="w-full">
                  Explorer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Solutions Sectorielles</h3>
              <p className="text-gray-600 mb-4">IA adaptée à votre secteur d'activité</p>
              <Link to="/sante">
                <Button className="w-full">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Outils Pratiques</h3>
              <p className="text-gray-600 mb-4">Calculateurs, simulateurs et outils IA</p>
              <Link to="/outils-ia">
                <Button className="w-full">
                  Utiliser <ArrowRight className="ml-2 h-4 w-4" />
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
