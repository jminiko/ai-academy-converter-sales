
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, Network, Shield } from "lucide-react";

const PartenaireNVIDIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Partenaire NVIDIA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Accélération GPU et calcul haute performance pour l'IA
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Accélérer avec NVIDIA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>CUDA</CardTitle>
                <CardDescription>
                  Calcul parallèle GPU
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploitez la puissance des GPU pour l'entraînement IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Network className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>TensorRT</CardTitle>
                <CardDescription>
                  Optimisation d'inférence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez l'inférence de vos modèles deep learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Omniverse</CardTitle>
                <CardDescription>
                  Collaboration 3D temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plateforme de collaboration pour la création 3D et la simulation.
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

export default PartenaireNVIDIA;
