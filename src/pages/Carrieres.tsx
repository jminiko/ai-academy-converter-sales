
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Coffee, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Carrieres = () => {
  const offres = [
    {
      titre: "Consultant Senior IA",
      type: "CDI",
      localisation: "Paris/Remote",
      salaire: "60-80k€",
      experience: "5+ ans",
      description: "Accompagner nos clients dans leurs projets de transformation IA. Expertise technique et sens du conseil requis.",
      competences: ["IA Générative", "Consulting", "Python", "Management"],
      urgent: true,
      datePublication: "Il y a 2 jours"
    },
    {
      titre: "Formateur IA Générative",
      type: "CDI",
      localisation: "Paris/Lyon",
      salaire: "45-60k€", 
      experience: "3+ ans",
      description: "Concevoir et animer des formations sur l'IA générative pour nos clients entreprises.",
      competences: ["Formation", "ChatGPT", "Pédagogie", "Communication"],
      urgent: false,
      datePublication: "Il y a 5 jours"
    },
    {
      titre: "Développeur Solutions IA",
      type: "CDI",
      localisation: "Remote",
      salaire: "50-70k€",
      experience: "4+ ans",
      description: "Développer des solutions IA innovantes pour automatiser les processus de nos clients.",
      competences: ["Python", "APIs", "Machine Learning", "DevOps"],
      urgent: false,
      datePublication: "Il y a 1 semaine"
    },
    {
      titre: "Chef de Projet IA",
      type: "CDI",
      localisation: "Paris",
      salaire: "55-75k€",
      experience: "5+ ans",
      description: "Piloter des projets d'implémentation IA complexes chez nos clients grands comptes.",
      competences: ["Gestion de projet", "IA", "Relation client", "Agile"],
      urgent: true,
      datePublication: "Il y a 3 jours"
    },
    {
      titre: "Responsable Marketing Digital",
      type: "CDI",
      localisation: "Paris",
      salaire: "45-60k€",
      experience: "3+ ans",
      description: "Développer notre stratégie marketing digital et générer des leads qualifiés.",
      competences: ["Marketing Digital", "SEO/SEA", "Content", "Analytics"],
      urgent: false,
      datePublication: "Il y a 4 jours"
    },
    {
      titre: "Stage - Assistant Recherche IA",
      type: "Stage",
      localisation: "Paris",
      salaire: "1200€/mois",
      experience: "Étudiant Bac+4/5",
      description: "Participer à nos travaux de recherche sur les nouvelles technologies IA.",
      competences: ["Recherche", "Python", "Machine Learning", "Rédaction"],
      urgent: false,
      datePublication: "Il y a 6 jours"
    }
  ];

  const avantages = [
    {
      icone: Heart,
      titre: "Culture d'entreprise",
      description: "Environnement bienveillant, collaboration et passion de l'innovation"
    },
    {
      icone: TrendingUp,
      titre: "Évolution rapide",
      description: "Opportunités de croissance dans une entreprise en forte expansion"
    },
    {
      icone: Coffee,
      titre: "Flexibilité",
      description: "Télétravail possible, horaires flexibles, équilibre vie pro/perso"
    },
    {
      icone: Award,
      titre: "Formation continue",
      description: "Budget formation, certifications, conférences, veille technologique"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Rejoignez Notre Équipe
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Construisez l'avenir de l'IA avec nous. Twenty One Talents recrute 
            des talents passionnés pour révolutionner l'adoption de l'intelligence artificielle.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Voir nos offres
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez une équipe de 25+ experts passionnés qui transforment 
              la façon dont les entreprises utilisent l'intelligence artificielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {avantages.map((avantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <avantage.icone className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{avantage.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{avantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                <p className="text-gray-600">Collaborateurs</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">3 ans</div>
                <p className="text-gray-600">Ancienneté moyenne</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <p className="text-gray-600">Taux de rétention</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.8/5</div>
                <p className="text-gray-600">Satisfaction interne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Offres d'Emploi</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offres.map((offre, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${offre.urgent ? 'border-l-4 border-red-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{offre.titre}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className="bg-emerald-100 text-emerald-800">{offre.type}</Badge>
                        <Badge variant="outline">{offre.experience}</Badge>
                        {offre.urgent && <Badge className="bg-red-100 text-red-800">Urgent</Badge>}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      {offre.datePublication}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {offre.localisation}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {offre.salaire}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{offre.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Compétences requises :</h4>
                    <div className="flex flex-wrap gap-2">
                      {offre.competences.map((competence, compIndex) => (
                        <Badge key={compIndex} variant="outline" className="text-xs">
                          {competence}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                      Postuler
                    </Button>
                    <Button variant="outline" size="sm">
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Candidature Spontanée</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanée !
            </p>
            
            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-center">Nous Recherchons Toujours</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Profils Techniques</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Développeurs IA/ML</li>
                      <li>• Data Scientists</li>
                      <li>• Architectes Solutions</li>
                      <li>• DevOps/MLOps</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Profils Business</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Consultants IA</li>
                      <li>• Formateurs/Experts</li>
                      <li>• Chefs de Projet</li>
                      <li>• Business Developers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link to="/contact">
                      Envoyer ma candidature
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Construisons ensemble l'avenir de l'intelligence artificielle en entreprise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Postuler maintenant
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" asChild>
              <Link to="/equipe">
                Rencontrer l'équipe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carrieres;
