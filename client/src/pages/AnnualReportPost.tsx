import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogoSmall from "@assets/TCPS_Colour_Small_1758549468394.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";

export default function AnnualReportPost() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title =
      "The Annual Report Is Open — TCPS Annual Report FY2025/26 | The Car Park Society";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const description =
      "TCPS Annual Report FY2025/26 — Phase Zero: The Rupture. The first year of The Car Park Society Inc. is now on record.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">
          {/* TCPS Button Above Navigation */}
          <div className="flex justify-between items-center mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast">
            <Link href="/">
              <img
                src={tcpsLogo}
                alt="TCPS"
                className="h-4 sm:h-5 hover:opacity-80 transition-opacity cursor-pointer glitch-icon"
              />
            </Link>

            <div className="flex gap-2">
              <a
                href="https://www.tiktok.com/@thecarparksociety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
              >
                <SiTiktok className="w-3 h-3" />
              </a>

              <a
                href="https://www.instagram.com/thecarparksociety/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
              >
                <FaInstagram className="w-3 h-3" />
              </a>

              <a
                href="https://www.facebook.com/thecarparksociety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
              >
                <FaFacebook className="w-3 h-3" />
              </a>

              <a
                href="https://www.youtube.com/@TheCarParkSociety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon"
              >
                <FaYoutube className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav
              className="flex justify-center gap-2 sm:gap-4 md:gap-6"
              role="navigation"
              aria-label="Primary"
            >
              <Link
                href="/"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-home"
              >
                Home
              </Link>

              <Link
                href="/about-1"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-about"
              >
                Origins
              </Link>

              <Link
                href="/event-list"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-events"
              >
                Activations
              </Link>

              <Link
                href="/blog"
                className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap"
                data-testid="nav-blog"
              >
                Transmissions
              </Link>

              <Link
                href="/donate"
                className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                data-testid="nav-donate"
              >
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
                <div className="w-64 h-48 bg-white rounded-lg flex items-center justify-center mb-8 wavy-bg-white-pulse">
                  <div className="text-center text-black">
                    <div className="relative w-48 h-32">
                      <img
                        src={logoImage}
                        alt="The Car Park Society Logo"
                        className="w-full h-full object-contain glitch-build"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <nav className="flex flex-col gap-6 mb-8">
                  <Link
                    href="/"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-home"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about-1"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-about"
                  >
                    Origins
                  </Link>

                  <Link
                    href="/event-list"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-events"
                  >
                    Activations
                  </Link>

                  <Link
                    href="/blog"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-blog"
                  >
                    Transmissions
                  </Link>

                  <Link
                    href="/donate"
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-donate"
                  >
                    Support
                  </Link>
                </nav>

                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.tiktok.com/@thecarparksociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <SiTiktok className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/thecarparksociety/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.facebook.com/thecarparksociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@TheCarParkSociety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
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
              <Link
                href="/blog"
                className="hover:text-red-300 transition-colors text-[#e3071b]"
              >
                ← Back to Transmissions
              </Link>
            </div>

            <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
              Transmission
            </p>

            <h1 className="font-bold mb-4 text-[32px] sm:text-[42px] leading-tight">
              The Annual Report Is Open
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-6">
              TCPS Annual Report FY2025/26 — Phase Zero: The Rupture
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={tcpsLogoSmall}
                  alt="TCPS Logo"
                  className="w-8 h-8 object-contain self-end glitch-create"
                />
                <span>The Car Park Society</span>
              </div>

              <span>30.09.2026</span>
              <span>Annual Report</span>
            </div>

            {/* Annual Report */}
            <div className="bg-red-950/30 border border-red-800 rounded-lg p-4 sm:p-6 mb-4">
              <p className="text-white font-semibold mb-2">
                TCPS Annual Report FY2025/26 — Phase Zero: The Rupture
              </p>

              <p className="text-gray-300 mb-6">
                The first year is now on record.
              </p>

              <div className="w-full overflow-hidden rounded-lg border border-gray-700 bg-black">
                <iframe
                  src="/TCPS%20Annual%20Report%20FY25-26.pdf"
                  className="w-full h-[80vh] min-h-[600px] border-0"
                  title="TCPS Annual Report FY2025/26"
                />
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">
                Can't view the document?{" "}
                <a
                  href="/TCPS%20Annual%20Report%20FY25-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline underline-offset-4"
                >
                  Open the Annual Report →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-xl text-white font-semibold">
                The first year is now on record.
              </p>

              <p>
                The Car Park Society Inc. has released its{" "}
                <strong className="text-white">
                  Annual Report for FY2025/26
                </strong>
                , documenting the first year of the Society — from
                incorporation and governance through to our first major public
                activation,{" "}
                <strong className="text-white">The Control Room</strong>.
              </p>

              <p>
                <strong className="text-white">
                  Phase Zero: The Rupture
                </strong>{" "}
                was a year of formation, experimentation, creative practice,
                relationship-building and testing what TCPS could become.
              </p>

              <p>
                The report records what we built, what we learned, where the
                organisation stands now, and what comes next — including the
                development of the{" "}
                <strong className="text-white">Induction Centre</strong>, the
                Watcher Map, membership and the wider Watcher Network.
              </p>

              <p className="text-white font-semibold">
                Read the full report above.
              </p>

              <p className="text-center text-2xl text-white font-bold my-10">
                The rupture has opened.
                <br />
                Now we descend.
              </p>
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
                <a
                  href="https://www.tiktok.com/@thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <SiTiktok className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/thecarparksociety/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/thecarparksociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@TheCarParkSociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>

              <a
                href="mailto:the.carpark2025@gmail.com"
                className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold bg-[#000000]"
                data-testid="link-email-contact"
              >
                the.carpark2025@gmail.com
              </a>

              <p className="text-gray-400 mb-2 text-[13px]">
                Te Whanganui-a-Tara
              </p>

              <p className="text-gray-400 mb-2 font-bold text-[13px]">
                AOTEAROA
              </p>

              <p className="text-gray-400 text-[12px]">
                © 2026 by The Car Park Society Inc.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm italic mb-4">
                We acknowledge Taranaki Whānui ki Te Upoko o Te Ika,
                Te Āti Awa, and Ngāti Toa Rangatira — mana whenua of Te
                Whanganui-a-Tara. We honour their whakapapa, histories, and
                enduring connection to this whenua.
              </p>

              <p className="text-gray-600 text-xs font-extralight">
                Acknowledgement of Mana Whenua
              </p>
            </div>

            <div className="flex justify-end">
              <div className="space-y-2">
                <img
                  src={flagsImage}
                  alt="Flags"
                  className="h-28 object-contain glitch-amplify"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}