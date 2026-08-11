import React, { createContext, useContext, useState } from 'react';
import { Product, ProductShade, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedShade?: ProductShade, quantity?: number) => void;
  removeFromCart: (productId: string, shadeId?: string) => void;
  updateQuantity: (productId: string, quantity: number, shadeId?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeProductModal: Product | null;
  setActiveProductModal: (product: Product | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isTryOnOpen: boolean;
  setIsTryOnOpen: (open: boolean) => void;
  tryOnProduct: Product | null;
  setTryOnProduct: (product: Product | null) => void;
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [tryOnProduct, setTryOnProduct] = useState<Product | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: Product, selectedShade?: ProductShade, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedShade?.id === selectedShade?.id
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prevCart, { product, selectedShade, quantity }];
    });
    
    showToast(`Added "${product.name}${selectedShade ? ` (${selectedShade.name})` : ''}" to your shopping bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, shadeId?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedShade?.id === shadeId)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, shadeId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, shadeId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId && item.selectedShade?.id === shadeId) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        activeProductModal,
        setActiveProductModal,
        isSearchOpen,
        setIsSearchOpen,
        isTryOnOpen,
        setIsTryOnOpen,
        tryOnProduct,
        setTryOnProduct,
        isQuizOpen,
        setIsQuizOpen,
        toastMessage,
        showToast,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
