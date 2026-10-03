import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import landscape from "@assets/Control room 1.jpeg";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function EventDetail() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerText, setBannerText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    "The Self multiplies. The Eye breaks. And in that break empire ruptures. The Sequence closes. The Sequence begins again.",
  ];

  useEffect(() => {
    document.title = "The Control Room [TCPS] - The Car Park Society";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const description =
      "The Control Room: Phase Zero — The Rupture. The inaugural physical activation of The Car Park Society in Te Aro.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-10-31T20:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
          ),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor(
            (difference / (1000 * 60)) % 60
          ),
          seconds: Math.floor(
            (difference / 1000) % 60
          ),
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">

          {/* TCPS Button Above Navigation with Full-Width Banner */}
          <div className="relative mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast overflow-hidden">

            {/* Full-Width Scrolling Banner Background */}
            <div className="absolute inset-0 bg-white border-y border-red-900/50 glitch-image">
              <div className="h-full overflow-hidden relative flex items-center">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-pulse"></div>

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

          {/* Navigation */}
          <div className="flex justify-center w-full">
            <nav
              className="flex justify-center items-center gap-1 sm:gap-4 md:gap-6 w-full"
              role="navigation"
              aria-label="Primary"
            >

              <Link
                href="/"
                className="text-[11px] sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-home"
              >
                Home
              </Link>

              <Link
                href="/about-1"
                className="text-[11px] sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-about"
              >
                Origins
              </Link>

              <Link
                href="/event-list"
                className="text-[11px] sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap"
                data-testid="nav-events"
              >
                Activations
              </Link>

              <Link
                href="/blog"
                className="text-[11px] sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-blog"
              >
                Transmissions
              </Link>

              <Link
                href="/watcher-portal"
                className="text-[11px] sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-watcher-portal"
              >
                Watcher Portal
              </Link>

              <Link
                href="/donate"
                className="text-[11px] sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-donate"
              >
                Support
              </Link>

            </nav>
          </div>

        </div>
      </header>

      {/* =========================================================
          OVERLAY MENU
      ========================================================= */}
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

                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-pulse">

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
                  >
                    Home
                  </Link>

                  <Link
                    href="/about-1"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-about"
                  >
                    Origins
                  </Link>

                  <Link
                    href="/event-list"
                    className="text-2xl font-medium text-white border-b border-red-500"
                    data-testid="nav-events"
                  >
                    Activations
                  </Link>

                  <Link
                    href="/blog"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-blog"
                  >
                    Transmissions
                  </Link>

                  <Link
                    href="/watcher-portal"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-watcher-portal"
                  >
                    Watcher Portal
                  </Link>

                  <Link
                    href="/donate"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-donate"
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

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="pt-20 pb-16">

        <div className="max-w-4xl mx-auto px-6">

          {/* Page Header */}
          <section className="py-12 text-center">

            <h1 className="text-4xl font-bold mb-2">
              T͟H͟Ξ CØNTЯØL RØØM
            </h1>

            <p className="italic text-gray-400">
              By The Car Park Society
            </p>

          </section>

          {/* Main Content */}
          <section>

            <div className="space-y-8 text-gray-300">

              <p className="text-white font-semibold text-center">
                31 October – 13 December 2025
              </p>

              {/* Image */}
              <div className="flex flex-col items-center">

                <img
                  src={landscape}
                  alt="Control Room Site"
                  className="w-full max-w-3xl rounded-xl border-2 border-gray-700 shadow-2xl"
                />

                <p className="mt-3 text-[11px] text-gray-400 italic text-center">
                  The Control Room – Cnr Dixon & Victoria Street.
                </p>

              </div>

              {/* Countdown */}
              <div className="max-w-xl mx-auto bg-gray-900/50 border border-red-900/30 rounded p-4 font-mono text-center">

                <div className="text-red-400 text-xs uppercase mb-2">
                  FIRST RUPTURE LOADING
                </div>

                <div className="grid grid-cols-4 gap-2">

                  {["days", "hours", "minutes", "seconds"].map((unit) => (
                    <div
                      key={unit}
                      className="bg-black/50 border border-gray-800 rounded py-2"
                    >

                      <div className="text-red-400 font-bold">
                        {timeLeft[
                          unit as keyof typeof timeLeft
                        ]
                          .toString()
                          .padStart(2, "0")}
                      </div>

                      <div className="text-xs text-gray-400 uppercase">
                        {unit}
                      </div>

                    </div>
                  ))}

                </div>
              </div>

              {/* Body */}
              <div className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-center">

                <p>
                  <b>Location:</b> 149 Victoria Street, Te Aro,
                  Te Whanganui-a-Tara
                  <br />
                  <b>In collaboration with:</b>{" "}
                  <a
                    href="https://www.urbandreambrokerage.org.nz/carpark-society"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 underline"
                  >
                    Urban Dream Brokerage
                  </a>
                </p>

                {/* Project Report */}
                <a
                  href="https://drive.google.com/file/d/1Yjf2GSWOlbgo3Dm807rStmohFnF783ro/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 rounded-xl border border-red-900 bg-red-950/30 p-6 hover:bg-red-950/50 transition text-left"
                >
                  <strong className="block text-lg text-white mb-3">
                    READ THE PROJECT REPORT →
                  </strong>

                  <span className="text-gray-400 text-sm">
                    The full record of Phase Zero — The Rupture.
                  </span>
                </a>

                <p className="mt-8">
                  The Control Room was Phase Zero — The Rupture, the
                  inaugural physical activation of The Car Park Society
                  and our first live base in Te Aro.
                </p>

                <p className="mt-6">
                  Across six weeks,{" "}
                  <strong>133 people entered the Control Room</strong>,
                  engaging with installation, projection, sound, ritual,
                  archival material and digital systems. The space became
                  a working environment for testing ideas, building the
                  Watcher Network and developing the systems that would
                  shape future TCPS activations.
                </p>

                <p className="mt-6">
                  The Oracle introduced an in-house exploration of
                  surveillance, observation and control, while the
                  Watcher Map and digital archive extended the project
                  beyond the physical site.
                </p>

                {/* Watcher Map & Archive */}
                <a
                  href="https://tcps-map-spj5.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 rounded-xl border border-red-900 bg-red-950/30 p-6 hover:bg-red-950/50 transition text-left"
                >
                  <strong className="block text-lg text-white mb-3">
                    WATCHER MAP & ARCHIVE →
                  </strong>

                  <span className="text-gray-400 text-sm">
                    Explore the stories, sites and digital traces of the
                    activation.
                  </span>
                </a>

                <p className="mt-8">
                  Four public activations carried the project into Te Aro
                  — exploring rupture, conflict, reclaimed land, water
                  and buried histories. Together, they extended the
                  Control Room beyond its tenancy and into the city.
                </p>

                <p className="mt-6">
                  The Control Room closed, but the work continues. It
                  established the foundation for{" "}
                  <strong>The Induction Centre</strong>.
                </p>

                <p className="mt-6 font-semibold">
                  The rupture remains open.
                  <br />
                  The descent continues.
                </p>

                <p className="mt-8 font-semibold">
                  NGĀ MIHI NUI
                </p>

                <p className="mt-6">
                  A huge ngā mihi to{" "}
                  <strong>Urban Dream Brokerage</strong> for the venue
                  and media support that helped TCPS establish a physical
                  presence in Te Aro and bring the Control Room to life.
                </p>

              </div>
            </div>
          </section>
        </div>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="py-16 px-6 border-t border-gray-800">

        <div className="max-w-7xl mx-auto">

          {/* Member Login */}
          <div className="flex justify-center md:justify-end mb-10">
            <a
              href="https://auth.tcps.app/login?next=%2Foauth%2Fauthorize%3Fclient_id%3Dclient_cf59aa5f3196%26redirect_uri%3Dhttps%253A%252F%252Fdev.tcps.app%252Fauth%252Fcallback%26response_type%3Dcode%26state%3D5031576d5a3a70e571c0c53c5a331dda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-red-600 bg-red-950/60 text-white text-xs font-bold tracking-widest uppercase hover:bg-red-600 transition-colors"
            >
              MEMBER LOGIN →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* Socials + Contact */}
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
                className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold"
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
            <div className="flex justify-center md:justify-end">

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