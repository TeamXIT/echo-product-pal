
import { Product, Category } from '@/types/types';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
];

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'electronics',
    description: 'Premium wireless headphones with noise cancellation',
    rating: 4.8,
    reviews: 1250
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'electronics',
    description: 'Advanced smartwatch with health monitoring',
    rating: 4.6,
    reviews: 892
  },
  {
    id: 3,
    name: 'Laptop Stand Aluminum',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'electronics',
    description: 'Ergonomic aluminum laptop stand',
    rating: 4.7,
    reviews: 456
  },

  // Clothing
  {
    id: 4,
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Soft, comfortable cotton t-shirt',
    rating: 4.5,
    reviews: 234
  },
  {
    id: 5,
    name: 'Designer Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Stylish denim jacket for all seasons',
    rating: 4.9,
    reviews: 567
  },
  {
    id: 6,
    name: 'Casual Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Comfortable sneakers for everyday wear',
    rating: 4.4,
    reviews: 789
  },

  // Home & Garden
  {
    id: 7,
    name: 'Modern Table Lamp',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    category: 'home',
    description: 'Elegant modern lamp for your home',
    rating: 4.6,
    reviews: 123
  },
  {
    id: 8,
    name: 'Ceramic Plant Pot Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    category: 'home',
    description: 'Beautiful ceramic pots for your plants',
    rating: 4.8,
    reviews: 345
  },

  // Books
  {
    id: 9,
    name: 'JavaScript Programming Guide',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    category: 'books',
    description: 'Complete guide to JavaScript programming',
    rating: 4.7,
    reviews: 678
  },
  {
    id: 10,
    name: 'Design Thinking Handbook',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    category: 'books',
    description: 'Learn the principles of design thinking',
    rating: 4.5,
    reviews: 234
  },

  // Sports
  {
    id: 11,
    name: 'Yoga Mat Premium',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'sports',
    description: 'Non-slip premium yoga mat',
    rating: 4.8,
    reviews: 456
  },
  {
    id: 12,
    name: 'Fitness Resistance Bands',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    category: 'sports',
    description: 'Set of resistance bands for home workouts',
    rating: 4.6,
    reviews: 789
  },
];
