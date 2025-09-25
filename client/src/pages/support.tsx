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

export default function Support() {
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, []);

  return (
    <div className="min-h-screen bg-red-900/30 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xs sm:text-sm font-semibold hover:text-red-500 transition-colors cursor-pointer">TCPS 👁</h1>
            </Link>
          </div>
          
          {/* Center Navigation */}
          <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6" role="navigation" aria-label="Primary">
            <Link href="/" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about-1" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-about">
              Story
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

          <div className="justify-self-end hidden sm:flex gap-2">
            <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
              <SiTiktok className="w-3 h-3" />
            </a>
            <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
              <FaInstagram className="w-3 h-3" />
            </a>
            <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
              <FaFacebook className="w-3 h-3" />
            </a>
            <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
              <FaYoutube className="w-3 h-3" />
            </a>
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
                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8">
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
                    Our Story
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
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content Side */}
            <div className="bg-black/60 p-12 rounded-lg">
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
                  className="bg-white text-black font-bold px-8 sm:px-16 py-4 sm:py-8 text-lg sm:text-2xl hover:bg-gray-200 transition-colors"
                  data-testid="button-donate"
                >
                  DONATE
                </Button>
              </a>
            </div>

            {/* Logo Side */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center w-full max-w-[700px]">
                <img 
                  src={tcpsLogoDesign}
                  alt="TCPS Logo Design" 
                  className="w-full h-auto max-w-[400px] lg:h-[350px] object-contain"
                />
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
                  className="h-16 object-contain mx-auto"
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