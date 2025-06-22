
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  Building2, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const TemoignagesClients = () => {
  const temoignagesVideo = [
    {
      client: "Marie Dubois",
      poste: "Directrice Financière",
      entreprise: "TechnoFin Solutions",
      secteur: "Services Financiers",
      duree: "3:45",
      apercu: "Comment nous avons automatisé 90% de notre reporting financier",
      resultats: ["280% ROI", "75% temps économisé", "95% moins d'erreurs"],
      thumbnail: "/placeholder.svg"
    },
    {
      client: "Jean-Pierre Martin",
      poste: "CEO",
      entreprise: "InnoMed Group",
      secteur: "Santé",
      duree: "4:12",
      apercu: "Transformation digitale complète de nos processus médicaux",
      resultats: ["350% ROI", "40% patients en plus", "99% satisfaction"],
      thumbnail: "/placeholder.svg"
    },
    {
      client: "Sophie Laurent",
      poste: "Directrice des Opérations",
      entreprise: "RetailMax",
      secteur: "Commerce",
      duree: "2:58",
      apercu: "IA conversationnelle : +200% de conversion client",
      resultats: ["200% ROI", "85% moins de tickets", "92% satisfaction client"],
      thumbnail: "/placeholder.svg"
    }
  ];

  const temoignagesTexte = [
    {
      nom: "Alexandre Petit",
      poste: "Directeur Technique",
      entreprise: "AutoIndustrie SA",
      secteur: "Automobile",
      photo: "/placeholder.svg",
      note: 5,
      temoignage: "Les formations IA ont révolutionné notre chaîne de production. Nous avons implémenté une maintenance prédictive qui nous a fait économiser 2.3M€ en évitant les pannes. Le ROI a été atteint en 4 mois seulement !",
      metriques: {
        roi: "380%",
        economie: "2.3M€",
        implementation: "4 mois"
      }
    },
    {
      nom: "Camille Moreau",
      poste: "Responsable RH",
      entreprise: "ConseilPro",
      secteur: "Conseil",
      photo: "/placeholder.svg",
      note: 5,
      temoignage: "L'automatisation du recrutement nous a transformés. Screening automatique des CV, entretiens pré-qualifiés par IA... Nous traitons maintenant 10x plus de candidatures avec la même équipe. La qualité des recrutements s'est également améliorée de 60%.",
      metriques: {
        roi: "450%",
        economie: "180K€",
        implementation: "2 mois"
      }
    },
    {
      nom: "Thomas Rousseau",
      poste: "CFO",
      entreprise: "LogiTrans Express",
      secteur: "Logistique",
      photo: "/placeholder.svg",
      note: 5,
      temoignage: "L'optimisation de nos routes par IA nous fait économiser 35% sur les coûts de carburant et 40% sur les temps de livraison. Nos clients sont ravis et nous avons gagné 25% de parts de marché en 18 mois.",
      metriques: {
        roi: "320%",
        economie: "1.8M€",
        implementation: "6 mois"
      }
    },
    {
      nom: "Isabelle Girard",
      poste: "Directrice Marketing",
      entreprise: "FashionForward",
      secteur: "Mode",
      photo: "/placeholder.svg",
      note: 5,
      temoignage: "Nos campagnes marketing automatisées génèrent 5x plus de leads qualifiés. L'IA prédit les tendances mode avec 92% de précision, nous permettant d'optimiser nos stocks et d'augmenter nos marges de 30%.",
      metriques: {
        roi: "280%",
        economie: "950K€",
        implementation: "3 mois"
      }
    }
  ];

  const statistiquesClients = [
    { metric: "96%", description: "Taux de satisfaction client" },
    { metric: "340%", description: "ROI moyen obtenu" },
    { metric: "4.2 mois", description: "Retour sur investissement moyen" },
    { metric: "500+", description: "Entreprises transformées" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
            ⭐ 96% de satisfaction client
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ils ont Transformé leur Entreprise
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment nos clients ont obtenu des résultats exceptionnels grâce à nos formations IA et 
            aux automatisations mises en place.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statistiquesClients.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{stat.metric}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/formations">Rejoindre nos clients à succès</Link>
          </Button>
        </div>
      </section>

      {/* Témoignages Vidéo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Vidéo</h2>
            <p className="text-xl text-gray-600">Écoutez directement nos clients partager leurs succès</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {temoignagesVideo.map((video, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={`Témoignage ${video.client}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform" />
                      <p className="text-sm">{video.duree}</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {video.secteur}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.client}</CardTitle>
                  <p className="text-gray-600">{video.poste}, {video.entreprise}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{video.apercu}</p>
                  <div className="space-y-2">
                    {video.resultats.map((resultat, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {resultat}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Texte Détaillés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Détaillés</h2>
            <p className="text-xl text-gray-600">Des résultats concrets, mesurables et reproductibles</p>
          </div>

          <div className="space-y-8">
            {temoignagesTexte.map((temoignage, index) => (
              <Card key={index} className="max-w-4xl mx-auto hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={temoignage.photo} 
                        alt={temoignage.nom}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex justify-center mt-2">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start mb-4">
                        <Quote className="h-8 w-8 text-gray-300 mr-4 flex-shrink-0" />
                        <p className="text-lg text-gray-700 italic">
                          "{temoignage.temoignage}"
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">{temoignage.nom}</h4>
                          <p className="text-gray-600">{temoignage.poste}</p>
                          <p className="text-gray-600">{temoignage.entreprise}</p>
                          <Badge variant="outline" className="mt-1">
                            {temoignage.secteur}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-4 sm:mt-0">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{temoignage.metriques.roi}</div>
                            <p className="text-xs text-gray-600">ROI</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{temoignage.metriques.economie}</div>
                            <p className="text-xs text-gray-600">Économies</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{temoignage.metriques.implementation}</div>
                            <p className="text-xs text-gray-600">Mise en œuvre</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez ces Leaders de l'Innovation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Plus de 500 entreprises ont déjà transformé leurs opérations. 
            ROI moyen de 340% et retour sur investissement en moins de 5 mois.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-4" asChild>
              <Link to="/formations">
                Commencer ma transformation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-xl px-8 py-4" asChild>
              <Link to="/contact">Audit gratuit personnalisé</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemoignagesClients;
