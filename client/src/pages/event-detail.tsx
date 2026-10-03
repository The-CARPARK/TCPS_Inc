import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import groupHero from "./TCPS_Group_Hero_1.webp";
import landscape from "@assets/Control room 1.jpeg";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function EventDetail() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = "The Control Room [TCPS] - The Car Park Society";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      "Join us for The Control Room: Phase Zero - The Rupture. A temporary portal hidden in the heart of Te Aro featuring immersive projections and cryptic signals.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-10-31T20:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">
          <div className="flex justify-between items-center mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast">
            <Link href="/">
              <img
                src={tcpsLogo}
                alt="TCPS"
                className="h-4 sm:h-5 hover:opacity-80 transition-opacity cursor-pointer glitch-icon"
              />
            </Link>

            <div className="flex gap-2">
              <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 text-white">
                <SiTiktok className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 text-white">
                <FaInstagram className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 text-white">
                <FaFacebook className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 text-white">
                <FaYoutube className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <nav className="flex justify-center gap-4">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">
              Home
            </Link>

            <Link href="/about-1" className="text-sm text-gray-300 hover:text-white">
              Origins
            </Link>

            <Link href="/event-list" className="text-sm text-white border-b border-red-500">
              Activations
            </Link>

            <Link href="/blog" className="text-sm text-gray-300 hover:text-white">
              Transmissions
            </Link>

            <Link href="/watcher-portal" className="text-sm text-gray-300 hover:text-white">
              Watcher Portal
            </Link>

            <Link href="/donate" className="text-sm text-gray-300 hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
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
                        {timeLeft[unit].toString().padStart(2, "0")}
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
                  <b>Location:</b> 149 Victoria Street, Te Aro, Te Whanganui-a-Tara
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
                  The Control Room was Phase Zero — The Rupture, the inaugural
                  physical activation of The Car Park Society and our first live base
                  in Te Aro.
                </p>

                <p className="mt-6">
                  Across six weeks, <strong>133 people entered the Control Room</strong>,
                  engaging with installation, projection, sound, ritual, archival
                  material and digital systems. The space became a working environment
                  for testing ideas, building the Watcher Network and developing the
                  systems that would shape future TCPS activations.
                </p>

                <p className="mt-6">
                  The Oracle introduced an in-house exploration of surveillance,
                  observation and control, while the Watcher Map and digital archive
                  extended the project beyond the physical site.
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
                    Explore the stories, sites and digital traces of the activation.
                  </span>
                </a>

                <p className="mt-8">
                  Four public activations carried the project into Te Aro — exploring
                  rupture, conflict, reclaimed land, water and buried histories.
                  Together, they extended the Control Room beyond its tenancy and
                  into the city.
                </p>

                <p className="mt-6">
                  The Control Room closed, but the work continues. It established the
                  foundation for <strong>The Induction Centre</strong>.
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
                  A huge ngā mihi to <strong>Urban Dream Brokerage</strong> for the
                  venue and media support that helped TCPS establish a physical
                  presence in Te Aro and bring the Control Room to life.
                </p>

              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
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
