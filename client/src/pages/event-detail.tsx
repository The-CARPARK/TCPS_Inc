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
            <Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
            <Link href="/about-1" className="text-sm text-gray-300 hover:text-white">Origins</Link>
            <Link href="/event-list" className="text-sm text-white border-b border-red-500">Activations</Link>
            <Link href="/blog" className="text-sm text-gray-300 hover:text-white">Transmissions</Link>
            <Link href="/donate" className="text-sm text-gray-300 hover:text-white">Support</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">T͟H͟Ξ CØNTЯØL RØØM</h1>
            <p className="italic text-gray-400">By The Car Park Society</p>
          </div>
        </section>

        <section className="px-6">
          <div className="max-w-9xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-gray-300">
              <p className="text-white font-semibold">
                31 October – 13 December 2025
              </p>

              {/* Images */}
                <div className="flex-1">
                  <img src={landscape} alt="Control Room Site" className="rounded-xl border-2 border-gray-700 shadow-2xl" />
                  <p className="mt-3 text-[11px] text-gray-400 italic text-center">
                    The Control Room – Cnr Dixon & Victoria Street.
                  </p>
                </div>

              {/* Countdown */}
              <div className="mt-10 bg-gray-900/50 border border-red-900/30 rounded p-4 font-mono text-center">
                <div className="text-red-400 text-xs uppercase mb-2">
                  FIRST RUPTURE LOADING
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["days", "hours", "minutes", "seconds"].map((unit) => (
                    <div key={unit} className="bg-black/50 border border-gray-800 rounded py-2">
                      <div className="text-red-400 font-bold">
                        {timeLeft[unit].toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-400 uppercase">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>

  {/* Body */}
<p className="text-gray-200 leading-relaxed">
  <b>Location:</b> 149 Victoria Street, Te Aro, Te Whanganui-a-Tara<br />
  <b>In collaboration with:</b>{" "}
  <a
    href="https://www.urbandreambrokerage.org.nz/carpark-society"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-400 underline"
  >
    Urban Dream Brokerage
  </a>

  <br /><br />

  {/* Project Report */}
  <a
    href="https://drive.google.com/file/d/1Yjf2GSWOlbgo3Dm807rStmohFnF783ro/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-xl border border-red-900 bg-red-950/30 p-6 hover:bg-red-950/50 transition"
  >
    <strong className="block text-lg text-white mb-3">
      READ THE PROJECT REPORT →
    </strong>
    <span className="text-gray-400 text-sm">
      Read the full Control Room project report.
    </span>
  </a>

  <br /><br />

  The Control Room was Phase Zero — The Rupture, the inaugural physical activation of The Car Park Society and our first live base in Te Aro.
  <br /><br />

  Operating from a modest urban tenancy, it became a portal into the TCPS mythos, a testing ground for new systems, and an entry point into the Watcher Network.
  <br /><br />

  <strong>133 people entered the Control Room across the six-week activation period.</strong>

  <br /><br />

  <strong>WATCHING THE WATCHERS</strong>
  <br /><br />

  The Control Room introduced The Oracle — an in-house interactive AI system exploring surveillance, observation, information and control.
  <br /><br />

  The Watcher Map, QR-linked archive and livestreams extended the project beyond the physical site and into the city.

  <br /><br />

  {/* Watcher Map & Archive */}
  <a
    href="https://tcps-map-spj5.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-xl border border-red-900 bg-red-950/30 p-6 hover:bg-red-950/50 transition"
  >
    <strong className="block text-lg text-white mb-3">
      WATCHER MAP & ARCHIVE →
    </strong>
    <span className="text-gray-400 text-sm">
      Explore the map, archive and digital traces of the activation.
    </span>
  </a>

  <br /><br />

  <strong>FOUR ACTIVATIONS</strong>
  <br /><br />

  <strong>THE EXCHANGE — FIRST RUPTURE</strong><br />
  31 October<br />
  Colonial maps, projection and glyphs opened the breach and introduced the Watcher Archive.
  <br /><br />

  <strong>THE BATTLE ARCHIVE — MANNERS STREET</strong><br />
  14 November<br />
  Sound and projection reframed histories of conflict and resistance.
  <br /><br />

  <strong>THE DROWNED FILE — RECLAIMED LAND</strong><br />
  28 November<br />
  Lost shoreline, archival audio and reclamation brought buried environmental histories to the surface.
  <br /><br />

  <strong>THE VEINS BENEATH — AWA PAVED WITH CONCRETE</strong><br />
  12 December<br />
  The final activation followed water, flow and continuity, closing Phase Zero and signalling what comes next.

  <br /><br />

  <strong>WHAT REMAINS</strong>
  <br /><br />

  The Control Room built the systems, relationships and practical knowledge that would inform the next stage of TCPS — laying the foundation for <strong>The Induction Centre</strong>.
  <br /><br />

  <strong>
    The Control Room closed.<br />
    The rupture remains open.<br />
    The descent continues.
  </strong>

  <br /><br />

  <strong>NGĀ MIHI NUI</strong>
  <br /><br />

  A huge ngā mihi to <strong>Urban Dream Brokerage</strong> for the venue and media support that helped TCPS establish a physical presence in Te Aro and bring the Control Room to life.
</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <img src={flagsImage} alt="Flags" className="h-28 object-contain" />
            <p className="text-gray-400 text-xs mt-2">© 2025 The Car Park Society Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
