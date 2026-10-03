"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Minus, Plus, ShoppingBag, Heart, Truck, ShieldCheck, RotateCcw, Check, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { reviews } from "@/data/extras";
import { taka, discountPct } from "@/lib/utils";
import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { Stars, Badge } from "@/components/ui";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const [tab, setTab] = useState("Description");
  if (!p) return notFound();
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
  const pr = reviews.filter((r) => r.productId === p.id).slice(0, 3);
  const pct = discountPct(p.price, p.compareAt);
  const wished = wishlist.includes(p.id);
  return (
    <div className="container-luxe py-8 pb-24 lg:pb-10">
      <nav className="flex items-center gap-1.5 text-[13px] text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-cocoa">Home</Link><ChevronRight size={13} /><Link href="/shop" className="hover:text-cocoa">Shop</Link><ChevronRight size={13} /><span className="text-cocoa">{p.name}</span></nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-line bg-cream">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.gallery[img]} alt={p.name} className="aspect-square w-full object-cover" /></div>
          <div className="mt-3 grid grid-cols-4 gap-3">{p.gallery.map((g, i) => <button key={i} onClick={() => setImg(i)} className={`overflow-hidden rounded-xl border-2 ${img === i ? "border-cocoa" : "border-transparent"}`} aria-label={`View ${i + 1}`}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={g} alt="" className="aspect-square w-full object-cover" /></button>)}</div>
        </div>
        <div>
          {p.badge && <Badge tone="dark">{p.badge}</Badge>}
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{p.brand}</p>
          <h1 className="h-serif mt-1 text-4xl sm:text-[44px] leading-tight">{p.name}</h1>
          <div className="mt-2 flex items-center gap-2"><Stars value={p.rating} /><b>{p.rating}</b><Link href="#reviews" className="text-sm text-muted underline underline-offset-4">{p.reviewsCount} Reviews</Link></div>
          <div className="mt-4 flex items-baseline gap-3"><span className="text-3xl font-semibold">{taka(p.price)}</span>{p.compareAt && <><span className="text-lg text-muted line-through">{taka(p.compareAt)}</span><Badge tone="blush">{pct}% off</Badge></>}</div>
          <p className="h-serif mt-3 text-lg italic text-cocoa/75">{p.shortDescription}</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[12px]">
            <div className="rounded-xl bg-cream p-3"><p className="font-semibold">Skin Type</p><p className="text-muted">{p.skinTypes.slice(0, 2).join(" / ")}</p></div>
            <div className="rounded-xl bg-cream p-3"><p className="font-semibold">Size</p><p className="text-muted">{p.size}</p></div>
            <div className="rounded-xl bg-cream p-3"><p className="font-semibold">Concern</p><p className="text-muted">{p.concerns[0] ?? "All"}</p></div>
          </div>
          <ul className="mt-4 space-y-1.5">{p.benefits.map((b) => <li key={b} className="flex items-center gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage"><Check size={12} /></span>{b}</li>)}</ul>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-line bg-white"><button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3" aria-label="Decrease"><Minus size={15} /></button><span className="w-8 text-center font-medium">{qty}</span><button onClick={() => setQty(qty + 1)} className="px-4 py-3" aria-label="Increase"><Plus size={15} /></button></div>
            <button onClick={() => toggleWishlist(p.id)} aria-label="Wishlist" className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border ${wished ? "border-red-200 bg-red-50 text-red-500" : "border-line bg-white"}`}><Heart size={19} fill={wished ? "currentColor" : "none"} /></button>
          </div>
          <div className="mt-3 flex gap-3"><button onClick={() => addToCart(p, qty)} className="btn-primary flex-1"><ShoppingBag size={16} /> Add to Bag</button><Link href="/checkout" onClick={() => addToCart(p, qty)} className="btn-gold flex-1">Buy Now</Link></div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[{ i: Truck, t: "Fast Delivery" }, { i: ShieldCheck, t: "100% Authentic" }, { i: RotateCcw, t: "Easy Returns" }].map((x) => <div key={x.t} className="rounded-xl border border-line bg-white p-3 text-xs"><x.i size={17} className="mx-auto text-gold-dark" /><p className="mt-1 font-medium">{x.t}</p></div>)}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-line">{["Description", "Key Ingredients", "How to Use", "Reviews"].map((t) => <button key={t} onClick={() => setTab(t)} className={`whitespace-nowrap px-5 py-3 text-sm font-medium ${tab === t ? "border-b-2 border-cocoa text-cocoa" : "text-muted"}`}>{t}</button>)}</div>
        <div className="max-w-3xl py-6 text-[15px] leading-relaxed text-cocoa/85">
          {tab === "Description" && <p>{p.description}</p>}
          {tab === "Key Ingredients" && <ul className="grid gap-2 sm:grid-cols-2">{p.ingredients.map((ing) => <li key={ing} className="rounded-xl bg-cream p-4 font-medium">✦ {ing}</li>)}</ul>}
          {tab === "How to Use" && <p>{p.howToUse}</p>}
          {tab === "Reviews" && <div id="reviews" className="space-y-4">{pr.length === 0 ? <p className="text-muted">No reviews yet — be the first.</p> : pr.map((r) => <div key={r.id} className="rounded-2xl border border-line bg-white p-5"><Stars value={r.rating} /><p className="mt-2 font-semibold">{r.title}</p><p className="mt-1 text-sm text-muted">{r.body}</p><p className="mt-2 text-xs text-muted">{r.customer} · Verified Purchase</p></div>)}</div>}
        </div>
      </div>
      <div className="mt-8"><h2 className="h-serif text-3xl">You may also love</h2><div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">{related.map((x) => <ProductCard key={x.id} product={x} />)}</div></div>
      {/* Mobile sticky */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-line bg-ivory/95 px-4 py-3 backdrop-blur lg:hidden">
        <div><p className="text-lg font-bold">{taka(p.price)}</p><Stars value={p.rating} size={11} /></div>
        <button onClick={() => addToCart(p, qty)} className="btn-primary flex-1">Add to Bag</button>
      </div>
    </div>
  );
}
