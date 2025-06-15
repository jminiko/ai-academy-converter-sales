
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Clock, Users, Trophy } from "lucide-react";

const AuditIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Search className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Audit IA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Évaluez la maturité IA de votre organisation
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Demander un audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuditIA;
