
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Share2, Code, Users } from "lucide-react";

const OutilHuggingFace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Hugging Face Hub</h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Plateforme collaborative pour partager et utiliser des modèles d'IA.
            Transformers, datasets et espaces de démonstration.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Share2 className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Modèles Pré-entraînés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accès à des milliers de modèles IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>API Inference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Utilisation simple via API REST</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Communauté Active</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Collaboration et partage entre développeurs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutilHuggingFace;
