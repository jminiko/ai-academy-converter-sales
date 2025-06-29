
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, BarChart, MessageCircle } from "lucide-react";

const SolutionIARH = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Solution IA RH</h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Révolutionnez vos ressources humaines avec l'intelligence artificielle.
            Recrutement intelligent, évaluation des performances et gestion des talents.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle>Recrutement Prédictif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identification des meilleurs candidats par IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Analyse de Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Évaluation objective des collaborateurs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Chatbot RH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Assistant virtuel pour questions RH</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionIARH;
