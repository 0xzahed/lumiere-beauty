"use client";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Plus } from "lucide-react";
import { Product } from "@/types";
import { taka, discountPct } from "@/lib/utils";
import { useStore } from "@/lib/store";
import { Stars, Badge } from "./ui";

export default function ProductCard({ product, rank }: { product: Product; rank?: number }) {
  const { addToCart, toggleWishlist, wishlist, setQuickView } = useStore();
  const wished = wishlist.includes(product.id);
  const pct = discountPct(product.price, product.compareAt);
  return (
    <div className="card-luxe group relative overflow-hidden bg-white transition-all duration-300 hover:shadow-lift hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Link href={`/products/${product.slug}`} aria-label={product.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && <Badge tone={product.badge === "Best Seller" ? "dark" : product.badge === "New" ? "sage" : "gold"}>{product.badge}</Badge>}
          {pct > 0 && <Badge tone="blush">-{pct}%</Badge>}
        </div>
        <button onClick={() => toggleWishlist(product.id)} aria-label="Wishlist" className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-card transition ${wished ? "text-red-500" : "text-cocoa hover:text-red-500"}`}>
          <Heart size={17} fill={wished ? "currentColor" : "none"} />
        </button>
        <div className="absolute inset-x-3 bottom-3 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button onClick={() => addToCart(product)} className="flex flex-1 items-center justify-center gap-2 bg-cocoa/95 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ivory backdrop-blur hover:bg-cocoa">
            <ShoppingBag size={14} /> Add to Bag
          </button>
          <button onClick={() => setQuickView(product)} aria-label="Quick view" className="flex h-[42px] w-[42px] items-center justify-center bg-white/95 text-cocoa backdrop-blur hover:bg-white">
            <Eye size={16} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{product.brand}</p>
        <Link href={`/products/${product.slug}`} className="h-serif mt-1 block text-[17px] leading-snug text-cocoa hover:underline underline-offset-4">{product.name}</Link>
        <div className="mt-1.5 flex items-center gap-1.5">
          <Stars value={product.rating} size={13} />
          <span className="text-xs font-medium text-cocoa">{product.rating}</span>
          <span className="text-xs text-muted">({product.reviewsCount})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[16px] font-semibold text-cocoa">{taka(product.price)}</span>
          {product.compareAt && <span className="text-[13px] text-muted line-through">{taka(product.compareAt)}</span>}
        </div>
        <button onClick={() => addToCart(product)} className="mt-3 flex w-full items-center justify-center gap-2 border border-cocoa/20 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-cocoa transition hover:border-cocoa hover:bg-cocoa hover:text-ivory sm:hidden">
          <Plus size={14} /> Add to Bag
        </button>
      </div>
    </div>
  );
}
