
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Clock, Activity, Radio } from "lucide-react";

const RealtimeAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            IA Temps Réel
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Développez des systèmes IA ultra-rapides et réactifs
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Accélérer l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Latence ultra-faible</CardTitle>
                <CardDescription>
                  Millisecond response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Réponses en temps réel garanties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Streaming ML</CardTitle>
                <CardDescription>
                  Machine Learning continu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprentissage sur flux de données.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Edge Computing</CardTitle>
                <CardDescription>
                  IA distribuée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calculs IA à la périphérie du réseau.
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

export default RealtimeAI;
