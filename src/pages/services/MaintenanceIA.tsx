
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Settings, Clock, Users, Trophy } from "lucide-react";

const MaintenanceIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <Settings className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Maintenance & Support IA
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Assurez la performance continue de vos solutions IA
          </p>
          <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
            Support technique
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenanceIA;
