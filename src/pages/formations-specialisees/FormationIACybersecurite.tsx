
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, AlertTriangle, Eye } from "lucide-react";

const FormationIACybersecurite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Formation IA Cybersécurité</h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protégez vos systèmes avec l'intelligence artificielle avancée.
            Détection d'intrusions, analyse comportementale et réponse automatisée.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white">Détection IA</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Analyse Comportementale</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Réponse Automatisée</Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Détection de Menaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identification proactive des cybermenaces par IA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Surveillance Continue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monitoring 24/7 avec analyse comportementale</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Protection Adaptative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sécurité qui s'adapte aux nouvelles menaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIACybersecurite;
