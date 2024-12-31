'use client'

import { CalendarDays, MapPin, Users, Ticket } from "lucide-react";
import { SponsorsCarousel } from "./_components/sponsorsCarousel";
import Gallery from "./_components/gallery";
import Link from "next/link";
import { Navigation } from "./_components/navigation";
import { SpeakersCarousel } from "./_components/speakers";
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="py-4 backdrop-blur-lg bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <div className="w-full h-full relative"></div>
            </div>
            <img
              src="/images/white_logo_2025.png"
              alt="ElevateNI 2025 Logo"
              className="w-60 h-30"
            />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="flex-grow">
        <section className="h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/20 to-[#9370DB]/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <img
              src={"images/topImages/a-the-sun.jpg"}
              className="w-full h-72 object-cover"
            />
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
                Register Now
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
                Coming Soon
              </p>
            </div>
          </div>
        </section>

        <section id="speakers">
          <SpeakersCarousel />
        </section>

        <section id="sponsors">
          <SponsorsCarousel />
        </section>

        <section
          id="gallery"
          className="h-96 md:h-96 lg:h-[500px] overflow-y-auto"
        >
          <Gallery />
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
                Register Now
              </button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
                Contact Us
              </h3>
              <p className="text-gray-300">Email: elevateni@qub.ac.uk</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#40E0D0] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
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
    </div>
    </ErrorBoundary>
  );
}
