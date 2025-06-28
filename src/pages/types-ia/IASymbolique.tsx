
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Code, Logic, Puzzle } from "lucide-react";

const IASymbolique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA Symbolique</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Intelligence artificielle basée sur la logique et les symboles
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            Explorer l'IA symbolique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Systèmes experts</h3>
              <p className="text-gray-600">Règles et connaissances</p>
            </Card>
            <Card className="p-6 text-center">
              <Logic className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Logique formelle</h3>
              <p className="text-gray-600">Raisonnement structuré</p>
            </Card>
            <Card className="p-6 text-center">
              <Puzzle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Résolution problèmes</h3>
              <p className="text-gray-600">Approche algorithmique</p>
            </Card>
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Base de connaissances</h3>
              <p className="text-gray-600">Représentation symbolique</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IASymbolique;
