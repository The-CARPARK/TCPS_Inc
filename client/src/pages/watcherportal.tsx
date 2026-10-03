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

    const description =
      "Enter the Watcher Network. Membership in The Car Park Society is an entry point into the work, activations, transmissions and systems being built across Te Whanganui-a-Tara.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    setBannerText(bannerMessages[0]);

    const cycleText = () => {
      setTextIndex((prev) => (prev + 1) % bannerMessages.length);
    };

    const textInterval = setInterval(cycleText, 8000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    setBannerText(bannerMessages[textIndex]);
  }, [textIndex]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">

          {/* Scrolling Banner */}
          <div className="relative mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast overflow-hidden">

            <div className="absolute inset-0 bg-white border-y border-red-900/50 glitch-image">
              <div className="h-full overflow-hidden relative flex items-center">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-pulse"></div>

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

            {/* Banner Foreground */}
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

          {/* Navigation */}
          <div className="flex justify-center">
            <nav
              className="flex justify-center gap-2 sm:gap-4 md:gap-6"
              role="navigation"
              aria-label="Primary"
            >

              <Link
                href="/"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Home
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
                href="/watcher-portal"
                className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap"
              >
                Watcher Portal
              </Link>

              <Link
                href="/donate"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Support
              </Link>

            </nav>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="overlay-menu">
          <div className="menu-content">

            <div className="absolute top-6 right-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:bg-gray-800"
              >
                Close [ - ]
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 h-full">

              <div className="flex flex-col items-center">
                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-colorful">
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
                  >
                    Home
                  </Link>

                  <Link
                    href="/about-1"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                  >
                    Origins
                  </Link>

                  <Link
                    href="/event-list"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                  >
                    Activations
                  </Link>

                  <Link
                    href="/blog"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                  >
                    Transmissions
                  </Link>

                  <Link
                    href="/watcher-portal"
                    className="text-2xl font-medium text-white border-b border-red-500"
                  >
                    Watcher Portal
                  </Link>

                  <Link
                    href="/donate"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                  >
                    Support
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
      <main className="pt-20 pb-0">

        {/* MEMBER LOGIN — NOW BELOW NAV */}
        <div className="px-6 pt-5 pb-2">
          <div className="max-w-5xl mx-auto flex justify-center">
            <a
              href="https://auth.tcps.app/login?next=%2Foauth%2Fauthorize%3Fclient_id%3Dclient_cf59aa5f3196%26redirect_uri%3Dhttps%253A%252F%252Fdev.tcps.app%252Fauth%252Fcallback%26response_type%3Dcode%26state%3D5031576d5a3a70e571c0c53c5a331dda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-red-600 bg-red-950/70 text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-red-600 transition-colors"
            >
              Member Login
            </a>
          </div>
        </div>

        {/* INTRO */}
        <section className="px-6 pt-8 pb-5">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
              JOIN THE{" "}
              <span className="text-gray-500">CAR PARK</span>
              <br />
              SOCIETY
            </h1>

            <div className="max-w-3xl mx-auto mt-8 space-y-5">

              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Membership is not a subscription.
                <br />
                It is an entry point.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                The Car Park Society works in the gaps — between the official
                story and what was buried underneath it, between the city you
                are given and the histories it tries to conceal.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                The Watcher Network is made up of people who want to look
                closer. To question the surface. To contribute, participate,
                document, build, transmit and stay connected to what is
                happening across the Society.
              </p>

              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                If you are already watching —
                <br />
                you are already at the threshold.
              </p>

            </div>
          </div>
        </section>

        {/* APPLICATION */}
        <section className="px-6 pt-5 pb-10 border-t border-gray-900">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                MEMBERSHIP
                <br />
                <span className="text-gray-500">APPLICATION</span>
              </h2>

              <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                Enter your details below. Tell us where you are, what you are
                interested in, and how you want to connect with the work.
              </p>
            </div>

            {/* Google Form */}
            <div className="w-full border border-gray-800 bg-[#111113] overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfDjfk7rvBz0-eOoC5DQVyNbzZeq4IOXbwwqhUjYfwV9jn8DQ/viewform?embedded=true"
                width="100%"
                height="650"
                className="w-full h-[650px] md:h-[800px] border-0 block"
                title="TCPS Membership Application"
              >
                Loading…
              </iframe>
            </div>

            {/* PROCESS */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">

              <div className="border-t border-red-800 pt-5">
                <p className="text-red-500 font-mono text-sm mb-2">
                  01 / APPLY
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  CROSS THE THRESHOLD
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Complete the application. Give us enough to know where you
                  might fit within the network.
                </p>
              </div>

              <div className="border-t border-red-800 pt-5">
                <p className="text-red-500 font-mono text-sm mb-2">
                  02 / REVIEW
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  SIGNAL RECEIVED
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Your application is reviewed by the Society. Membership is
                  considered in the context of the network and its kaupapa.
                </p>
              </div>

              <div className="border-t border-red-800 pt-5">
                <p className="text-red-500 font-mono text-sm mb-2">
                  03 / CONNECT
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  ENTER THE NETWORK
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with the work, the activations, the transmissions
                  and the people watching what happens next.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* GROUP IMAGE */}
        <section className="w-full">
          <img
            src={tcpsGroupHero}
            alt="The Car Park Society"
            className="w-full h-auto object-contain object-center block"
          />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* Social + Contact */}
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

            {/* Mana Whenua */}
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

            {/* Flags */}
            <div className="flex justify-end">

              <div className="space-y-2">
                <img
                  src={flagsImage}
                  alt="Flags"
                  className="h-28 object-contain glitch-create"
                />
              </div>

            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
