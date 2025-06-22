
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Users, Star, CheckCircle, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

const FormationTensorFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation TensorFlow Avancée
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez TensorFlow pour créer et déployer des modèles IA performants
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Devenir Expert TensorFlow
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">4 jours</h3>
              <p className="text-gray-600">Formation intensive</p>
            </Card>
            <Card className="text-center p-6">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">15</h3>
              <p className="text-gray-600">Projets pratiques</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">8</h3>
              <p className="text-gray-600">participants max</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">4.9/5</h3>
              <p className="text-gray-600">satisfaction</p>
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
                  <h3 className="text-lg font-semibold mb-2">Architecture TensorFlow</h3>
                  <p className="text-gray-600">Comprenez l'architecture, les tenseurs et les graphes de calcul.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Keras et API haut niveau</h3>
                  <p className="text-gray-600">Utilisez Keras pour créer rapidement des modèles complexes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Déploiement et production</h3>
                  <p className="text-gray-600">TensorFlow Serving, TFLite et déploiement cloud.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Formation Experte</Badge>
                <h3 className="text-2xl font-bold mb-2">32h intensives</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.9/5 (243 avis)</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-blue-600">2 890€</p>
                <p className="text-gray-500">Certification Google incluse</p>
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

export default FormationTensorFlow;
