export interface Product {
  id: number;
  name: string;
  price: number;
  platform: 'PC' | 'PS5' | 'Xbox' | 'Switch';
  image: string;
  description: string;
  rating: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'paid';
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'name';
