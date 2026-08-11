export interface ProductShade {
  id: string;
  name: string;
  hex: string;
  swatchImage: string;
  productImage: string;
  description: string;
  finish: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Velvet Matte' | 'Liquid Silk' | 'Satin Rouge' | 'Nude Collection' | 'Luxe Sets';
  price: number; // In INR ₹
  rating: number;
  reviewsCount: number;
  description: string;
  details: string[];
  mainImage: string; // Product tube/pack image
  hoverImage: string; // Girl model wearing/applying lipstick
  shades?: ProductShade[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  selectedShade?: ProductShade;
  quantity: number;
}
