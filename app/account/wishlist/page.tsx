"use client";
import Link from "next/link";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";
import { products } from "@/data/products";
import { taka } from "@/lib/utils";
import { Stars, EmptyState } from "@/components/ui";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const list = products.filter((p) => wishlist.includes(p.id));
  if (!list.length) return <div><h1 className="h-serif text-3xl">Wishlist</h1><EmptyState icon={<Heart size={24} />} title="Your wishlist is waiting for something beautiful." body="Save products you love and shop them later." action={<Link href="/shop" className="btn-primary">Explore Products</Link>} /></div>;
  return (
    <div>
      <h1 className="h-serif text-3xl">Wishlist <span className="text-lg text-muted">({list.length})</span></h1>
      <div className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-3">
        {list.map((p) => (
          <div key={p.id} className="card-luxe overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt={p.name} className="aspect-[4/3] w-full object-cover" />
            <div className="p-4"><p className="text-[11px] uppercase tracking-widest text-muted">{p.brand}</p><Link href={`/products/${p.slug}`} className="font-serif text-[17px] hover:underline">{p.name}</Link>
              <div className="mt-1 flex items-center gap-1"><Stars value={p.rating} size={12} /><span className="text-xs">{p.rating}</span></div>
              <p className="mt-1 font-semibold">{taka(p.price)}</p>
              <p className={`mt-1 text-xs ${p.stock < 50 ? "text-amber-600" : "text-emerald-600"}`}>{p.stock < 50 ? "Low stock" : "In stock"}</p>
              <div className="mt-3 flex gap-2"><button onClick={() => addToCart(p)} className="flex flex-1 items-center justify-center gap-1 bg-cocoa py-2.5 text-[11px] uppercase tracking-widest text-ivory"><ShoppingBag size={13} /> Add</button><button onClick={() => toggleWishlist(p.id)} aria-label="Remove" className="border border-line px-3 hover:text-red-600"><Trash2 size={15} /></button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
