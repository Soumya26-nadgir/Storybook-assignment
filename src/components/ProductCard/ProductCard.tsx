import React from "react";
import { clsx } from "clsx";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { ShoppingCart, Heart, Tag } from "lucide-react";
import { Badge } from "../Badge/Badge";
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isOnSale?: boolean;
  salePercentage?: number;
  category?: string; 
  description?: string; 
  reviewCount?: number; 
}
export interface ProductCardProps {
  product: Product;
  className?: string;
  onToggleFavorite?: () => void;
  onAddToCart?: () => void
  isFavorite?: boolean;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
  ...props
}) => {
  const discount =
    props.product.salePercentage ||
    (props.product.originalPrice
      ? Math.round(((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100)
      : 0);
  return (
    <div
      data-testid="product-card"
      className={clsx(
        "group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/90",
        "rounded-2xl border border-gray-200/60 dark:border-gray-800 overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30",
        "hover:-translate-y-2 hover:scale-[1.02]",
        "backdrop-blur-sm",
        "animate-fade-in",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent dark:from-black/20 pointer-events-none" />
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {props.product.isOnSale && (
          <div className="absolute top-4 left-4 z-10">
           <Badge variant="sale" icon={<Tag className="w-3 h-3" />}>
                    -{discount}% off
                   </Badge>
          </div>
        )}
        <button
          onClick={onToggleFavorite}
          className={clsx(
            "absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border border-white/20",
            "transition-all duration-300 hover:scale-110 active:scale-95",
            "shadow-lg hover:shadow-xl",
            "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
            isFavorite
              ? "bg-red-500/90 text-white opacity-100 translate-y-0"
              : "bg-white/90 text-gray-600 hover:bg-white"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={clsx(
              "h-4 w-4 transition-all duration-300",
              isFavorite ? "fill-current scale-110" : "hover:scale-110"
            )}
          />
        </button>
      </div>
      <div className="p-6 space-y-4">
        {props.product.category && (
          <div className="inline-flex">
          <Badge
    variant="outline"
    size="sm"
    className="uppercase tracking-wider font-semibold"
  >
    {props.product.category}
  </Badge>
          </div>
        )}
        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
          {props.product.title}
        </h3>
        {props.product.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {props.product.description}
          </p>
        )}
        <div className="flex items-center gap-3">
          <Rating rating={props.product.rating} size="sm" />
          {typeof props.product.reviewCount === "number" && (
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              ({props.product.reviewCount})
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ${props.product.price.toFixed(2)}
          </span>
          {props.product.originalPrice && props.product.originalPrice > props.product.price && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              ${props.product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          variant="primary"
          size="sm"
          icon={ShoppingCart}
          onClick={onAddToCart}
          className="w-full mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
