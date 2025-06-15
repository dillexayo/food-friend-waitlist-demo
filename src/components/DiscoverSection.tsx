
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Store, Users, Megaphone } from "lucide-react";

export const DiscoverSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-orange-600" />,
      title: "Event & Chef Booking",
      description: "Discover and book private chefs or food events right from your phone."
    },
    {
      icon: <Store className="w-8 h-8 text-orange-600" />,
      title: "Digital Menu & Storefronts",
      description: "Chefs, vendors, and restaurants can showcase their services and products with digital menus and storefronts."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Food Discovery & Social Feed",
      description: "Scroll through videos, photos, and content from the food community in your region."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-600" />,
      title: "In-App Promotions & Ads",
      description: "Promote your food business to thousands of users via sponsored listings, in-app banners, and boosted events."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover, Engage & Grow on Dfoodcore
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tools to help you reach more users, promote your services, and engage the food community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
