import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import buildingImage from "@assets/Screenshot 2025-09-21 214642_1758536131507.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogoDesign from "@assets/Screenshot 2025-09-21 214642_1758551336909.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function Support() {
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
    document.title = "Support The Car Park Society - Donate";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Support The Car Park Society. Help us keep the movement underground, independent, and powerful through your donations.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Support The Car Park Society. Help us keep the movement underground, independent, and powerful through your donations.';
      document.head.appendChild(meta);
    }

    // Banner text cycling
    const cycleText = () => {
      setTextIndex((prev) => (prev + 1) % bannerMessages.length);
    };

    setBannerText(bannerMessages[0]);
    
    const textInterval = setInterval(cycleText, 8000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    setBannerText(bannerMessages[textIndex]);
  }, [textIndex]);

  return (
    <div className="min-h-screen bg-red-900/30 text-white">
      {/* Header */}
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
                  <div className="whitespace-nowrap text-[10px] sm:text-[12px] md:text-[14px] text-black font-mono py-2 px-4 animate-scroll vhs-overlay glitch-text tracking-wider" data-text={bannerText}>
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
              <Link href="/event-list" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-events">
                Activations
              </Link>
              <Link href="/blog" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-blog">
                Transmissions
              </Link>
              <Link href="/donate" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-donate">
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
                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-slow">
                  <div className="text-center text-black">
                    <div className="relative w-48 h-32">
                      <img 
                        src={logoImage} 
                        alt="The Car Park Society Logo" 
                        className="w-full h-full object-contain glitch-amplify"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center min-h-[80vh] items-center">
            {/* Integrated Content with Image */}
            <div className="bg-black/60 p-12 rounded-lg max-w-4xl w-full">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h1 className="font-bold text-white mb-8 text-[26px]">
                    SUPPORT TCPS
                  </h1>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
                    <p className="text-lg font-semibold">Why Support us?</p>
                    
                    <p>
                      By backing The Car Park Society on Ko-fi, you help us keep the movement 
                      underground, independent, and powerful.
                    </p>
                    
                    <p>
                      You help transform abandoned structures into living art and resistance spaces, 
                      create immersive experiences that challenge colonial narratives, and build a 
                      collective of Watchers dedicated to land back, memory, and creativity.
                    </p>
                    
                    <p>
                      Your support keeps the rituals alive, from installations and films to gatherings 
                      and community wānanga.
                    </p>
                    
                    <p>The sequence is reclamation and resistance.</p>
                    
                    <p>We invite you to be part of it.</p>
                  </div>

                  <a 
                    href="http://ko-fi.com/thecarparksocietyinc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button 
                      className="bg-white text-black font-bold px-8 sm:px-16 py-4 sm:py-8 text-lg sm:text-2xl hover:bg-gray-200 transition-colors wavy-bg-white-pulse glitch-button"
                      data-testid="button-donate"
                    >
                      DONATE
                    </Button>
                  </a>
                </div>
                
                {/* Embedded Image */}
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="flex items-center justify-center wavy-bg-white-slow p-3 rounded mt-8">
                    <img 
                      src={tcpsLogoDesign}
                      alt="TCPS Logo Design" 
                      className="w-full h-auto max-w-[200px] lg:max-w-[240px] object-contain glitch-create vhs-overlay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 mt-16 bg-[#0f0404]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="text-center md:text-left">
              <div className="flex gap-2 mb-4 justify-center md:justify-start">
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
              <a href="mailto:connect@thecarparksociety.xyz" className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold bg-[#0f0404]" data-testid="link-email-contact">connect@thecarparksociety.xyz</a>
              <p className="text-gray-400 mb-2 text-[13px]">Te Whanganui-a-Tara</p>
              <p className="text-gray-400 mb-2 font-bold text-[13px]">AOTEAROA</p>
              <p className="text-gray-400 text-[12px]">© 2025 by The Car Park Society Inc.</p>
            </div>
            
            <div className="text-center">
              <div className="space-y-2">
                <img 
                  src={flagsImage} 
                  alt="Flags" 
                  className="h-16 object-contain mx-auto glitch-build"
                />
              </div>
            </div>
            
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}