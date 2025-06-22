
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Clock, Users, Star, ArrowRight, CheckCircle, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const PromptEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Prompt Engineering
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez l'art de communiquer avec l'IA pour des résultats optimaux
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Devenir expert en prompts
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">500%</h3>
              <p className="text-gray-600">amélioration des résultats</p>
            </Card>
            <Card className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">techniques avancées</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">prompts créés</p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">2 jours</h3>
              <p className="text-gray-600">formation intensive</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programme de formation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fondamentaux du prompting</h3>
                  <p className="text-gray-600">Structure, syntaxe et principes de base pour des prompts efficaces.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Techniques avancées</h3>
                  <p className="text-gray-600">Chain-of-thought, Few-shot learning, Role-playing et context engineering.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Optimisation des résultats</h3>
                  <p className="text-gray-600">Techniques pour améliorer la précision et la pertinence des réponses IA.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Formation Premium</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">1 490€</div>
                <p className="text-gray-500 line-through">1 890€</p>
                <Badge className="bg-green-100 text-green-800">Économisez 400€</Badge>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>14h de formation</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Max 6 participants</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-3" />
                  <span>Certification incluse</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">S'inscrire maintenant</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromptEngineering;
