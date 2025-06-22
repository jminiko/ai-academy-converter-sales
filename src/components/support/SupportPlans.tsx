
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Essential",
    price: "890€",
    period: "/mois",
    description: "Support de base pour petites équipes",
    features: [
      "Support email 48h",
      "Documentation complète",
      "Mises à jour sécurité",
      "1 session formation/trimestre",
      "Monitoring basique"
    ],
    popular: false
  },
  {
    name: "Professional", 
    price: "1 890€",
    period: "/mois",
    description: "Solution complète pour entreprises",
    features: [
      "Support 24/7 prioritaire",
      "Hotline téléphonique",
      "Interventions à distance",
      "Formations mensuelles",
      "Monitoring avancé",
      "Optimisations trimestrielles",
      "Conseiller dédié"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description: "Support premium sur-mesure",
    features: [
      "Support dédié 24/7",
      "Ingénieur sur site",
      "SLA personnalisé",
      "Formations illimitées",
      "Monitoring temps réel",
      "R&D partagée",
      "Roadmap produit partagée"
    ],
    popular: false
  }
];

export const SupportPlans = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans de Support</h2>
          <p className="text-xl text-gray-600">Choisissez le niveau de support adapté à vos besoins</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-emerald-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-emerald-600">Populaire</Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link to="/contact">
                    {plan.name === 'Enterprise' ? 'Nous contacter' : 'Choisir ce plan'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
