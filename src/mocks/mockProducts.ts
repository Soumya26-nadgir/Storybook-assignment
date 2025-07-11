import {ProductCardProps} from '../components/ProductCard/ProductCard'
export const mockProducts: ProductCardProps[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 1234,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center',
    isOnSale: true,
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.'
  },
  {
    id: '2',
    title: 'Modern Minimalist Watch',
    price: 299.00,
    rating: 4.8,
    reviewCount: 856,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
    isOnSale: false,
    category: 'Accessories',
    description: 'Elegant timepiece with clean design and precision movement.'
  },
  {
    id: '3',
    title: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviewCount: 542,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center',
    isOnSale: true,
    category: 'Clothing',
    description: 'Comfortable and sustainable cotton t-shirt in various colors.'
  },
  {
    id: '4',
    title: 'Professional Camera Lens',
    price: 899.99,
    rating: 4.9,
    reviewCount: 324,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop&crop=center',
    isOnSale: false,
    category: 'Photography',
    description: 'High-performance lens for professional photography and videography.'
  },
  {
    id: '5',
    title: 'Artisan Coffee Beans',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.6,
    reviewCount: 2103,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop&crop=center',
    isOnSale: true,
    category: 'Food & Beverage',
    description: 'Single-origin coffee beans roasted to perfection with complex flavor notes.'
  },
  {
    id: '6',
    title: 'Ergonomic Office Chair',
    price: 449.99,
    rating: 4.4,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center',
    isOnSale: false,
    category: 'Furniture',
    description: 'Comfortable and supportive chair designed for long work sessions.'
  }
];