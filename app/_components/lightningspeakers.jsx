"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function LightningSpeakersCarousel() {
  const speakers = [
    {
      id: 1,
      imageURL: "/images/speakers/florence.jpg",
    },
    {
      id: 2,
      imageURL: "/images/speakers/hannah.jpg",
    },
    {
      id: 3,
      imageURL: "/images/speakers/liam.jpg",
    },
    {
      id: 4,
      imageURL: "/images/speakers/tiarnan.jpg",
    },
    {
      id: 5,
      imageURL: "/images/speakers/niamh.png",
    },
    {
      id: 6,
      imageURL: "/images/speakers/lauren.jpg",
    },
    {
      id: 7,
      imageURL: "/images/speakers/chloe.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
          Lightning Speakers
        </h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          loop
        >
          <CarouselContent>
            {speakers.map((speaker) => (
              <CarouselItem key={speaker.id} className="md:basis-1/3">
                <div className="p-1">
                  <div className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-80 relative">
                      <Image
                        src={speaker.imageURL}
                        alt={`${speaker.name}`}
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
