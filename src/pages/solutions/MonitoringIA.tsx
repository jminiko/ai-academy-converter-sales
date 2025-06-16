
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, AlertTriangle, TrendingUp, Bell } from "lucide-react";

const MonitoringIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Monitor className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Monitoring IA Intelligent
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Surveillez et optimisez vos systèmes avec l'intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Surveiller intelligemment
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Détection d'anomalies</CardTitle>
                <CardDescription>
                  Alertes intelligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Détectez les anomalies avant qu'elles deviennent critiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Prédiction de pannes</CardTitle>
                <CardDescription>
                  Maintenance prédictive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anticipez les pannes et planifiez la maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Alertes contextuelles</CardTitle>
                <CardDescription>
                  Notifications intelligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recevez des alertes pertinentes et personnalisées.
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

export default MonitoringIA;
