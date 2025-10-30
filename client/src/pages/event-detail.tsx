import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import groupHero from "./TCPS_Group_Hero_1.webp";
import landscape from "./Landscape_1.webp";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function EventDetail() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

useEffect(() => {
  // Countdown timer
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-10-31T20:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  setTimeLeft(calculateTimeLeft());

  return () => clearInterval(timer);
}, []);   // ✅ useEffect ends here
          </div> {/* closes inner flex container */}
        </div>   {/* closes header wrapper */}
      </header>

      {/* Main Content */}
      <section className="px-6 py-12 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">T͟H͟Ξ CØNTЯØL RØØM</h1>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
            {/* Left column: text */}
            <div className="text-gray-300 leading-relaxed text-[13px] space-y-4">
              <p>

                <b>The Control Room</b><br />
                By The Car Park Society Inc.<br /><br />

                <b>Location:</b> 149 Victoria Street; Te Aro, Te Whanganui-a-Tara<br />
                <b>In Collaboration with:</b>{" "}
                <a
                  href="https://www.urbandreambrokerage.org.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-500 underline"
                >
                  Urban Dream Brokerage
                </a><br /><br />

                Do you miss trick-or-treating? We've built a Halloween treasure hunt for you. Wellington didn’t always look like this. Colonisation has changed the very land we walk on; it has shaped our history, our present, and our future.<br /><br />

                <b>The Control Room</b> is <b>Phase Zero: The Rupture</b> — the first live activation of The Car Park Society.<br />
                We have transformed a modest urban tenancy into a public portal and member hub; a place where the Watcher Network begins. Here, we test our systems, rituals, and signals in preparation for the larger Induction Centre activation planned for 2026.<br /><br />

                Across six weeks, four activations will unfold; each revealing a deeper layer of Te Aro’s hidden memory:<br /><br />

                <b>Activation 1 – 31 Oct: The First Rupture</b><br />
                Projection overlays of colonial maps and glyphs. QR glyphs unlock File #1.<br />
                <i>“The burial is broken. You are observed.”</i><br /><br />

                <b>Activation 2 – 14 Nov: The Battle Archive</b><br />
                Projection overlays of riot vs refusal. Soundscape of haka, musket fire, and colonial orders dissolving into static. QR glyphs unlock File #2.<br />
                <i>Oracle: “They called it riot. We call it refusal.”</i><br /><br />

                <b>Activation 3 – 28 Nov: The Drowned File</b><br />
                Projection of the lost shoreline. Soundscape of waves and Harbour Board minutes. QR glyphs unlock File #3.<br />
                <i>“The sea still waits beneath. You are reclaimed.”</i><br /><br />

                <b>Activation 4 – 12 Dec: The Veins Beneath</b><br />
                Projection of rippling water textures. Soundscape of awa and glitch static. QR glyphs unlock File #4.<br />
                <i>Oracle: “Ko te awa ahau. Ko te awa ko au. The memory flows.”</i><br /><br />

                We invite the public to participate, observe, and connect with us throughout the activation period; to join the Watcher Network as it forms in real time.<br /><br />

                <b>Nau mai, haere mai</b> — come down and have a kōrero, have a kai, while we deep dive into what a utopian future might look like when we honour <b>Te Tiriti o Waitangi</b> and respect <b>te taiao</b>.<br /><br />

                Acknowledgement to Urban Dream BRokerage, Wellington City Council and our property partners Willis Bond for their ongoing support of this work.
              </p>
            </div>

            {/* Right column: images stacked vertically */}
            <div className="flex flex-col gap-8">
              <div>
                <img
                  src={groupHero}
                  alt="The Car Park Society – collective assembly beneath the glow"
                  className="w-full rounded-xl border border-gray-800 shadow-xl hover:opacity-95 transition-all duration-300"
                />
                <p className="mt-2 text-[12px] text-gray-500 italic text-center">
                  The Car Park Society – collective assembly beneath the grid.
                </p>
              </div>

              <div>
                <img
                  src={landscape}
                  alt="The Control Room – landscape signal projection"
                  className="w-full rounded-xl border border-gray-800 shadow-xl hover:opacity-95 transition-all duration-300"
                />
                <p className="mt-2 text-[12px] text-gray-500 italic text-center">
                  The Control Room – Corner Victoria & Dixon St.
                </p>
              </div>
            </div> {/* closes right column */}
          </div>   {/* closes grid */}
        </div>     {/* closes wrapper */}
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm">© 2025 The Car Park Society Inc.</p>
        </div>
      </footer>
    </main>
  );
}
