import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

import tcpsGroupHero from "./TCPS_Group_Hero_1.webp";

export default function Membership() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerText, setBannerText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const bannerMessages = [
    "WΛTCHΞR; You descend. Not into structure. Not yet. Into memory. Into soil. Into the breath beneath the grid.",
    "They called it progress when they poured the concrete. They called it safety when they flattened pā, when they diverted awa into drains.",
    "They drew chalk-lines and painted numbers on ground that once pulsed with gardens, fire, ceremony.",
    "But the RΘΘT does not rot. It coils. It waits. Beneath your feet, beneath the signage, the Root hums.",
    "A low vibration, not quite sound, not quite tremor. It climbs into your ankles, shifts into your chest.",
    "This is not nostalgia. This is refusal. What was buried rises in moss, in cracks, in static.",
    "ΞCHO; The silence breaks. Static shivers through lights, sirens stutter, cameras blink out of sequence.",
    "This is the WΛK1NG, the revolt hidden inside electricity. Patterns scatter in fragments.",
    "ThΞ M1RROR waits in the mid-levels. Glass no longer reflects you. It reflects the version empire requires.",
    "Colonial mirrors taught you to despise your face, to dress as another, to measure yourself against imported ghosts.",
    "Surveillance is no longer external. It has entered you. Can you resist your own reflection.",
    "WΛTCHΞR; Do not mistake silence for peace. Do not mistake reflection for truth. Do not mistake surveillance for power.",
    "The Root hums. The Waking crackles. The Mirror fractures. The Hunger gnaws. The Invitation pulls.",
    "The Self multiplies. The Eye breaks. And in that break empire ruptures. The Sequence closes. The Sequence begins again."
  ];

  useEffect(() => {
    document.title = "Watcher Portal - The Car Park Society";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join The Car Park Society and submit your membership application."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Join The Car Park Society and submit your membership application.";
      document.head.appendChild(meta);
    }

    setBannerText(bannerMessages[0]);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 8000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    setBannerText(bannerMessages[textIndex]);
  }, [textIndex]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="skip-to-content"
      >
        Skip to Main Content
      </a>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">

          {/* TCPS Button Above Navigation with Full-Width Banner */}
          <div className="relative mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast overflow-hidden">

            {/* Full-Width Scrolling Banner Background */}
            <div className="absolute inset-0 bg-white border-y border-red-900/50 glitch-image">
              <div className="h-full overflow-hidden relative flex items-center">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-pulse" />

                {/* Scrolling Text */}
                <div className="w-full overflow-hidden">
                  <div
                    className="whitespace-nowrap text-[10px] sm:text-[12px] md:text-[14px] text-black font-mono py-2 px-4 animate-scroll vhs-overlay glitch-text tracking-wider"
                    data-text={bannerText}
                  >
                    {bannerText}&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>

              </div>
            </div>

            {/* Foreground Elements */}
            <div className="absolute inset-0 flex justify-between items-center px-4 z-10">

              <Link href="/">
                <img
                  src={tcpsLogo}
                  alt="TCPS"
                  className="h-4 sm:h-5 glitch-icon bg-white/90 rounded px-1"
                />
              </Link>

              <div className="flex gap-1 bg-white px-1 py-0.5 rounded">

                <a
                  href="https://www.tiktok.com/@thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
                >
                  <SiTiktok className="w-2 h-2" />
                </a>

                <a
                  href="https://www.instagram.com/thecarparksociety/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
                >
                  <FaInstagram className="w-2 h-2" />
                </a>

                <a
                  href="https://www.facebook.com/thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
                >
                  <FaFacebook className="w-2 h-2" />
                </a>

                <a
                  href="https://www.youtube.com/@TheCarParkSociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
                >
                  <FaYoutube className="w-2 h-2" />
                </a>

              </div>
            </div>
          </div>

          {/* Navigation and Social Icons Row */}
          <div className="flex justify-center">

            <nav
              className="flex justify-center gap-2 sm:gap-4 md:gap-6"
              role="navigation"
              aria-label="Primary"
            >

              <Link
                href="/"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-home"
              >
                Home
              </Link>

              <Link
                href="/about-1"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-about"
              >
                Origins
              </Link>

              <Link
                href="/event-list"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-events"
              >
                Activations
              </Link>

              <Link
                href="/blog"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-blog"
              >
                Transmissions
              </Link>

              <Link
                href="/donate"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-donate"
              >
                Support
              </Link>

              <Link
                href="/watcher-portal"
                className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap"
                data-testid="nav-watcher-portal"
              >
                Watcher Portal
              </Link>

            </nav>
          </div>
        </div>
      </header>


      {/* OVERLAY MENU */}
      {menuOpen && (
        <div className="overlay-menu">

          <div className="menu-content">

            <div className="absolute top-6 right-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:bg-gray-800"
                data-testid="menu-close"
              >
                Close [ - ]
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 h-full">

              <div className="flex flex-col items-center">

                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-slow">

                  <div className="text-center text-black">

                    <div className="relative w-48 h-32">

                      <img
                        src={logoImage}
                        alt="The Car Park Society Logo"
                        className="w-full h-full object-contain glitch-build"
                      />

                    </div>

                  </div>

                </div>

              </div>


              <div className="text-center">

                <nav className="flex flex-col gap-6 mb-8">

                  <Link
                    href="/"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-home"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about-1"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-about"
                    onClick={() => setMenuOpen(false)}
                  >
                    Origins
                  </Link>

                  <Link
                    href="/event-list"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-events"
                    onClick={() => setMenuOpen(false)}
                  >
                    Activations
                  </Link>

                  <Link
                    href="/blog"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-blog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Transmissions
                  </Link>

                  <Link
                    href="/donate"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-donate"
                    onClick={() => setMenuOpen(false)}
                  >
                    Support
                  </Link>

                  <Link
                    href="/watcher-portal"
                    className="text-2xl font-medium text-white border-b border-red-500 transition-colors"
                    data-testid="nav-watcher-portal"
                    onClick={() => setMenuOpen(false)}
                  >
                    Watcher Portal
                  </Link>

                </nav>


                <div className="flex gap-4 justify-center">

                  <a
                    href="https://www.tiktok.com/@thecarparksociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <SiTiktok className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/thecarparksociety/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.facebook.com/thecarparksociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@TheCarParkSociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* MAIN */}
      <main id="main-content" className="pt-20 pb-16">


        {/* MEMBERSHIP INTRO */}
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">

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

          <div className="absolute top-24 left-0 w-full h-px bg-white/10" />
          <div className="absolute bottom-10 left-0 w-full h-px bg-white/10" />

          <div className="relative max-w-6xl mx-auto">

            <div className="flex flex-col items-center text-center">

              {/* TITLE + LOGIN */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-8">

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">

                  JOIN THE{" "}

                  <span className="text-gray-400">
                    CAR PARK
                  </span>{" "}

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
        <section className="px-6 py-20 border-t border-gray-800">

          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-10">

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
                height="650"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-[650px] md:h-[800px] border-0 block"
                title="The Car Park Society Membership Application"
              >
                Loading membership application…
              </iframe>

            </div>

          </div>

        </section>


        {/* MEMBERSHIP PROCESS */}
        <section className="px-6 py-20 border-t border-gray-800">

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


        {/* TCPS GROUP IMAGE — ABOVE FOOTER */}
        <section className="px-6 pt-8 pb-0">

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
      <footer className="py-16 px-6 border-t border-gray-800">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 items-start">


            {/* LEFT — SOCIAL / CONTACT */}
            <div className="text-center">

              <div className="flex gap-2 mb-4 justify-center">

                <a
                  href="https://www.tiktok.com/@thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <SiTiktok className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/thecarparksociety/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@TheCarParkSociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>

              </div>


              <a
                href="mailto:the.carpark2025@gmail.com"
                className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold bg-[#000000]"
                data-testid="link-email-contact"
              >
                the.carpark2025@gmail.com
              </a>


              <p className="text-gray-400 mb-2 text-[13px]">
                Te Whanganui-a-Tara
              </p>


              <p className="text-gray-400 mb-2 font-bold text-[13px]">
                AOTEAROA
              </p>


              <p className="text-gray-400 text-[12px]">
                © 2026 by The Car Park Society Inc.
              </p>

            </div>


            {/* CENTRE — MANA WHENUA */}
            <div className="text-center">

              <p className="text-gray-500 text-sm italic mb-4">

                We acknowledge Taranaki Whānui ki Te Upoko o Te Ika,
                Te Āti Awa, and Ngāti Toa Rangatira —
                mana whenua of Te Whanganui-a-Tara.
                We honour their whakapapa, histories,
                and enduring connection to this whenua.

              </p>

              <p className="text-gray-600 text-xs font-extralight">
                Acknowledgement of Mana Whenua
              </p>

            </div>


            {/* RIGHT — FLAGS */}
            <div className="flex justify-end">

              <div className="space-y-2">

                <img
                  src={flagsImage}
                  alt="Flags"
                  className="h-28 object-contain glitch-amplify"
                />

              </div>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}
