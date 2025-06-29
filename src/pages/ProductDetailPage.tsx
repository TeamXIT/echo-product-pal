
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductDetail } from '@/components/ProductDetail';
import { Cart } from '@/components/Cart';
import { Checkout } from '@/components/Checkout';
import { products, categories } from '@/data/products';
import { CartItem } from '@/types/types';

interface ProductDetailPageProps {
  cartItems: CartItem[];
  onAddToCart: (productId: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  onPaymentSuccess: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  getTotalItems,
  getTotalPrice,
  isCartOpen,
  setIsCartOpen,
  isCheckoutOpen,
  setIsCheckoutOpen,
  onPaymentSuccess
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50">
        <Header 
          categories={categories}
          selectedCategory="all"
          onCategoryChange={() => {}}
          cartItemsCount={getTotalItems()}
          onCartClick={() => setIsCartOpen(true)}
        />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-orange-500 hover:text-orange-600"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  const getRecommendedProducts = () => {
    // Get products from different categories, excluding current product
    const otherProducts = products.filter(p => p.id !== product.id && p.category !== product.category);
    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const recommendedProducts = getRecommendedProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50">
      <Header 
        categories={categories}
        selectedCategory="all"
        onCategoryChange={(category) => {
          if (category === 'all') {
            navigate('/');
          } else {
            navigate(`/?category=${category}`);
          }
        }}
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <ProductDetail
          product={product}
          recommendedProducts={recommendedProducts}
          onAddToCart={onAddToCart}
          onBack={() => navigate('/')}
        />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        totalPrice={getTotalPrice()}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        totalPrice={getTotalPrice()}
        onPaymentSuccess={onPaymentSuccess}
      />
    </div>
  );
};

export default ProductDetailPage;
