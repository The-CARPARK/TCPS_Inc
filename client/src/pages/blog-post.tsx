import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";
import { useEffect } from "react";

export default function BlogPost() {
  useEffect(() => {
    document.title = "Urban Māori: Breaking through the Concrete Chains of Colonisation - The Car Park Society";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'More than 80% of Māori now live in urban centres across Aotearoa. Read about urban Māori reconnection and breaking through colonial barriers.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'More than 80% of Māori now live in urban centres across Aotearoa. Read about urban Māori reconnection and breaking through colonial barriers.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">The Car Park Society Inc.</h1>
            <div className="flex gap-2">
              <a href="https://facebook.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaFacebook className="w-3 h-3" />
              </a>
              <a href="https://instagram.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="https://youtube.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaYoutube className="w-3 h-3" />
              </a>
            </div>
          </div>
          <Link href="/" className="text-white hover:text-red-500 transition-colors">
            Menu [ + ]
          </Link>
        </div>
      </header>

      <main className="pt-20 pb-16">
        {/* All Posts Header */}
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">All Posts</h1>
          </div>
        </div>

        {/* Blog Post */}
        <article className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-8">
              {/* Post Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">TCPS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">The Car Park Society</p>
                  <p className="text-gray-400 text-sm">2 hours ago · 5 min read</p>
                </div>
              </div>

              {/* Post Content */}
              <h1 className="text-3xl font-bold text-white mb-8">
                Urban Māori: Breaking through the Concrete Chains of Colonisation
              </h1>

              <p className="text-xl text-gray-300 mb-8 italic">
                "E kore au e ngaro, he kākano i ruia mai i Rangiātea."
                I will never be lost, for I am a seed sown from Rangiātea.
              </p>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  More than 80% of Māori now live in urban centres across Aotearoa, a migration 
                  born of colonial displacement, land confiscation, and economic necessity. From 
                  the 1950s onward, our people were encouraged to leave their tūrangawaewae to 
                  chase employment in the cities, often severing connections to marae and whenua 
                  that had sustained our ancestors for generations. This exodus created a new 
                  category of 'urban Māori,' a term that holds both pride and pain.
                </p>

                <p>Yet coloniser can be both action and portal.</p>

                <p>
                  In these cities, whakawhaiwhai was often buried beneath the noise of assimilation. 
                  Our children learned English before te reo, absorbed Pākehā values before they 
                  disconnected from whaoa, hapu, and iwi. We became the children of our dislocation and state housing, of being at a cemetery crime instead of marae, of being 
                  wary of misappropriating our own names, of being too Māori amongst.
                </p>

                <p>
                  Whaoapapa that heavy cloak of shame, hesitation, and self-doubt is one of the 
                  greatest barriers to Māori reconnection today.
                </p>

                <p>
                  Urban Māori often carry whaakame for not knowing their maori, for never having 
                  stepped onto their marae, for not speaking te reo, for not "looking" Māori enough, 
                  or for being afraid to even ask where they come from. Colonisation taught us to 
                  be shameful of our own place; they're understood. This double-bind traps generations in 
                  spiritual paralysis.
                </p>

                <p>
                  But whaakame is not an individual failing. It is a social harm produced by systemic 
                  alienation. Urban Māori must be reminded: you do not need permission to return. 
                  You do not need credentials to be Māori. You are not broken.
                </p>

                <p>
                  Te ao Māori is not a hierarchy of access. It is an ancestral field we all belong to. You 
                  carry it in your blood, in your anguish, in the quiet when you walk near water.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  It doesn't matter if you start with karakia or kai, Whiti metadatas or maraes. With 
                  the tv or Facebook. What matters is that you start; that you make a bridge gesture 
                  to the river that you've always lived beside even when you didn't know its name.
                </h3>

                <p>Urban Māori face systemic and emotional barriers in reconnecting:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Bureaucratic dissociation</strong> - Many urban Māori have no clear tribal registration and are disconnected from iwi/hapū databases.</li>
                  <li><strong>Cultural gatekeeping</strong> - Some spaces may intentionally or not make those who weren't raised on marae feel unwelcome or illegitimate.</li>
                  <li><strong>Generational trauma</strong> - Disconnection is often inherited. When parents and grandparents were punished for being Māori, their descendants internalise the shame.</li>
                  <li><strong>Cost and access</strong> - Hui classes, marae trips, and wānanga often require time, money, and transport that urban whānau may not have.</li>
                  <li><strong>Identity anxiety</strong> - Fear of 'getting it wrong,' being corrected, or feeling judged can shut down efforts before they begin.</li>
                </ul>

                <p>
                  The Car Park Society recognises that reclamation is not linear. It is recursive, 
                  anarchic, poetic. Te Mana Whakatete calls us to shatter the illusions of deficit and 
                  reawaken our inherent power. That includes power obscured by high-rise towers and 
                  bitumen.
                </p>

                <p>Urban Māori have unique roles to play in the great remembering:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We exist in spaces of encounter.</li>
                  <li>We know how to navigate systems and subvert them.</li>
                  <li>We carry our ancestral wairua wherever we are.</li>
                </ul>

                <p>
                  Our mission is not to become Māori, we already are. Our mission is to return to 
                  ourselves, to live as Māori in all constant relationships, with whenua, with wairua, 
                  with whakapapa. Urban life has fractured those relationships, but they are not 
                  lost. The signal is still there, under the concrete, waiting for the right vibration to 
                  emerge.
                </p>

                <blockquote className="border-l-4 border-red-500 pl-6 italic text-gray-400 my-8">
                  "You are not a visitor to your own culture. You are the descendant of those who 
                  refused to vanish. The illusion of deficit dissolves here."
                </blockquote>

                <p>
                  "You are not seeking, you are remembering. Beneath every crackheaded shadow and 
                  abandoned car park, your tīpuna call you home."
                </p>

                <p>You are not fragments; you are frequency.</p>

                <p>You do not return alone.</p>

                <p>You return with us.</p>

                <blockquote className="border-l-4 border-red-500 pl-6 italic text-gray-400 my-8">
                  "He tohia te moana, ara he koa rangiohia."
                  Like a rock descending in the ocean, you awaken, unbroken.
                </blockquote>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-10 bg-red-600 flex items-center justify-center text-xs font-bold">NZ</div>
                    <div className="w-16 h-10 bg-blue-600 flex items-center justify-center text-xs font-bold"></div>
                    <div className="w-16 h-10 bg-red-500 flex items-center justify-center text-xs font-bold">C</div>
                    <div className="w-16 h-10 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-400">16 views</span>
                    <span className="text-gray-400">0 comments</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.23 5.924c-.736.326-1.529.547-2.357.646.847-.507 1.496-1.312 1.804-2.27-.793.47-1.671.812-2.606 0.996C18.324 4.498 17.257 4 16.077 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.171-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.679 1.825 3.415-.673-.021-1.305-.206-1.859-.514v.052c0 1.988 1.414 3.647 3.292 4.023-.344.094-.707.144-1.081.144-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.816 3.833 2.85-1.404 1.1-3.174 1.756-5.096 1.756-.331 0-.658-.019-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.801-.578 1.495-1.3 2.043-2.124z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7v12H5V7h14m0-2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/>
                        <path d="m7 9 5 4 5-4"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">Comments</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <textarea 
                    placeholder="Write a comment..." 
                    className="w-full bg-transparent text-white border-0 resize-none focus:outline-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex gap-2 mb-4">
                <a href="https://facebook.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
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