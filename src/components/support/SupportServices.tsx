
import { Card } from "@/components/ui/card";
import { Phone, Monitor, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Support Technique",
    description: "Assistance technique réactive pour résoudre tous vos problèmes"
  },
  {
    icon: Monitor,
    title: "Monitoring 24/7",
    description: "Surveillance continue des performances et alertes proactives"
  },
  {
    icon: Zap,
    title: "Maintenance",
    description: "Mises à jour, corrections et optimisations régulières"
  },
  {
    icon: Users,
    title: "Formation Continue",
    description: "Sessions de formation pour maintenir l'expertise de vos équipes"
  }
];

export const SupportServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services de Support</h2>
          <p className="text-xl text-gray-600">Accompagnement complet pour la réussite de vos projets IA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
