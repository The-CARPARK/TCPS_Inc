import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import tcpsLogoSmall from "@assets/TCPS_Colour_Small_1758549468394.png";
import tcpsLogo from "@assets/Screenshot 2025-09-26 030210_1758812594772.png";
import constitutionPdf from "../../CONSTITUTION_OF_THE_CAR_PARK_SOCIETY_INC._(adopted_18.9.25).docx-5.pdf";

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

export default function ConstitutionPost() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);
  const [pdfDocument, setPdfDocument] = useState<any>(null);

  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    document.title =
      "THE CONSTITUTION: RECODED | The Car Park Society";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const description =
      "The amended Constitution of The Car Park Society Inc., adopted 18 September 2025.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadPdf = async () => {
      try {
        setPdfLoading(true);
        setPdfError(false);

        if (!window.pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const existingScript = document.querySelector(
              'script[data-tcps-pdfjs="true"]'
            );

            if (existingScript) {
              existingScript.addEventListener("load", () => resolve());
              existingScript.addEventListener("error", () =>
                reject(new Error("PDF.js failed to load"))
              );
              return;
            }

            const script = document.createElement("script");

            script.src =
              "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";

            script.async = true;
            script.dataset.tcpsPdfjs = "true";

            script.onload = () => resolve();
            script.onerror = () =>
              reject(new Error("PDF.js failed to load"));

            document.head.appendChild(script);
          });
        }

        if (cancelled || !window.pdfjsLib) return;

        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

        const loadingTask = window.pdfjsLib.getDocument({
          url: constitutionPdf,
        });

        const pdf = await loadingTask.promise;

        if (cancelled) return;

        setPdfDocument(pdf);
        setNumPages(pdf.numPages);
        setPdfLoading(false);
      } catch (error) {
        console.error("TCPS Constitution PDF error:", error);

        if (!cancelled) {
          setPdfLoading(false);
          setPdfError(true);
        }
      }
    };

    loadPdf();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!pdfDocument || !numPages || !pdfContainerRef.current) return;

    let cancelled = false;

    const renderPages = async () => {
      try {
        const containerWidth =
          pdfContainerRef.current?.clientWidth || 900;
        const devicePixelRatio = Math.min(
          window.devicePixelRatio || 1,
          2
        );

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
          if (cancelled) return;

          const page = await pdfDocument.getPage(pageNumber);

          const baseViewport = page.getViewport({ scale: 1 });

          const scale =
            (containerWidth / baseViewport.width) *
            devicePixelRatio;

          const viewport = page.getViewport({ scale });

          const canvas = canvasRefs.current[pageNumber - 1];

          if (!canvas) continue;

          const context = canvas.getContext("2d");

          if (!context) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          canvas.style.width = `${containerWidth}px`;
          canvas.style.height = `${viewport.height / devicePixelRatio}px`;

          await page.render({
            canvasContext: context,
            viewport,
          }).promise;
        }
      } catch (error) {
        console.error("TCPS Constitution render error:", error);

        if (!cancelled) setPdfError(true);
      }
    };

    renderPages();

    return () => {
      cancelled = true;
    };
  }, [pdfDocument, numPages]);

  useEffect(() => {
    if (!pdfDocument || !numPages) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        const containerWidth =
          pdfContainerRef.current?.clientWidth || 900;

        const devicePixelRatio = Math.min(
          window.devicePixelRatio || 1,
          2
        );

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
          pdfDocument.getPage(pageNumber).then(async (page: any) => {
            const baseViewport = page.getViewport({ scale: 1 });

            const scale =
              (containerWidth / baseViewport.width) *
              devicePixelRatio;

            const viewport = page.getViewport({ scale });

            const canvas = canvasRefs.current[pageNumber - 1];

            if (!canvas) return;

            const context = canvas.getContext("2d");

            if (!context) return;

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${
              viewport.height / devicePixelRatio
            }px`;

            await page.render({
              canvasContext: context,
              viewport,
            }).promise;
          });
        }
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [pdfDocument, numPages]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-40 bg-red-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-6 py-3">
          <div className="flex justify-between items-center mb-2 bg-white px-4 py-2 -mx-6 -mt-3 wavy-bg-white-fast">
            <Link href="/">
              <img
                src={tcpsLogo}
                alt="TCPS"
                className="h-4 sm:h-5 hover:opacity-80 transition-opacity cursor-pointer glitch-icon"
              />
            </Link>

            <div className="flex gap-2">
              <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <SiTiktok className="w-3 h-3" />
              </a>
              <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaFacebook className="w-3 h-3" />
              </a>
              <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-black rounded flex items-center justify-center hover:bg-red-600 transition-colors text-white glitch-icon">
                <FaYoutube className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6" role="navigation" aria-label="Primary">
              <Link href="/" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-home">Home</Link>
              <Link href="/about-1" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-about">Origins</Link>
              <Link href="/event-list" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-events">Activations</Link>
              <Link href="/blog" className="text-xs sm:text-sm font-medium text-white border-b border-red-500 whitespace-nowrap" data-testid="nav-blog">Transmissions</Link>
              <Link href="/watcher-portal" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-watcher-portal">Join</Link>
              <Link href="/donate" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap" data-testid="nav-donate">Support</Link>
            </nav>
          </div>
        </div>
      </header>

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
                  <Link href="/" className="text-2xl font-medium hover:text-red-500 transition-colors">Home</Link>
                  <Link href="/about-1" className="text-2xl font-medium hover:text-red-500 transition-colors">Origins</Link>
                  <Link href="/event-list" className="text-2xl font-medium hover:text-red-500 transition-colors">Activations</Link>
                  <Link href="/blog" className="text-2xl font-medium hover:text-red-500 transition-colors">Transmissions</Link>
                  <Link href="/watcher-portal" className="text-2xl font-medium hover:text-red-500 transition-colors">Watcher Portal</Link>
                  <Link href="/donate" className="text-2xl font-medium hover:text-red-500 transition-colors">Support</Link>
                </nav>

                <div className="flex gap-4 justify-center">
                  <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><SiTiktok className="w-5 h-5" /></a>
                  <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaInstagram className="w-5 h-5" /></a>
                  <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaFacebook className="w-5 h-5" /></a>
                  <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaYoutube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20 pb-16">
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="hover:text-red-300 transition-colors text-[#e3071b]">
                ← Back to Transmissions
              </Link>
            </div>

            <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
              Transmission
            </p>

            <h1 className="font-bold mb-4 text-[32px] sm:text-[42px] leading-tight">
              THE CONSTITUTION: RECODED
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-6">
              The amended Constitution of The Car Park Society Inc.
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

              <span>18.09.2025</span>
              <span>Constitution</span>
            </div>

            <div className="bg-red-950/30 border border-red-800 rounded-lg p-5 sm:p-8 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                THE CONSTITUTION: RECODED
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  The original code has been amended.
                </p>

                <p>
                  On{" "}
                  <strong className="text-white">
                    18 September 2025
                  </strong>
                  , The Car Park Society Inc. adopted an amended Constitution,
                  updating the framework through which the Society is governed
                  and operates.
                </p>

                <p>
                  The amendments recode the Society’s constitutional structure —
                  including its Committee composition, Officer terms, conflicts
                  of interest, membership obligations, dispute resolution,
                  general meetings, liquidation provisions, and the
                  interpretation of the Constitution through tikanga, kawa,
                  culture and practice, Te Ao Māori values and Te Tiriti o
                  Waitangi.
                </p>

                <p>
                  This is the Constitution currently governing{" "}
                  <strong className="text-white">
                    The Car Park Society Inc.
                  </strong>
                </p>

                <p>
                  The record has been updated.
                  <br />
                  The structure has shifted.
                  <br />
                  The code is live.
                </p>
              </div>

              <div
                ref={pdfContainerRef}
                className="w-full rounded-lg border border-gray-700 bg-[#111113] p-2 sm:p-4 overflow-hidden"
              >
                {pdfLoading && !pdfError && (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-10 h-10 border-2 border-gray-600 border-t-red-500 rounded-full animate-spin mb-5" />
                    <p className="text-gray-300 font-medium">
                      Loading Constitution…
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Amended and adopted 18 September 2025
                    </p>
                  </div>
                )}

                {pdfError && (
                  <div className="text-center py-16 px-4">
                    <p className="text-red-400 font-semibold mb-3">
                      The Constitution could not be displayed.
                    </p>

                    <p className="text-gray-500 text-sm mb-6">
                      The document is still available directly.
                    </p>

                    <a
                      href={constitutionPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded transition-colors"
                    >
                      Open the Constitution →
                    </a>
                  </div>
                )}

                {!pdfLoading &&
                  !pdfError &&
                  Array.from({ length: numPages }).map((_, index) => (
                    <div
                      key={`page_${index + 1}`}
                      className="w-full flex justify-center mb-4 last:mb-0"
                    >
                      <canvas
                        ref={(canvas) => {
                          canvasRefs.current[index] = canvas;
                        }}
                        className="block w-full h-auto bg-white shadow-lg"
                      />
                    </div>
                  ))}
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">
                Constitution of The Car Park Society Inc. · Amended and adopted
                18 September 2025
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center md:justify-end mb-10">
            <a
              href="https://auth.tcps.app/login?next=%2Foauth%2Fauthorize%3Fclient_id%3Dclient_cf59aa5f3196%26redirect_uri%3Dhttps%253A%252F%252Fdev.tcps.app%252Fauth%252Fcallback%26response_type%3Dcode%26state%3D5031576d5a3a70e571c0c53c5a331dda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-red-600 bg-red-950/60 text-white text-xs font-bold tracking-widest uppercase hover:bg-red-600 transition-colors"
            >
              WATCHER PORTAL →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="text-center">
              <div className="flex gap-2 mb-4 justify-center">
                <a href="https://www.tiktok.com/@thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"><SiTiktok className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/thecarparksociety/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"><FaInstagram className="w-4 h-4" /></a>
                <a href="https://www.facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"><FaFacebook className="w-4 h-4" /></a>
                <a href="https://www.youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors"><FaYoutube className="w-4 h-4" /></a>
              </div>

              <a
                href="mailto:the.carpark2025@gmail.com"
                className="text-gray-400 text-[13px] mb-2 block hover:text-red-500 transition-colors font-bold"
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
                Te Āti Awa, and Ngāti Toa Rangatira — mana whenua of
                Te Whanganui-a-Tara. We honour their whakapapa, histories,
                and enduring connection to this whenua.
              </p>
            </div>

            <div className="text-center">
              <div className="space-y-2">
                <img
                  src={flagsImage}
                  alt="Flags"
                  className="h-16 object-contain mx-auto glitch-build"
                />
              </div>
            </div>

            <div className="flex justify-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
