"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function SpeakersCarousel() {
  const speakers = [
    {
      id: 1,
      name: "Niamh Mallaghan",
      talkName: "Astrophysics for beginners",
      imageURL: "/images/speakers/niamh.png",
    },
    {
      id: 2,
      name: "Kieron Portbury",
      talkName: "Police Abolition: the theory, the myths, and the praxis",
      imageURL: "/images/speakers/kieron.jpg",
    },
    {
      id: 3,
      name: "Laura Kinkhead",
      talkName: "The role of Leadership in Early Childhood Education and Care",
      imageURL: "/images/speakers/laura.png",
    },
    {
      id: 4,
      name: "Erin McGrattan",
      talkName: "Mental Health in Higher Education",
      imageURL: "/images/speakers/Erin.jpg",
    },
    {
      id: 5,
      name: "Pritam Deka",
      talkName: "The role of Large Language Models in Artificial intelligence",
      imageURL: "/images/speakers/pritam.jpg",
    },
    {
      id: 6,
      name: "Tiarnan Smyth",
      talkName: "Subcritical and Breedable",
      imageURL: "/images/speakers/Tiarnan.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
          Previous Speakers
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
                    <div className="w-full h-48 relative">
                      <Image
                        src={speaker.imageURL}
                        alt={`${speaker.name}`}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-400">{speaker.talkName}</p>
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
