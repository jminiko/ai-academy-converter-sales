
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Play, CheckCircle, Download } from "lucide-react";

const GuideDebutantChatGPT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Débutant ChatGPT
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Votre première approche de ChatGPT : de zéro à héros en quelques étapes
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Commencer le guide
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Play className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Premiers pas</CardTitle>
                <CardDescription>
                  Configuration et utilisation de base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez à créer un compte et vos premières interactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Bonnes pratiques</CardTitle>
                <CardDescription>
                  Techniques pour de meilleurs résultats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez comment formuler vos questions efficacement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Ressources gratuites</CardTitle>
                <CardDescription>
                  Templates et exemples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Téléchargez nos modèles de prompts pour débuter rapidement.
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

export default GuideDebutantChatGPT;
