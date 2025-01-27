"use client";

import { CalendarDays, MapPin, Users, Ticket, Clock, Zap, Network, Gift, PartyPopper } from "lucide-react";
import { SponsorsCarousel } from "./_components/sponsorsCarousel";
import { RaffleCarousel } from "./_components/charityRaffleCarousel"
import Gallery from "./_components/gallery";
import Link from "next/link";
import { Navigation } from "./_components/navigation";
import { SpeakersCarousel } from "./_components/speakers";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImageModal } from "./_components/imageModal";
import { CountdownTimer } from "./_components/coundown";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="py-4 backdrop-blur-lg bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <div className="w-full h-full relative"></div>
            </div>
            <Image
              src="/images/white_logo_2025.png"
              alt="ElevateNI 2025 Logo"
              width={240}
              height={120}
              priority
              className="object-contain"
            />
          </div>
          <Navigation />
        </div>
      </header>

      <div className="bg-gradient-to-r from-[#40E0D0]/20 to-[#9370DB]/20 py-4">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </div>

      <main className="flex-grow">
        <section className="h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/20 to-[#9370DB]/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-full h-72 relative">
              <Image
                src="/images/topImages/a-the-sun.jpg"
                alt="Astrophysics presentation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text"></h2>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 text-2xl md:text-3xl font-light">
                <span className="text-[#40E0D0]">06</span>
                <span className="text-white/50">|</span>
                <span className="text-[#9370DB]">03</span>
                <span className="text-white/50">|</span>
                <span className="text-white">2025</span>
              </div>
            </div>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerHK_2W2n8f9L7HWaPsTDW0_7BWsO6aexofxalmTR2G_5GkQ/viewform">
              <button className="px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Apply to be a Speaker
              </button>
            </Link>
          </div>
        </section>

        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Why Attend ElevateNI?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 text-center">
                ElevateNI is more than just a conference - it is a platform to empower students to reach 
                new heights. Here is what we have in store for ElevateNI 2025:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-[#9370DB] text-center">Unforgettable Experiences</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 mr-4 text-[#40E0D0] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Inspiring Main Track and Lightening Talks</h4>
                        <p className="text-gray-300">Gain insights from Students, learn about their research, and passions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 mr-4 text-[#9370DB] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Inspiring Panels</h4>
                        <p className="text-gray-300">Hear from inspiring students and industry professionals and their journeys with
                          Disability and Inclusion, and Diversity and Inclusion.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Network className="w-6 h-6 mr-4 text-[#40E0D0] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Interactive Workshops</h4>
                        <p className="text-gray-300">Explore different societies, and what they have to offer through 
                          fun and interactive workshops, spark your imagination and creativity.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Gift className="w-6 h-6 mr-4 text-[#9370DB] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Charity Raffle</h4>
                        <p className="text-gray-300">Lots of fantastic prizes up for grabs this year, 
                          all while supporting a great cause!</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PartyPopper className="w-6 h-6 mr-4 text-[#40E0D0] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">After Party</h4>
                        <p className="text-gray-300"> Connect with others, take part in quizzes, have fun, and win prizes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-[#9370DB] text-center">Event Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <CalendarDays className="w-8 h-8 mr-4 text-[#40E0D0]" />
                      <div>
                        <h4 className="font-semibold text-white">Date</h4>
                        <p className="text-gray-300">March 6th, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 mr-4 text-[#9370DB]" />
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Queen's Students' Union</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-8 h-8 mr-4 text-[#40E0D0]" />
                      <div>
                        <h4 className="font-semibold text-white">Time</h4>
                        <p className="text-gray-300">9:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-8 h-8 mr-4 text-[#9370DB]" />
                      <div>
                        <h4 className="font-semibold text-white">Attendees</h4>
                        <p className="text-gray-300">200+ Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-xl text-gray-300 mb-6">
                  Don't miss this opportunity to be inspired, learn, and connect with Northern Ireland's vibrant
                  student community!
                </p>
                <Link href="https://fixr.co/event/elevateni-student-conference-2025-tickets-627078385">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white hover:opacity-90 transition-opacity"
                >
                  Secure Your Spot Now
                </Button>
            </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="tickets" className="py-24 relative bg-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Tickets
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <Ticket className="w-24 h-24 text-[#9370DB]" />
              <p className="text-gray-300 text-center max-w-2xl">
              Want to network, learn, and grow both personally and professionally?
              </p>
              <p className="text-gray-300 text-center max-w-2xl">100% of Ticket proceeds go directly to charity</p>
              <p className="text-gray-300 text-center max-w-2xl">Tickets are only £5</p>
              <Link href="https://fixr.co/event/elevateni-student-conference-2025-tickets-627078385">
              <button className="px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Get Your Ticket
              </button>
            </Link>
            </div>
          </div>
        </section>

        <section id="charity" className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Proudly Supporting
            </h2>
            <div className="flex flex-col items-center">
              <img
                src="/images/bhf_logo.png"
                alt="The British Heart Foundation Logo"
                className="w-60 h-30"
              />
              <p className="text-gray-300 text-center max-w-2xl">
                We are proud to support The British Heart Foundation, an
                organisation dedicated to having a world free from the fear of
                heart and circulatory diseases. All proceeds raised from
                ElevateNI 2025 will help support their important work.
              </p>
              <Link href="https://www.bhf.org.uk/">
                <Button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white hover:opacity-90 transition-opacity">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="raffle" className="py-24 relative bg-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Charity Raffle
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-2xl font-semibold text-gray-300">
                Amazing prizes and support an amazing cause!
              </p>
              <p className="text-2xl font-semibold text-gray-300">
                £1 for 1 ticket or £5 for 4 tickets!
              </p>
            </div>
            <RaffleCarousel />
          </div>
        </section>

        <section id="speakers">
          <SpeakersCarousel />
        </section>

        <section id="panels" className="py-24 relative bg-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Panels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="w-full h-96 relative">
                <Image
                  src="/images/disability_panel.png"
                  alt="Disability and Inclusion Panel"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  className="object-contain"
                />
              </div>
              <div className="w-full h-96 relative">
                <Image
                  src="/images/diversity_panel.jpg"
                  alt="Diversity and Inclusion Panel"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors">
        <SponsorsCarousel />
        </section>

        <section
          id="gallery"
          className="h-96 md:h-96 lg:h-[500px] overflow-y-auto"
        >
          <Gallery setSelectedImage={setSelectedImage} />
        </section>

        <section id="register" className="py-24 relative bg-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Join Us at ElevateNI 2025
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Don't miss this opportunity to network, learn, and grow with
              Northern Ireland's student community.
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerHK_2W2n8f9L7HWaPsTDW0_7BWsO6aexofxalmTR2G_5GkQ/viewform">
              <button className="px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Apply to be a Speaker
              </button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
                Contact Us
              </h3>
              <p className="text-gray-300">Email: elevateni@qub.ac.uk</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ElevateNI"
                  className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/elevateni"
                  className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/ElevateNIConf/"
                  className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://x.com/ElevateNI"
                  className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://discord.gg/bJamuXFbG3"
                  className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>&copy; 2025 ElevateNI Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
