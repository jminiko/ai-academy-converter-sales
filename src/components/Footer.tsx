
import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Twenty One Talents</span>
            </Link>
            <p className="text-gray-400">
              Leader français en formation IA et automatisation d'entreprise. 
              Transformez votre organisation avec l'intelligence artificielle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Formations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/formations/ia-generative" className="hover:text-white">IA Générative</Link></li>
              <li><Link to="/formations/chatgpt" className="hover:text-white">ChatGPT Pro</Link></li>
              <li><Link to="/formations/automatisation" className="hover:text-white">Automatisation</Link></li>
              <li><Link to="/formations/prompt-engineering" className="hover:text-white">Prompt Engineering</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/consulting" className="hover:text-white">Consulting IA</Link></li>
              <li><Link to="/services/implementation" className="hover:text-white">Implémentation</Link></li>
              <li><Link to="/services/support" className="hover:text-white">Support</Link></li>
              <li><Link to="/services/audit" className="hover:text-white">Audit IA</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@twentyonetalents.fr
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Paris, France
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Twenty One Talents. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
