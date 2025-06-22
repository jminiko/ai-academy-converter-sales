
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Cpu, Wrench, Zap } from "lucide-react";

const CertificationRobotique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certification Robotique IA
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez la robotique intelligente et les systèmes autonomes
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Passer la certification
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Systèmes embarqués</h3>
              <p className="text-gray-600">Intelligence locale</p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Manipulation robotique</h3>
              <p className="text-gray-600">Contrôle précis</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Apprentissage autonome</h3>
              <p className="text-gray-600">IA adaptative</p>
            </Card>
            <Card className="p-6 text-center">
              <Bot className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Intégration industrielle</h3>
              <p className="text-gray-600">Applications pratiques</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationRobotique;
