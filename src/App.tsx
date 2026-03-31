import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import LeadsDashboard from "./pages/LeadsDashboard.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import IndexAr from "./pages/IndexAr.tsx";
import ThankYouAr from "./pages/ThankYouAr.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leads" element={<LeadsDashboard />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/ar" element={<IndexAr />} />
          <Route path="/ar/thank-you" element={<ThankYouAr />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
