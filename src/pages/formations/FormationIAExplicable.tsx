
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, BookOpen, ShieldCheck, Users } from "lucide-react";

const FormationIAExplicable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Explicable
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transparence et interprétabilité des modèles IA
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Expliquer l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Interprétabilité</CardTitle>
                <CardDescription>Modèles transparents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rendez vos modèles compréhensibles.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Conformité réglementaire</CardTitle>
                <CardDescription>Respect des normes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Alignez-vous aux réglementations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Acceptation utilisateur</CardTitle>
                <CardDescription>Confiance renforcée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gagnez la confiance des utilisateurs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAExplicable;
