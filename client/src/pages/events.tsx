import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import logoBlackWhite from "@assets/TCPS_Medium_Black and White_1758546640968.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function Events() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerText, setBannerText] = useState('');
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
    document.title = "Events - The Car Park Society";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Upcoming activations and events from The Car Park Society. Join us for immersive experiences that challenge colonial narratives.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Upcoming activations and events from The Car Park Society. Join us for immersive experiences that challenge colonial narratives.';
      document.head.appendChild(meta);
    }

    // Banner text cycling
    const cycleText = () => {
      setTextIndex((prev) => (prev + 1) % bannerMessages.length);
    };

    setBannerText(bannerMessages[0]);
    
    const textInterval = setInterval(cycleText, 15000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    setBannerText(bannerMessages[textIndex]);
  }, [textIndex]);

  return (
    <div className="min-h-screen bg-black text-white flowing-waves-gentle">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">
          {/* TCPS Button Above Navigation with Full-Width Banner */}
          <div className="relative mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast overflow-hidden">
            {/* Full-Width Scrolling Banner Background */}
            <div className="absolute inset-0 bg-white border-y border-red-900/50 glitch-image">
              <div className="h-full overflow-hidden relative flex items-center section-glitch">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-pulse"></div>
                
                {/* Scrolling Text */}
                <div className="w-full overflow-hidden">
                  <div className="whitespace-nowrap text-[7px] sm:text-[8px] md:text-[9px] text-black font-mono py-2 px-4 animate-scroll vhs-overlay glitch-text" data-text={bannerText}>
                    {bannerText}&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
            
            {/* Foreground Elements */}
            <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
              <Link href="/">
                <img src={tcpsLogo} alt="TCPS" className="h-4 sm:h-5 glitch-icon bg-white/90 rounded px-1" />
              </Link>
              
              <div className="flex gap-1 bg-white px-1 py-0.5 rounded">
                <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                  <SiTiktok className="w-2 h-2" />
                </a>
                <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                  <FaInstagram className="w-2 h-2" />
                </a>
                <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                  <FaFacebook className="w-2 h-2" />
                </a>
                <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-4 h-4 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                  <FaYoutube className="w-2 h-2" />
                </a>
              </div>
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
                        className="w-full h-full object-contain"
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

      <main className="pt-20 pb-16 flowing-waves-pulse">
        {/* Events Header */}
        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">UPCOMING ACTIVATIONS</h1>
          </div>
        </div>

        {/* Event List */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {/* The Control Room Event */}
              <Link href="/event-details/the-control-room-tcps">
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-8 hover:bg-red-900/30 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 wavy-overlay-white">
                      <img 
                        src={logoBlackWhite} 
                        alt="The Car Park Society Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        THE CONTROL ROOM [TCPS]
                      </h2>
                      
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <span>Fri, 31 Oct</span>
                        <span>|</span>
                        <span>Te Aro, Te-Whanganui-a-Tara</span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        Phase Zero: The Rupture. A temporary portal hidden in the heart of Te Aro. 
                        This space is the first activation in our journey toward the Induction Centre.
                      </p>
                      
                      <div className="flex gap-4">
                        <span className="text-red-400 font-semibold">More info</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="text-center">
              <div className="flex gap-2 mb-4 justify-center">
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
                  className="h-28 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}