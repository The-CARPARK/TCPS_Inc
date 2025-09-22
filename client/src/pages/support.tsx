import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";

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
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">The Car Park Society Inc.</h1>
            <div className="flex gap-2">
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMenuOpen(true)}
            className="text-white hover:bg-gray-800"
            data-testid="menu-toggle"
          >
            Menu [ + ]
          </Button>
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
                      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                        <path d="M100 10 L170 85 L30 85 Z" stroke="black" strokeWidth="3" fill="none"/>
                        <path d="M70 40 L130 40 L130 60 L70 60 Z" fill="#e53e3e" transform="rotate(15 100 50)"/>
                        <path d="M85 35 L115 35 L115 45 L85 45 Z" fill="#666" transform="rotate(-10 100 40)"/>
                        <path d="M85 55 L115 55 L115 65 L85 65 Z" fill="#666" transform="rotate(10 100 60)"/>
                      </svg>
                    </div>
                    <div className="text-xs font-bold mt-2">THE CAR PARK SOCIETY</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <nav className="flex flex-col gap-6 mb-8">
                  <Link href="/">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-home">
                      Home
                    </button>
                  </Link>
                  <Link href="/about-1">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-about">
                      About
                    </button>
                  </Link>
                  <Link href="/event-list">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-events">
                      Events
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-blog">
                      Blog
                    </button>
                  </Link>
                  <Link href="/donate">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-donate">
                      Donate
                    </button>
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
              <h1 className="text-4xl font-bold text-white mb-8">
                Support The Car Park Society
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

              <div className="flex gap-4 mb-8">
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

              <a 
                href="http://ko-fi.com/thecarparksocietyinc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-white text-black font-bold px-8 py-4 text-lg hover:bg-gray-200 transition-colors"
                  data-testid="button-donate"
                >
                  DONATE
                </Button>
              </a>
            </div>

            {/* Logo Side */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-8 w-96 h-80 flex flex-col items-center justify-center">
                <div className="mb-8">
                  <svg className="w-48 h-32" viewBox="0 0 200 100" fill="none">
                    <path d="M100 10 L170 85 L30 85 Z" stroke="black" strokeWidth="3" fill="none"/>
                    <path d="M70 40 L130 40 L130 60 L70 60 Z" fill="#e53e3e" transform="rotate(15 100 50)"/>
                    <path d="M85 35 L115 35 L115 45 L85 45 Z" fill="#666" transform="rotate(-10 100 40)"/>
                    <path d="M85 55 L115 55 L115 65 L85 65 Z" fill="#666" transform="rotate(10 100 60)"/>
                  </svg>
                </div>
                
                <div className="text-center text-black mb-8">
                  <div className="text-sm font-bold">THE CAR PARK SOCIETY</div>
                </div>

                {/* Building/Structure Icon */}
                <div className="text-black">
                  <svg className="w-24 h-32" viewBox="0 0 100 120" fill="currentColor">
                    <rect x="10" y="20" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <rect x="20" y="30" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="30" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="30" width="15" height="8" fill="currentColor"/>
                    <rect x="20" y="45" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="45" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="45" width="15" height="8" fill="currentColor"/>
                    <rect x="20" y="60" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="60" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="60" width="15" height="8" fill="currentColor"/>
                    <rect x="20" y="75" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="75" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="75" width="15" height="8" fill="currentColor"/>
                    <rect x="20" y="90" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="90" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="90" width="15" height="8" fill="currentColor"/>
                    <rect x="20" y="105" width="15" height="8" fill="currentColor"/>
                    <rect x="40" y="105" width="15" height="8" fill="currentColor"/>
                    <rect x="65" y="105" width="15" height="8" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex gap-4">
              <div className="w-16 h-10 bg-red-600 flex items-center justify-center text-xs font-bold">NZ</div>
              <div className="w-16 h-10 bg-blue-600 flex items-center justify-center text-xs font-bold"></div>
              <div className="w-16 h-10 bg-red-500 flex items-center justify-center text-xs font-bold">C</div>
              <div className="w-16 h-10 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}