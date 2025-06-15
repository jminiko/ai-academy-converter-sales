
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, CheckCircle, ArrowRight, Brain, Target, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const IAGenerative = () => {
  const formationDetails = {
    title: "Formation IA Générative Complète",
    subtitle: "Maîtrisez ChatGPT, Claude, et toutes les IA génératives",
    duration: "3 jours (21h)",
    participants: "8-12 personnes",
    level: "Débutant à Avancé",
    price: "1 890€",
    originalPrice: "2 490€",
    rating: 4.9,
    reviews: 156,
    nextDates: ["25-27 Mars 2024", "15-17 Avril 2024", "20-22 Mai 2024"]
  };

  const objectives = [
    "Maîtriser ChatGPT, Claude, Gemini et les principales IA génératives",
    "Créer des prompts efficaces pour tous vos besoins professionnels",
    "Automatiser vos tâches quotidiennes avec l'IA",
    "Intégrer l'IA dans vos workflows existants",
    "Développer une stratégie IA pour votre équipe",
    "Éviter les pièges et maximiser la productivité"
  ];

  const program = [
    {
      day: "Jour 1",
      title: "Fondamentaux de l'IA Générative",
      modules: [
        "Introduction aux IA génératives : ChatGPT, Claude, Gemini",
        "Comprendre les capacités et limites de chaque outil",
        "Premiers pas et configuration des comptes",
        "Prompts de base et bonnes pratiques",
        "Cas d'usage par métier et secteur"
      ]
    },
    {
      day: "Jour 2", 
      title: "Prompt Engineering Avancé",
      modules: [
        "Techniques avancées de prompt engineering",
        "Prompts structurés et templates réutilisables",
        "Chain of thought et reasoning complexe",
        "Gestion du contexte et de la mémoire",
        "Ateliers pratiques sur vos cas d'usage"
      ]
    },
    {
      day: "Jour 3",
      title: "Applications Métier et Automatisation", 
      modules: [
        "Intégration avec vos outils existants",
        "Automatisation via API et no-code",
        "Custom GPTs et agents spécialisés",
        "Mesure ROI et KPIs",
        "Plan d'action personnalisé"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Marketing Manager",
      content: "Formation exceptionnelle ! En 3 jours, j'ai acquis une maîtrise complète de ChatGPT et Claude. Mes contenus marketing sont maintenant 3x plus rapides à produire.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Consultant",
      content: "Formateur expert et contenu ultra-pratique. J'utilise l'IA quotidiennement depuis la formation et j'ai gagné 2h par jour minimum.",
      rating: 5
    }
  ];

  const whatsIncluded = [
    "21h de formation intensive avec expert certifié",
    "Support de cours complet (200+ pages)",
    "Accès plateforme e-learning pendant 1 an",
    "Bibliothèque de 500+ prompts prêts à l'emploi",
    "Certification Twenty One Talents",
    "Suivi personnalisé 3 mois post-formation",
    "Accès communauté privée d'alumni",
    "Mise à jour gratuite du contenu pendant 1 an"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              🚀 Formation Bestseller
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {formationDetails.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {formationDetails.subtitle}
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{formationDetails.rating}</span>
                <span className="ml-1 text-gray-600">({formationDetails.reviews} avis)</span>
              </div>
              <Badge variant="outline">{formationDetails.level}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                {formationDetails.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                {formationDetails.participants}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <Link to="/contact">
                  Réserver ma place <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="flex-1" asChild>
                <Link to="/contact">Programme détaillé</Link>
              </Button>
            </div>
          </div>

          {/* Pricing Card */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{formationDetails.price}</div>
                  <div className="text-lg text-gray-500 line-through">{formationDetails.originalPrice}</div>
                  <div className="text-green-600 font-medium">Économisez 600€</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold mb-3">Prochaines sessions :</h3>
                  {formationDetails.nextDates.map((date, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium">{date}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Places disponibles</Badge>
                    </div>
                  ))}
                </div>

                <Button className="w-full mb-4" size="lg" asChild>
                  <Link to="/contact">Réserver maintenant</Link>
                </Button>
                
                <div className="text-center text-sm text-gray-600">
                  <p>✓ Garantie satisfait ou remboursé</p>
                  <p>✓ Financement OPCO accepté</p>
                  <p>✓ Paiement en 3x sans frais</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Objectifs Pédagogiques</h2>
            <p className="text-lg text-gray-600">À l'issue de cette formation, vous serez capable de :</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Programme Détaillé</h2>
            <p className="text-lg text-gray-600">21 heures de formation intensive et pratique</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {program.map((day, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{day.day} - {day.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inclus dans votre Formation</h2>
            <p className="text-lg text-gray-600">Tout ce dont vous avez besoin pour réussir</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatsIncluded.map((item, index) => (
              <div key={index} className="flex items-start">
                <Award className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos apprenants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Maîtriser l'IA Générative ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez les 1000+ professionnels déjà formés. Places limitées, réservez maintenant !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Réserver ma place <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAGenerative;
