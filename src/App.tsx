import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import BlogDetail from "./pages/BlogDetail";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Set document direction and language based on i18n
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageWrapper>
          <Routes>
            {/* Redirect root to /en */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* Language-specific routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/ar" element={<Index />} />
            
            {/* Services list page */}
            <Route path="/en/services" element={<ServicesPage />} />
            <Route path="/ar/services" element={<ServicesPage />} />
            
            {/* Service detail pages */}
            <Route path="/en/services/:slug" element={<ServiceDetail />} />
            <Route path="/ar/services/:slug" element={<ServiceDetail />} />
            
            {/* Blog detail pages */}
            <Route path="/en/blog/:slug" element={<BlogDetail />} />
            <Route path="/ar/blog/:slug" element={<BlogDetail />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
