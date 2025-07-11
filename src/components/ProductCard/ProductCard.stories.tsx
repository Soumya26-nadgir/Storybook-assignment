import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ProductCard } from './ProductCard';
const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive product card component for e-commerce applications. Features sale badges, ratings, favorite toggle, and responsive design.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
      description: 'Product data',
      table: {
        type: { summary: 'Product' },
      },
    },
    isFavorite: {
      control: 'boolean',
      description: 'Whether the product is marked as favorite',
    },
    onToggleFavorite: {
      action: 'toggleFavorite',
      description: 'Callback when favorite button is clicked',
    },
    onAddToCart: {
      action: 'addToCart',
      description: 'Callback when add to cart button is clicked',
    },
  },
  args: {
    product: {
      id: '1',
      title: 'Wireless Headphones',
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.5,
      image: 'https://via.placeholder.com/300',
      isOnSale: true,
      salePercentage: 20,
      category: 'Electronics',
      description: 'High-quality wireless headphones with noise cancellation',
      reviewCount: 42,
    },
    isFavorite: false,
    onToggleFavorite: fn(),
    onAddToCart: fn(),
  },
} satisfies Meta<typeof ProductCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    product: {
      id:'1',
      title: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      category: 'Electronics'
    },
  }
};
export const OnSale: Story = {
  args: {
    product: {
      id:'2',
      title: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.2,
      isOnSale: true,
      category: 'Accessories'
    },
  }
};
export const Favorite: Story = {
  args: {
    product: {
      id:'3',
      title: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      category: 'Electronics'
    },
  }
};
export const LowRating: Story = {
  args: {
    product: {
      id:'4',
      title: 'Basic Phone Case',
      price: 12.99,
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 2.1,
      category: 'Accessories'
    },
  }
};
export const HighDiscount: Story = {
  args: {
    product: {
      id:'5',
      title: 'Gaming Keyboard',
      price: 59.99,
      originalPrice: 149.99,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      isOnSale: true,
      salePercentage: 60,
      category: 'Computer Accessories'
    },
  }
};
export const LongTitle: Story = {
  args: {
    product: {
      id:'6',
      title: 'Professional Ultra-High Definition 4K Webcam with Advanced Auto-Focus Technology',
      price: 89.99,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.3,
      category: 'Electronics'
    },
  }
};
export const ProductGrid: Story = {
  args: {
    product: {
      id: '1',
      title: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      rating: 4.5,
      category: 'Electronics'
    },
    isFavorite: false,
    onAddToCart: fn(),
    onToggleFavorite: fn()
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard
        {...args}
        product={{
          ...args.product,
          isOnSale: true,
          originalPrice: 249.99,
          salePercentage: 20,
        category:"Electronics"
        }}
        onAddToCart={fn()}
        onToggleFavorite={fn()}
      />
      <ProductCard
        {...args}
        product={{
          ...args.product,
          title: 'Bluetooth Speaker',
          price: 79.99,
          rating: 4.8,
          category: 'Electronics'
        }}
        isFavorite={true}
        onAddToCart={fn()}
        onToggleFavorite={fn()}
      />
      <ProductCard
         {...args}
         product={{
           ...args.product,
           title: 'Bluetooth Speaker',
           price: 79.99,
           rating: 4.8,
           category: 'Electronics'
         }}
        onAddToCart={fn()}
        onToggleFavorite={fn()}
      />
    </div>
  ),
};