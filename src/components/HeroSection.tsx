
import { Button } from "@/components/ui/button";
import { ChefHat, Calendar, Store, Utensils } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Food Business with Our B2B2C Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connecting chefs, event organizers, vendors, and restaurants in one powerful ecosystem
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <ChefHat className="w-5 h-5" />
              <span>Chefs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" />
              <span>Event Organizers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Store className="w-5 h-5" />
              <span>Food Vendors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Utensils className="w-5 h-5" />
              <span>Restaurants</span>
            </div>
          </div>

          <Button 
            onClick={scrollToWaitlist}
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-3 text-lg"
          >
            Join the Waitlist Now
          </Button>
        </div>
      </div>
    </section>
  );
};
