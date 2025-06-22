
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Cog, Rocket } from "lucide-react";

const FormationTransformersAvances = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Transformers Avancés
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Architectures Transformer et modèles de langage avancés
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Maîtriser les Transformers
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Architecture Transformer</CardTitle>
                <CardDescription>Mécanismes d'attention</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprenez l'architecture fondamentale.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cog className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Fine-tuning avancé</CardTitle>
                <CardDescription>Adaptation de modèles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personnalisez vos modèles Transformer.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Déployement efficace</CardTitle>
                <CardDescription>Production optimisée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Déployez en production efficacement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationTransformersAvances;
