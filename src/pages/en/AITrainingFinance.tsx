
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Users, Star, CheckCircle, Zap, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AITrainingFinance = () => {
  const benefits = [
    "Master AI applications in banking & finance",
    "Automate financial analysis with AI",
    "Implement risk management with machine learning",
    "Create predictive models for investment",
    "Understand regulatory compliance for AI in finance"
  ];

  const modules = [
    {
      title: "Day 1: AI Fundamentals in Finance",
      content: "Introduction to AI in financial services, regulatory landscape, and use cases"
    },
    {
      title: "Day 2: Practical Applications",
      content: "Hands-on workshops with trading algorithms, fraud detection, and credit scoring"
    },
    {
      title: "Day 3: Implementation & Strategy",
      content: "Deployment strategies, risk management, and ROI measurement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">🏦 AI Finance Training</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Training for Finance Professionals
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Master artificial intelligence applications in banking, trading, risk management, 
              and financial analysis. Become an AI expert in finance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-white text-sm font-medium">3 Days</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-white text-sm font-medium">6-10 People</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Learning Objectives */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Brain className="h-6 w-6 text-blue-600 mr-2" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Training Program */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Training Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600">{module.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="shadow-lg bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-xl">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Basic knowledge of finance and banking</li>
                    <li>• Professional experience in financial services (recommended)</li>
                    <li>• No prior AI experience required</li>
                    <li>• Laptop with internet connection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Pricing Card */}
              <Card className="shadow-xl border-2 border-blue-200">
                <CardHeader className="text-center">
                  <Badge className="mx-auto mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    Premium Training
                  </Badge>
                  <CardTitle className="text-3xl font-bold text-blue-600">€2,990</CardTitle>
                  <p className="text-gray-500 line-through">€3,990</p>
                  <p className="text-sm text-green-600 font-medium">Save €1,000 this month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>3-day intensive training</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Official certification</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Expert instructor</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Course materials included</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>6 months support</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3">
                    <Zap className="mr-2 h-4 w-4" />
                    Register Now
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/en/contact">Get More Info</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Instructor Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Expert Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-600 mb-3">AI Finance Expert</p>
                    <div className="flex items-center justify-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Former Goldman Sachs AI Director with 15+ years experience in financial AI
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="shadow-lg bg-green-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-700 italic mb-4">
                      "This training transformed how we approach AI in our investment strategies. 
                      ROI was visible within 3 months."
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-700 font-bold text-sm">MK</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">Michael Kim</p>
                        <p className="text-xs text-gray-600">CTO, FinTech Corp</p>
                      </div>
                    </div>
                  </div>
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

export default AITrainingFinance;
