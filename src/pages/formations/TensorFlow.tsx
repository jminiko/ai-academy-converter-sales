
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const TensorFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation TensorFlow
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Développez des modèles de machine learning avec TensorFlow
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Commencer la formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programme de formation</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Module 1: Introduction à TensorFlow</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Découvrez les bases de TensorFlow et ses applications</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Module 2: Réseaux de neurones</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Construisez vos premiers réseaux de neurones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TensorFlow;
