"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function SponsorsCarousel() {
  const sponsors = [
    {
      id: 1,
      name: "LibertyIT",
      logoURL: "/images/Lib.png",
    },
    {
      id: 2,
      name: "MCS Group",
      logoURL: "/images/MCS_Logo_Orange_White.png",
    },
    {
      id: 3,
      name: "EY",
      logoURL: "/images/EYLogo.png",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
          Previous Sponsors
        </h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          loop
        >
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem key={sponsor.id} className="md:basis-1/3">
                <div className="p-1">
                  <div className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-48 relative">
                      <Image
                        src={sponsor.logoURL}
                        alt={`${sponsor.name} logo`}
                        fill
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {sponsor.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
