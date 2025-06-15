
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Code, Zap, Smartphone } from "lucide-react";

const TensorFlowJS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            TensorFlow.js
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Machine Learning dans le navigateur avec TensorFlow.js
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Apprendre TensorFlow.js
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Code className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>JavaScript ML</CardTitle>
                <CardDescription>
                  Machine learning directement en JavaScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez des modèles ML qui s'exécutent dans le navigateur sans serveur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Accélération GPU et WebGL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploitez la puissance du GPU pour des calculs ML rapides.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Mobile Ready</CardTitle>
                <CardDescription>
                  Applications mobiles avec React Native
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déployez vos modèles sur mobile avec React Native.
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

export default TensorFlowJS;
