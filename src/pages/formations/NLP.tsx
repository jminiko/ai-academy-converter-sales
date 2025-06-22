
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Globe, BookOpen, Mic } from "lucide-react";

const NLP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation NLP
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Traitement du langage naturel et compréhension de texte
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Maîtriser le NLP
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Analyse de sentiment</CardTitle>
                <CardDescription>Compréhension émotionnelle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analysez les émotions dans le texte.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Traduction automatique</CardTitle>
                <CardDescription>Systèmes multilingues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Créez des systèmes de traduction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mic className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Speech-to-Text</CardTitle>
                <CardDescription>Reconnaissance vocale</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Développez la reconnaissance vocale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NLP;
