
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Database, Cloud, Zap } from "lucide-react";

const Firebase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Flame className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Firebase & IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Développez des applications IA avec Firebase
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Déployer avec Firebase
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Firestore ML</CardTitle>
                <CardDescription>
                  Base de données intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stockez et synchronisez vos données IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Cloud Functions</CardTitle>
                <CardDescription>
                  Serverless IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exécutez vos modèles IA sans serveur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>ML Kit</CardTitle>
                <CardDescription>
                  IA mobile native
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intégrez l'IA dans vos apps mobiles.
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

export default Firebase;
