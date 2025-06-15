
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, Brain, Zap, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "500+", label: "Entreprises formées", icon: Users },
    { number: "98%", label: "Satisfaction client", icon: Award },
    { number: "300%", label: "ROI moyen", icon: TrendingUp },
    { number: "24/7", label: "Support inclus", icon: Globe }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Nous restons à la pointe des dernières technologies IA pour offrir les meilleures solutions à nos clients."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque formation et chaque implémentation que nous réalisons."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Nous accompagnons nos clients à chaque étape de leur transformation digitale."
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Nos solutions permettent d'améliorer significativement la productivité de nos clients."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fondation de Twenty One Talents",
      description: "Création de l'entreprise avec la vision de démocratiser l'IA en entreprise."
    },
    {
      year: "2021",
      title: "Premiers succès",
      description: "100 premières entreprises formées avec un taux de satisfaction de 95%."
    },
    {
      year: "2022",
      title: "Expansion nationale",
      description: "Développement des services d'implémentation et expansion sur tout le territoire."
    },
    {
      year: "2023",
      title: "Leader du marché",
      description: "Reconnaissance comme leader français de la formation IA avec 300+ clients."
    },
    {
      year: "2024",
      title: "Innovation continue",
      description: "Lancement de nouvelles formations et services d'automatisation intelligente."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            🚀 Leader en IA & Automatisation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            L'Excellence au Service de Votre Transformation IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Depuis 2020, Twenty One Talents accompagne les entreprises françaises dans leur 
            transformation digitale grâce à l'intelligence artificielle. Notre mission : 
            rendre l'IA accessible et profitable pour tous.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Démocratiser l'intelligence artificielle en rendant ses bénéfices accessibles 
              à toutes les entreprises, quelle que soit leur taille ou leur secteur d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600">
              4 années d'innovation et de croissance au service de nos clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe d'Experts</h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés par l'IA et l'innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Jean Dupont</h3>
                <p className="text-blue-600 mb-2">CEO & Fondateur</p>
                <p className="text-gray-600 text-sm">Expert en IA avec 15 ans d'expérience dans l'innovation technologique</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c" 
                  alt="CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Marie Martin</h3>
                <p className="text-blue-600 mb-2">CTO</p>
                <p className="text-gray-600 text-sm">Spécialiste en machine learning et automatisation des processus</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Formation Director"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Pierre Laurent</h3>
                <p className="text-blue-600 mb-2">Directeur Formation</p>
                <p className="text-gray-600 text-sm">Formateur certifié avec plus de 1000 professionnels formés</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez Notre Communauté d'Innovateurs
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment Twenty One Talents peut transformer votre entreprise 
            avec l'intelligence artificielle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Nous contacter</Link>
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

export default About;
