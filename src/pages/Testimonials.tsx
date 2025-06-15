
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Entreprises accompagnées" },
    { icon: Star, number: "4.9/5", label: "Note moyenne" },
    { icon: TrendingUp, number: "300%", label: "ROI moyen" },
    { icon: Award, number: "98%", label: "Satisfaction client" }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechCorp France",
      sector: "Technologie",
      content: "Twenty One Talents a révolutionné notre approche marketing. Grâce à leurs formations IA et l'automatisation de nos processus, nous avons augmenté notre productivité de 60% et généré 40% de leads qualifiés en plus. L'équipe est exceptionnelle et l'accompagnement parfait.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c",
      results: ["60% de productivité", "40% de leads en plus", "ROI en 3 mois"],
      logo: "TC"
    },
    {
      name: "Pierre Martin",
      role: "CEO",
      company: "InnovateLab",
      sector: "Conseil",
      content: "L'expertise de Twenty One Talents en IA générative nous a permis de lancer notre assistant virtuel client en seulement 6 semaines. Le support technique est remarquable et les formations de nos équipes ont été parfaitement adaptées à nos besoins spécifiques.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      results: ["Assistant IA en 6 semaines", "Support exceptionnel", "Formation sur-mesure"],
      logo: "IL"
    },
    {
      name: "Sophie Laurent",
      role: "DRH",
      company: "Global Services",
      sector: "Services",
      content: "Nos équipes maîtrisent maintenant ChatGPT et les outils d'automatisation grâce aux formations Twenty One Talents. Nous économisons 3h par jour par collaborateur et la qualité de notre travail s'est considérablement améliorée. Investissement rentabilisé dès le premier mois !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      results: ["3h économisées/jour", "Qualité améliorée", "ROI en 1 mois"],
      logo: "GS"
    },
    {
      name: "Laurent Moreau",
      role: "Directeur Financier",
      company: "Finance Pro",
      sector: "Finance",
      content: "L'automatisation de nos processus comptables par Twenty One Talents nous fait économiser 15h par semaine. La précision est parfaite et nous pouvons nous concentrer sur l'analyse stratégique. Service client réactif et solutions robustes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      results: ["15h économisées/semaine", "Précision parfaite", "Focus stratégique"],
      logo: "FP"
    },
    {
      name: "Anne Durand",
      role: "Responsable Production",
      company: "ManufacturingTech",
      sector: "Industrie",
      content: "L'implémentation d'IA prédictive pour notre maintenance a réduit nos arrêts machine de 70%. L'équipe Twenty One Talents a su s'adapter à notre environnement industriel complexe avec un professionnalisme remarquable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      results: ["70% d'arrêts en moins", "IA prédictive", "Adaptation parfaite"],
      logo: "MT"
    },
    {
      name: "Thomas Bernard",
      role: "Directeur Commercial",
      company: "SalesForce Pro",
      sector: "Commercial",
      content: "L'automatisation de notre pipeline commercial et les formations IA ont boosté nos performances de 45%. Nos commerciaux sont plus efficaces et le suivi client est parfait. Twenty One Talents est un partenaire de confiance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      results: ["45% de performance", "Efficacité commerciale", "Suivi client parfait"],
      logo: "SF"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "TC", sector: "Tech" },
    { name: "InnovateLab", logo: "IL", sector: "Conseil" },
    { name: "Global Services", logo: "GS", sector: "Services" },
    { name: "Finance Pro", logo: "FP", sector: "Finance" },
    { name: "ManufacturingTech", logo: "MT", sector: "Industrie" },
    { name: "SalesForce Pro", logo: "SF", sector: "Commercial" },
    { name: "HealthCare Plus", logo: "HC", sector: "Santé" },
    { name: "EduTech", logo: "ET", sector: "Éducation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            ⭐ Témoignages Clients
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            500+ Entreprises Nous Font Confiance
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Découvrez comment nos clients ont transformé leur entreprise grâce à l'IA. 
            Des résultats concrets, des gains mesurables, une satisfaction exceptionnelle.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Trust */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils Nous Font Confiance</h2>
            <p className="text-lg text-gray-600">De la startup à la grande entreprise, tous secteurs confondus</p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 font-bold text-gray-600">
                  {company.logo}
                </div>
                <p className="text-xs text-gray-500">{company.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages Détaillés
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les retours d'expérience complets de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-bold text-blue-600">
                          {testimonial.logo}
                        </div>
                        <span className="text-gray-600">{testimonial.company}</span>
                        <Badge variant="outline" className="text-xs">{testimonial.sector}</Badge>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Résultats obtenus :</h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, idx) => (
                        <Badge key={idx} className="bg-green-100 text-green-800 text-xs">
                          ✓ {result}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages Vidéo
            </h2>
            <p className="text-xl text-gray-600">
              Nos clients partagent leur expérience en vidéo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${1460925895917 + index}-afdab827c52f`}
                    alt={`Témoignage vidéo ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full w-16 h-16">
                      ▶️
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">CEO de TechStart</h3>
                  <p className="text-sm text-gray-600">"Comment l'IA a transformé notre startup"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Études de Cas Détaillées
            </h2>
            <p className="text-xl text-gray-600">
              Plongez dans les détails de nos succès clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secteur Finance</h3>
                <p className="text-gray-600 mb-4">
                  Comment une banque a automatisé 80% de ses processus de crédit
                </p>
                <Button variant="outline" className="w-full">
                  Lire l'étude de cas
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secteur RH</h3>
                <p className="text-gray-600 mb-4">
                  L'IA au service du recrutement : 70% de temps économisé
                </p>
                <Button variant="outline" className="w-full">
                  Lire l'étude de cas
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secteur Retail</h3>
                <p className="text-gray-600 mb-4">
                  Personnalisation IA : +45% de conversion e-commerce
                </p>
                <Button variant="outline" className="w-full">
                  Lire l'étude de cas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Vous aussi, transformez votre entreprise avec l'IA. 
            Consultation gratuite et devis personnalisé sous 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Consultation gratuite</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/formations">Voir nos formations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
