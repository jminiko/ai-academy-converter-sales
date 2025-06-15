
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, ExternalLink, Calendar, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Projets = () => {
  const projets = [
    {
      titre: "Assistant IA Bancaire",
      client: "Banque Nationale",
      secteur: "Finance",
      duree: "6 mois",
      equipe: "8 personnes",
      description: "Développement d'un assistant IA pour automatiser le service client et améliorer l'expérience utilisateur.",
      technologies: ["GPT-4", "Azure OpenAI", "React", "Python", "MongoDB"],
      resultats: [
        "85% de réduction du temps de réponse",
        "40% d'augmentation de la satisfaction client",
        "60% de réduction des coûts opérationnels"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      statut: "Terminé",
      roi: "300%"
    },
    {
      titre: "Automatisation Marketing IA",
      client: "TechCorp Solutions",
      secteur: "Technologie",
      duree: "4 mois",
      equipe: "6 personnes",
      description: "Mise en place d'un système d'automatisation marketing basé sur l'IA pour optimiser les campagnes.",
      technologies: ["Claude AI", "Zapier", "HubSpot API", "Python", "PostgreSQL"],
      resultats: [
        "200% d'amélioration du taux de conversion",
        "50% de réduction du temps de création de contenu",
        "120% d'augmentation des leads qualifiés"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      statut: "Terminé",
      roi: "250%"
    },
    {
      titre: "IA de Diagnostic Médical",
      client: "Clinique Médicale Saint-Antoine",
      secteur: "Santé",
      duree: "8 mois",
      equipe: "10 personnes",
      description: "Développement d'un système d'aide au diagnostic médical basé sur l'analyse d'images radiologiques.",
      technologies: ["TensorFlow", "Computer Vision", "DICOM", "React", "PostgreSQL"],
      resultats: [
        "95% de précision diagnostique",
        "70% de réduction du temps d'analyse",
        "Amélioration de 40% de la détection précoce"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      statut: "En cours",
      roi: "En cours"
    },
    {
      titre: "Chatbot E-commerce Intelligent",
      client: "Fashion Retail Group",
      secteur: "E-commerce",
      duree: "3 mois",
      equipe: "5 personnes",
      description: "Création d'un chatbot IA pour améliorer l'expérience d'achat en ligne et augmenter les ventes.",
      technologies: ["OpenAI API", "Shopify", "Node.js", "Redis", "WebSocket"],
      resultats: [
        "35% d'augmentation des ventes",
        "90% de satisfaction client",
        "24/7 support automatisé"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      statut: "Terminé",
      roi: "180%"
    },
    {
      titre: "Optimisation Logistique IA",
      client: "LogiFlow International",
      secteur: "Logistique",
      duree: "5 mois",
      equipe: "7 personnes",
      description: "Système d'optimisation des routes et gestion prédictive des stocks basé sur l'intelligence artificielle.",
      technologies: ["Machine Learning", "Google Maps API", "Python", "Apache Kafka", "Elasticsearch"],
      resultats: [
        "25% de réduction des coûts de transport",
        "40% d'amélioration de la précision des stocks",
        "30% de réduction des délais de livraison"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      statut: "Terminé",
      roi: "220%"
    },
    {
      titre: "Assistant RH Intelligent",
      client: "Human Resources Plus",
      secteur: "Ressources Humaines",
      duree: "4 mois",
      equipe: "6 personnes",
      description: "Développement d'un assistant IA pour automatiser les processus RH et améliorer le recrutement.",
      technologies: ["GPT-4", "Azure Cognitive Services", "React", "Node.js", "MongoDB"],
      resultats: [
        "60% de réduction du temps de recrutement",
        "80% d'amélioration du matching candidats",
        "45% de réduction des coûts RH"
      ],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      statut: "En cours",
      roi: "En cours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <FolderOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Nos Projets IA Réalisés
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment nous avons transformé des entreprises avec des solutions IA 
            innovantes et sur-mesure. Plus de 100 projets réussis à travers tous les secteurs.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Voir tous nos projets
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Portfolio de Réussites</h2>
            <p className="text-lg text-gray-600">
              Des résultats concrets et mesurables pour nos clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projets.map((projet, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={projet.statut === "Terminé" ? "bg-green-500" : "bg-blue-500"}
                    >
                      {projet.statut}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{projet.titre}</CardTitle>
                      <p className="text-gray-600">{projet.client}</p>
                      <Badge variant="outline" className="mt-2">{projet.secteur}</Badge>
                    </div>
                    {projet.roi !== "En cours" && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{projet.roi}</div>
                        <p className="text-sm text-gray-500">ROI</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{projet.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      {projet.duree}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      {projet.equipe}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-1">
                      {projet.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Résultats obtenus :
                    </h4>
                    <ul className="space-y-1">
                      {projet.resultats.map((resultat, resIndex) => (
                        <li key={resIndex} className="text-sm flex items-center">
                          <Award className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {resultat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Étude de cas complète <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Statistiques de Nos Projets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
              <p className="text-gray-600">ROI moyen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <p className="text-gray-600">Secteurs d'activité</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique et conçu pour répondre aux défis spécifiques 
            de nos clients. Découvrez comment nous pouvons transformer votre entreprise.
          </p>
          
          <Button size="lg" asChild>
            <Link to="/contact">
              Discuter de votre projet
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projets;
