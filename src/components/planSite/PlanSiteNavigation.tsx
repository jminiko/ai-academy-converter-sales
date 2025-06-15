
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Cog, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export const PlanSiteNavigation = () => {
  const quickLinks = [
    {
      icon: BookOpen,
      title: "Formations",
      link: "/formations",
      buttonText: "Voir toutes"
    },
    {
      icon: Cog,
      title: "Services",
      link: "/services",
      buttonText: "Découvrir"
    },
    {
      icon: BookOpen,
      title: "Ressources",
      link: "/ressources-gratuites",
      buttonText: "Explorer"
    },
    {
      icon: MessageSquare,
      title: "Contact",
      link: "/contact",
      buttonText: "Nous joindre"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Navigation Rapide</h2>
          <p className="text-lg text-gray-600 mb-8">
            Accès direct aux sections les plus consultées
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={item.link}>{item.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
