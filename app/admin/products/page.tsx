"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Eye, Pencil, Copy, Trash2, Plus } from "lucide-react";
import { products as initial } from "@/data/products";
import { taka } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";
import { useStore } from "@/lib/store";
import { Product } from "@/types";

export default function AdminProducts() {
  const { toast } = useStore();
  const [list, setList] = useState<Product[]>(initial);
  const [q, setQ] = useState("");
  const filtered = list.filter((p) => (p.name + p.brand + p.category).toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h1 className="font-serif text-3xl">Products <span className="text-base text-muted">({filtered.length})</span></h1><p className="text-sm text-muted">Manage catalog, pricing and availability.</p></div><Link href="/admin/products/new" className="inline-flex items-center gap-1.5 rounded-full bg-cocoa px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ivory"><Plus size={14} /> Add Product</Link></div>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-line bg-ivory px-4 py-3"><Search size={17} className="text-muted" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products, brand, category..." className="w-full bg-transparent text-sm outline-none" aria-label="Search products" /></div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory">
        <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm">
          <thead><tr className="border-b border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-4 py-3">Product</th><th className="px-4 py-3">Category</th><th className="px-4 py-3">Price</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Rating</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Actions</th></tr></thead>
          <tbody>{filtered.map((p) => <tr key={p.id} className="border-b border-line/60 hover:bg-cream/40">
            <td className="px-4 py-3"><div className="flex items-center gap-3">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt="" className="h-11 w-11 rounded-lg object-cover" /><div><p className="font-medium line-clamp-1">{p.name}</p><p className="text-xs text-muted">{p.brand} · {p.sku}</p></div></div></td>
            <td className="px-4 py-3 text-muted">{p.category}</td><td className="px-4 py-3 font-semibold">{taka(p.price)}</td>
            <td className="px-4 py-3"><span className={p.stock < 50 ? "font-semibold text-red-600" : ""}>{p.stock}</span>{p.stock < 50 && <span className="ml-1 rounded bg-red-50 px-1.5 py-0.5 text-[10px] text-red-600">LOW</span>}</td>
            <td className="px-4 py-3">★ {p.rating}</td><td className="px-4 py-3"><StatusBadge status="active" /></td>
            <td className="px-4 py-3"><div className="flex justify-end gap-1"><Link href={`/products/${p.slug}`} className="rounded-lg p-2 hover:bg-cream" aria-label="View"><Eye size={16} /></Link><button onClick={() => toast(`Editing ${p.name}`)} className="rounded-lg p-2 hover:bg-cream" aria-label="Edit"><Pencil size={16} /></button><button onClick={() => { setList([...list, { ...p, id: p.id + "-copy", name: p.name + " (Copy)" }]); toast("Product duplicated"); }} className="rounded-lg p-2 hover:bg-cream" aria-label="Duplicate"><Copy size={16} /></button><button onClick={() => { setList(list.filter((x) => x.id !== p.id)); toast("Product deleted"); }} className="rounded-lg p-2 hover:bg-red-50 hover:text-red-600" aria-label="Delete"><Trash2 size={16} /></button></div></td>
          </tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
