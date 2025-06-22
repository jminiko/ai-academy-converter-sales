
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileCheck, Scale, Shield, CheckCircle } from "lucide-react";

const ConseilsConformite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <FileCheck className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Conseils Conformité IA
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Respect des réglementations et normes IA
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Assurer la conformité
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Scale className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">RGPD IA</h3>
              <p className="text-gray-600">Protection des données</p>
            </Card>
            <Card className="p-6 text-center">
              <FileCheck className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Act</h3>
              <p className="text-gray-600">Réglementation européenne</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Audit conformité</h3>
              <p className="text-gray-600">Évaluation continue</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Validation officielle</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilsConformite;
