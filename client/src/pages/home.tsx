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
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";
import { z } from "zod";

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
              <a href="https://facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaFacebook className="w-3 h-3" />
              </a>
              <a href="https://instagram.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaInstagram className="w-3 h-3" />
              </a>
              <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="https://youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
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
                      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                        <path d="M100 10 L170 85 L30 85 Z" stroke="black" strokeWidth="3" fill="none"/>
                        <path d="M70 40 L130 40 L130 60 L70 60 Z" fill="#e53e3e" transform="rotate(15 100 50)"/>
                        <path d="M85 35 L115 35 L115 45 L85 45 Z" fill="#666" transform="rotate(-10 100 40)"/>
                        <path d="M85 55 L115 55 L115 65 L85 65 Z" fill="#666" transform="rotate(10 100 60)"/>
                      </svg>
                    </div>
                    <div className="text-xs font-bold mt-2">THE CAR PARK SOCIETY</div>
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
                      About
                    </button>
                  </Link>
                  <Link href="/event-list">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-events">
                      Events
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-blog">
                      Blog
                    </button>
                  </Link>
                  <Link href="/donate">
                    <button className="text-2xl font-medium hover:text-red-500 transition-colors" data-testid="nav-donate">
                      Donate
                    </button>
                  </Link>
                </nav>
                
                <div className="flex gap-4 justify-center">
                  <a href="https://facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
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
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-96 h-64 bg-white rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 text-xs">TCPS Logo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-welcome">
                WELCOME TO<br />
                THE CAR PARK SOCIETY
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed" data-testid="text-intro">
                The Car Park Society (TCPS) formed in 2025, our aim is to reveal hidden histories, restore connection, and transform overlooked spaces into vibrant hubs of collective creativity and community empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-mission-heading">Mission</h2>
            <p className="text-lg text-center leading-relaxed text-gray-300" data-testid="text-mission">
              We walk ka mua, ka muri: backwards into the future, uncovering the colonial layers of urban infrastructure, honoring Te Tiriti o Waitangi, and modelling co‐governance that places te taiao and community at the centre.
            </p>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16" data-testid="text-vision-heading">Our Vision & Goals</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-60 h-48 mx-auto mb-6 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">CREATE Image</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-create-heading">CREATE</h3>
                <p className="text-gray-300 leading-relaxed" data-testid="text-create">
                  We design immersive, participatory experiences that dissolve the line between art, ritual, and activism.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Each activation is more than an event: it is a living portal where audiences become participants, stories become ceremonies, and overlooked spaces become sites of collective transformation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-60 h-48 mx-auto mb-6 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">BUILD Image</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-build-heading">BUILD</h3>
                <p className="text-gray-300 leading-relaxed" data-testid="text-build">
                  We are committed to resilient networks and long-term community alliances. Our work is rooted in trust, co-design, and reciprocity; ensuring that every Watcher, collaborator, and partner plays an active role in shaping the society we are building together. This is not a movement of spectacle, but one of solidarity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-60 h-48 mx-auto mb-6 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">AMPLIFY Image</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" data-testid="text-amplify-heading">AMPLIFY</h3>
                <p className="text-gray-300 leading-relaxed" data-testid="text-amplify">
                  At the heart of The Car Park Society is a commitment to Indigenous narratives of resurgence, reclamation, and radical futures. We centre voices too often erased by consumerism and colonization, using our platforms to project stories of sovereignty, resilience, and imagination into the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="py-20 px-6 bg-red-900/30">
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex gap-2 mb-4">
                <a href="https://facebook.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/thecarparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@TheCarParkSociety" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
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
          
          <div className="text-center">
            <p className="text-gray-500 text-sm italic mb-4">
              "We will not be seen,<br />
              but we will be heard.<br />
              We will not be controlled,<br />
              but we will govern.<br />
              We will not wait for change;<br />
              we will be the change."
            </p>
            <p className="text-gray-600 text-xs">
              Oath of the Car Park Society
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}