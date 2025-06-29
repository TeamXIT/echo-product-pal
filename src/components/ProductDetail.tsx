
import React from 'react';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/types';
import { ProductCard } from '@/components/ProductCard';

interface ProductDetailProps {
  product: Product;
  recommendedProducts: Product[];
  onAddToCart: (productId: number) => void;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  recommendedProducts,
  onAddToCart,
  onBack
}) => {
  return (
    <div className="space-y-12">
      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="outline"
        className="mb-6 hover:bg-orange-50 border-orange-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Button>

      {/* Product Detail */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 capitalize">
              {product.category}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            ${product.price}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>

          <Button
            onClick={() => onAddToCart(product.id)}
            size="lg"
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ✨ You might also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((recProduct) => (
              <ProductCard
                key={`rec-${recProduct.id}`}
                product={recProduct}
                onAddToCart={onAddToCart}
                isRecommended={true}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
