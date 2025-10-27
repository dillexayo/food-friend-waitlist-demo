
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Shield, Zap, Network, Star } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-orange-600" />,
      title: "Restaurant Discovery",
      description: "Discover meals, check availability times, and make reservations for dates and dinners at your favorite restaurants."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Nutritional Tracking",
      description: "Track product ingredient richness and nutritional value to make informed food choices for your health."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Culinary Events & Content",
      description: "Browse food photos, videos, and discover exciting culinary events happening in your area."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Secure Reservations",
      description: "Make secure bookings and reservations with integrated payment options for a seamless experience."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Business Tools",
      description: "For food businesses: Manage bookings, showcase your menu, and connect with customers effortlessly."
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Community Reviews",
      description: "Share experiences and discover top-rated restaurants, chefs, and food vendors in your community."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your Food Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're exploring restaurants or growing your food business, we've got you covered
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
