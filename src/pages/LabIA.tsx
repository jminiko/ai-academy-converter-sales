
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Lightbulb, Rocket, Users, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const LabIA = () => {
  const projetsRecherche = [
    {
      titre: "IA Conversationnelle Multilingue",
      statut: "En développement",
      description: "Développement d'assistants IA capables de comprendre et répondre dans 50+ langues avec adaptation culturelle",
      technologies: ["GPT-4", "Azure Cognitive", "Transformer Models", "BERT"],
      progression: 75,
      impact: "Formation globale sans barrière linguistique",
      date: "Q3 2024"
    },
    {
      titre: "IA Adaptive Learning",
      statut: "Phase pilote",
      description: "Système d'apprentissage personnalisé qui s'adapte en temps réel au rythme et style d'apprentissage",
      technologies: ["Machine Learning", "Neural Networks", "Behavioral Analytics", "Reinforcement Learning"],
      progression: 60,
      impact: "Efficacité pédagogique +40%",
      date: "Q4 2024"
    },
    {
      titre: "IA Éthique & Transparence",
      statut: "Recherche fondamentale",
      description: "Framework pour garantir l'éthique et la transparence des décisions IA dans la formation",
      technologies: ["Explainable AI", "Fairness Metrics", "Bias Detection", "Ethical AI"],
      progression: 45,
      impact: "IA responsable et explicable",
      date: "Q1 2025"
    },
    {
      titre: "Métaverse Learning",
      statut: "Prototype",
      description: "Environnements d'apprentissage immersifs en réalité virtuelle pour la formation IA",
      technologies: ["VR/AR", "3D Modeling", "Spatial Computing", "Haptic Feedback"],
      progression: 30,
      impact: "Immersion totale dans l'apprentissage",
      date: "Q2 2025"
    }
  ];

  const innovations = [
    {
      icon: Lightbulb,
      titre: "IA Générative Éducative",
      description: "Génération automatique de contenus pédagogiques personnalisés",
      benefices: ["Contenu unique par apprenant", "Mise à jour automatique", "Multi-format"]
    },
    {
      icon: Brain,
      titre: "Neuro-Learning Analytics",
      description: "Analyse des patterns cérébraux pour optimiser l'apprentissage",
      benefices: ["Mémorisation améliorée", "Attention focalisée", "Stress réduit"]
    },
    {
      icon: Zap,
      titre: "Real-Time AI Coaching",
      description: "Coach IA personnel disponible 24/7 pour accompagner l'apprentissage",
      benefices: ["Support instantané", "Motivation continue", "Feedback personnalisé"]
    },
    {
      icon: Rocket,
      titre: "Simulation IA Avancée",
      description: "Environnements de simulation ultra-réalistes pour la pratique",
      benefices: ["Expérience pratique", "Pas de limite d'erreur", "Scénarios variés"]
    }
  ];

  const equipeRecherche = [
    {
      nom: "Dr. Sarah Chen",
      poste: "Directrice R&D",
      specialite: "Machine Learning & Neural Networks",
      experience: "15 ans",
      publications: "120+ publications",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    },
    {
      nom: "Prof. Alexandre Dubois",
      poste: "Chercheur Principal",
      specialite: "IA Éthique & Explicable",
      experience: "12 ans",
      publications: "85+ publications",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      nom: "Dr. Marie Laurent",
      poste: "Lead Data Scientist",
      specialite: "Learning Analytics & Behavioral AI",
      experience: "10 ans",
      publications: "65+ publications",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <FlaskConical className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Lab IA - Centre de Recherche
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Innovation et recherche de pointe en intelligence artificielle éducative. 
            Nous développons les technologies de formation de demain pour révolutionner l'apprentissage.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Découvrir nos recherches
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projets de Recherche Actifs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos équipes travaillent sur les innovations qui transformeront 
              l'éducation et la formation professionnelle.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {projetsRecherche.map((projet, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <CardTitle className="text-2xl">{projet.titre}</CardTitle>
                      <p className="text-gray-600 mt-2">{projet.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={
                          projet.statut === "En développement" ? "bg-green-100 text-green-800" :
                          projet.statut === "Phase pilote" ? "bg-blue-100 text-blue-800" :
                          projet.statut === "Prototype" ? "bg-orange-100 text-orange-800" :
                          "bg-purple-100 text-purple-800"
                        }
                      >
                        {projet.statut}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">
                        Livraison prévue : {projet.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-1">
                        {projet.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Progression :</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                            style={{width: `${projet.progression}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">{projet.progression}%</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Impact attendu :</h4>
                      <p className="text-sm text-gray-600">{projet.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Innovations Technologiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <innovation.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{innovation.titre}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{innovation.description}</p>
                  <h4 className="font-semibold mb-2">Bénéfices :</h4>
                  <ul className="space-y-1">
                    {innovation.benefices.map((benefice, beneficeIndex) => (
                      <li key={beneficeIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {benefice}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Équipe de Recherche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipeRecherche.map((membre, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={membre.image} 
                    alt={membre.nom}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{membre.nom}</CardTitle>
                  <p className="text-purple-600 font-semibold">{membre.poste}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Spécialité :</span>
                      <p className="text-gray-600">{membre.specialite}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Expérience :</span>
                      <p className="text-gray-600">{membre.experience}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Publications :</span>
                      <p className="text-gray-600">{membre.publications}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Collaborations & Partenariats</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous collaborons avec les plus grandes universités et centres de recherche 
              mondiaux pour faire avancer l'IA éducative.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🎓
                </div>
                <h3 className="font-semibold mb-2">Universités Partenaires</h3>
                <p className="text-gray-600 text-sm">MIT, Stanford, Sorbonne, EPFL</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🔬
                </div>
                <h3 className="font-semibold mb-2">Centres de Recherche</h3>
                <p className="text-gray-600 text-sm">INRIA, CNRS, CEA Tech</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🏢
                </div>
                <h3 className="font-semibold mb-2">Partenaires Industriels</h3>
                <p className="text-gray-600 text-sm">OpenAI, Microsoft, Google AI</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/contact">
                  Proposer une collaboration
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Publications scientifiques
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LabIA;
