
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart, Target, Users } from "lucide-react";

const MachineLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Machine Learning
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les fondamentaux du machine learning
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Commencer la formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Algorithmes ML</CardTitle>
                <CardDescription>Apprentissage supervisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Explorez les algorithmes fondamentaux.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Projets pratiques</CardTitle>
                <CardDescription>Cas d'usage réels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Travaillez sur des projets concrets.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Support expert</CardTitle>
                <CardDescription>Accompagnement personnalisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Bénéficiez du support de nos experts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MachineLearning;
