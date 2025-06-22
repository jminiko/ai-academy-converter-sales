
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Target, Cpu, ArrowRight, BarChart3, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const OptimisationPerformance = () => {
  const optimizations = [
    {
      icon: Cpu,
      title: "Optimisation Algorithmes",
      description: "Amélioration des performances des modèles IA",
      improvements: ["Vitesse +300%", "Précision +25%", "Coûts -40%"]
    },
    {
      icon: BarChart3,
      title: "Monitoring Avancé",
      description: "Surveillance en temps réel des performances",
      improvements: ["Alertes proactives", "Métriques détaillées", "Tableaux de bord"]
    },
    {
      icon: TrendingUp,
      title: "Scaling Intelligent",
      description: "Adaptation automatique aux charges de travail",
      improvements: ["Auto-scaling", "Load balancing", "Optimisation ressources"]
    }
  ];

  const metrics = [
    { label: "Amélioration moyenne des performances", value: "250%", icon: TrendingUp },
    { label: "Réduction des coûts d'infrastructure", value: "45%", icon: Target },
    { label: "Temps de réponse amélioré", value: "75%", icon: Clock },
    { label: "Satisfaction client", value: "98%", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Optimisation Performance IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Maximisez les performances de vos solutions IA. Réduction des coûts, 
            amélioration de la vitesse et optimisation des ressources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-orange-100 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
            <Link to="/contact">Audit performance gratuit</Link>
          </Button>
        </div>
      </section>

      {/* Services d'optimisation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services d'Optimisation</h2>
            <p className="text-xl text-gray-600">Solutions personnalisées pour améliorer vos performances</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizations.map((optimization, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                      <optimization.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{optimization.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{optimization.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {optimization.improvements.map((improvement, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2">
                        {improvement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'optimisation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Approche</h2>
            <p className="text-xl text-gray-600">Méthodologie structurée pour des résultats optimaux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Audit Complet</h3>
              <p className="text-sm text-gray-600">Analyse détaillée des performances actuelles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Identification</h3>
              <p className="text-sm text-gray-600">Détection des goulots d'étranglement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Optimisation</h3>
              <p className="text-sm text-gray-600">Implémentation des améliorations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600">Surveillance continue des performances</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Boostez Vos Performances IA
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Obtenez des résultats exceptionnels avec notre expertise en optimisation
          </p>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer l'optimisation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptimisationPerformance;
