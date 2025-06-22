
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, Puzzle, Settings } from "lucide-react";

const IASymbolique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Symbolique</h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle basée sur la logique et les symboles
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Découvrir l'IA symbolique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Logique</h3>
              <p className="text-gray-600">Raisonnement formel</p>
            </Card>
            <Card className="p-6 text-center">
              <Puzzle className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Règles</h3>
              <p className="text-gray-600">Systèmes experts</p>
            </Card>
            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Inférence</h3>
              <p className="text-gray-600">Déduction automatique</p>
            </Card>
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Connaissances</h3>
              <p className="text-gray-600">Bases de connaissances</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IASymbolique;
