
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PageGeneratorProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  category: string;
}

const PageGenerator500 = ({ title, description, icon: Icon, color, category }: PageGeneratorProps) => {
  const colorClasses = {
    blue: "from-blue-50 to-white bg-gradient-to-r from-blue-600 to-indigo-600 text-blue-600",
    green: "from-green-50 to-white bg-gradient-to-r from-green-600 to-emerald-600 text-green-600",
    purple: "from-purple-50 to-white bg-gradient-to-r from-purple-600 to-pink-600 text-purple-600",
    red: "from-red-50 to-white bg-gradient-to-r from-red-600 to-pink-600 text-red-600",
    yellow: "from-yellow-50 to-white bg-gradient-to-r from-yellow-600 to-orange-600 text-yellow-600",
    orange: "from-orange-50 to-white bg-gradient-to-r from-orange-600 to-red-600 text-orange-600",
    teal: "from-teal-50 to-white bg-gradient-to-r from-teal-600 to-cyan-600 text-teal-600",
    indigo: "from-indigo-50 to-white bg-gradient-to-r from-indigo-600 to-purple-600 text-indigo-600",
    pink: "from-pink-50 to-white bg-gradient-to-r from-pink-600 to-purple-600 text-pink-600",
    cyan: "from-cyan-50 to-white bg-gradient-to-r from-cyan-600 to-blue-600 text-cyan-600",
    emerald: "from-emerald-50 to-white bg-gradient-to-r from-emerald-600 to-teal-600 text-emerald-600",
    slate: "from-slate-50 to-white bg-gradient-to-r from-slate-600 to-gray-600 text-slate-600",
    amber: "from-amber-50 to-white bg-gradient-to-r from-amber-600 to-orange-600 text-amber-600",
    stone: "from-stone-50 to-white bg-gradient-to-r from-stone-600 to-gray-600 text-stone-600",
    gray: "from-gray-50 to-white bg-gradient-to-r from-gray-600 to-slate-600 text-gray-600"
  };

  const bgClass = colorClasses[color as keyof typeof colorClasses]?.split(' ')[0] || "from-blue-50 to-white";
  const gradientClass = colorClasses[color as keyof typeof colorClasses]?.split(' ').slice(1, 4).join(' ') || "bg-gradient-to-r from-blue-600 to-indigo-600";
  const iconClass = colorClasses[color as keyof typeof colorClasses]?.split(' ')[4] || "text-blue-600";

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgClass}`}>
      <Header />
      
      <section className={`py-20 ${gradientClass}`}>
        <div className="container mx-auto px-4 text-center">
          <Icon className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <Button size="lg" className={`bg-white ${iconClass} hover:bg-gray-100`}>
            Explorer {category}
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Icon className={`h-12 w-12 ${iconClass} mx-auto mb-4`} />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Solutions de pointe</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon className={`h-12 w-12 ${iconClass} mx-auto mb-4`} />
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">Savoir-faire reconnu</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon className={`h-12 w-12 ${iconClass} mx-auto mb-4`} />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-600">Résultats optimaux</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon className={`h-12 w-12 ${iconClass} mx-auto mb-4`} />
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Accompagnement complet</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageGenerator500;
