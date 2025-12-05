export type ProductType = 'ebook' | 'course' | 'design' | 'software';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: ProductType;
  image: string;
  rating: number;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}
