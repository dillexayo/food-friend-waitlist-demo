
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, User, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  isSignedUp: boolean;
  setIsSignedUp: (value: boolean) => void;
}

export const WaitlistForm = ({ isSignedUp, setIsSignedUp }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    businessName: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSignedUp(true);
    setIsLoading(false);
    
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be among the first to know when we launch.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSignedUp) {
    return (
      <section id="waitlist" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                You're on the list! 🎉
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for joining our waitlist. You'll receive your early bird bonus and be notified as soon as we launch.
              </p>
              <div className="bg-yellow-100 rounded-lg p-4 mb-6">
                <p className="font-semibold text-yellow-800">
                  🎁 Your Early Bird Bonus: 6 months of premium features FREE!
                </p>
              </div>
              <p className="text-gray-500">
                Keep an eye on your inbox for updates and exclusive content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600">
              Be among the first 1000 to get 6 months of premium features for free
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Early Access Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chef">Professional Chef</SelectItem>
                      <SelectItem value="event-organizer">Food Event Organizer</SelectItem>
                      <SelectItem value="event-host">Event Host</SelectItem>
                      <SelectItem value="food-vendor">Food Store Vendor</SelectItem>
                      <SelectItem value="restaurant">Restaurant Owner</SelectItem>
                      <SelectItem value="catering">Catering Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="businessName" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    placeholder="Enter your business name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your business goals</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="What challenges are you facing? How can our platform help you grow?"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining Waitlist..." : "Join Waitlist & Get Early Access"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Early Bird Benefits:</strong> Free premium features, priority support, and exclusive beta access
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
