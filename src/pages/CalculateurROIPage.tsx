
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CalculateurROI from "@/components/CalculateurROI";
import FormulaireCapture from "@/components/FormulaireCapture";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Clock } from "lucide-react";

const CalculateurROIPage = () => {
  const garanties = [
    {
      titre: "ROI Garanti 300% ou Remboursé",
      description: "Si vous n'atteignez pas 300% de ROI en 24 mois, nous vous remboursons intégralement.",
      icon: TrendingUp
    },
    {
      titre: "Support 6 Mois Inclus",
      description: "Accompagnement personnalisé pour garantir la réussite de vos automatisations.",
      icon: Users
    },
    {
      titre: "Résultats sous 90 Jours",
      description: "Premiers bénéfices mesurables dès les 3 premiers mois ou session de rattrapage gratuite.",
      icon: Clock
    }
  ];

  const temoignagesRapides = [
    {
      entreprise: "TechCorp",
      secteur: "IT Services",
      resultat: "420% ROI en 18 mois",
      temoignage: "Le calculateur était précis à 95%. Résultats dépassés !"
    },
    {
      entreprise: "MedGroup",
      secteur: "Santé",
      resultat: "280% ROI en 12 mois", 
      temoignage: "Automatisation de 40 processus. Transformation totale."
    },
    {
      entreprise: "RetailMax",
      secteur: "Commerce",
      resultat: "350% ROI en 15 mois",
      temoignage: "IA conversationnelle = +200% conversion client."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-4 py-2">
            💰 Calculateur ROI Personnalisé
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Calculez Votre ROI IA en 2 Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez exactement combien vous pouvez économiser avec l'automatisation IA. 
            Basé sur les résultats de 500+ entreprises clientes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <p className="text-gray-600">Précision calculateur</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">340%</div>
              <p className="text-gray-600">ROI moyen clients</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600">3.2 mois</div>
              <p className="text-gray-600">Retour investissement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur ROI */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <CalculateurROI />
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Garanties ROI</h2>
            <p className="text-xl text-gray-600">Votre réussite est notre priorité absolue</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {garanties.map((garantie, index) => (
              <Card key={index} className="text-center border-2 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <garantie.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{garantie.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{garantie.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Rapides */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils Ont Atteint Ces ROI</h2>
            <p className="text-xl text-gray-600">Résultats réels de nos clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {temoignagesRapides.map((temoignage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {temoignage.resultat}
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {temoignage.secteur}
                    </Badge>
                    <h4 className="font-bold">{temoignage.entreprise}</h4>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 italic">"{temoignage.temoignage}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Prêt à Concrétiser Ce ROI ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Obtenez un audit personnalisé et votre roadmap d'automatisation
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <FormulaireCapture 
              variant="audit"
              titre="Audit IA Personnalisé"
              description="Validation de votre ROI + Roadmap d'implémentation"
              incitation="🎯 Audit gratuit + Rapport ROI détaillé"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalculateurROIPage;
