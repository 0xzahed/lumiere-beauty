"use client";
import Link from "next/link";
import { X, ShoppingBag, Trash2, Minus, Plus, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";
import { Stars } from "./ui";
import { products } from "@/data/products";

export function Overlays() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, subtotal, searchOpen, setSearchOpen, quickView, setQuickView, addToCart, toasts } = useStore();
  const [q, setQ] = useState("");
  const results = q.length > 1 ? products.filter((p) => (p.name + p.brand + p.ingredients.join(" ") + p.concerns.join(" ")).toLowerCase().includes(q.toLowerCase())).slice(0, 6) : [];
  return (
    <>
      {/* Toasts */}
      <div className="fixed bottom-5 right-5 z-[90] flex flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`flex items-center gap-2.5 px-4 py-3 text-sm shadow-lift animate-fadeUp ${t.type === "success" ? "bg-cocoa text-ivory" : "bg-red-700 text-white"}`}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>{t.msg}
          </div>
        ))}
      </div>
      {/* Cart drawer */}
      <div className={`fixed inset-0 z-[70] ${cartOpen ? "" : "pointer-events-none"}`}>
        <div onClick={() => setCartOpen(false)} className={`absolute inset-0 bg-cocoa/40 transition-opacity ${cartOpen ? "opacity-100" : "opacity-0"}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-ivory shadow-lift transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-label="Shopping bag">
          <div className="flex items-center justify-between border-b border-line p-5">
            <h3 className="font-serif text-xl">Your Bag ({cart.reduce((s, c) => s + c.qty, 0)})</h3>
            <button onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-auto p-5 space-y-4">
            {cart.length === 0 && <div className="py-16 text-center"><ShoppingBag size={40} className="mx-auto text-nude" /><p className="h-serif mt-4 text-xl">Your beauty bag is empty.</p><Link href="/shop" onClick={() => setCartOpen(false)} className="btn-primary mt-5">Start Shopping</Link></div>}
            {cart.map((c) => (
              <div key={c.product.id} className="flex gap-3 border border-line bg-white p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.product.image} alt={c.product.name} className="h-20 w-16 object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{c.product.name}</p>
                  <p className="text-xs text-muted">{taka(c.product.price)}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center border border-line">
                      <button onClick={() => updateQty(c.product.id, c.qty - 1)} className="px-2 py-1" aria-label="Decrease"><Minus size={13} /></button>
                      <span className="w-7 text-center text-sm">{c.qty}</span>
                      <button onClick={() => updateQty(c.product.id, c.qty + 1)} className="px-2 py-1" aria-label="Increase"><Plus size={13} /></button>
                    </div>
                    <button onClick={() => removeFromCart(c.product.id)} aria-label="Remove" className="text-muted hover:text-red-600"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="border-t border-line bg-white p-5">
              <div className="flex justify-between text-sm"><span className="text-muted">Subtotal</span><span className="font-semibold">{taka(subtotal)}</span></div>
              <p className="mt-1 text-xs text-muted">Delivery calculated at checkout · Free over ৳1,500</p>
              <Link href="/cart" onClick={() => setCartOpen(false)} className="btn-primary mt-4 w-full">View Bag & Checkout <ArrowRight size={15} /></Link>
            </div>
          )}
        </aside>
      </div>
      {/* Search panel */}
      {searchOpen && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-label="Search">
          <div className="absolute inset-0 bg-cocoa/40" onClick={() => setSearchOpen(false)} />
          <div className="absolute inset-x-0 top-0 bg-ivory shadow-lift animate-fadeUp">
            <div className="container-luxe py-8">
              <div className="flex items-center gap-3 border-b-2 border-cocoa pb-3">
                <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products, ingredients or concerns..." className="w-full bg-transparent font-serif text-2xl outline-none placeholder:text-muted/50" aria-label="Search" />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={22} /></button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs uppercase tracking-widest text-muted">Popular:</span>
                {["Niacinamide", "Acne", "Moisturizer", "Sunscreen", "Vitamin C"].map((t) => <button key={t} onClick={() => setQ(t)} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs hover:border-cocoa">{t}</button>)}
              </div>
              {results.length > 0 && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {results.map((p) => (
                    <Link key={p.id} href={`/products/${p.slug}`} onClick={() => setSearchOpen(false)} className="flex items-center gap-3 border border-line bg-white p-3 hover:shadow-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} className="h-14 w-14 object-cover" />
                      <div className="flex-1"><p className="text-sm font-medium">{p.name}</p><Stars value={p.rating} size={12} /><p className="text-sm font-semibold">{taka(p.price)}</p></div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Quick view */}
      {quickView && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-label="Quick view">
          <div className="absolute inset-0 bg-cocoa/50" onClick={() => setQuickView(null)} />
          <div className="relative grid w-full max-w-3xl overflow-hidden bg-ivory shadow-lift animate-fadeUp sm:grid-cols-2 max-h-[90vh] overflow-auto">
            <div className="bg-cream min-h-[280px]">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={quickView.image} alt={quickView.name} className="h-full w-full object-cover" /></div>
            <div className="p-6 sm:p-8">
              <button onClick={() => setQuickView(null)} aria-label="Close" className="absolute right-4 top-4"><X size={20} /></button>
              <p className="eyebrow">{quickView.brand}</p>
              <h3 className="h-serif mt-1 text-2xl">{quickView.name}</h3>
              <div className="mt-2 flex items-center gap-2"><Stars value={quickView.rating} /><span className="text-sm">{quickView.rating} ({quickView.reviewsCount} reviews)</span></div>
              <p className="mt-3 text-xl font-semibold">{taka(quickView.price)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{quickView.shortDescription} Suitable for {quickView.skinTypes.join(", ")}.</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => { addToCart(quickView); setQuickView(null); setCartOpen(true); }} className="btn-primary flex-1">Add to Bag</button>
                <Link href={`/products/${quickView.slug}`} onClick={() => setQuickView(null)} className="btn-secondary flex-1">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
