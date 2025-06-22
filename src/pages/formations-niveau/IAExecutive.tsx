
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, TrendingUp, Users, Briefcase } from "lucide-react";

const IAExecutive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">IA pour Dirigeants</h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Formation IA stratégique pour les dirigeants d'entreprise
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Diriger avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie IA</h3>
              <p className="text-gray-600">Vision d'entreprise</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Leadership équipes</h3>
              <p className="text-gray-600">Management IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI et investissements</h3>
              <p className="text-gray-600">Rentabilité IA</p>
            </Card>
            <Card className="p-6 text-center">
              <Building className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transformation</h3>
              <p className="text-gray-600">Changement organisationnel</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAExecutive;
