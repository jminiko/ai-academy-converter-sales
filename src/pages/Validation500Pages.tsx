
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Star, Target, CheckCircle } from "lucide-react";
import { siteRoutes } from "@/config/siteRoutes";

const Validation500Pages = () => {
  const totalPages = siteRoutes.length;
  const isObjectiveReached = totalPages >= 500;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          {isObjectiveReached ? (
            <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
          ) : (
            <Target className="h-16 w-16 text-white mx-auto mb-6" />
          )}
          <h1 className="text-5xl font-bold text-white mb-6">
            {isObjectiveReached ? "Objectif Atteint !" : "En Progression"}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {isObjectiveReached 
              ? `Félicitations ! Nous avons créé ${totalPages} pages, dépassant l'objectif de 500 pages.`
              : `Nous avons actuellement ${totalPages} pages. Objectif : 500 pages.`
            }
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            {isObjectiveReached ? "Célébrer le succès" : "Continuer la création"}
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pages créées</h3>
              <p className="text-gray-600 text-2xl font-bold">{totalPages}</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Objectif</h3>
              <p className="text-gray-600 text-2xl font-bold">500</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Progression</h3>
              <p className="text-gray-600 text-2xl font-bold">
                {Math.round((totalPages / 500) * 100)}%
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Statut</h3>
              <p className={`text-2xl font-bold ${isObjectiveReached ? 'text-green-600' : 'text-orange-600'}`}>
                {isObjectiveReached ? "RÉUSSI" : "EN COURS"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Validation500Pages;
