import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import controlRoomImage from "@assets/123_1758548030700.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function EventDetail() {
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flowing-waves-complex">
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
      <main className="pt-20 pb-16 flowing-waves-fast">
        {/* Event Header */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">T͟H͟Ξ CØNTЯØL RØØM </h1>
            
            
          </div>
        </section>

        

        {/* Event Details */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">31 October – 30 November 2025</strong>
                  </p>
                  
                </div>
                
                {/* Control Room Image */}
                <div className="mt-8 wavy-overlay">
                  <img 
                    src={controlRoomImage} 
                    alt="The Control Room - Phase Zero: The Rupture" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">About the event</h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div>
                    <p className="italic mb-4 text-[19px]">Phase Zero: The Rupture</p>
                    
                    
                    
                    <p className="mb-4 font-semibold text-[18px]">
                      The Car Park Society Inc. invites you to enter THE CONTROL ROOM:<br />
                      a temporary portal hidden in the heart of Te Aro.<br /><br />
                      This immersive installation space transforms an abandoned urban cavity<br />
                      into a nerve center of glitch aesthetics and digital mythology.<br /><br />
                      STAY VIGILANT 👁 MORE DETAILS TO COME...
                    </p>
                    
                    
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
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