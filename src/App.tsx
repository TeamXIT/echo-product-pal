
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Index from "./pages/Index";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import { CartItem } from "@/types/types";
import { products } from "@/data/products";

const queryClient = new QueryClient();

const App = () => {
  // Shared state for cart functionality
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const onPaymentSuccess = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/products" 
              element={
                <Index 
                  cartItems={cartItems}
                  onAddToCart={addToCart}
                  onUpdateQuantity={updateQuantity}
                  getTotalItems={getTotalItems}
                  getTotalPrice={getTotalPrice}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                  isCheckoutOpen={isCheckoutOpen}
                  setIsCheckoutOpen={setIsCheckoutOpen}
                  onPaymentSuccess={onPaymentSuccess}
                />
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                <ProductDetailPage
                  cartItems={cartItems}
                  onAddToCart={addToCart}
                  onUpdateQuantity={updateQuantity}
                  getTotalItems={getTotalItems}
                  getTotalPrice={getTotalPrice}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                  isCheckoutOpen={isCheckoutOpen}
                  setIsCheckoutOpen={setIsCheckoutOpen}
                  onPaymentSuccess={onPaymentSuccess}
                />
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
