
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Camera, Scan, Image } from "lucide-react";

const ComputerVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Computer Vision
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Donnez la vue à vos applications avec l'IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Voir avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Camera className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Détection d'objets</CardTitle>
                <CardDescription>Reconnaissance automatique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identifiez et localisez les objets.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Scan className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Segmentation</CardTitle>
                <CardDescription>Analyse pixel-level</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Segmentez les images précisément.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Classification</CardTitle>
                <CardDescription>Catégorisation intelligente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Classifiez automatiquement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComputerVision;
