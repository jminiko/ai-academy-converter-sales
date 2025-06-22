
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Scale, Users, Eye } from "lucide-react";

const EthiqueIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Éthique IA
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Développez une intelligence artificielle éthique et responsable
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Promouvoir l'éthique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Scale className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Équité algorithmique</CardTitle>
                <CardDescription>Justice pour tous</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Éliminez les biais et assurez l'équité de vos algorithmes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Impact sociétal</CardTitle>
                <CardDescription>Bien-être collectif</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évaluez l'impact sociétal de vos solutions IA.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Transparence</CardTitle>
                <CardDescription>IA explicable</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rendez vos systèmes IA transparents et explicables.
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

export default EthiqueIA;
