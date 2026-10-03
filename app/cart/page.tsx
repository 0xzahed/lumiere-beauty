"use client";
import { useState } from "react";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, Tag, ArrowRight, Bookmark } from "lucide-react";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";
import { EmptyState } from "@/components/ui";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, subtotal, toast } = useStore();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const delivery = subtotal === 0 ? 0 : subtotal >= 1500 ? 0 : 80;
  const apply = () => {
    if (code.trim().toUpperCase() === "GLOW10") { setDiscount(Math.round(subtotal * 0.1)); toast("Coupon GLOW10 applied — 10% off"); }
    else if (code.trim().toUpperCase() === "FLAT200" && subtotal >= 2000) { setDiscount(200); toast("Coupon FLAT200 applied"); }
    else toast("Invalid or ineligible coupon", "error");
  };
  if (cart.length === 0)
    return <div className="container-luxe py-10"><EmptyState icon={<ShoppingBag size={26} />} title="Your beauty bag is empty." body="Discover best sellers and build your ritual." action={<Link href="/shop" className="btn-primary">Start Shopping</Link>} />
      <h2 className="h-serif mt-6 text-2xl">Trending now</h2><div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}</div></div>;
  return (
    <div className="container-luxe py-10">
      <h1 className="h-serif text-4xl">Your Bag <span className="text-lg text-muted">({cart.length} items)</span></h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((c) => (
            <div key={c.product.id} className="flex gap-4 rounded-2xl border border-line bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}<img src={c.product.image} alt={c.product.name} className="h-28 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex justify-between gap-2"><div><p className="text-[11px] uppercase tracking-widest text-muted">{c.product.brand}</p><Link href={`/products/${c.product.slug}`} className="font-serif text-lg leading-snug hover:underline">{c.product.name}</Link></div><button onClick={() => removeFromCart(c.product.id)} aria-label="Remove" className="text-muted hover:text-red-600"><Trash2 size={17} /></button></div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center border border-line rounded-full"><button onClick={() => updateQty(c.product.id, c.qty - 1)} className="px-3 py-2" aria-label="Decrease"><Minus size={14} /></button><span className="w-7 text-center text-sm font-medium">{c.qty}</span><button onClick={() => updateQty(c.product.id, c.qty + 1)} className="px-3 py-2" aria-label="Increase"><Plus size={14} /></button></div>
                  <p className="font-semibold">{taka(c.product.price * c.qty)}</p>
                </div>
                <button className="mt-2 inline-flex items-center gap-1 text-xs text-muted hover:text-cocoa"><Bookmark size={12} /> Save for later</button>
              </div>
            </div>
          ))}
          <Link href="/shop" className="inline-flex items-center gap-1 text-sm font-medium link-underline">← Continue shopping</Link>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
          <h3 className="font-serif text-xl">Order Summary</h3>
          <div className="mt-4 flex"><input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter coupon code (try GLOW10)" className="input-luxe !py-2.5" aria-label="Coupon" /><button onClick={apply} className="ml-2 shrink-0 bg-cocoa px-5 text-xs uppercase tracking-widest text-ivory hover:bg-ink">Apply</button></div>
          <div className="mt-5 space-y-2 text-sm"><div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{taka(subtotal)}</span></div><div className="flex justify-between"><span className="text-muted">Discount</span><span className="text-emerald-600">− {taka(discount)}</span></div><div className="flex justify-between"><span className="text-muted">Delivery</span><span>{delivery === 0 ? "Free" : taka(delivery)}</span></div><div className="flex justify-between border-t border-line pt-3 text-base font-semibold"><span>Total</span><span>{taka(subtotal - discount + delivery)}</span></div></div>
          <Link href="/checkout" className="btn-primary mt-5 w-full">Proceed to Checkout <ArrowRight size={15} /></Link>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted"><Tag size={12} /> GLOW10 = 10% off · FREESHIP over ৳1,500</p>
        </aside>
      </div>
    </div>
  );
}
