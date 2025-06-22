
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface PageGeneratorProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  features: Array<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }>;
}

const PageGenerator = ({ title, description, icon: Icon, color, features }: PageGeneratorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className={`py-20 bg-gradient-to-r from-${color}-600 to-${color}-700`}>
        <div className="container mx-auto px-4 text-center">
          <Icon className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <Button size="lg" className={`bg-white text-${color}-600 hover:bg-gray-100`}>
            Découvrir maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <feature.icon className={`h-12 w-12 text-${color}-600 mx-auto mb-4`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageGenerator;
