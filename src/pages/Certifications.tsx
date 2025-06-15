
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Certifications = () => {
  const certifications = [
    {
      name: "Certification IA Générative Pro",
      level: "Professionnel",
      duration: "40h",
      price: "2 490€",
      skills: ["Prompt Engineering", "Fine-tuning", "RAG", "Agents IA"],
      badge: "🏆"
    },
    {
      name: "Expert Automatisation IA",
      level: "Expert",
      duration: "60h",
      price: "3 490€",
      skills: ["RPA", "Workflows", "API Integration", "Monitoring"],
      badge: "⭐"
    },
    {
      name: "Consultant IA Business",
      level: "Stratégique",
      duration: "80h",
      price: "4 990€",
      skills: ["ROI IA", "Change Management", "Audit IA", "Governance"],
      badge: "💎"
    }
  ];

  const benefits = [
    "Reconnaissance officielle de vos compétences",
    "Certification reconnue par l'industrie",
    "Accès à notre réseau d'experts",
    "Mise à jour continue des certifications",
    "Support post-certification",
    "Badge numérique LinkedIn"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Certifications IA
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Validez officiellement vos compétences en intelligence artificielle 
            avec nos certifications reconnues par l'industrie
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Découvrir nos certifications
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-yellow-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{cert.badge}</div>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">{cert.level}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {cert.duration}
                      </span>
                      <span className="text-2xl font-bold text-yellow-600">{cert.price}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Compétences certifiées :</h4>
                      <ul className="space-y-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to="/contact">S'inscrire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Avantages de nos Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Processus de Certification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Formation</h3>
              <p className="text-gray-600">Suivez notre programme de formation complet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Projet</h3>
              <p className="text-gray-600">Réalisez un projet pratique supervisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Examen</h3>
              <p className="text-gray-600">Passez l'examen de certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Recevez votre certification officielle</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
