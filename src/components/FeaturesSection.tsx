
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Shield, Zap, Network, Star } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-orange-600" />,
      title: "Unified Network",
      description: "Connect with food professionals across the entire supply chain in one platform"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Partner Matching",
      description: "AI-powered matching system to find the perfect business partners for your needs"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Business Analytics",
      description: "Track performance, revenue, and growth opportunities with detailed insights"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Secure Transactions",
      description: "End-to-end encrypted payment processing and contract management"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Real-time Communication",
      description: "Chat, video calls, and collaboration tools built for food businesses"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Rating System",
      description: "Build trust with verified reviews and ratings from business partners"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Your Food Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform brings together all the tools and connections you need to grow your food business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
