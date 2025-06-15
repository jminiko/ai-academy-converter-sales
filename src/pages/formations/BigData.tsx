
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Clock, Users, Trophy } from "lucide-react";

const BigData = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Big Data & IA
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Gérez et analysez les données massives avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Maîtriser le Big Data
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BigData;
