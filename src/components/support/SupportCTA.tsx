
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SupportCTA = () => {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Sécurisez Vos Solutions IA
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Support expert, monitoring 24/7 et maintenance proactive
        </p>
        
        <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
          <Link to="/contact">
            Choisir mon plan <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
