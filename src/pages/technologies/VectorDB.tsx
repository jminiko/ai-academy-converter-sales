
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Search, Layers, Archive } from "lucide-react";

const VectorDB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Bases de Données Vectorielles
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Stockez et recherchez efficacement vos embeddings IA
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Explorer Vector DB
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VectorDB;
