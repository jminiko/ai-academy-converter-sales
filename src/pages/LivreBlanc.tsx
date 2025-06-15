
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Download, Star, Users, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const LivreBlanc = () => {
  const livresBlancs = [
    {
      titre: "Guide Complet de l'IA Générative en Entreprise",
      description: "Stratégies, outils et meilleures pratiques pour déployer l'IA générative dans votre organisation.",
      pages: 45,
      telechargements: 12500,
      note: 4.9,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      gratuit: true,
      populaire: true
    },
    {
      titre: "ROI de l'IA : Méthodologie de Mesure",
      description: "Framework complet pour calculer et optimiser le retour sur investissement de vos projets IA.",
      pages: 32,
      telechargements: 8900,
      note: 4.8,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      gratuit: true,
      populaire: false
    },
    {
      titre: "Automatisation Intelligente : Guide Pratique",
      description: "Comment automatiser vos processus métier avec l'IA pour gagner en efficacité.",
      pages: 38,
      telechargements: 7650,
      note: 4.7,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      gratuit: false,
      populaire: false
    },
    {
      titre: "Sécurité et Conformité IA",
      description: "Bonnes pratiques pour sécuriser vos déploiements IA et respecter les réglementations.",
      pages: 28,
      telechargements: 5420,
      note: 4.6,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      gratuit: false,
      populaire: false
    },
    {
      titre: "IA et Transformation Digitale",
      description: "Roadmap pour intégrer l'IA dans votre stratégie de transformation digitale.",
      pages: 52,
      telechargements: 9800,
      note: 4.8,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      gratuit: true,
      populaire: true
    },
    {
      titre: "Prompt Engineering : Manuel Avancé",
      description: "Techniques avancées pour créer des prompts efficaces et optimiser vos résultats IA.",
      pages: 41,
      telechargements: 6780,
      note: 4.9,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      gratuit: false,
      populaire: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Livres Blancs IA
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Ressources expertes pour approfondir vos connaissances en intelligence artificielle. 
            Guides pratiques, études de cas et méthodologies éprouvées.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Découvrir nos ressources
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Tous</Button>
            <Button variant="outline">Gratuits</Button>
            <Button variant="outline">Premium</Button>
            <Button variant="outline">Populaires</Button>
            <Button variant="outline">Nouveautés</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {livresBlancs.map((livre, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                {livre.populaire && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-orange-500 text-white px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={livre.image} 
                    alt={livre.titre}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {livre.gratuit && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-500 text-white">Gratuit</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{livre.titre}</CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{livre.pages} pages</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {livre.note}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{livre.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {livre.telechargements} téléchargements
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      4.2k lectures
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${livre.gratuit ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  >
                    {livre.gratuit ? 'Télécharger gratuitement' : 'Accéder (Premium)'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Accès Premium à Tous nos Livres Blancs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-indigo-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-indigo-600" />
                    Accès Gratuit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>3 livres blancs gratuits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Mises à jour mensuelles</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Support communauté</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Commencer gratuitement
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-6 w-6 mr-2 text-yellow-500" />
                    Accès Premium
                  </CardTitle>
                  <Badge className="w-fit bg-indigo-500 text-white">Recommandé</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Tous les livres blancs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Nouveautés en avant-première</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Templates et outils exclusifs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Support prioritaire</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-indigo-600">49€</span>
                    <span className="text-gray-600">/mois</span>
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Démarrer l'essai gratuit
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Téléchargez Votre Premier Livre Blanc Gratuit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      "Guide Complet de l'IA Générative en Entreprise"
                    </h3>
                    <p className="text-indigo-100 mb-4">
                      Plus de 12 000 dirigeants ont déjà téléchargé ce guide pour 
                      transformer leur approche de l'intelligence artificielle.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email professionnel</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com"
                        className="bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <Label htmlFor="entreprise" className="text-white">Entreprise</Label>
                      <Input 
                        id="entreprise" 
                        placeholder="Nom de votre entreprise"
                        className="bg-white text-gray-900"
                      />
                    </div>
                    <Button size="lg" className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                      Télécharger maintenant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LivreBlanc;
