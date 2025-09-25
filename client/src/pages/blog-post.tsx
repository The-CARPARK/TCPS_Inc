import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogoSmall from "@assets/TCPS_Colour_Small_1758549468394.png";

export default function BlogPost() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Urban Māori: Breaking through the Concrete Chains of Colonisation - The Car Park Society";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'E kore au e ngaro, he kākano i ruia mai i Rangiātea. I will never be lost, for I am a seed sown from Rangiātea. More than 80% of Māori now live in urban centres across Aotearoa.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'E kore au e ngaro, he kākano i ruia mai i Rangiātea. I will never be lost, for I am a seed sown from Rangiātea. More than 80% of Māori now live in urban centres across Aotearoa.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
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
              Events
            </Link>
            <Link href="/blog" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-blog">
              Blog
            </Link>
            <Link href="/donate" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-donate">
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
        {/* Article Header */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="hover:text-red-300 transition-colors text-[#e3071b]">
                ← Back to Transmissions
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">
              Urban Māori: Breaking through the Concrete Chains of Colonisation
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <img 
                  src={tcpsLogoSmall} 
                  alt="TCPS Logo" 
                  className="w-8 h-8 object-contain self-end"
                />
                <span>The Car Park Society</span>
              </div>
              <span>22.09.2025</span>
              <span>3 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <div className="text-center mb-12">
              <p className="text-2xl font-bold italic mb-4" data-testid="text-maori-quote">
                "E kore au e ngaro, he kākano i ruia mai i Rangiātea."
              </p>
              <p className="text-xl italic text-gray-300" data-testid="text-english-translation">
                I will never be lost, for I am a seed sown from Rangiātea.
              </p>
            </div>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p data-testid="text-urban-migration">
                More than 80% of Māori now live in urban centres across Aotearoa, a migration born of colonial displacement, land confiscation, and economic necessity. From the 1950s onward, our people were encouraged to leave their tūrangawaewae to fill factories, workshops, and service industries in the cities. This shift created the category of Urban Māori: a term that holds both pride and pain.
              </p>
              
              <p className="text-xl font-semibold text-white text-center my-8" data-testid="text-portal">
                Yet concrete can be both prison and portal.
              </p>
              
              <p data-testid="text-assimilation">
                In these cities, whakapapa was often buried beneath the noise of assimilation. Many of us were raised without fluent reo, without strong marae ties, disconnected from whenua, hapū, and iwi. We became the children of cul-de-sacs and state housing, of tangi at crematoriums instead of urupā. We became wary of mispronouncing our own names, of being "not Māori enough."
              </p>
              
              <p data-testid="text-whakama">
                Whakama: that heavy cloak of shame, hesitation, and self-doubt is one of the greatest barriers to Māori reconnection today.
              </p>
              
              <p data-testid="text-barriers">
                Urban Māori often carry whakama for not knowing their pepeha, for never having stepped onto their marae, for not speaking te reo, for not "looking" Māori enough, or for being afraid to even ask where they come from. Colonisation taught us to be ashamed of what we were. And now that many seek to return, they feel ashamed for how far they've wandered. This double-bind traps generations in spiritual paralysis.
              </p>
              
              <p data-testid="text-not-failing">
                But whakama is not an individual failing. It is a social toxin produced by systemic alienation. Urban Māori must be reminded: you do not need permission to return. You do not need credentials to be Māori. You are not broken.
              </p>
              
              <p data-testid="text-ancestral-field">
                Te ao Māori is not a hierarchy of access. It is an ancestral field we all belong to. You carry it in your blood, in your dreams, in the quiet when you walk near water.
              </p>
              
              <p data-testid="text-starting">
                It doesn't matter if you start with karakia or kai. With mōteatea or memes. With flax or Facebook. What matters is that you start. That you make a single gesture toward the remembering, and the rest will unfold.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-barriers-heading">
                Urban Māori face systemic and emotional barriers in reconnecting:
              </p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li data-testid="text-bureaucratic">
                  <strong className="text-white">Bureaucratic dislocation</strong> – Many urban Māori have no clear tribal registration or are disconnected from iwi/hapū databases.
                </li>
                
                <li data-testid="text-gatekeeping">
                  <strong className="text-white">Cultural gatekeeping</strong> – Some spaces may (intentionally or not) make those returning feel unworthy or illegitimate.
                </li>
                
                <li data-testid="text-trauma">
                  <strong className="text-white">Generational trauma</strong> – Disconnection is often inherited. When parents and grandparents were punished for being Māori, their descendants internalize the silence.
                </li>
                
                <li data-testid="text-cost">
                  <strong className="text-white">Cost and access</strong>– Reo classes, marae trips, and wānanga often require time, money, and transport that urban whānau may not have.
                </li>
                
                <li data-testid="text-anxiety">
                  <strong className="text-white">Identity anxiety</strong>– Fear of "getting it wrong," being corrected, or feeling judged can shut down efforts before they begin.
                </li>
              </ul>
              
              <p data-testid="text-tcps-recognition">
                The Car Park Society recognises that reclamation is not linear; it is recursive, anarchic, poetic. Te Mana Whakatetē calls us to shatter the illusions of deficit and reawaken our inherent power. That includes power obscured by high-rise towers and motorway shadows.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-roles-heading">
                Urban Māori have unique roles to play in the great remembering:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li data-testid="text-bridges">We build hybrid bridges between cultures.</li>
                <li data-testid="text-navigate">We know how to navigate systems and subvert them.</li>
                <li data-testid="text-wairua">We carry our ancestral wairua wherever we are</li>
              </ul>
              
              <p data-testid="text-mission">
                Our mission is not to become Māori, we already are. Our mission is to return to ourselves. To be Māori is to be in constant relationship, with whenua, with wairua, with whakapapa. Urban life has fractured those relationships, but they are not lost. The signal is still there, under the concrete, waiting for the right vibration to crack it open.
              </p>
              
              <p data-testid="text-not-visitor">
                You are not a visitor to your own culture. You are the descendant of those who refused to vanish. The illusion of deficit dissolves here.
              </p>
              
              <p data-testid="text-overflowing">
                You are not lacking, you are overflowing. Beneath every motorway shadow and high-rise tower, your tīpuna wait, singing through the cracks in the concrete.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-reassembly">
                We are the reassembly line of indigenous identity.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-frequency">
                You are not fragments, you are frequency.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-not-alone">
                You do not return alone.
              </p>
              
              <p className="text-white font-semibold" data-testid="text-return-with-us">
                You return with us.
              </p>
              
              <div className="text-center mt-12">
                <p className="text-xl font-bold italic" data-testid="text-final-quote">
                  "He toka tū moana, arā he toa rongonui."
                </p>
                <p className="text-lg italic text-gray-300 mt-2" data-testid="text-final-translation">
                  Like a rock standing in the ocean, you endure, unshaken.
                </p>
              </div>
            </div>
          </div>
        </article>
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