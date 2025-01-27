"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function RaffleCarousel() {
  const prizes = [
    {
      id: 1,
      name: "EEECS Sponsoring Raffle",
      imageURL: "/images/raffle/eeecs.png",
    },
    {
      id: 2,
      name: "Quest 2",
      imageURL: "/images/raffle/quest.png",
    },
    {
      id: 3,
      name: "Lego Bonsai Tree",
      imageURL: "/images/raffle/lego.png",
    },
    {
      id: 4,
      name: "Switch Lite & Mario Bros",
      imageURL: "/images/raffle/switch.png",
    },
    {
      id: 5,
      name: "Portable Monitor",
      imageURL: "/images/raffle/monitor.png",
    },
    {
      id: 6,
      name: "Airpods 2nd Generation",
      imageURL: "/images/raffle/airpods2.png",
    },
    {
      id: 7,
      name: "Soundcore Headphones",
      imageURL: "/images/raffle/Soundcore_headphones.png",
    },
    {
      id: 8,
      name: "Fire Stick 4k",
      imageURL: "/images/raffle/fire.png",
    },


  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          loop
        >
          <CarouselContent>
            {prizes.map((prize) => (
              <CarouselItem key={prize.id} className="md:basis-1/3">
                <div className="p-1">
                  <div className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-64 relative">
                      <Image
                        src={prize.imageURL}
                        alt={`${prize.name}`}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
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
