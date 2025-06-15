
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechCorp France",
      content: "Grâce à Twenty One Talents, nous avons automatisé 60% de nos processus marketing. Le ROI a été atteint en 3 mois seulement !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    },
    {
      name: "Pierre Martin",
      role: "CEO",
      company: "InnovateLab",
      content: "L'expertise de l'équipe en IA générative nous a permis de lancer notre assistant virtuel client. Résultats exceptionnels !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Sophie Laurent",
      role: "DRH",
      company: "Global Services",
      content: "Les formations sont d'une qualité remarquable. Nos équipes maîtrisent maintenant ChatGPT et gagnent 3h par jour.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 500 entreprises ont transformé leur activité grâce à nos formations 
            et implémentations IA. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-gray-600 mb-6">
            Satisfaction client de 98% • ROI moyen de 300% • Support 24/7
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">500+</p>
              <p>Entreprises formées</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">98%</p>
              <p>Satisfaction client</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">300%</p>
              <p>ROI moyen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
