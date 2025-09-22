import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <h1 className="text-lg font-semibold hover:text-red-500 transition-colors cursor-pointer">The Car Park Society Inc.</h1>
            </Link>
            <div className="flex gap-2">
              <a href="https://facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaFacebook className="w-3 h-3" />
              </a>
              <a href="https://instagram.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="https://youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
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

      <main className="pt-20 pb-16">
        {/* Event Header */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">THE CONTROL ROOM [TCPS]</h1>
            
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <span>Thu, 30 Oct</span>
              <span>|</span>
              <span>TCPS CONTROL ROOM</span>
            </div>
            
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 mb-12"
              data-testid="button-rsvp"
            >
              RSVP
            </Button>
          </div>
        </section>

        {/* Event Image */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Event Image: THE CONTROL ROOM [TCPS]</span>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Time & Location</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">30 Oct 2025, 7:00 pm – 30 Nov 2025, 10:00 pm</strong>
                  </p>
                  <p>
                    <strong className="text-white">TCPS CONTROL ROOM</strong><br />
                    Te Aro, Wellington 6011, New Zealand
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">About the event</h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">The Control Room</h3>
                    <p className="italic mb-4">Phase Zero: The Rupture</p>
                    
                    <p className="mb-6">
                      The Car Park Society invites you to enter <strong className="text-white">THE CONTROL ROOM:</strong> a temporary portal hidden in the heart of Te Aro. This space is the first activation in our journey toward the Induction Centre, where overlooked urban environments are transformed into sites of memory, creativity, and resistance.
                    </p>
                    
                    <p className="mb-4">Inside The Control Room, you will encounter:</p>
                    
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Immersive projections</strong> that fracture and reassemble the concrete mythos of the city.</li>
                      <li><strong className="text-white">The Oracle terminal</strong>, transmitting cryptic signals and glitch-coded prophecy.</li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
                    data-testid="button-rsvp-bottom"
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="px-6 mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Share this event</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/sharer/sharer.php?u=https://thecarpark2025.wixsite.com/the-car-park-society/event-details/the-control-room-tcps&quote=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
                data-testid="share-facebook"
              >
                Share event on Facebook
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://twitter.com/intent/tweet?url=https://thecarpark2025.wixsite.com/the-car-park-society/event-details/the-control-room-tcps&text=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
                data-testid="share-twitter"
              >
                Share event on X
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fthecarpark2025.wixsite.com%2Fthe-car-park-society%2Fevent-details%2Fthe-control-room-tcps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
                data-testid="share-linkedin"
              >
                Share event on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex gap-2 mb-4">
                <a href="https://facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-2">thecarpark@society.com</p>
              <p className="text-gray-400 text-sm mb-2">Te Whanganui-a-Tara</p>
              <p className="text-gray-400 text-sm mb-2">Auckland</p>
              <p className="text-gray-400 text-sm">© 2025 by The Car Park Society Inc.</p>
            </div>
            
            <div className="flex justify-end">
              <div className="space-y-2">
                <div className="flex gap-4">
                  <div className="w-16 h-10 bg-red-600 flex items-center justify-center text-xs font-bold">NZ</div>
                  <div className="w-16 h-10 bg-blue-600 flex items-center justify-center text-xs font-bold"></div>
                  <div className="w-16 h-10 bg-red-500 flex items-center justify-center text-xs font-bold">C</div>
                  <div className="w-16 h-10 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}