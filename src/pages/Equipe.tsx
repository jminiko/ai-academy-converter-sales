
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Linkedin, Twitter, Mail, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Equipe = () => {
  const membres = [
    {
      nom: "Alexandre Dubois",
      poste: "CEO & Fondateur",
      specialite: "Stratégie IA & Leadership",
      experience: "15 ans",
      description: "Expert en transformation digitale, Alexandre a accompagné plus de 200 entreprises dans leur adoption de l'IA.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      certifications: ["AWS ML Specialist", "Microsoft AI Engineer", "Google Cloud AI"]
    },
    {
      nom: "Sophie Martin",
      poste: "CTO & Co-fondatrice",
      specialite: "IA Générative & Automatisation",
      experience: "12 ans",
      description: "Ancienne ingénieure chez OpenAI, Sophie maîtrise tous les aspects techniques de l'IA moderne.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c",
      certifications: ["OpenAI Partner", "TensorFlow Developer", "Azure AI Specialist"]
    },
    {
      nom: "Pierre Laurent",
      poste: "Directeur Formations",
      specialite: "Pédagogie IA & Formation",
      experience: "10 ans",
      description: "Expert en formation digitale, Pierre a formé plus de 5000 professionnels aux technologies IA.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      certifications: ["Formateur Certifié", "Scrum Master", "Design Thinking"]
    },
    {
      nom: "Marie Rousseau",
      poste: "Lead Consultant IA",
      specialite: "Implémentation & Conseil",
      experience: "8 ans",
      description: "Spécialiste en déploiement d'solutions IA en entreprise, Marie excelle dans l'accompagnement au changement.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      certifications: ["PMP", "ITIL", "Change Management"]
    },
    {
      nom: "Thomas Chen",
      poste: "Architecte Solutions",
      specialite: "Architecture IA & APIs",
      experience: "9 ans",
      description: "Architecte logiciel passionné par l'IA, Thomas conçoit des solutions robustes et scalables.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128",
      certifications: ["Solutions Architect", "Kubernetes", "DevOps"]
    },
    {
      nom: "Julie Moreau",
      poste: "Responsable R&D",
      specialite: "Recherche & Innovation",
      experience: "6 ans",
      description: "Docteure en IA, Julie mène nos recherches sur les technologies émergentes et les applications futures.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      certifications: ["PhD IA", "Researcher", "Publications"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Notre Équipe d'Experts IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Une équipe de passionnés dédiée à votre réussite dans l'intelligence artificielle. 
            Plus de 60 ans d'expérience cumulée en IA et transformation digitale.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Rencontrer l'équipe
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Experts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membres.map((membre, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <img 
                    src={membre.image} 
                    alt={membre.nom}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{membre.nom}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 mx-auto">{membre.poste}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="font-semibold text-gray-700">{membre.specialite}</p>
                    <p className="text-sm text-gray-500">{membre.experience} d'expérience</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{membre.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-yellow-500" />
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {membre.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                    <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-600 cursor-pointer" />
                    <Mail className="h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Rejoindre Notre Équipe</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous recherchons constamment de nouveaux talents passionnés par l'IA 
            pour rejoindre notre équipe en croissance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">Experts IA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">60+</div>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Certifications</p>
            </div>
          </div>
          
          <Button size="lg" asChild>
            <Link to="/contact">
              Postuler maintenant
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipe;
