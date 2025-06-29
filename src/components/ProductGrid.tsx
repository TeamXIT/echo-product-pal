
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
  selectedCategory: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  selectedCategory
}) => {
  const getRecommendedProducts = (currentProducts: Product[]) => {
    // Simple recommendation: show products from different categories
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const recommendedProducts = selectedCategory !== 'all' ? getRecommendedProducts(products) : [];

  return (
    <div className="space-y-12">
      {/* Main Products */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {selectedCategory === 'all' ? 'All Products' : `${products[0]?.category} Products`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Recommendations */}
      {recommendedProducts.length > 0 && (
        <section className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ✨ Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard
                key={`rec-${product.id}`}
                product={product}
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
