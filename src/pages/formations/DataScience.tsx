
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, Clock, Users, Trophy } from "lucide-react";

const DataScience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Data Science
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explorez, analysez et visualisez les données avec l'IA
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Analyser les données
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataScience;
