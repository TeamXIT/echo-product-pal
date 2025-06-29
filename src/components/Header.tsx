
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Category } from '@/types/types';

interface HeaderProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  cartItemsCount,
  onCartClick
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              Premium Store
            </span>
          </div>
          
          <Button
            onClick={onCartClick}
            variant="outline"
            size="sm"
            className="relative hover:bg-orange-50 border-orange-200"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>

        <nav className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
