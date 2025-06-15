
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Bot, Mic, Users } from "lucide-react";

const IAConversationnelle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Conversationnelle
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez les chatbots et assistants virtuels intelligents
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Commencer la formation
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Bot className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Développement de chatbots</CardTitle>
                <CardDescription>
                  Création d'assistants intelligents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez à créer des chatbots performants pour votre entreprise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Traitement de la parole</CardTitle>
                <CardDescription>
                  Speech-to-text et text-to-speech
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez la reconnaissance et synthèse vocale dans vos applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Expérience utilisateur</CardTitle>
                <CardDescription>
                  Design conversationnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Concevez des interfaces conversationnelles intuitives et engageantes.
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

export default IAConversationnelle;
