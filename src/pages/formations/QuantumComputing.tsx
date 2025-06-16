
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Zap, Clock, Users } from "lucide-react";

const QuantumComputing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Informatique Quantique
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explorez les possibilités révolutionnaires du calcul quantique
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Explorer le quantique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Algorithmes quantiques</CardTitle>
                <CardDescription>
                  Calcul révolutionnaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez les algorithmes quantiques fondamentaux.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Durée</CardTitle>
                <CardDescription>
                  40 heures de formation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formation intensive sur 5 jours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-violet-600 mb-4" />
                <CardTitle>Groupes restreints</CardTitle>
                <CardDescription>
                  Maximum 8 participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprentissage personnalisé et pratique.
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

export default QuantumComputing;
