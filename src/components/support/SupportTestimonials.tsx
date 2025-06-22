
import { Card, CardContent } from "@/components/ui/card";

export const SupportTestimonials = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Que Disent Nos Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4 italic">
                "Support exceptionnel ! Problème résolu en moins de 30 minutes un dimanche soir. 
                L'équipe est vraiment réactive et compétente."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Thomas Moreau</p>
                  <p className="text-sm text-gray-600">CTO - TechStart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <p className="text-gray-700 mb-4 italic">
                "Le monitoring proactif nous a évité plusieurs pannes. 
                Nous sommes alertés avant même que les utilisateurs ne s'en aperçoivent."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Julie Dubois</p>
                  <p className="text-sm text-gray-600">DSI - FinanceCorpo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
