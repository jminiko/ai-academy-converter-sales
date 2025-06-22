
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Users, Star, CheckCircle, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const FormationPyTorchAvance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation PyTorch Avancée
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Développez des modèles IA de pointe avec PyTorch et le deep learning
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Maîtriser PyTorch
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <Layers className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">28h</h3>
              <p className="text-gray-600">formation complète</p>
            </Card>
            <Card className="text-center p-6">
              <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">20</h3>
              <p className="text-gray-600">projets pratiques</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">10</h3>
              <p className="text-gray-600">participants max</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">4.8/5</h3>
              <p className="text-gray-600">évaluation</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Devenez Expert PyTorch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tenseurs et autograd</h3>
                  <p className="text-gray-600">Maîtrisez les fondamentaux de PyTorch et la différentiation automatique.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Réseaux de neurones avancés</h3>
                  <p className="text-gray-600">CNN, RNN, Transformers et architectures modernes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Production avec TorchServe</h3>
                  <p className="text-gray-600">Déployez vos modèles PyTorch en production facilement.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-orange-100 text-orange-800">Certification Meta</Badge>
                <h3 className="text-2xl font-bold mb-2">Formation Experte</h3>
                <div className="flex justify-center items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">4.8/5 (187 avis)</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-orange-600">2 690€</p>
                <p className="text-gray-500">4 jours intensifs</p>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">Rejoindre la formation</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationPyTorchAvance;
