
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Cog, Users, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Formations IA",
      description: "Programmes de formation complets pour maîtriser l'IA générative et ses applications métier",
      features: ["ChatGPT avancé", "Prompt Engineering", "Automatisation workflow", "IA secteur spécifique"],
      price: "À partir de 1 500€",
      duration: "2-5 jours",
      badge: "Bestseller"
    },
    {
      icon: Cog,
      title: "Implémentation IA",
      description: "Intégration sur-mesure de solutions IA dans vos processus d'entreprise",
      features: ["Audit IA", "Développement custom", "Intégration API", "Support continu"],
      price: "À partir de 5 000€",
      duration: "2-8 semaines",
      badge: "Premium"
    },
    {
      icon: Rocket,
      title: "Automatisation Complète",
      description: "Transformation digitale complète avec automatisation intelligente de vos processus",
      features: ["Analyse complète", "RPA + IA", "Formation équipes", "ROI garanti"],
      price: "Sur devis",
      duration: "3-6 mois",
      badge: "Enterprise"
    },
    {
      icon: Users,
      title: "Accompagnement RH",
      description: "Formation de vos équipes et accompagnement au changement pour l'adoption de l'IA",
      features: ["Change management", "Formation managers", "Workshops pratiques", "Suivi personnalisé"],
      price: "À partir de 2 500€",
      duration: "1-3 mois",
      badge: "Nouveau"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes pour transformer votre entreprise avec l'IA. 
            De la formation à l'implémentation, nous vous accompagnons à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {service.badge && (
                <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                  {service.badge}
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                    <p className="text-sm text-gray-500">Durée: {service.duration}</p>
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to="/contact">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/services">
              Voir tous nos services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
