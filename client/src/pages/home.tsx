import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import heroImage from "@assets/1_1758536573325.png";
import visionImage from "@assets/2_1758536573325.png";
import eyeCreateImage from "@assets/Untitled - 6 August 2025 21.28_1758537254685.jpg";
import eyeBuildImage from "@assets/Untitled - 6 August 2025 21.28 (3)_1758537371863.jpg";
import eyeAmplifyImage from "@assets/Untitled - 6 August 2025 21.28 (2)_1758537390681.jpg";
import eyeImage from "@assets/Untitled - 6 August 2025 21.28_1758537254685.jpg";
import newHeroLogoImage from "@assets/Untitled - 6 August 2025 21.28 (4)_1758552061511.jpg";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";


export default function Home() {
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
    document.title = "The Car Park Society - Reclaiming Urban Spaces";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The Car Park Society formed in 2025 to reveal hidden histories, restore connection, and transform overlooked spaces into vibrant hubs of collective creativity and community empowerment.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'The Car Park Society formed in 2025 to reveal hidden histories, restore connection, and transform overlooked spaces into vibrant hubs of collective creativity and community empowerment.';
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
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
    <div className="min-h-screen bg-black text-white flowing-waves-smooth">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="skip-to-content"
      >
        Skip to Main Content
      </a>

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
              <img src={tcpsLogo} alt="TCPS" className="h-4 sm:h-5 glitch-icon bg-white/90 rounded px-1" />
              
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
              <Link href="/" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-home">
                Welcome
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
                <div className="w-64 h-48 flex items-center justify-center mb-8">
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
                    Welcome
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

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="pt-12 pb-0 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-center" data-testid="text-welcome">
              <div className="text-left">
                <p className="font-black text-gray-300 mb-4 text-[31px] text-center">
                  WELCOME TO
                </p>
                <h1 className="lg:text-5xl mb-8 text-center font-black text-[40px] glitch-text" data-text="THE CAR PARK SOCIETY">
                  THE CAR PARK SOCIETY
                </h1>
                
                <div className="text-gray-300 max-w-sm text-center mx-auto text-[15px] font-light mb-6" data-testid="text-intro">
                  <p className="mb-4">
                    The Car Park Society Inc. (TCPS) is a kaupapa-driven incorporated society based in Te Whanganui-a-Tara. We are a collective of Māori and tauiwi artists, researchers, organisers, and community builders.
                  </p>
                  <p>
                    Our mahi is dedicated to revealing hidden histories, restoring connections, and transforming overlooked urban spaces into vibrant hubs of creativity, cultural resurgence, and community empowerment.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <img 
                  src={newHeroLogoImage} 
                  alt="The Car Park Society Eye Symbol" 
                  className="w-full max-w-md h-[280px] object-contain glitch-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 mb-6 inline-block wavy-bg-white-colorful">
              <h2 className="text-black mb-3 font-black text-[36px] glitch-text" data-text="MISSION" data-testid="text-mission-heading">MISSION</h2>
              <div className="text-black italic text-center mb-6 text-[15px] leading-relaxed">
                <p className="mb-1 font-bold">Kia whakatōmuri te haere whakamua.</p>
                <p className="text-[14px]">I walk backwards into the future with my eyes fixed on the past.</p>
              </div>
              <div className="text-black text-center text-[15px] leading-relaxed space-y-4" data-testid="text-mission">
                <p>
                  <strong>We uncover colonial layers</strong> embedded in urban infrastructure. Car parks, laneways, and reclaimed lands are not neutral; they are the foundations of displacement. Our mahi makes the hidden visible, exposing how concrete conceals stories of whenua, awa, and people.
                </p>
                
                <p>
                  <strong>We honour Te Tiriti o Waitangi</strong> as our guiding framework. By centring mana whenua leadership and modelling co-governance, we ensure that our work is not only creative but accountable. Te Tiriti grounds us in reciprocity, partnership, and enduring responsibility.
                </p>
                
                <p>
                  <strong>We restore mauri</strong> by reconnecting people with whenua and awa. Through ritual, research, and immersive experience, we bring the flow of buried streams, the pulse of land, and the voices of ancestors back into the urban present.
                </p>
                
                <p>
                  <strong>We empower communities</strong> through art, ritual, and collective action. Each activation is a portal where audiences become participants, where suppressed stories are remembered, and where tino rangatiratanga is exercised in the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center mb-16 font-black glitch-text" data-text="VISION + IMPACT" data-testid="text-vision-heading">VISION + IMPACT</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center max-w-56 mx-auto">
                <div className="w-60 h-40 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={eyeCreateImage} 
                    alt="Eye symbol representing CREATE" 
                    className="w-48 h-48 object-contain glitch-image"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-create-heading">CREATE</h3>
                <p className="text-gray-300 text-[15px]" data-testid="text-create">
                  We design immersive, participatory experiences that dissolve the line between art, ritual, and activism. Each activation is more than an event: it is a living portal where audiences become participants, stories become ceremonies, and overlooked spaces become sites of collective transformation.
                </p>
              </div>
              
              <div className="text-center max-w-56 mx-auto">
                <div className="w-60 h-40 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={eyeBuildImage} 
                    alt="Eye symbol representing BUILD" 
                    className="w-48 h-48 object-contain glitch-image"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-build-heading">BUILD</h3>
                <p className="text-gray-300 text-[15px]" data-testid="text-build">
                  We are committed to resilient networks and long-term community alliances. Our work is rooted in trust, co-design, and reciprocity; ensuring that every Watcher, collaborator, and partner plays an active role in shaping the society we are building together. This is not a movement of spectacle, but one of solidarity.
                </p>
              </div>
              
              <div className="text-center max-w-56 mx-auto">
                <div className="w-60 h-40 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={eyeAmplifyImage} 
                    alt="Eye symbol representing AMPLIFY" 
                    className="w-48 h-48 object-contain glitch-image"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-amplify-heading">AMPLIFY</h3>
                <p className="text-gray-300 text-[15px]" data-testid="text-amplify">
                  At the heart of The Car Park Society is a commitment to Indigenous narratives of resurgence, reclamation, and radical futures. We centre voices too often erased by consumerism and colonisation, using our platforms to project stories of sovereignty, resilience, and imagination into the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="py-12 px-6 bg-red-900/30 vhs-overlay">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 glitch-text" data-text="Join the Movement" data-testid="text-join-heading">Join the Movement</h2>
            <p className="text-base text-gray-300 mb-8" data-testid="text-join-description">
              We are building a society of Watchers, partners, and allies who choose solidarity over silence. Join our email list and get updates about upcoming society events and activations:
            </p>
            
            <div className="max-w-md mx-auto">
              {/* Minimal Google Form Embed - Email Field Only */}
              <div className="relative bg-gray-900/80 p-6 rounded-lg border border-red-900/30 glitch-image vhs-overlay">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 rounded-lg"></div>
                
                {/* Custom styled iframe container to hide Google Form branding */}
                <div className="relative z-10 overflow-hidden rounded bg-gray-800/50 h-44">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLScZtK0FRz0y5khXVoDZea5IxPaJYy4M9e66OLTYrJNjL0AZHw/viewform?embedded=true&usp=pp_url&entry.1045781291=" 
                    width="100%"
                    height="700"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full"
                    style={{
                      transform: 'scale(0.9) translateY(-290px)',
                      filter: 'invert(0.95) hue-rotate(180deg) contrast(1.1) brightness(0.85) saturate(1.2)',
                      background: 'transparent'
                    }}
                    title="Newsletter Signup"
                    data-testid="form-newsletter-signup"
                  >
                    Loading...
                  </iframe>
                </div>
                
                {/* Custom overlay with TCPS styling */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-4 left-6 text-xs text-red-400 font-mono uppercase tracking-wider">
                    ◦ SIGNAL TRANSMISSION ◦
                  </div>
                  <div className="absolute bottom-4 right-6 text-xs text-gray-500 font-mono">
                    ∴ ENCRYPTED ∴
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-3 font-mono tracking-wide glitch-text" data-text="⟩ DIRECT NEURAL INTERFACE ⟨">
                ⟩ DIRECT NEURAL INTERFACE ⟨
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 flowing-waves-smooth">
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