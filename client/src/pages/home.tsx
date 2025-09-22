import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { X, Menu } from "lucide-react";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
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
                  {/* Logo matching the design */}
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
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-home"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-about"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('story')}
                    className="text-2xl font-medium hover:text-red-500 transition-colors"
                    data-testid="nav-events"
                  >
                    Events
                  </button>
                  <Link href="/blog/urban-maori">
                    <button 
                      className="text-2xl font-medium hover:text-red-500 transition-colors"
                      data-testid="nav-blog"
                    >
                      Blog
                    </button>
                  </Link>
                  <Link href="/support">
                    <button 
                      className="text-2xl font-medium hover:text-red-500 transition-colors"
                      data-testid="nav-donate"
                    >
                      Donate
                    </button>
                  </Link>
                </nav>
                
                {/* Social Icons in Overlay */}
                <div className="flex gap-4 justify-center">
                  <a href="https://facebook.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com/carparksociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
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
        <section id="hero" className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-96 h-64 bg-white rounded-lg flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-6xl font-bold mb-2">A</div>
                  <div className="text-sm font-medium">THE CAR PARK SOCIETY</div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                WELCOME TO<br />
                THE CAR PARK SOCIETY
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                The Car Park Society (TCPS) formed in 2025, our aim is 
                to reveal hidden histories, restore connection, 
                and transform overlooked spaces into vibrant hubs of 
                collective creativity and community empowerment
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-black p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-lg leading-relaxed">
                We walk <strong>ka mua, ka muri</strong> backwards into the future, 
                uncovering the colonial layers of urban infrastructure, honoring 
                <strong> Te Tiriti o Waitangi</strong>, and modelling co-governance that places 
                <strong> te taiao</strong> and community at the centre.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section id="vision" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Vision & Goals</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">CREATE</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  We design immersive, participatory experiences that dissolve the line between art, ritual, and activism. 
                  Each activation is more than an event: it is a living portal where audiences become participants, 
                  stories become ceremonies, and overlooked spaces become sites of collective transformation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">BUILD</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  We are committed to resilient networks and long-term community alliances. Our work is rooted in trust, 
                  co-design, and reciprocity; ensuring that every watcher, collaborator, and partner plays an active role in shaping 
                  the society we are building together. This is not a movement of spectacle, but one of solidarity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AMPLIFY</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  At the heart of The Car Park Society is a commitment to Indigenous narratives of resurgence, reclamation, 
                  and radical futures. We centre voices too often erased by consumerism and colonization, using our platforms to 
                  project stories of sovereignty, resilience, and imagination into the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-20 px-6 bg-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">OUR STORY</h2>
            <p className="text-xl mb-12 italic">Aroha kaha beneath asphalt</p>
            <p className="text-lg mb-8">Our story begins with a simple act: watching. 👁</p>
            
            <div className="text-left space-y-6 text-gray-300 leading-relaxed">
              <p>
                Late night gatherings at a penthouse window overlooked the stark grout of Lombard Street Carpark. 
                At first we were captivated by the static employees, and each head too oft, as if the missal of the place 
                was disturbed. Curiosity turned to investigation. We traced lines, shot files, and photographs until a 
                submerged history surfaced. The carpark's footprint once held Bellhurst & Hunter's Wine Merchants 
                warehouse, an outpost of a global alcohol enterprise until 1983, a striving lounge fondly displaced by colonization.
              </p>
              
              <p>
                Beneath the concrete still runs the silenced Waitematā Stream, its flow straight forward into the police 
                and the shallow, so to sea thus, so to dust we turn the river and the hair is oil. When land and water are 
                silenced, so too are the people who live upon them. These revelations exposed a larger pattern: 
                silenced land. Whakapapa was white-splashed underfoot; the very infrastructure of our cities is an 
                architecture of colonisation - each slab, each curb, each pipe constructed to erase, to forget, and to neat 
                the missal of both whenua and people.
              </p>
            </div>
          </div>
        </section>

        {/* Why a Car Park Section */}
        <section className="py-20 px-6 bg-red-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">WHY A CAR PARK?</h2>
            
            <div className="text-left space-y-8 text-gray-300 leading-relaxed">
              <p>
                A car park might seem mundane, ordinary, utilitarian and overlooked but beneath this solid, 
                everything has history but a profound metaphor: it is our symbolic battleground, where past and 
                future converge.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">• Vertical Arohea:</h3>
                  <p>Concrete piles stack history layer upon layer, hiding Indigenous memory and colonial erasure beneath.</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">• Urban Mythology:</h3>
                  <p>The car park is a liminal zone, an in-between place perfect for new rituals, stories, and connections.</p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">• Broadcast Tower:</h3>
                  <p>In height, energy and echoing, the car park transforms into a conduit, broadcasting signals of resistance and revival.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Te Mana Whakatete Accord Section */}
        <section id="accord" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">TE MANA WHAKATETE ACCORD</h2>
            <p className="text-xl mb-4 italic">"The Accord is not a beginning but a recollecting.</p>
            <p className="text-xl mb-4 italic">Not a time but a first.</p>
            <p className="text-xl mb-12 italic">Not a time but a resumption."</p>
            
            <div className="text-left space-y-8 text-gray-300 leading-relaxed">
              <div>
                <p className="mb-6">
                  The Car Park Society (TCPS) is a living archive dedicated to preserving silenced voices, cultural contexts, 
                  navigators, and special participants dedicated to the reclamation of space, spirit, and story beneath the 
                  imposed concrete of Aotearoa's urban cityscape.
                </p>
                
                <p className="mb-6">
                  We take the carpark, specifically the Lombard Street Carpark in te Whanganui-a-Tara, our kāi ino and 
                  our venue space. Here we conduct on-land archive of silenced medicine, a revenant pa reimagined.
                </p>
                
                <p className="mb-8">From this fitness, we issue The Accord.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article I: RANGATIRATANGA KĀWAI (Purpose)</h3>
                <p className="mb-4">
                  What is seen is bound the ono place, add each to time ki Mana Taokete in māori which. The Car Park Society (TCPS) 
                  operates as not a property of the obvious. Our purpose lies in the unfinished, the unseen, and the unspeakable.
                </p>
                
                <div className="space-y-4">
                  <p>
                    1. Revolution of the Colonial Resist. We are the service for the silenced. Through art, intervention, and overt 
                    action, we produce the ongoing legacy of colonialism, exposing the cracks in the structure. We speak in 
                    schlepping and bold rituals.
                  </p>
                  
                  <p>
                    2. Reclamation of Hidden Spaces. We take what was once forsaken. The Car Park's 'sick waste.' We reclaim it 
                    not for poets, not for recognition, but for resistance; a bites, urinated, a place lost for transformation.
                  </p>
                  
                  <p>
                    3. A Future Anchored in Tikanga. Our vision is not blindly futuristic but wisely 'gen gen over.' Cultivate love for present 
                    speech. For deep roots, we unlearn the colonisers' truths and the future old we have ino the structure dreams. The 
                    past is our road forward.
                  </p>
                  
                  <p>
                    4. A Generational Design. We govern not from the top down but from the edges inward. Ancestry is not 
                    choice - it is the freedom to dream, destroy, and manifest in the shadows. Ka whakatōhea among the 
                    ancestors are moved to no single voice but to all intergenerational change.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article II: TE MANA WHAKAARO (Principles)</h3>
                <p className="mb-4">
                  There are rules, and then there are truths that cannot be broken. The Te Mana Whakatete Accord exists to 
                  honour these truths.
                </p>
                
                <div className="space-y-4">
                  <p>
                    1. Tino Rangatiratanga. Sovereignty is not a paper title; it is an anchor in the wind, a claim to the very soul of 
                    the land. The first power source is in the bones of the tūpuna; but in the scars of this land that has become 
                    our own. We carry the pīpi, our heritage.
                  </p>
                  
                  <p>
                    2. Mana Moturaukı. Our power lies in our autonomy: the ability to stand alone and together, in quiet 
                    resistance against the forces that would bind us. We hold to opposition; to identification. Our existence is 
                    our defiance, our strength not proof of our validity.
                  </p>
                  
                  <p>
                    3. Whakapapa. We are all streams in a larger tapestry. Our stories echo through the generations. Our 
                    connection stands in tune with what would us like land. In the processes, whose actions will live that ancient 
                    limits, we never forget.
                  </p>
                  
                  <p>
                    4. Reclamation. The Car Park is not just concrete and steel; it is a disturbed space, waiting to be restored. 
                    Through creative acts of resistance, we pull these spaces from the grasp of the coloniser and transform 
                    them into places of liberation.
                  </p>
                  
                  <p>
                    5. Radical Co-Governance. There are no leaders, no masters. We govern from below, with our hierarchy. 
                    Decisions are made not by names but by intercourse of the collective, shifting like the shadows that 
                    illuminate over time.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article III: TE KOTAHITANGA HUNA (The Unseen Movement)</h3>
                <p className="mb-4">
                  We are not bound to the traditional forms; we are fluid, deliberate, and invisible. Governance within TCPS 
                  operates under the visible structure of the state, announcing the disturbed power of community-led, 
                  generations presence.
                </p>
                
                <div className="space-y-4">
                  <p>
                    1. Beyond Surveillance. We move in the shadows - the very spaces are initially for use, person shares in the fight for living. The 
                    identity TCPS is in flux but they oppose are entirely for use, person shares in the fight for living for the 
                    movement is always shifting, always evolving.
                  </p>
                  
                  <p>
                    2. Decentered Action. Each member is a node in a network. There are no frontiers, here, no confined 
                    territories. We flow between the cracks, between the known and the unknown, 
                    carrying the strength of shared intentions.
                  </p>
                  
                  <p>
                    3. Consensus in Silence. We speak in murmur, but we listen to the loudest silence. Consensus is not 
                    reached by the loudest voice, but by the shared movement, the most subtle action. We lean until we hear 
                    the hum of the land, the pulse of the collective heartbeat, before we act.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article IV: TE TAUMANU (The Reclamation)</h3>
                <p className="mb-4">
                  To reclaim The Car Park is to reclaim more than space. It is to reclaim what has been erased and forgotten 
                  over the moveless histories, the quiet resistances, the unwritten codes of power.
                </p>
                
                <div className="space-y-4">
                  <p>
                    1. Creative Subversion. We do not ask for permission. We do not beg for recognition. We create in the 
                    circles. Through our performance and intervention, We turn The Car Park into a stage, a canvas, a 
                    sacred space - all without seeking the permission of the powerful.
                  </p>
                  
                  <p>
                    2. Public Intervention. We leave our mark in the most subtle of ways. Our actions are witnesses in the city's 
                    body which tell suppressed hope, our stories through collective and interpersonal action between the known 
                    in the shadows, underground.
                  </p>
                  
                  <p>
                    3. Symbolic Resistance. The Car Park is our symbol; Concrete is broken, metal is bent, and the spaces 
                    we inhabit are reimagined as sites of revolution. TCPS is not about reform; it is about creating something 
                    new from the remnants of the old.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Article V: TE MANAAKITANGA REHEREA (The Invisible Hand)</h3>
                <p className="mb-4">
                  Though we operate in the shadows, we are not hidden. We are bound by the principles of the invisible 
                  hand, without framework located in community care, respect, and indigenous justice.
                </p>
                
                <div className="space-y-4">
                  <p>
                    1. Decolonising Law. We do not recognise colonial laws, instead, we exist on our own. form of justice, drawn 
                    from the wisdom of the land, the whispers of its indigenous ancestors, and the rules of the people.
                  </p>
                  
                  <p>
                    2. Silent Solidarity. We act in solidarity, not for fame, not for power, but for the quiet, relentless-of-the 
                    collective. We build, we share, we act. together, as one unbroken chain.
                  </p>
                  
                  <p>
                    3. Quiet Accountability. Each action, no matter how small, will be held in the collective silence. We are all 
                    accountable, not to a central authority, but to the land and to each other.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <h4 className="text-lg font-semibold text-white mb-4">Oath of The Car Park Society</h4>
                <div className="italic text-gray-400 leading-relaxed">
                  <p>"We will not work for change</p>
                  <p>but we will be the change</p>
                  <p>We are not the workers</p>
                  <p>we are not the watchers</p>
                  <p>the world cannot see how we differ</p>
                  <p>we will not work for change</p>
                  <p>we will be the change"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section id="join" className="py-20 px-6 bg-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Join the Movement</h2>
            <p className="text-lg text-gray-300 mb-12">
              Join our email list and get updates about upcoming society events and activations:
            </p>
            
            <div className="max-w-md mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email here"
                            className="bg-white text-black border-0 px-4 py-3"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={subscribeEmail.isPending}
                    className="bg-black text-white px-6 py-3 hover:bg-gray-800"
                    data-testid="button-signup"
                  >
                    {subscribeEmail.isPending ? "..." : "Sign Up"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
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
          
          <div className="text-center">
            <p className="text-gray-500 text-sm italic mb-4">
              "We will not work for change<br />
              we will not be changed<br />
              we are not the workers<br />
              we are not the wonders<br />
              the world cannot see how we differ<br />
              we will not work for change<br />
              we will be the change"
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