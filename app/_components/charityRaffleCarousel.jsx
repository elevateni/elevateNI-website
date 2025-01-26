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
      name: "Quest 2",
      imageURL: "/images/raffle/quest2.jpeg",
    },
    {
      id: 2,
      name: "Lego Bonsai Tree",
      imageURL: "/images/raffle/lego_bonsai_tree.jpg",
    },
    {
      id: 3,
      name: "Mario Bros Deluxe",
      imageURL: "/images/raffle/mariobros.jpeg",
    },
    {
      id: 4,
      name: "Philips Water Filter",
      imageURL: "/images/raffle/filter.webp",
    },
    {
      id: 5,
      name: "Firestick",
      imageURL: "/images/raffle/firestick.jpeg",
    },
    {
      id: 6,
      name: "Laptop Stand",
      imageURL: "/images/raffle/stand.webp",
    },
    
    {
      id: 7,
      name: "Headphones",
      imageURL: "/images/raffle/headphones.webp",
    },
    {
      id: 8,
      name: "Lava Lamp",
      imageURL: "/images/raffle/lavalamp.jpeg",
    },
    {
      id: 9,
      name: "Switch Lite",
      imageURL: "/images/raffle/switchlite.jpeg",
    },
    {
      id: 10,
      name: "Portable Monitor",
      imageURL: "/images/raffle/monitor.webp",
    },
    {
      id: 11,
      name: "Airpods 2nd Generation",
      imageURL: "/images/raffle/airpods2.jpeg",
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
                    <div className="w-full h-48 relative">
                      <Image
                        src={prize.imageURL}
                        alt={`${prize.name}`}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {prize.name}
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
