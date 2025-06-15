
import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const PolitiqueQualiteHeader = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <Shield className="h-16 w-16 text-white mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-white mb-6">
          Politique Qualité
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Notre engagement pour l'excellence dans la formation et les services IA. 
          Découvrez nos standards de qualité et nos certifications.
        </p>
        <div className="flex justify-center space-x-4">
          <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">
            Certification ISO 9001
          </Badge>
          <Badge className="bg-blue-700 text-white px-4 py-2 text-lg">
            Formation certifiante
          </Badge>
        </div>
      </div>
    </section>
  );
};
