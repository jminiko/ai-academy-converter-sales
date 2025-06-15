
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, Database, Code } from "lucide-react";

const NVIDIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Technologies NVIDIA
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Exploitez la puissance des GPU NVIDIA pour l'IA et le calcul haute performance
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Accélérer l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>CUDA Programming</CardTitle>
                <CardDescription>
                  Programmation parallèle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maîtrisez la programmation GPU avec CUDA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>TensorRT</CardTitle>
                <CardDescription>
                  Optimisation d'inférence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos modèles pour la production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Rapids</CardTitle>
                <CardDescription>
                  Data science GPU
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accélérez vos pipelines de data science.
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

export default NVIDIA;
