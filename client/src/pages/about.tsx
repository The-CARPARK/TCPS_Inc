import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

import eyeSymbol from "@assets/Screenshot 2025-09-26 031454_1758813420788.png";
import curvedDesign from "@assets/Screenshot 2025-09-26 025540_1758813515914.png";

export default function About() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flowing-waves-complex">
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
              <Link href="/about-1" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-about">
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
                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-slow">
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
      <main id="main-content" className="pt-20 pb-16">
        {/* Our Story Section */}
        <section id="story" className="pt-20 pb-8 px-6 relative river-bg vhs-overlay">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl font-bold text-center mb-8 glitch-text" data-text="TCPS ORIGINS">TCPS ORIGINS</h1>
            <p className="text-xl text-center mb-12 font-bold">All Carparks Are Battlegrounds.</p>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-center">
                Our beginnings lie in disturbance. In the the faint static of places where mauri has been unsettled. Concrete slabs and spiral ramps conceal more than emptiness. They hum with what has been buried, what refuses to be forgotten. The silence of these structures is not absence but memory under pressure.
              </p>
              
              <p className="text-center">
                The call of the awa led us here. Beneath the asphalt, its flow is forced into darkness, diverted into pipes, its voice distorted but unbroken. That current pulled us downward, into archives, titles, maps, and whakapapa, until the layers of the city revealed themselves.
              </p>
              
              <p className="text-center">
                This ground once held Te Aro Pā, a thriving kāinga of mana whenua, its people displaced as colonisation reconfigured the shoreline. In its place rose Bethune & Hunter's Wine Merchants, a warehouse of barrels and ledgers, a colonial outpost of extraction and commerce. The building is gone, but its logic remains, hardened into the skeleton of the city.
              </p>
              
              <p className="text-center">
                Still deeper runs Waimapihi Stream, carrying the memory of what came before. Its waters persist, even when silenced, a reminder that nothing is ever fully erased.
              </p>
              
              <p className="text-center italic text-xl">
                Ko te awa ahau, ko te awa ko au. I am the river and the river is me.
              </p>
              
              <p className="text-center">
                To listen to the awa is to hear the distortion of mauri. To uncover what lies beneath is to recognise the city itself as a palimpsest of erasure and resistance. A carpark is not neutral ground. It is an archive of violence, resilience, and unfinished histories, waiting to be reawakened.
              </p>
              
              <p className="text-center">
                This is where The Car Park Society takes its stand. We respond to the awa's call by turning silence into ceremony and concrete into conduit. We gather in these overlooked spaces to restore mauri, to resurface suppressed histories, and to create living portals where tino rangatiratanga is rehearsed and reclaimed.
              </p>
              
              <p className="text-center">
                A carpark may appear ordinary, but in our hands it becomes extraordinary: a site where memory is activated, where communities reconnect, and where futures are imagined against the grain of colonisation.
              </p>
              
              <p className="text-center font-semibold">
                We are Watchers. We follow the currents beneath asphalt. We reclaim the battlegrounds of the city and reimagine them as portals of mauri, memory, and transformation.
              </p>
            </div>
          </div>
        </section>
        {/* Te Mana Whakatete Accord Section */}
        <section id="accord" className="pt-8 pb-8 px-6 text-[13px] relative bg-black section-glitch">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Eye Symbol Above Header */}
            <div className="flex justify-center mb-4">
              <img 
                src={eyeSymbol} 
                alt="TCPS Eye Symbol" 
                className="h-72 w-72 sm:h-80 sm:w-80 object-contain image-rendering-crisp-edges glitch-image"
                style={{imageRendering: 'crisp-edges', background: 'transparent'}}
              />
            </div>
            <h2 className="text-4xl font-bold text-center mb-8 glitch-text" data-text="TE MANA WHAKATETE ACCORD">TE MANA WHAKATETE ACCORD</h2>
            
            <div className="text-center mb-12 space-y-2">
              <p className="text-[15px] italic">This Accord is not a beginning. It is a resurfacing; the uprising of what colonisation tried to bury beneath asphalt, steel, and concrete.</p>
            </div>
            
            <div className="space-y-8 text-gray-300 text-[13px]">
              <div>
                <p className="text-center">
                  The Car Park Society (TCPS) is a living assemblage of artists, insurgents, storytellers, cultural workers, rangatira, and spectral participants dedicated to the reclamation of space, spirit, and story from the suffocating weight of colonial infrastructure.
                </p>
                
                <p className="text-center mt-6">
                  We declare that the structures of the city are not neutral. They are vertical archives of dispossession and resistance, each layer a stratum of memory pressed beneath concrete. They are liminal zones where mauri is distorted yet persists, where streams run silenced but unbroken, where stories buried by colonisation demand to be heard. They are modern pā reimagined, not of palisades but of presence, defence, and resurgence in the very heart of the colonial city.
                </p>
                
                <p className="mb-8 mt-8 text-center font-semibold text-[13px]">From these fissures we issue the Accord. We refuse erasure. We contest the violence of concrete and capital. We declare the right of whenua, awa, and people to be remembered, restored, and reborn.</p>
              </div>

              <div>
                <h3 className="text-[19px] font-bold text-white mb-6">Article I: RANGATIRATANGA KĀWAI (Purpose)</h3>
                <p className="mb-4 text-center">
                  What is seen is not always true, and what is true is often hidden in plain sight. The Car Park Society (TCPS) is not a society of the obvious. Our purpose lies in the unclaimed, the unseen, and the unspoken:
                </p>
                
                <div className="space-y-4 ml-4">
                  <p className="text-center">
                    1. Prosecution of the Colonial Beast: We are the voice for the silenced. Through art, intervention, and covert action, we prosecute the ongoing legacy of colonialism, exposing the cracks in the structure. We speak in whispers and bold strokes.
                  </p>
                  
                  <p className="mb-6 text-center font-normal">
                    2. Reclamation of Hidden Spaces: We take what was once forsaken. The Car Park is our vessel. We reclaim it; not for profit, not for recognition, but for resistance. A place forgotten is a place ripe for transformation.
                  </p>
                  
                  <p className="text-center">
                    3. A Future Stitched in Shadows: Our vision is not bound to what you can see. It stretches into the unseen spaces, the grey areas, the interstices where indigenous futures are taking form in whispered dreams. The past lives here, and the future, as it should be, grows in the dark.
                  </p>
                  
                  <p className="text-center">
                    4. A Decentralised Reign: We govern not from the top down but from the edges inward. Anarchy is not chaos—it is the freedom to create, destroy, and recreate in the shadows. Co-governance among the unseen. We answer to no single voice, but to the collective murmur.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-[19px] font-bold text-white mb-6">Article II: TE MANA WHAKAARO (Principles)</h3>
                <p className="mb-4 text-center">
                  There are rules, and then there are truths that cannot be broken. The Te Mana Whakatete Accord exists to honour these truths:
                </p>
                
                <div className="space-y-4 ml-4">
                  <p className="text-center">
                    1. Tino Rangatiratanga: Sovereignty is not a paper title; it is a whisper in the wind, a claim to the very soul of the land. The true power lies not in the laws of the coloniser but in the pulse of the land itself. We honour and uphold Māori sovereignty as the very foundation of our society.
                  </p>
                  
                  <p className="text-center">
                    2. Mana Motuhake: Our power lies in our autonomy, in the ability to stand alone and together, in quiet rebellion against the forces that would bind us. We need no approval, no certification. Our existence is our declaration of independence.
                  </p>
                  
                  <p className="text-center">
                    3. Whakapapa: We are all threads in a larger tapestry. Our actions echo through the generations. Our whakapapa binds us to each other and to the land, to the ancestors whose names are lost but whose spirits are never forgotten.
                  </p>
                  
                  <p className="text-center">
                    4. Reclamation: The Car Park is not just concrete and steel. It is a wounded space, waiting to be restored. Through creative acts of resistance, we pull these spaces from the grasp of the coloniser and transform them into places of liberation.
                  </p>
                  
                  <p className="text-center">
                    5. Radical Co-Governance: There are no leaders, no masters. We govern from below, with no hierarchy. Decisions are made not by decree but by the movement of the collective, shifting like the shadows that rise and fall in the spaces we occupy.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-[19px] font-bold text-white mb-6">Article III: TE KOTAHITANGA HUNA (The Unseen Movement)</h3>
                <p className="mb-4 text-center">
                  We are not bound to the traditional forms. We are fluid, disruptive, and invisible. Governance within TCPS operates outside the visible structures of the state, embracing the disruptive power of community-led, anarchistic practice.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p className="text-center">
                    1. Rotating Leadership: There are no kings, only shadows that pass from one hand to the next. Leadership within TCPS is as fluid as the very spaces we occupy. No one person stands in the light for long, for the movement is always shifting, always evolving.
                  </p>
                  
                  <p className="text-center">
                    2. Decentralised Action: Each member is a node in a network. There are no borders here, no confined territories. We move freely between the cracks, between the streets, between the known and the unknown. All are welcome, but no one is expected to stay the same.
                  </p>
                  
                  <p className="text-center">
                    3. Consensus in the Silence: We speak in murmurs, but we listen to the loudest silence. Consensus is not reached by the loudest voice, but by the quietest movement, the most subtle action. We wait until we hear the hum of the land, the pulse of the collective heartbeat, before we act.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-[19px] font-bold text-white mb-6">Article IV: TE TAUMANU (The Reclamation)</h3>
                <p className="mb-4 text-center">
                  To reclaim The Car Park is to reclaim more than space. It is to reclaim what has been erased and forgotten; the invisible histories, the quiet resistances, the unwritten codes of power.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p className="text-center">
                    1. Creative Subversion: We do not ask for permission. We do not beg for recognition. We create in the cracks. Through art, performance, and intervention, we turn The Car Park into a stage, a canvas, a battlefield for the decolonial and the indigenous.
                  </p>
                  
                  <p className="text-center">
                    2. Public Intervention: We leave our mark in the most subtle of ways. Our actions are whispers in the city's chaos, small interventions that disrupt and transform. We are seen only in the spaces between, we remain in the shadows, unrecognised.
                  </p>
                  
                  <p className="text-center">
                    3. Symbolic Resistance: The Car Park itself is our symbol. Concrete is broken, metal is bent, and the spaces we inhabit are reimagined as sites of revolution. TCPS is not about reform; it is about creating something new from the remnants of the old.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-[19px] font-bold text-white mb-6">Article V: TE MANAAKITANGA RERENGA (The Invisible Hand)</h3>
                <p className="mb-4 text-center">
                  Though we operate in the shadows, we are not lawless. We are bound by the principles of the invisible hand, an ethical framework rooted in community care, respect, and indigenous justice.
                </p>
                
                <div className="space-y-4 ml-4">
                  <p className="text-center">
                    1. Decolonising Law: We do not recognise colonial laws. Instead, we enact our own form of justice, drawn from the wisdom of the land, the whispers of its indigenous ancestors, and the pulse of the people.
                  </p>
                  
                  <p className="text-center">
                    2. Silent Solidarity: We act in solidarity, not for fame, not for power, but for the quiet strength of the collective. We build, we share, we act, together, as one unbroken chain.
                  </p>
                  
                  <p className="text-center">
                    3. Quiet Accountability: Each action, no matter how small, will be held in the collective silence. We are all accountable, not to a central authority, but to the land and to each other.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Curved Design Image at End */}
            <div className="flex justify-center mt-12 -mb-8">
              <img 
                src={curvedDesign} 
                alt="TCPS Design Element" 
                className="w-full max-w-32 h-auto object-contain image-rendering-crisp-edges"
                style={{imageRendering: 'crisp-edges'}}
              />
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 flowing-waves-pulse">
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