
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, Star, Users, Trophy } from "lucide-react";

const PartenaireOpenAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Partenaire Officiel OpenAI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Twenty One Talents est partenaire officiel d'OpenAI en France
          </p>
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
            Nos services OpenAI
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartenaireOpenAI;
