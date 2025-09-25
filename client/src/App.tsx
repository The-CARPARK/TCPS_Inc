import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Events from "@/pages/events";
import EventDetail from "@/pages/event-detail";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Support from "@/pages/support";
import AdminSignups from "@/pages/admin-signups";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-1" component={About} />
      <Route path="/event-list" component={Events} />
      <Route path="/event-details/the-control-room-tcps" component={EventDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/post/urban-māori-recalling-the-sacred-signal-through-concrete" component={BlogPost} />
      <Route path="/donate" component={Support} />
      <Route path="/admin-signups" component={AdminSignups} />
      {/* Legacy routes for backwards compatibility */}
      <Route path="/blog/urban-maori" component={BlogPost} />
      <Route path="/support" component={Support} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;