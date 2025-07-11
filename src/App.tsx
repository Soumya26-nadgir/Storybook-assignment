import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { Rating } from "./components/Rating/Rating";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Badge } from "./components/Badge/Badge";
import { ShoppingCart, Heart } from "lucide-react";
import { mockProducts } from "./mocks/mockProducts";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function AppContent() {
  const [favorites, setFavorites] = useState(mockProducts.map(() => false));
  const handleAddToCart = () => {
    console.log("Added to cart!");
  };

  const handleToggleFavorite = (index: number) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    console.log("Toggled favorite!");
  };
  return (
    <div className="min-h-screen bg-background-light dark:bg-gray-900 p-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Showcase Assignment</h1>
          <ThemeToggle />
        </div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-700 dark:from-gray-100 dark:via-blue-400 dark:to-gray-300 bg-clip-text text-transparent mb-12 text-center">
          E-commerce Component Library
        </h1>
        <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant="primary" icon={ShoppingCart}>
              Add to Cart
            </Button>
            <Button variant="secondary" icon={Heart}>
              Add to Wishlist
            </Button>
            <Button variant="primary" isLoading>
              Processing...
            </Button>
            <Button variant="disabled">Out of Stock</Button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Ratings
          </h2>
          <div className="space-y-2 justify-center items-center text-center">
            <h3 className="text-sm font-medium text-gray-500">Small</h3>
            <div className="flex flex-col gap-2 justify-center items-center text-center">
              <Rating rating={4.5} size="sm" showValue />
            </div>
          </div>
          <div className="space-y-2 justify-center items-center text-center">
            <h3 className="text-sm font-medium text-gray-500">Medium</h3>
            <div className="flex flex-col gap-2 justify-center items-center text-center">
              <Rating rating={4.5} size="md" showValue />
            </div>
          </div>
          <div className="space-y-2 justify-center items-center text-center">
            <h3 className="text-sm font-medium text-gray-500">Large</h3>
            <div className="flex flex-col gap-2 justify-center items-center text-center">
              <Rating rating={4.5} size="lg" showValue />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Product Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                isFavorite={!!favorites[index]}
                onAddToCart={handleAddToCart}
                onToggleFavorite={() => handleToggleFavorite(index)}
              />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Badges
          </h2>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Small</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="sm" variant="default">
                Default
              </Badge>
              <Badge size="sm" variant="sale">
                Sale
              </Badge>
              <Badge size="sm" variant="success">
                Success
              </Badge>
              <Badge size="sm" variant="warning">
                Warning
              </Badge>
              <Badge size="sm" variant="outline">
                Outline
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Medium</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="md" variant="default">
                Default
              </Badge>
              <Badge size="md" variant="sale">
                Sale
              </Badge>
              <Badge size="md" variant="success">
                Success
              </Badge>
              <Badge size="md" variant="warning">
                Warning
              </Badge>
              <Badge size="md" variant="outline">
                Outline
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Large</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="lg" variant="default">
                Default
              </Badge>
              <Badge size="lg" variant="sale">
                Sale
              </Badge>
              <Badge size="lg" variant="success">
                Success
              </Badge>
              <Badge size="lg" variant="warning">
                Warning
              </Badge>
              <Badge size="lg" variant="outline">
                Outline
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          This component library is built with React, TypeScript, and Tailwind
          CSS.
        </p>
        <p className="text-sm text-gray-500">
          Run{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            npm run storybook
          </code>{" "}
          to explore all components and their variations.
        </p>
      </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;
