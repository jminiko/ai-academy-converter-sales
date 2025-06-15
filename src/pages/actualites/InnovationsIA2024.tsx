
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Brain, Zap, Star } from "lucide-react";

const InnovationsIA2024 = () => {
  const innovations = [
    {
      title: "GPT-4 Turbo Vision",
      description: "Nouvelle capacité multimodale avancée",
      category: "LLM",
      date: "Décembre 2024"
    },
    {
      title: "Claude 3 Opus",
      description: "Anthropic lance son modèle le plus performant",
      category: "IA Conversationnelle", 
      date: "Novembre 2024"
    },
    {
      title: "Gemini Ultra",
      description: "Google présente son rival à GPT-4",
      category: "Multimodal",
      date: "Octobre 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovations IA 2024
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Les dernières avancées technologiques en intelligence artificielle
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{innovation.category}</Badge>
                    <span className="text-sm text-gray-500">{innovation.date}</span>
                  </div>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2" />
                    {innovation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{innovation.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationsIA2024;
