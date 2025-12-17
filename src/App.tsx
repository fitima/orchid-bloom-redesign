import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import ONG from "./pages/ONG";
import CME from "./pages/CME";
import Partage from "./pages/Partage";
import Temoignages from "./pages/partage/Temoignages";
import Conseils from "./pages/partage/Conseils";
import Reflexion from "./pages/partage/Reflexion";
import LivreDor from "./pages/partage/LivreDor";
import Presse from "./pages/partage/Presse";
import Album from "./pages/Album";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ong" element={<ONG />} />
            <Route path="/cme" element={<CME />} />
            <Route path="/partage" element={<Partage />}>
              <Route path="temoignages" element={<Temoignages />} />
              <Route path="conseils" element={<Conseils />} />
              <Route path="reflexion" element={<Reflexion />} />
              <Route path="livre-dor" element={<LivreDor />} />
              <Route path="presse" element={<Presse />} />
            </Route>
            <Route path="/album" element={<Album />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
