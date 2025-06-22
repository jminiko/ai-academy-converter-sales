
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ClipboardCheck, TrendingUp, Award } from "lucide-react";

const AuditConformite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Audit Conformité
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Service d'audit complet pour la conformité de vos systèmes IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Programmer un audit
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <ClipboardCheck className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Évaluation complète</CardTitle>
                <CardDescription>Analyse approfondie</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluation complète de tous vos systèmes IA.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Plan d'amélioration</CardTitle>
                <CardDescription>Recommandations ciblées</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recevez un plan d'action détaillé pour la mise en conformité.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Certification finale</CardTitle>
                <CardDescription>Validation officielle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Obtenez la certification de conformité après audit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuditConformite;
