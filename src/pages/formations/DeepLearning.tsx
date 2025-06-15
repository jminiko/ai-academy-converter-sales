
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Network, Clock, Users, Trophy } from "lucide-react";

const DeepLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Deep Learning
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Plongez dans les réseaux de neurones profonds et leurs applications
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Approfondir le DL
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepLearning;
