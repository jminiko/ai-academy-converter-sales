
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cpu, Zap, Wrench } from "lucide-react";

const RoboticsAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="container mx-auto px-4 text-center">
          <Bot className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Robotique IA
          </h1>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Créez des robots intelligents et autonomes
          </p>
          <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100">
            Robotiser avec l'IA
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cpu className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Contrôle intelligent</CardTitle>
                <CardDescription>Systèmes autonomes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Développez des systèmes de contrôle.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Apprentissage robotique</CardTitle>
                <CardDescription>RL et adaptation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Robots qui apprennent en continu.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="h-12 w-12 text-slate-600 mb-4" />
                <CardTitle>Manipulation</CardTitle>
                <CardDescription>Dextérité artificielle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Maîtrisez la manipulation robotique.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoboticsAI;
