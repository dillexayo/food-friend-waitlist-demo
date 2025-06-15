
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Our Platform in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how food businesses are transforming their operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-white/20 rounded-full p-6 mb-4 mx-auto w-fit">
                      <Play className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Product Demo</h3>
                    <p className="text-lg opacity-90">Click to watch our 3-minute demo</p>
                  </div>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6">
              <h4 className="font-bold text-lg mb-2">Chef Network</h4>
              <p className="text-gray-600 mb-4">Connect with top chefs and culinary professionals</p>
              <Button variant="outline" size="sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <h4 className="font-bold text-lg mb-2">Event Management</h4>
              <p className="text-gray-600 mb-4">Streamline your food events and catering services</p>
              <Button variant="outline" size="sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <h4 className="font-bold text-lg mb-2">Vendor Portal</h4>
              <p className="text-gray-600 mb-4">Manage inventory and orders efficiently</p>
              <Button variant="outline" size="sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
