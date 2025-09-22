import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";
import { z } from "zod";
import logoImage from "@assets/TCPS_Medium_Colour (1)_1758535590698.png";
import flagsImage from "@assets/Screenshot 2025-09-21 211954_1758536131506.png";
import heroImage from "@assets/1_1758536573325.png";
import visionImage from "@assets/2_1758536573325.png";
import eyeCreateImage from "@assets/Untitled - 6 August 2025 21.28_1758537254685.jpg";
import eyeBuildImage from "@assets/Untitled - 6 August 2025 21.28 (3)_1758537371863.jpg";
import eyeAmplifyImage from "@assets/Untitled - 6 August 2025 21.28 (2)_1758537390681.jpg";
import eyeImage from "@assets/Untitled - 6 August 2025 21.28_1758537254685.jpg";
import newHeroLogoImage from "@assets/Untitled - 6 August 2025 21.28 (4)_1758552061511.jpg";

const emailFormSchema = insertEmailSubscriptionSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useToast();

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

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeEmail = useMutation({
    mutationFn: async (data: EmailFormData) => {
      const res = await apiRequest("POST", "/api/subscribe", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to The Car Park Society!",
        description: "Thank you for joining our movement.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EmailFormData) => {
    subscribeEmail.mutate(data);
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
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">The Car Park Society Inc.</h1>
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
                  <Link href="/">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-home">
                      Home
                    </button>
                  </Link>
                  <Link href="/about-1">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-about">
                      Our Story
                    </button>
                  </Link>
                  <Link href="/event-list">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-events">
                      Activations
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-blog">
                      Transmissions
                    </button>
                  </Link>
                  <Link href="/donate">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-donate">
                      Support
                    </button>
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

      <main id="main-content" className="pt-12">
        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 items-center" data-testid="text-welcome">
              <div className="text-left">
                <p className="font-black text-gray-300 mb-4 text-[31px] text-center">
                  WELCOME TO
                </p>
                <h1 className="lg:text-5xl mb-8 text-center text-[47px] font-black">
                  THE CAR PARK SOCIETY
                </h1>
                
                <p className="text-gray-300 max-w-sm text-center mx-auto text-[15px] font-light" data-testid="text-intro">
                  The Car Park Society (TCPS) formed in 2025, our aim is to reveal hidden histories, restore connection, and transform overlooked spaces into vibrant hubs of collective creativity and community empowerment.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <img 
                  src={newHeroLogoImage} 
                  alt="The Car Park Society Eye Symbol" 
                  className="w-full max-w-md h-[250px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 mb-6 inline-block">
              <h2 className="text-black mb-4 font-black text-[36px]" data-testid="text-mission-heading">MISSION</h2>
              <p className="text-lg leading-relaxed text-black italic" data-testid="text-mission">
                We work <strong>ka mua, ka muri</strong> backwards into the future,<br/>
                uncovering the colonial layers of urban infrastructure, honoring<br/>
                Te Tiriti o Waitangi, and modelling co‐governance that places te<br/>
                taiao and community at the centre.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center mb-16 font-black" data-testid="text-vision-heading">VISION + IMPACT</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center max-w-56 mx-auto">
                <div className="w-60 h-40 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={eyeCreateImage} 
                    alt="Eye symbol representing CREATE" 
                    className="w-48 h-48 object-contain"
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
                    className="w-48 h-48 object-contain"
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
                    className="w-48 h-48 object-contain"
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
        <section className="py-12 px-6 bg-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8" data-testid="text-join-heading">Join the Movement</h2>
            <p className="text-xl text-gray-300 mb-8" data-testid="text-join-description">
              Join our email list and get updates about upcoming society events and activations:
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email here"
                            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={subscribeEmail.isPending}
                    className="bg-red-600 hover:bg-red-700 text-white px-8"
                    data-testid="button-signup"
                  >
                    {subscribeEmail.isPending ? "Signing up..." : "Sign Up"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
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