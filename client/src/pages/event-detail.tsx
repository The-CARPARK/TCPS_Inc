import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import groupHero from "./TCPS_Group_Hero_1.webp";
import landscape from "./Landscape_1.webp";
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
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join us for The Control Room: Phase Zero - The Rupture. A temporary portal hidden in the heart of Te Aro featuring immersive projections and cryptic signals.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join us for The Control Room: Phase Zero - The Rupture. A temporary portal hidden in the heart of Te Aro featuring immersive projections and cryptic signals.';
      document.head.appendChild(meta);
    }

    // Countdown timer
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-10-31T20:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
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
          {/* TCPS Button Above Navigation */}
          <div className="flex justify-between items-center mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast">
            <Link href="/">
              <img src={tcpsLogo} alt="TCPS" className="h-4 sm:h-5 hover:opacity-80 transition-opacity cursor-pointer glitch-icon" />
            </Link>
            <div className="flex gap-2">
              <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <SiTiktok className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaInstagram className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaFacebook className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaYoutube className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Navigation and Social Icons Row */}
          <div className="flex justify-center">
            {/* Center Navigation */}
            <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6" role="navigation" aria-label="Primary">
              <Link href="/" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-home">
                Home
              </Link>
              <Link href="/about-1" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-about">
                Origins
              </Link>
              <Link href="/event-list" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-events">
                Activations
              </Link>
              <Link href="/blog" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-blog">
                Transmissions
              </Link>
              <Link href="/donate" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-donate">
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
                data-testid="menu-close"
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
                        className="w-full h-full object-contain glitch-create"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <nav className="flex flex-col gap-6 mb-8">
                  <Link href="/" className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-home">
                    Home
                  </Link>
                  <Link href="/about-1" className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-about">
                    Origins
                  </Link>
                  <Link href="/event-list" className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-events">
                    Activations
                  </Link>
                  <Link href="/blog" className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-blog">
                    Transmissions
                  </Link>
                  <Link href="/donate" className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-donate">
                    Support
                  </Link>
                </nav>

                <div className="flex gap-4 justify-center">
                  <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <SiTiktok className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="pt-20 pb-16">
        {/* Event Header */}
        <section className="px-6 py-12">
          <div className="max-w-7x1 mx-auto">
<h1 className="text-4xl font-bold mb-2 text-white">T͟H͟Ξ CØNTЯØL RØØM</h1>
<p className="italic text-gray-400 mb-6">By The Car Park Society</p>


          </div>
        </section>



        {/* Event Details */}
        <section className="px-6">
<div className="max-w-[90rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">31 October – 13 December 2025</strong>
                  </p>

                </div>

{/* Hero and Landscape Images */}
<div className="mt-10 flex flex-col md:flex-row gap-8 justify-between items-start">
  {/* Left: Group Hero */}
  <div className="flex-1 max-w-[48%] md:max-w-none">
    <img
      src={groupHero}
      alt="The Car Park Society – collective assembly beneath the grid"
      className="w-full h-auto rounded-xl border-2 border-gray-700 shadow-2xl hover:opacity-95 transition-all duration-300"
      loading="lazy"
    />
    <p className="mt-3 text-[11px] text-gray-400 italic text-center leading-snug">
      The Car Park Society – collective assembly beneath the grid.
    </p>
  </div>

  {/* Right: Landscape */}
  <div className="flex-1 max-w-[48%] md:max-w-none">
    <img
      src={landscape}
      alt="The Control Room – Cnr Dixon & Victoria Street"
      className="w-full h-auto rounded-xl border-2 border-gray-700 shadow-2xl hover:opacity-95 transition-all duration-300"
      loading="lazy"
    />
    <p className="mt-3 text-[11px] text-gray-400 italic text-center leading-snug">
      The Control Room – Cnr Dixon & Victoria Street.
    </p>
  </div>
</div>

{/* Countdown Timer */}
<div className="mb-8 py-3 px-4 bg-gray-900/50 border border-red-900/30 rounded font-mono text-center shadow-lg">
  <div className="text-red-400 text-xs uppercase tracking-wider mb-1">
    FIRST RUPTURΞ POINT LOADING IN...
  </div>
  <div className="grid grid-cols-4 gap-2 text-white">
    <div className="bg-black/50 py-1 px-2 rounded border border-gray-800">
      <div className="text-sm font-bold text-red-400">{timeLeft.days.toString().padStart(2, '0')}</div>
      <div className="text-xs text-gray-400 uppercase">DAYS</div>
    </div>
    <div className="bg-black/50 py-1 px-2 rounded border border-gray-800">
      <div className="text-sm font-bold text-red-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
      <div className="text-xs text-gray-400 uppercase">HRS</div>
    </div>
    <div className="bg-black/50 py-1 px-2 rounded border border-gray-800">
      <div className="text-sm font-bold text-red-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
      <div className="text-xs text-gray-400 uppercase">MIN</div>
    </div>
    <div className="bg-black/50 py-1 px-2 rounded border border-gray-800">
      <div className="text-sm font-bold text-red-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
      <div className="text-xs text-gray-400 uppercase">SEC</div>
    </div>
  </div>
  <div className="text-xs text-gray-500 mt-1 font-mono">
    ⧫ THΞ RUPTURΞ BΞGINS ⧫
  </div>
</div>
                
{/* Body Text */}
<p className="mt-8 text-[15px] md:text-[16px] text-gray-200 leading-relaxed">

  <b>Location:</b> 149 Victoria Street; Te Aro; Te Whanganui-a-Tara<br />
  <b>In Collaboration with:</b> <a href="https://www.urbandreambrokerage.org.nz/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 underline">Urban Dream Brokerage</a><br />

  
  Do you miss trick-or-treating? We've built a Halloween treasure hunt for you! Wellington didn’t always look like this. Colonisation has changed the very land we walk on; it has shaped our history, our present, and our future.<br /><br />

  <b>The Control Room</b> is <b>Phase Zero: The Rupture</b> — the first live activation of The Car Park Society.We have transformed a modest urban tenancy into a public portal and member hub; a place where the Watcher Network begins. Here, we test our systems, rituals, and signals in preparation for the larger Induction Centre activation planned for 2026.<br /><br />

  We reclaim forgotten and overlooked spaces; sites where histories have been buried, distorted, or erased. Through projection, sound, QR glyphs, and symbolic acts, we invite you to step into these fractures and witness what the city tries to forget.<br /><br />

  Across six weeks, four activations will unfold; each revealing a deeper layer of Te Aro’s hidden memory:<br /><br />

  <b>Activation 1 – 31 Oct: The First Rupture</b><br />
  Projection overlays of colonial maps and glyphs. QR glyphs unlock File #1.<br />
  <i>“The burial is broken. You are observed.”</i><br /><br />

  <b>Activation 2 – 14 Nov: The Battle Archive</b><br />
  Projection overlays of riot vs refusal. Soundscape of haka, musket fire, and colonial orders dissolving into static. QR glyphs unlock File #2.<br />
  <i>Oracle: “They called it riot. We call it refusal.”</i><br /><br />

  <b>Activation 3 – 28 Nov: The Drowned File</b><br />
  Projection of the lost shoreline. Soundscape of waves and Harbour Board minutes. QR glyphs unlock File #3.<br />
  <i>“The sea still waits beneath. You are reclaimed.”</i><br /><br />

  <b>Activation 4 – 12 Dec: The Veins Beneath</b><br />
  Projection of rippling water textures. Soundscape of awa and glitch static. QR glyphs unlock File #4.<br />
  <i>Oracle: “Ko te awa ahau. Ko te awa ko au. The memory flows.”</i><br /><br />

  We invite the public to participate, observe, and connect with us throughout the activation period; to join the Watcher Network as it forms in real time.<br /><br />

  <b>Nau mai, haere mai</b> — come down and have a kōrero, have a kai, while we deep dive into what a utopian future might look like when we honour <b>Te Tiriti o Waitangi</b> and respect <b>te taiao</b>.<br /><br />

  Acknowledgement to Urban Dream Brokerage, Wellington City Council and our property partners Willis Bond for their ongoing support of this work.
</p>

{/* Correctly close all containers */}
              </div> {/* closes left column */}
            </div>   {/* closes grid */}
          </div>     {/* closes max-w-4xl */}
        </section>   {/* closes event details */}
      </main>        {/* closes main */}

      {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex gap-2 mb-4">
                <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <SiTiktok className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
              <a href="mailto:connect@thecarparksociety.xyz" className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold bg-[#000000]" data-testid="link-email-contact">connect@thecarparksociety.xyz</a>
              <p className="text-gray-400 mb-2 text-[13px]">Te Whanganui-a-Tara</p>
              <p className="text-gray-400 mb-2 font-bold text-[13px]">AOTEAROA</p>
              <p className="text-gray-400 text-[12px]">© 2025 by The Car Park Society Inc.</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm italic mb-4">
                "We will not be seen,<br />
                but we will be heard.<br />
                We will not be controlled,<br />
                but we will govern.<br />
                We will not wait for change;<br />
                we will be the change."
              </p>
              <p className="text-gray-600 text-xs font-extralight">
                Oath of TCPS
              </p>
            </div>

            <div className="flex justify-end">
              <div className="space-y-2">
                <img 
                  src={flagsImage} 
                  alt="Flags" 
                  className="h-28 object-contain glitch-build"
                />
        </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
