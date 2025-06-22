
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, CheckCircle, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const ContactEN = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Validation Error", 
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Message is required",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll respond within 2 hours maximum.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-medium">Expert Contact</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Our AI Experts
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Free consultation • Personalized quote within 24h • Dedicated support
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Response &lt; 2h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="h-6 w-6 text-blue-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Free call</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="h-6 w-6 text-purple-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Meeting in 24h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Free quote</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900">Consultation Request</CardTitle>
                  <p className="text-gray-600">Fill out this form and receive a response within 2 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Professional Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">Desired Service *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-training">AI Training</option>
                        <option value="consulting">Consulting & AI Audit</option>
                        <option value="implementation">AI Implementation</option>
                        <option value="automation">Process Automation</option>
                        <option value="support">Support & Maintenance</option>
                        <option value="other">Other need</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">Describe Your Project *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your needs, objectives and context. The more specific you are, the better we can help you..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send My Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">+33 1 23 45 67 89</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9am-6pm</p>
                      <p className="text-xs text-blue-600">Free call</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">contact@twentyonetalents.com</p>
                      <p className="text-sm text-gray-600">Response within 2h</p>
                      <p className="text-xs text-green-600">24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Paris, France</p>
                      <p className="text-sm text-gray-600">International services</p>
                      <p className="text-xs text-purple-600">Free travel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm"><strong>1000+</strong> companies supported</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm"><strong>98%</strong> client satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Average ROI of <strong>300%</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm"><strong>24/7</strong> support included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm"><strong>Certified</strong> trainers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🚀</span>
                    Special Offer
                  </h3>
                  <p className="text-sm text-blue-100 mb-4">
                    First consultation free + AI audit offered for any training booked this month
                  </p>
                  <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    Take advantage now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactEN;
