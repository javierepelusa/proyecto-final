import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { FloatingButtons } from './components/layout/FloatingButtons';

import { Hero } from './components/home/Hero';
import { CategoriesGrid } from './components/home/CategoriesGrid';
import { OffersBanner } from './components/home/OffersBanner';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { WhatsAppBanner } from './components/home/WhatsAppBanner';
import { Testimonials } from './components/home/Testimonials';
import { AboutUsSection } from './components/home/AboutUsSection';

import { ProductGrid } from './components/products/ProductGrid';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { ProductSearchModal } from './components/products/ProductSearchModal';

import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { OrderSuccessModal } from './components/cart/OrderSuccessModal';

import { AdminPanelModal } from './components/admin/AdminPanelModal';
import { ToastContainer } from './components/common/Toast';
import { SEO } from './components/common/SEO';
import { Order } from './types';

function MainAppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-amber-400 selection:text-slate-900">
      <SEO />

      {/* Sticky Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        setActiveSection={setActiveSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Categories Grid */}
        <CategoriesGrid />

        {/* Special Offers Banner */}
        <OffersBanner />

        {/* Interactive Products Catalog Grid */}
        <ProductGrid />

        {/* Why Choose Us Benefits */}
        <WhyChooseUs />

        {/* WhatsApp Banner */}
        <WhatsAppBanner />

        {/* Testimonials */}
        <Testimonials />

        {/* About Us Brand Story */}
        <AboutUsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Widgets */}
      <FloatingButtons />

      {/* Modals & Drawers */}
      <CartDrawer />
      <CheckoutModal onOrderCompleted={(order) => setCompletedOrder(order)} />
      <OrderSuccessModal order={completedOrder} onClose={() => setCompletedOrder(null)} />
      <ProductDetailModal />
      <ProductSearchModal />
      <AdminPanelModal />

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainAppContent />
    </StoreProvider>
  );
}
