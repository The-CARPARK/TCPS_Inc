import React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import tcpsGroupHero from "./TCPS_Group_Hero_1.webp";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";

export default function Membership() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src={logoImage}
                alt="The Car Park Society"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="hidden md:flex items-center justify-center gap-2 sm:gap-4 lg:gap-6"
              role="navigation"
              aria-label="Primary"
            >
              <Link
                href="/"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Welcome
              </Link>

              <Link
                href="/about-1"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Origins
              </Link>

              <Link
                href="/event-list"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Activations
              </Link>

              <Link
                href="/blog"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Transmissions
              </Link>

              <Link
                href="/donate"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Support
              </Link>

              <Link
                href="/watcher-portal"
                className="text-xs sm:text-sm font-medium text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                Watcher Portal
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE NAV */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black">
            <nav
              className="flex flex-col items-center gap-6 py-8"
              role="navigation"
              aria-label="Mobile"
            >
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium hover:text-red-500 transition-colors"
              >
                Welcome
              </Link>

              <Link
                href="/about-1"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium hover:text-red-500 transition-colors"
              >
                Origins
              </Link>

              <Link
                href="/event-list"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium hover:text-red-500 transition-colors"
              >
                Activations
              </Link>

              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium hover:text-red-500 transition-colors"
              >
                Transmissions
              </Link>

              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium hover:text-red-500 transition-colors"
              >
                Support
              </Link>

              <Link
                href="/watcher-portal"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-red-500 transition-colors"
              >
                Watcher Portal
              </Link>
            </nav>
          </div>
        )}
      </header>


      {/* PAGE CONTENT */}
      <main className="pt-20">

        {/* MEMBERSHIP INTRO */}
        <section className="relative px-6 py-20 md:py-28 overflow-hidden">

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative max-w-7xl mx-auto">

            <div className="flex flex-col items-center text-center">

              {/* TITLE + LOGIN */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-8">

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
                  JOIN THE{" "}
                  <span className="text-gray-400">CAR PARK</span>{" "}
                  SOCIETY
                </h1>

                <a
                  href="https://auth.tcps.app/login?next=%2Foauth%2Fauthorize%3Fclient_id%3Dclient_cf59aa5f3196%26redirect_uri%3Dhttps%253A%252F%252Fdev.tcps.app%252Fauth%252Fcallback%26response_type%3Dcode%26state%3D5031576d5a3a70e571c0c53c5a331dda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center px-7 py-3 border border-white/30 text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  Existing Member Login
                </a>

              </div>

              <div className="max-w-3xl">

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Membership is your entry point into The Car Park Society
                  network.
                </p>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  If you want to be part of the network, contribute to the
                  work, participate in activations, or stay connected to what
                  is happening across the Society, complete the membership
                  application below.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* MEMBERSHIP APPLICATION */}
        <section className="px-6 py-20 border-t border-white/10">

          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-10">

              <p className="text-gray-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                MEMBERSHIP
              </p>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                MEMBERSHIP
                <br />
                <span className="text-gray-500">
                  APPLICATION
                </span>
              </h2>

              <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
                Complete the application below to submit your request for
                membership with The Car Park Society.
              </p>

            </div>


            {/* GOOGLE MEMBERSHIP FORM */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfDjfk7rvBz0-eOoC5DQVyNbzZeq4IOXbwwqhUjYfwV9jn8DQ/viewform?embedded=true"
                width="100%"
                height="1400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full border-0"
                title="The Car Park Society Membership Application"
              >
                Loading membership application…
              </iframe>

            </div>

          </div>
        </section>


        {/* MEMBERSHIP PROCESS */}
        <section className="px-6 py-20 border-t border-white/10">

          <div className="max-w-5xl mx-auto">

            <div className="grid md:grid-cols-3 gap-10">

              {/* 01 */}
              <div>
                <p className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                  01
                </p>

                <h2 className="text-xl font-black uppercase mb-3">
                  Apply
                </h2>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Complete the membership application with your details and
                  information about your connection to the Society.
                </p>
              </div>


              {/* 02 */}
              <div>
                <p className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                  02
                </p>

                <h2 className="text-xl font-black uppercase mb-3">
                  Review
                </h2>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Your application is received by The Car Park Society for
                  consideration.
                </p>
              </div>


              {/* 03 */}
              <div>
                <p className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                  03
                </p>

                <h2 className="text-xl font-black uppercase mb-3">
                  Connect
                </h2>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Once your application has been processed, you will be
                  contacted with the next steps.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* FULL TCPS GROUP IMAGE — ABOVE FOOTER */}
        <section className="px-6 pt-10 pb-0">

          <div className="max-w-7xl mx-auto">

            <div className="relative overflow-hidden">

              <img
                src={tcpsGroupHero}
                alt="The Car Park Society"
                className="w-full h-auto object-contain object-center block"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* Scan line */}
              <div className="absolute top-1/3 left-0 right-0 h-px bg-white/20 pointer-events-none" />

              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/50" />

            </div>

          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/10 mt-10">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <p className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase">
              THE CAR PARK SOCIETY INC.
            </p>

            <div className="flex items-center gap-5">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <SiTiktok className="w-5 h-5" />
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}
