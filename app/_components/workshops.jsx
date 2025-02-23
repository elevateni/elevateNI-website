"use client";
import { Clock } from "lucide-react";
import Image from "next/image";

export function Workshops() {
  const workshops = [
    {
      id: 1,
      title: "Binary Bracelets: Crafting Secret Computer Codes",
      imageURL: "/images/workshops/qcs.png",
      description:
        "Ever wondered how computers store information? Discover the magic of binary code in a fun, hands-on workshop",
      duration: "30 minutes",
    },
    {
      id: 2,
      title: "Chess for Complete Beginners",
      imageURL: "/images/workshops/chess.png",
      description:
        "Always wanted to learn chess but never knew where to start? This beginner friendly session will teach you the fundamentals. Equipment is provided.",
      duration: "30 minutes",
    },
    {
      id: 3,
      title: "Water & Wonder: A journey in Watercolours",
      imageURL: "/images/workshops/art.png",
      description:
        "Dive into the delicate beauty of watercolour painting. Whether you're a seasoned artist or a total beginner, join us for a night of creative exploration.",
      duration: "1 hour",
    },
    {
      id: 4,
      title: "Works in Progress",
      imageURL: "/images/workshops/gamedev.png",
      description:
        "Ever wanted to test out games before they launch? This is your chance! Playtest student-created games, provide feedback, and help shape the future of game development.",
      duration: "30 minutes",
    },
    {
      id: 5,
      title: "Why Do Reproductive Rights Still Matter",
      imageURL: "/images/workshops/projectchoice.png",
      description:
        "Join the workshop for an in-depth discussion on the evolving landscape of reproductive rights in Northern Ireland and beyond. Reflect, engage, and explore ways to make a real impact through activism.",
      duration: "30 minutes",
    },
    {
      id: 6,
      title: "Snake in My Boots",
      imageURL: "/images/workshops/snake.png",
      description:
        "Get ready for a wild showdown! Decorate your own fake snake and compete in teams to see who can toss the most snakes into a cowboy boot! A lighthearted, high-energy challenge for all country lovers.",
      duration: "30 minutes",
    },
    {
      id: 7,
      title: "Wellbeing Exhibition",
      imageURL: "/images/workshops/nightline.png",
      description:
        "Stop by to learn more about Nightlines vital support services, student wellbeing resources, and how you can get involved as a volunteer. Whether you are looking for a listening ear or want to make a difference, Nightline is here for you.",
      duration: "2pm-5pm",
    },
    {
      id: 8,
      title: "Games Exhibition",
      imageURL: "/images/workshops/slayers.png",
      description:
        "Dragonslayers will have a load of exciting activities set up at ElevateNI. They will be bringing a variety of board games and video games. There’s something for everyone! Join us for a fun-filled day.",
      duration: "11am-4:45pm",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
        Interactive Workshops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="bg-black/30 rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="w-full h-80 relative">
              <Image
                src={workshop.imageURL}
                alt={workshop.title}
                fill
                style={{ objectFit: "contain" }}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="px-9 mt-6">
              <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
              <p className="text-gray-400 mb-4">{workshop.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{workshop.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
