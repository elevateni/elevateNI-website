"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const elevateDate = new Date("2025-03-06T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const difference = elevateDate.getTime() - currentDate.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-black/50 border-gray-800">
      <CardContent className="p-4">
        <div className="flex justify-center items-center space-x-4">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs uppercase text-gray-400">{key}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
