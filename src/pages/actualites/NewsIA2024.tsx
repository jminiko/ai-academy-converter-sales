
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar, TrendingUp, Globe } from "lucide-react";

const NewsIA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Newspaper className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Actualités IA 2024
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Restez informé des dernières avancées en intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Lire les actualités
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsIA2024;
