
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Check, X, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Tarifs = () => {
  const plans = [
    {
      nom: "Starter",
      prix: "2 490",
      periode: "par personne",
      description: "Parfait pour découvrir l'IA",
      populaire: false,
      fonctionnalites: [
        "Formation IA Générative (2 jours)",
        "Accès plateforme 3 mois",
        "Support email",
        "Certificat de completion",
        "1 session de suivi",
        "Ressources téléchargeables"
      ],
      nonInclus: [
        "Projets personnalisés",
        "Support téléphonique",
        "Consulting individuel"
      ]
    },
    {
      nom: "Professional",
      prix: "4 990",
      periode: "par personne",
      description: "Solution complète pour professionnels",
      populaire: true,
      fonctionnalites: [
        "Formation complète (5 jours)",
        "Accès plateforme 12 mois",
        "Support prioritaire",
        "Certification officielle",
        "3 sessions de suivi",
        "Projets pratiques",
        "Mentoring individuel",
        "Accès communauté"
      ],
      nonInclus: [
        "Implémentation en entreprise",
        "Formation sur site"
      ]
    },
    {
      nom: "Enterprise",
      prix: "Sur devis",
      periode: "équipe/entreprise",
      description: "Solution sur-mesure pour entreprises",
      populaire: false,
      fonctionnalites: [
        "Formation personnalisée",
        "Accès illimité",
        "Support dédié 24/7",
        "Certifications multiples",
        "Suivi continu 12 mois",
        "Implémentation complète",
        "Formation sur site",
        "ROI garanti",
        "Consulting stratégique"
      ],
      nonInclus: []
    }
  ];

  const services = [
    {
      nom: "Consulting IA",
      prixMin: "1 500",
      prixMax: "5 000",
      unite: "par jour",
      description: "Analyse et stratégie IA personnalisée"
    },
    {
      nom: "Implémentation",
      prixMin: "10 000",
      prixMax: "50 000",
      unite: "par projet",
      description: "Développement et déploiement de solutions IA"
    },
    {
      nom: "Support & Maintenance",
      prixMin: "500",
      prixMax: "2 000",
      unite: "par mois",
      description: "Accompagnement continu et maintenance"
    },
    {
      nom: "Formation Sur-Mesure",
      prixMin: "5 000",
      prixMax: "20 000",
      unite: "par session",
      description: "Formation personnalisée en entreprise"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Tarifs Transparents
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Des prix clairs et compétitifs pour tous vos besoins en formation et 
            implémentation IA. Pas de frais cachés, que des résultats garantis.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Voir nos offres
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Formations IA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.populaire ? 'border-2 border-green-500 scale-105' : ''}`}>
                {plan.populaire && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1 flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.nom}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-green-600">
                      {plan.prix === "Sur devis" ? plan.prix : `${plan.prix}€`}
                    </span>
                    {plan.prix !== "Sur devis" && (
                      <p className="text-gray-600 mt-1">{plan.periode}</p>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.fonctionnalites.map((fonctionnalite, featIndex) => (
                      <div key={featIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{fonctionnalite}</span>
                      </div>
                    ))}
                    
                    {plan.nonInclus.map((nonInclu, featIndex) => (
                      <div key={featIndex} className="flex items-center opacity-50">
                        <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-sm line-through">{nonInclu}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.populaire ? 'bg-green-600 hover:bg-green-700' : ''}`} 
                    variant={plan.populaire ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      {plan.prix === "Sur devis" ? "Demander un devis" : "Choisir ce plan"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services Additionnels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.nom}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">
                    {service.prixMin}€ - {service.prixMax}€
                    <span className="text-sm font-normal text-gray-600 ml-1">
                      {service.unite}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Garantie Satisfaction</h2>
            <p className="text-xl mb-6 opacity-90">
              Satisfait ou remboursé sous 30 jours. Nous sommes confiants 
              dans la qualité de nos formations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">30 jours</div>
                <p className="text-green-100">Garantie remboursement</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-green-100">Support client</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0€</div>
                <p className="text-green-100">Frais cachés</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifs;
