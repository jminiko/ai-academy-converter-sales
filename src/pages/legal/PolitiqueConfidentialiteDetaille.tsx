
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PolitiqueConfidentialiteDetaille = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Politique de Confidentialité Détaillée
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Protection complète de vos données personnelles
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Collecte des données</h2>
            <p>
              Nous collectons uniquement les données nécessaires à la fourniture de nos services...
            </p>
            
            <h2>Utilisation des données</h2>
            <p>
              Vos données sont utilisées exclusivement pour...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialiteDetaille;
