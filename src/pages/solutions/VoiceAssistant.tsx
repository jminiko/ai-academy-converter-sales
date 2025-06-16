
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Volume2, MessageCircle, Headphones } from "lucide-react";

const VoiceAssistant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Mic className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Assistant Vocal IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Créez des expériences vocales intelligentes et naturelles
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Créer un assistant vocal
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Volume2 className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Synthèse vocale</CardTitle>
                <CardDescription>
                  Text-to-Speech avancé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Voix naturelles et expressives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Compréhension naturelle</CardTitle>
                <CardDescription>
                  NLU avancé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprenez les intentions utilisateur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Headphones className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Reconnaissance vocale</CardTitle>
                <CardDescription>
                  Speech-to-Text précis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transcription en temps réel multilingue.
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
