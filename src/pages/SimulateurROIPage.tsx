
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SimulateurROI from "@/components/simulateur/SimulateurROI";
import { FAQSimulateur } from "@/components/simulateur/FAQSimulateur";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const SimulateurROIPage = () => {
  const statsClients = [
    {
      titre: "Précision Calculateur",
      valeur: "95%",
      description: "Nos prédictions correspondent aux résultats réels",
      icon: TrendingUp
    },
    {
      titre: "ROI Moyen Clients",
      valeur: "340%",
      description: "Retour sur investissement moyen constaté",
      icon: Star
    },
    {
      titre: "Temps de Déploiement",
      valeur: "3.2 mois",
      description: "Délai moyen pour atteindre le ROI calculé",
      icon: Clock
    },
    {
      titre: "Entreprises Accompagnées",
      valeur: "500+",
      description: "Projets d'automatisation réussis",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
            🎯 Simulateur ROI Gratuit
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Calculez Votre ROI Automatisation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez en 2 minutes exactement combien vous pouvez économiser 
            avec l'automatisation IA. Basé sur 500+ projets clients réels.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {statsClients.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{stat.valeur}</div>
                <p className="text-sm text-gray-600">{stat.titre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulateur Principal */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SimulateurROI />
        </div>
      </section>

      {/* Témoignages Express */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ils Ont Atteint Ces ROI
            </h2>
            <p className="text-xl text-gray-600">Résultats réels de nos clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">420% ROI</div>
                <Badge variant="outline" className="mb-3">Industrie</Badge>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Le calculateur était précis à 98%. Production automatisée, équipes libérées."
                </p>
                <p className="text-sm font-semibold">AutoCorp Industries</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">280% ROI</div>
                <Badge variant="outline" className="mb-3">Services</Badge>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Facturation 100% automatisée. Plus d'erreurs, clients satisfaits."
                </p>
                <p className="text-sm font-semibold">ServicePro SARL</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">350% ROI</div>
                <Badge variant="outline" className="mb-3">E-commerce</Badge>
                <p className="text-sm text-gray-700 italic mb-3">
                  "IA marketing génère 5x plus de leads. Croissance explosive."
                </p>
                <p className="text-sm font-semibold">ShopTech Online</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSimulateur />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimulateurROIPage;
