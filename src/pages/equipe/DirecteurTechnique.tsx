
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Linkedin, Mail, Phone } from "lucide-react";

const DirecteurTechnique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <User className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Marc Dubois
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Directeur Technique & Expert IA
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expertise</h2>
              <p className="text-gray-600 mb-6">
                Marc Dubois dirige l'équipe technique de Twenty One Talents avec plus de 15 ans d'expérience 
                en intelligence artificielle et machine learning.
              </p>
              <div className="space-y-2">
                <p><strong>Spécialités :</strong> Deep Learning, MLOps, Architecture IA</p>
                <p><strong>Formations :</strong> PhD Computer Science, Stanford University</p>
                <p><strong>Certifications :</strong> AWS ML Specialty, Google Cloud AI</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>marc.dubois@twentyonetalents.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>linkedin.com/in/marcdubois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DirecteurTechnique;
