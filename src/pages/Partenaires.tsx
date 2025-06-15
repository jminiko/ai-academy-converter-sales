
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Globe, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partenaires = () => {
  const techPartners = [
    {
      name: "OpenAI",
      logo: "🤖",
      category: "IA Générative",
      description: "Partenaire officiel pour les solutions GPT et API OpenAI",
      benefits: ["Accès privilégié aux dernières versions", "Support technique dédié", "Formations certifiantes"]
    },
    {
      name: "Microsoft",
      logo: "🏢",
      category: "Cloud & IA",
      description: "Partenaire Azure AI et Microsoft Copilot",
      benefits: ["Crédits Azure gratuits", "Formations Copilot", "Certification Microsoft"]
    },
    {
      name: "Google Cloud",
      logo: "☁️",
      category: "Machine Learning",
      description: "Spécialiste Google AI Platform et Vertex AI",
      benefits: ["Accès aux outils Google AI", "Support GCP", "Formations Bard AI"]
    },
    {
      name: "Anthropic",
      logo: "🧠",
      category: "IA Conversationnelle",
      description: "Expert Claude AI et IA sécurisée",
      benefits: ["Formation Claude avancée", "API privilégiée", "Recherche collaborative"]
    }
  ];

  const businessPartners = [
    "Cap Gemini - Conseil en transformation digitale",
    "Accenture - Implémentation IA enterprise",
    "Deloitte - Audit et gouvernance IA",
    "McKinsey - Stratégie IA",
    "BCG - Innovation et disruption IA"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Nos Partenaires
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Twenty One Talents collabore avec les leaders mondiaux de l'IA 
            pour vous offrir les meilleures formations et solutions
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Devenir partenaire
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Partenaires Technologiques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {techPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800">{partner.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  
                  <h4 className="font-semibold mb-2">Avantages partenariat :</h4>
                  <ul className="space-y-1">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Partenaires Business</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessPartners.map((partner, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600 mr-3" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Avantages de notre Écosystème</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Réseau Étendu</h4>
                <p className="text-gray-600">Accès à un réseau de 500+ experts IA</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Innovation Continue</h4>
                <p className="text-gray-600">Veille technologique et R&D collaborative</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Portée Mondiale</h4>
                <p className="text-gray-600">Présence dans 15+ pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Devenir Partenaire</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre écosystème et développez ensemble l'avenir de l'IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Candidater <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partenaires;
