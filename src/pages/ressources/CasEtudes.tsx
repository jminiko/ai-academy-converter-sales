
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp, Users, Clock } from "lucide-react";

const CasEtudes = () => {
  const caseStudies = [
    {
      title: "Transformation digitale bancaire",
      description: "Comment une banque a automatisé 70% de ses processus",
      sector: "Finance",
      results: "+45% productivité",
      duration: "6 mois"
    },
    {
      title: "IA prédictive en santé",
      description: "Diagnostic précoce de maladies avec 95% de précision",
      sector: "Santé",
      results: "95% précision",
      duration: "12 mois"
    },
    {
      title: "Optimisation logistique",
      description: "Réduction des coûts de transport de 30%",
      sector: "Transport",
      results: "-30% coûts",
      duration: "4 mois"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Cas d'Études IA
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Découvrez nos succès et retours d'expérience en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Explorer les cas d'études
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{study.sector}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-slate-600 mr-2" />
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{study.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{study.results}</span>
                    <Button variant="outline" size="sm">Lire l'étude</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasEtudes;
