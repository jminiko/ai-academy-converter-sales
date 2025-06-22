
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Atom, Zap, Cpu, Layers } from "lucide-react";

const FormationIAQuantique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <Atom className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation IA Quantique
          </h1>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explorez l'intersection entre informatique quantique et intelligence artificielle
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
            Découvrir le quantique
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Atom className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qubits</h3>
              <p className="text-gray-600">Concepts fondamentaux</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Algorithmes</h3>
              <p className="text-gray-600">Quantum ML</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Simulateurs</h3>
              <p className="text-gray-600">Qiskit, Cirq</p>
            </Card>
            <Card className="p-6 text-center">
              <Layers className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Applications</h3>
              <p className="text-gray-600">Cas d'usage concrets</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationIAQuantique;
