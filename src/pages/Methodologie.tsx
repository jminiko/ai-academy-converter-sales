
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Methodologie = () => {
  const etapes = [
    {
      numero: "01",
      titre: "Évaluation des Besoins",
      description: "Analyse approfondie de vos objectifs et contraintes",
      duree: "1-2 jours",
      livrables: ["Audit compétences", "Définition objectifs", "Plan de formation"]
    },
    {
      numero: "02",
      titre: "Formation Théorique",
      description: "Acquisition des concepts fondamentaux de l'IA",
      duree: "2-3 jours",
      livrables: ["Cours interactifs", "Documentation", "Exercices pratiques"]
    },
    {
      numero: "03",
      titre: "Ateliers Pratiques",
      description: "Mise en application sur des cas réels d'entreprise",
      duree: "3-5 jours",
      livrables: ["Projets concrets", "Accompagnement expert", "Résultats mesurables"]
    },
    {
      numero: "04",
      titre: "Certification",
      description: "Validation des compétences acquises",
      duree: "1 jour",
      livrables: ["Examen pratique", "Certification officielle", "Plan de suivi"]
    }
  ];

  const principes = [
    {
      icon: Target,
      titre: "Approche Personnalisée",
      description: "Chaque formation est adaptée aux spécificités de votre secteur et vos objectifs business."
    },
    {
      icon: Users,
      titre: "Apprentissage Collaboratif",
      description: "Groupes restreints pour favoriser les échanges et l'entraide entre participants."
    },
    {
      icon: Lightbulb,
      titre: "Learning by Doing",
      description: "80% de pratique sur des projets réels pour une application immédiate."
    },
    {
      icon: CheckCircle,
      titre: "Suivi Post-Formation",
      description: "Accompagnement continu pour garantir la mise en œuvre des acquis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Notre Méthodologie de Formation
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Une approche éprouvée qui garantit l'acquisition de compétences IA 
            concrètes et directement applicables en entreprise
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Découvrir notre approche
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Les 4 Étapes de Notre Processus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapes.map((etape, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {etape.duree}
                </div>
                <CardHeader className="pb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">{etape.numero}</div>
                  <CardTitle className="text-xl">{etape.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{etape.description}</p>
                  
                  <h4 className="font-semibold mb-2">Livrables :</h4>
                  <ul className="space-y-1">
                    {etape.livrables.map((livrable, livrableIndex) => (
                      <li key={livrableIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {livrable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Principes Pédagogiques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principes.map((principe, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <principe.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{principe.titre}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principe.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Résultats Garantis</h2>
            <p className="text-xl mb-6 opacity-90">
              96% de nos apprenants appliquent leurs nouvelles compétences IA 
              dans les 30 jours suivant la formation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">96%</div>
                <p className="text-green-100">Taux de satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <p className="text-green-100">Mise en application</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">12 mois</div>
                <p className="text-green-100">Suivi inclus</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Démarrer ma formation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodologie;
