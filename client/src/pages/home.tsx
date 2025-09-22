import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ArrowDown, Mail, Menu, X } from "lucide-react";
import { z } from "zod";

const emailFormSchema = insertEmailSubscriptionSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

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
        description: "Thank you for joining our movement. Check your email for confirmation.",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="skip-to-content"
      >
        Skip to Main Content
      </a>

      {/* Header Navigation */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                The Car Park Society
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-mission"
              >
                Mission
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-vision"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('join')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-join"
              >
                Join
              </button>
            </nav>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    scrollToSection('mission');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-2 py-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="mobile-nav-mission"
                >
                  Mission
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('vision');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-2 py-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="mobile-nav-vision"
                >
                  Vision
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('join');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-2 py-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="mobile-nav-join"
                >
                  Join
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero-gradient py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="mx-auto mb-8 w-80 h-32 bg-muted rounded-xl flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Organization Logo</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              WELCOME TO<br />
              <span className="text-primary">THE CAR PARK SOCIETY</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                The Car Park Society (TCPS) formed in 2025, our aim is to reveal hidden histories, restore connection, and transform overlooked spaces into vibrant hubs of collective creativity and community empowerment.
              </p>
              
              <Button 
                onClick={() => scrollToSection('mission')}
                className="inline-flex items-center px-8 py-3 shadow-lg hover:shadow-xl"
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section id="mission" className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Mission</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed italic">
                We walk <strong className="text-foreground">ka mua, ka muri</strong>: backwards into the future, uncovering the colonial layers of urban infrastructure, honoring <strong className="text-foreground">Te Tiriti o Waitangi</strong>, and modelling co‐governance that places <strong className="text-foreground">te taiao</strong> and community at the centre.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section id="vision" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision & Goals</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* CREATE Column */}
              <div className="text-center group">
                <Card className="mb-8 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Community Creative Activities</span>
                  </div>
                </Card>
                
                <h3 className="text-2xl font-bold text-primary mb-4">CREATE</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  We design immersive, participatory experiences that dissolve the line between art, ritual, and activism. Each activation is more than an event: it is a living portal where audiences become participants, stories become ceremonies, and overlooked spaces become sites of collective transformation.
                </p>
              </div>
              
              {/* BUILD Column */}
              <div className="text-center group">
                <Card className="mb-8 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Community Collaboration</span>
                  </div>
                </Card>
                
                <h3 className="text-2xl font-bold text-primary mb-4">BUILD</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to resilient networks and long-term community alliances. Our work is rooted in trust, co-design, and reciprocity; ensuring that every Watcher, collaborator, and partner plays an active role in shaping the society we are building together. This is not a movement of spectacle, but one of solidarity.
                </p>
              </div>
              
              {/* AMPLIFY Column */}
              <div className="text-center group">
                <Card className="mb-8 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Indigenous Voices</span>
                  </div>
                </Card>
                
                <h3 className="text-2xl font-bold text-primary mb-4">AMPLIFY</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  At the heart of The Car Park Society is a commitment to Indigenous narratives of resurgence, reclamation, and radical futures. We centre voices too often erased by consumerism and colonization, using our platforms to project stories of sovereignty, resilience, and imagination into the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section id="join" className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join the Movement</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our email list and get updates about upcoming society events and activations:
            </p>
            
            <div className="max-w-md mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="email"
                              placeholder="Enter your email here"
                              className="w-full px-4 py-4 pr-12 text-foreground bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200"
                              data-testid="input-email"
                              {...field}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <Mail className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={subscribeEmail.isPending}
                    className="w-full px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    data-testid="button-signup"
                  >
                    {subscribeEmail.isPending ? "Signing Up..." : "Sign Up"}
                    {!subscribeEmail.isPending && <Mail className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
              
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">The Car Park Society</h3>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                Transforming overlooked urban spaces into vibrant hubs of collective creativity and community empowerment since 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                    data-testid="footer-mission"
                  >
                    Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vision')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                    data-testid="footer-vision"
                  >
                    Vision
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('join')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                    data-testid="footer-join"
                  >
                    Join Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>contact@carparksociety.org</li>
                <li>Auckland, Aotearoa New Zealand</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 The Car Park Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
