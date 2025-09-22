import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import urbanMaoriImage from "@assets/Screenshot 2025-09-23 015612_1758549415360.png";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Blog - The Car Park Society";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read stories from The Car Park Society about urban Māori experiences, decolonisation, and reclaiming urban spaces.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read stories from The Car Park Society about urban Māori experiences, decolonisation, and reclaiming urban spaces.';
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

      <main className="pt-20 pb-16">
        {/* Blog Header */}
        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
          </div>
        </div>

        {/* Blog Posts */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Blog Post */}
            <Link href="/post/urban-māori-recalling-the-sacred-signal-through-concrete">
              <article className="bg-red-900/20 border border-red-800 rounded-lg overflow-hidden hover:bg-red-900/30 transition-colors cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                    <img 
                      src={urbanMaoriImage} 
                      alt="Urban Māori Blog Post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                      Urban Māori: Breaking through the Concrete Chains of Colonisation
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "E kore au e ngaro, he kākano i ruia mai i Rangiātea." I will never be lost, for I am a seed sown from Rangiātea. More than 80% of Māori...
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">TCPS</span>
                        </div>
                        <span>The Car Park Society</span>
                      </div>
                      <span>21 hours ago</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-start mb-2">
            <div className="justify-self-start">
              <div className="flex justify-start gap-3 mb-2">
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
              <div className="text-left">
                <p className="text-gray-400 text-sm mb-2 text-left">Te Whanganui-a-Tara</p>
                <p className="text-gray-400 mb-2 text-[15px] font-bold text-left">AOTEAROA</p>
                <p className="text-gray-400 mb-6 text-[12px] text-left">© 2025 by The Car Park Society Inc.</p>
              </div>
            </div>
            <div className="justify-self-center">
              <img 
                src={flagsImage} 
                alt="Flags" 
                className="w-48 sm:w-56 md:w-64 h-auto object-contain"
              />
            </div>
            <div />
          </div>
        </div>
      </footer>
    </div>
  );
}