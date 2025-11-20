import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-emerald-600 relative overflow-hidden">
      {/* Decorative shuttlecock */}
      <div className="absolute top-4 right-4 opacity-5">
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="10" fill="#059669"/>
          <path d="M60 60 L60 15 L40 28 L60 60" fill="#10b981" opacity="0.7"/>
          <path d="M60 60 L60 15 L80 28 L60 60" fill="#10b981" opacity="0.7"/>
          <path d="M60 60 L40 28 L48 10 L60 60" fill="#34d399" opacity="0.6"/>
          <path d="M60 60 L80 28 L72 10 L60 60" fill="#34d399" opacity="0.6"/>
        </svg>
      </div>

      <div className="flex items-center justify-center gap-3 mb-6">
        <Clock className="w-8 h-8 text-emerald-600" />
        <h2 className="text-center text-emerald-700">Time Until Tournament Starts</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
              {/* Subtle pattern inside countdown boxes */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`dots-${item.label}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white"/>
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#dots-${item.label})`} />
                </svg>
              </div>
              <div className="text-5xl mb-2 relative z-10">{String(item.value).padStart(2, "0")}</div>
              <div className="text-sm uppercase tracking-wider opacity-90 relative z-10">{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-teal-700 text-xl">
        {timeLeft.days} days until tournament
      </div>
    </div>
  );
}