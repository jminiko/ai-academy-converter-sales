
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Phone, Shield, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Temps de réponse moyen", value: "< 2h", icon: Clock },
  { label: "Disponibilité garantie", value: "99.9%", icon: Shield },
  { label: "Satisfaction client", value: "98%", icon: Users },
  { label: "Problèmes résolus", value: "94%", icon: CheckCircle }
];

export const SupportHero = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-4 bg-emerald-100 text-emerald-800">
          🛡️ Support & Maintenance
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Support & Maintenance IA : Sérénité Garantie
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bénéficiez d'un support expert 24/7 pour vos solutions IA. Maintenance proactive, 
          formations continues et optimisations pour maximiser vos performances.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link to="/contact">Choisir mon plan</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Audit gratuit</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <metric.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
              <p className="text-gray-600 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
