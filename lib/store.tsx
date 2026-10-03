"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem, Product } from "@/types";
import { products } from "@/data/products";

interface Store {
  cart: CartItem[];
  wishlist: string[];
  toasts: { id: number; msg: string; type: "success" | "error" }[];
  searchOpen: boolean;
  quickView: Product | null;
  cartOpen: boolean;
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  toast: (msg: string, type?: "success" | "error") => void;
  setSearchOpen: (v: boolean) => void;
  setQuickView: (p: Product | null) => void;
  setCartOpen: (v: boolean) => void;
  cartCount: number;
  subtotal: number;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(["p4", "p8"]);
  const [toasts, setToasts] = useState<Store["toasts"]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("lumiere-cart");
      const w = localStorage.getItem("lumiere-wish");
      if (c) {
        const parsed: { id: string; qty: number }[] = JSON.parse(c);
        setCart(parsed.map((x) => ({ product: products.find((p) => p.id === x.id)!, qty: x.qty })).filter((x) => x.product));
      }
      if (w) setWishlist(JSON.parse(w));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("lumiere-cart", JSON.stringify(cart.map((c) => ({ id: c.product.id, qty: c.qty })))); } catch {}
  }, [cart]);
  useEffect(() => {
    try { localStorage.setItem("lumiere-wish", JSON.stringify(wishlist)); } catch {}
  }, [wishlist]);

  const toast = (msg: string, type: "success" | "error" = "success") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  };

  const addToCart = (p: Product, qty = 1) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.product.id === p.id);
      if (ex) return prev.map((c) => (c.product.id === p.id ? { ...c, qty: c.qty + qty } : c));
      return [...prev, { product: p, qty }];
    });
    toast(`Added to bag — ${p.name}`);
  };
  const removeFromCart = (id: string) => setCart((p) => p.filter((c) => c.product.id !== id));
  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((p) => p.map((c) => (c.product.id === id ? { ...c, qty } : c)));
  };
  const clearCart = () => setCart([]);
  const toggleWishlist = (id: string) => {
    setWishlist((w) => {
      if (w.includes(id)) { toast("Removed from wishlist"); return w.filter((x) => x !== id); }
      toast("Saved to wishlist"); return [...w, id];
    });
  };

  const cartCount = useMemo(() => cart.reduce((s, c) => s + c.qty, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((s, c) => s + c.qty * c.product.price, 0), [cart]);

  return (
    <Ctx.Provider value={{ cart, wishlist, toasts, searchOpen, quickView, cartOpen, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, toast, setSearchOpen, setQuickView, setCartOpen, cartCount, subtotal }}>
      {children}
    </Ctx.Provider>
  );
}
export const useStore = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore outside provider");
  return v;
};
