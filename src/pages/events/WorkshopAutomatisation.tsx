
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Zap, Workflow, Users } from "lucide-react";

const WorkshopAutomatisation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Cog className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Workshop Automatisation IA
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Automatisez vos processus métier avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Automatiser mes processus
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Workflow className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Processus métier</CardTitle>
                <CardDescription>
                  Automatisation intelligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifiez et automatisez vos processus répétitifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Gains de productivité</CardTitle>
                <CardDescription>
                  Efficacité opérationnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mesurez et maximisez vos gains de productivité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Formation pratique</CardTitle>
                <CardDescription>
                  Mise en application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apprenez en pratiquant sur vos propres cas d'usage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkshopAutomatisation;
