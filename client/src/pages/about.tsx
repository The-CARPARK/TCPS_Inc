import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "About - The Car Park Society";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about The Car Park Society story, mission, and Te Mana Whakatete Accord. Discover why we chose a car park as our symbolic battleground.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about The Car Park Society story, mission, and Te Mana Whakatete Accord. Discover why we chose a car park as our symbolic battleground.';
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="skip-to-content"
      >
        Skip to Main Content
      </a>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <h1 className="text-sm sm:text-lg font-semibold hover:text-red-500 transition-colors cursor-pointer">The Car Park Society Inc.</h1>
            </Link>
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
          
          {/* Center Navigation */}
          <nav className="hidden md:flex justify-center gap-6" role="navigation" aria-label="Primary">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about-1" className="text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-about">
              Our Story
            </Link>
            <Link href="/event-list" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-events">
              Activations
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-blog">
              Transmissions
            </Link>
            <Link href="/donate" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-donate">
              Support
            </Link>
          </nav>

          <div className="justify-self-end">
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
      <main id="main-content" className="pt-20 pb-16">
        {/* Our Story Section */}
        <section id="story" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">OUR STORY</h1>
            <p className="text-xl text-center mb-12 italic">Awa calls beneath asphalt</p>
            <p className="text-lg mb-8 text-center">Our story began with a simple act: watching 👁</p>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-center">
                Late night gatherings at a penthouse window overlooked the stark spiral of Lombard Street Carpark. At first we were captivated by the eerie emptiness, yet each feed felt off, as if the mauri of the place was disturbed. Curiosity turned to investigation. We traced titles, land files, and whakapapa until a submerged history surfaced: The carpark's footprint once held Bethune & Hunter's Wine Merchants warehouse, an outpost of colonial commerce. Before brick and barrel, part of Te Aro Pā, a thriving kāinga forcibly displaced by colonisation.
              </p>
              
              <p>
                Beneath the concrete still runs the diverted Waimapihi Stream, its flow straight‐jacketed into pipes. Ko te awa ahau, ko te awa ko au: I am the river and the river is me. When land and water are distorted, so too are the people who live upon them. These revelations exposed a larger pattern: reclaimed land, Victorian sea‐walls, asphalted waterways; the very infrastructure of our cities is an artefact of colonial dispossession and a driver of present‐day climate risk. To reclaim these spaces is to heal the mauri of both whenua and people.
              </p>
            </div>
          </div>
        </section>

        {/* Why a Car Park Section */}
        <section className="py-20 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">WHY A CAR PARK?</h2>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg text-center">
                A car park might seem mundane, ordinary, utilitarian and overlooked but beneath the cold, grey surface lies a profound metaphor. It is our symbolic battleground, where past and future collide:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-center">• Vertical Archive:</h3>
                  <p>Concrete decks stack history, layer upon layer, hiding Indigenous memory and colonial erasure beneath.</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">• Urban Mythspace:</h3>
                  <p>The car park is a liminal zone, an in-between place perfect for new rituals, stories, and disruptions.</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">• Broadcast Tower:</h3>
                  <p>At night, empty and echoing, the car park transforms into a conduit, broadcasting signals of resistance and revival.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Te Mana Whakatete Accord Section */}
        <section id="accord" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">TE MANA WHAKATETE ACCORD</h2>
            
            <div className="text-center mb-12 space-y-2">
              <p className="text-xl italic">This Accord is not a beginning, but a resurfacing.</p>
              <p className="text-xl italic">Not a map, but a transmission.</p>
            </div>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <p className="mb-6 text-center text-[18px] font-thin">
                  The Car Park Society (TCPS) is a living assemblage of artists, insurgents, storytellers, cultural workers, rangatira, and spectral participants dedicated to the reclamation of space, spirit, and story beneath the colonial concrete of Aotearoa's urban cityscapes.
                </p>
                
                <p className="mb-6 text-center text-[17px] font-thin">
                  We take the carpark, specifically the Lombard Street Carpark in Te Whanganui-a-Tara, as both site and symbol: a vertical archive of suppression and refusal, a space of stilled motion, a modern pā reimagined.
                </p>
                
                <p className="mb-8 text-center font-thin">From this fissure, we issue the Accord.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article I: RANGATIRATANGA KĀWAI (Purpose)</h3>
                <p className="mb-4">
                  What is seen is not always true, and what is true is often hidden in plain sight. The Car Park Society (TCPS) is not a society of the obvious. Our purpose lies in the unclaimed, the unseen, and the unspoken:
                </p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    1. Prosecution of the Colonial Beast: We are the voice for the silenced. Through art, intervention, and covert action, we prosecute the ongoing legacy of colonialism, exposing the cracks in the structure. We speak in whispers and bold strokes.
                  </p>
                  
                  <p className="mb-6 text-[16px] text-left font-normal">
                    2. Reclamation of Hidden Spaces: We take what was once forsaken. The Car Park is our vessel. We reclaim it; not for profit, not for recognition, but for resistance. A place forgotten is a place ripe for transformation.
                  </p>
                  
                  <p>
                    3. A Future Stitched in Shadows: Our vision is not bound to what you can see. It stretches into the unseen spaces, the grey areas, the interstices where indigenous futures are taking form in whispered dreams. The past lives here, and the future, as it should be, grows in the dark.
                  </p>
                  
                  <p>
                    4. A Decentralised Reign: We govern not from the top down but from the edges inward. Anarchy is not chaos—it is the freedom to create, destroy, and recreate in the shadows. Co-governance among the unseen. We answer to no single voice, but to the collective murmur.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article II: TE MANA WHAKAARO (Principles)</h3>
                <p className="mb-4">
                  There are rules, and then there are truths that cannot be broken. The Te Mana Whakatete Accord exists to honour these truths:
                </p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    1. Tino Rangatiratanga: Sovereignty is not a paper title; it is a whisper in the wind, a claim to the very soul of the land. The true power lies not in the laws of the coloniser but in the pulse of the land itself. We honour and uphold Māori sovereignty as the very foundation of our society.
                  </p>
                  
                  <p>
                    2. Mana Motuhake: Our power lies in our autonomy, in the ability to stand alone and together, in quiet rebellion against the forces that would bind us. We need no approval, no certification. Our existence is our declaration of independence.
                  </p>
                  
                  <p>
                    3. Whakapapa: We are all threads in a larger tapestry. Our actions echo through the generations. Our whakapapa binds us to each other and to the land, to the ancestors whose names are lost but whose spirits are never forgotten.
                  </p>
                  
                  <p>
                    4. Reclamation: The Car Park is not just concrete and steel. It is a wounded space, waiting to be restored. Through creative acts of resistance, we pull these spaces from the grasp of the coloniser and transform them into places of liberation.
                  </p>
                  
                  <p>
                    5. Radical Co-Governance: There are no leaders, no masters. We govern from below, with no hierarchy. Decisions are made not by decree but by the movement of the collective, shifting like the shadows that rise and fall in the spaces we occupy.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article III: TE KOTAHITANGA HUNA (The Unseen Movement)</h3>
                <p className="mb-4">
                  We are not bound to the traditional forms. We are fluid, disruptive, and invisible. Governance within TCPS operates outside the visible structures of the state, embracing the disruptive power of community-led, anarchistic practice.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    1. Rotating Leadership: There are no kings, only shadows that pass from one hand to the next. Leadership within TCPS is as fluid as the very spaces we occupy. No one person stands in the light for long, for the movement is always shifting, always evolving.
                  </p>
                  
                  <p>
                    2. Decentralised Action: Each member is a node in a network. There are no borders here, no confined territories. We move freely between the cracks, between the streets, between the known and the unknown. All are welcome, but no one is expected to stay the same.
                  </p>
                  
                  <p>
                    3. Consensus in the Silence: We speak in murmurs, but we listen to the loudest silence. Consensus is not reached by the loudest voice, but by the quietest movement, the most subtle action. We wait until we hear the hum of the land, the pulse of the collective heartbeat, before we act.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article IV: TE TAUMANU (The Reclamation)</h3>
                <p className="mb-4">
                  To reclaim The Car Park is to reclaim more than space. It is to reclaim what has been erased and forgotten; the invisible histories, the quiet resistances, the unwritten codes of power.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    1. Creative Subversion: We do not ask for permission. We do not beg for recognition. We create in the cracks. Through art, performance, and intervention, we turn The Car Park into a stage, a canvas, a battlefield for the decolonial and the indigenous.
                  </p>
                  
                  <p>
                    2. Public Intervention: We leave our mark in the most subtle of ways. Our actions are whispers in the city's chaos, small interventions that disrupt and transform. We are seen only in the spaces between, we remain in the shadows, unrecognised.
                  </p>
                  
                  <p>
                    3. Symbolic Resistance: The Car Park itself is our symbol. Concrete is broken, metal is bent, and the spaces we inhabit are reimagined as sites of revolution. TCPS is not about reform; it is about creating something new from the remnants of the old.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article V: TE MANAAKITANGA RERENGA (The Invisible Hand)</h3>
                <p className="mb-4">
                  Though we operate in the shadows, we are not lawless. We are bound by the principles of the invisible hand, an ethical framework rooted in community care, respect, and indigenous justice.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    1. Decolonising Law: We do not recognise colonial laws. Instead, we enact our own form of justice, drawn from the wisdom of the land, the whispers of its indigenous ancestors, and the pulse of the people.
                  </p>
                  
                  <p>
                    2. Silent Solidarity: We act in solidarity, not for fame, not for power, but for the quiet strength of the collective. We build, we share, we act, together, as one unbroken chain.
                  </p>
                  
                  <p>
                    3. Quiet Accountability: Each action, no matter how small, will be held in the collective silence. We are all accountable, not to a central authority, but to the land and to each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
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