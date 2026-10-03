export type SkinType = "Dry" | "Oily" | "Combination" | "Normal" | "Sensitive";
export type SkinConcern = "Acne" | "Dark Spots" | "Dryness" | "Dullness" | "Redness" | "Uneven Texture" | "Fine Lines" | "Sensitive Skin" | "Aging" | "Barrier";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  skinTypes: SkinType[];
  concerns: string[];
  size: string;
  sku: string;
  stock: number;
  status: "active" | "draft" | "archived";
  isBestSeller?: boolean;
  isNew?: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface ConcernCard {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  customer: string;
  avatar: string;
  skinType: SkinType | string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  status: "approved" | "pending" | "rejected";
  featured?: boolean;
}

export interface OrderItem { productId: string; name: string; image: string; price: number; qty: number; }
export interface Order {
  id: string;
  date: string;
  customer: string;
  email: string;
  phone: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  payment: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  address: string;
  city: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  orders: number;
  spent: number;
  lastOrder: string;
  status: "active" | "inactive";
  skinType: string;
  city: string;
}

export interface Coupon {
  code: string;
  type: "percent" | "flat";
  value: number;
  minOrder: number;
  maxDiscount?: number;
  expiry: string;
  usageLimit: number;
  used: number;
  active: boolean;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}

export interface CartItem { product: Product; qty: number; }
