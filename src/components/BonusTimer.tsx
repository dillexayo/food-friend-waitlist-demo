
import { useState, useEffect } from "react";
import { Clock, Gift } from "lucide-react";

export const BonusTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-yellow-400 text-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6" />
            <span className="font-bold text-lg">Early Bird Bonus:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">First 1000 signups get 6 months free premium!</span>
            <Clock className="w-5 h-5" />
          </div>
          <div className="flex gap-2 font-bold text-lg">
            <div className="bg-white rounded px-2 py-1">{timeLeft.days}d</div>
            <div className="bg-white rounded px-2 py-1">{timeLeft.hours}h</div>
            <div className="bg-white rounded px-2 py-1">{timeLeft.minutes}m</div>
            <div className="bg-white rounded px-2 py-1">{timeLeft.seconds}s</div>
          </div>
        </div>
      </div>
    </section>
  );
};
