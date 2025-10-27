
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dfoodcore</h3>
            <p className="text-gray-300 mb-4">
              Connecting food businesses worldwide through innovative B2B2C solutions.
            </p>
            <div className="flex flex-col gap-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@dfoodcore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+2348150781396</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Newark, DE</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Business Partners</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Chefs & Culinary Professionals</li>
              <li>Event Organizers & Hosts</li>
              <li>Food Store Vendors</li>
              <li>Restaurant Owners</li>
              <li>Catering Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Business Networking</li>
              <li>Event Management</li>
              <li>Secure Payments</li>
              <li>Analytics Dashboard</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dfoodcore. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
