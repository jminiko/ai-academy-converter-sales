
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Volume2, Brain, Smartphone } from "lucide-react";

const VoiceAssistant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Mic className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Assistant Vocal IA
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Créez des assistants vocaux intelligents et naturels
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Développer un assistant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Volume2 className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Synthèse vocale</CardTitle>
                <CardDescription>
                  Voix naturelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des voix humaines réalistes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Compréhension NLP</CardTitle>
                <CardDescription>
                  Intelligence contextuelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez et comprenez les intentions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Intégration multi-plateforme</CardTitle>
                <CardDescription>
                  Partout accessible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez sur tous les appareils.
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

export default VoiceAssistant;
