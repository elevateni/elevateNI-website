"use client";

import { CalendarDays, MapPin, Users, Ticket } from "lucide-react";
import { SponsorsCarousel } from "./_components/sponsorsCarousel";
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
              Event Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5">
                <CalendarDays className="w-12 h-12 mb-4 text-[#40E0D0]" />
                <h3 className="text-xl font-semibold mb-2">Date</h3>
                <p className="text-gray-300">March 6th, 2025</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5">
                <MapPin className="w-12 h-12 mb-4 text-[#9370DB]" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">1 Elmwood Avenue, Belfast</p>
                <p className="text-gray-300">Queen's Students' Union</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5">
                <Users className="w-12 h-12 mb-4 text-[#40E0D0]" />
                <h3 className="text-xl font-semibold mb-2">Attendees</h3>
                <p className="text-gray-300">200+ Students</p>
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
              <p className="text-2xl font-semibold text-gray-300">
                Coming 6th January
              </p>
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
                <Button className="mt-6 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white hover:opacity-90 transition-opacity">
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
                We have some exciting prizes to announce soon!
              </p>
            </div>
          </div>
        </section>

        <section id="speakers">
          <SpeakersCarousel />
        </section>

        <section id="panels" className="py-24 relative bg-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
              Previous Panels
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
                  src="/images/diversity_panel.png"
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
