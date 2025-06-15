
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Linkedin, Mail, Lightbulb } from "lucide-react";

const ChefProduit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <User className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Sophie Martin
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Chef de Produit IA
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Parcours</h2>
              <p className="text-gray-600 mb-6">
                Sophie Martin est responsable de la stratégie produit et de l'innovation 
                chez Twenty One Talents. Elle guide le développement des solutions IA.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Réalisations</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Lancement de 5 produits IA innovants</li>
                <li>• Croissance de 200% des utilisateurs</li>
                <li>• Prix Innovation IA 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChefProduit;
