
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Clock, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const PythonIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Python pour l'IA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Maîtrisez Python pour développer des solutions d'intelligence artificielle robustes
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            S'inscrire maintenant
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Durée</CardTitle>
              </CardHeader>
              <CardContent>
                <p>40 heures de formation intensive</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Présentiel et distanciel</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Certifiée par Twenty One Talents</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PythonIA;
