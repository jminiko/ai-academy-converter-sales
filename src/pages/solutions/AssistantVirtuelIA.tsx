
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mic, Brain, Clock } from "lucide-react";

const AssistantVirtuelIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Assistant Virtuel IA
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Créez des assistants virtuels intelligents pour vos clients
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Créer votre assistant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Interaction vocale</CardTitle>
                <CardDescription>
                  Communication naturelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dialoguez naturellement avec vos utilisateurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Compréhension contextuelle</CardTitle>
                <CardDescription>
                  Intelligence conversationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprenez le contexte et les intentions utilisateur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Disponibilité 24/7</CardTitle>
                <CardDescription>
                  Service continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Offrez un support client disponible en permanence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssistantVirtuelIA;
