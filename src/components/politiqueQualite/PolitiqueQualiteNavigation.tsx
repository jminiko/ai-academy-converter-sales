
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface NavigationItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface PolitiqueQualiteNavigationProps {
  items: NavigationItem[];
}

export const PolitiqueQualiteNavigation = ({ items }: PolitiqueQualiteNavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Navigation Rapide</h2>
          <p className="text-lg text-gray-600 mb-8">
            Accédez directement aux sections qui vous intéressent
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => scrollToSection(item.id)}
                  >
                    Voir la section
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
