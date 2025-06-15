
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Edit3, Lightbulb, Share } from "lucide-react";

const NotionAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Notion AI
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Boostez votre productivité avec l'IA intégrée à Notion
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Optimiser Notion
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Edit3 className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Rédaction assistée</CardTitle>
                <CardDescription>
                  Créez du contenu de qualité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez et améliorez vos textes directement dans Notion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Brainstorming</CardTitle>
                <CardDescription>
                  Stimulez votre créativité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Générez des idées et organisez vos pensées avec l'IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Share className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  Travail d'équipe optimisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Améliorez la collaboration grâce à l'assistance IA.
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

export default NotionAI;
