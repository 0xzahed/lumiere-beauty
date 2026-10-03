"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATS = ["Skincare", "Makeup", "Body Care", "Hair Care", "Fragrance", "Beauty Tools"];
const BRANDS = ["Lumière Lab", "Aurelle", "Éclat", "Lumière Beauty", "Maison Lumière", "Lumière Tools"];
const SORTS = ["Featured", "Newest", "Best Rated", "Price Low to High", "Price High to Low"];

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-20 text-center text-muted">Loading boutique…</div>}>
      <ShopInner />
    </Suspense>
  );
}

function ShopInner() {
  const sp = useSearchParams();
  const initCat = sp.get("category") ?? "";
  const initConcern = sp.get("concern") ?? "";
  const initFilter = sp.get("filter") ?? "";
  const [cat, setCat] = useState(initCat);
  const [brand, setBrand] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [concern, setConcern] = useState(initConcern);
  const [sort, setSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);

  const list = useMemo(() => {
    let l = [...products];
    if (initFilter === "best") l = l.filter((p) => p.isBestSeller || p.badge === "Best Seller");
    if (initFilter === "new") l = l.filter((p) => p.isNew || p.badge === "New");
    if (cat) l = l.filter((p) => p.category === cat);
    if (brand.length) l = l.filter((p) => brand.includes(p.brand));
    if (concern) l = l.filter((p) => p.concerns.includes(concern));
    l = l.filter((p) => p.price <= maxPrice);
    if (sort === "Price Low to High") l.sort((a, b) => a.price - b.price);
    if (sort === "Price High to Low") l.sort((a, b) => b.price - a.price);
    if (sort === "Best Rated") l.sort((a, b) => b.rating - a.rating);
    if (sort === "Newest") l.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    return l;
  }, [cat, brand, maxPrice, concern, sort, initFilter]);

  const filters = (
    <div className="space-y-6">
      <div><h4 className="text-xs font-semibold uppercase tracking-widest">Category</h4><div className="mt-2 space-y-1.5">{["", ...CATS].map((c) => <button key={c} onClick={() => setCat(c)} className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${cat === c ? "bg-cocoa text-ivory" : "hover:bg-blush/60"}`}>{c === "" ? "All" : c}</button>)}</div></div>
      <div><h4 className="text-xs font-semibold uppercase tracking-widest">Brand</h4><div className="mt-2 space-y-1.5">{BRANDS.map((b) => <label key={b} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={brand.includes(b)} onChange={() => setBrand(brand.includes(b) ? brand.filter((x) => x !== b) : [...brand, b])} className="accent-[#352824]" />{b}</label>)}</div></div>
      <div><h4 className="text-xs font-semibold uppercase tracking-widest">Max price: ৳{maxPrice}</h4><input type="range" min={500} max={2500} step={50} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="mt-2 w-full accent-[#352824]" aria-label="Max price" /></div>
      <div><h4 className="text-xs font-semibold uppercase tracking-widest">Concern</h4><div className="mt-2 flex flex-wrap gap-1.5">{["", "Acne", "Dark Spots", "Dryness", "Dullness", "Redness", "Aging"].map((c) => <button key={c} onClick={() => setConcern(c)} className={`rounded-full border px-3 py-1.5 text-xs ${concern === c ? "border-cocoa bg-cocoa text-ivory" : "border-line bg-white"}`}>{c === "" ? "All" : c}</button>)}</div></div>
      {(cat || brand.length || concern) && <button onClick={() => { setCat(""); setBrand([]); setConcern(""); setMaxPrice(2500); }} className="text-xs underline underline-offset-4">Clear all filters</button>}
    </div>
  );

  return (
    <div className="container-luxe py-10">
      <p className="eyebrow">The boutique</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <h1 className="h-serif text-4xl sm:text-5xl">Shop All Beauty</h1>
        <p className="text-sm text-muted">{list.length} Products</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm lg:hidden"><SlidersHorizontal size={16} /> Filters</button>
        <div className="ml-auto flex items-center gap-2 text-sm"><span className="text-muted hidden sm:inline">Sort by</span><div className="relative"><select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none rounded-full border border-line bg-white py-2.5 pl-4 pr-9 text-sm outline-none" aria-label="Sort"><option>Featured</option><option>Newest</option><option>Best Rated</option><option>Price Low to High</option><option>Price High to Low</option></select><ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" /></div></div>
      </div>
      {showFilters && <div className="mt-4 rounded-2xl border border-line bg-white p-5 lg:hidden">{filters}</div>}
      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5">{filters}</div></aside>
        <div>
          {list.length === 0 ? <div className="rounded-2xl border border-dashed border-line bg-white p-16 text-center text-muted">No products match your filters.</div> : (
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 2xl:grid-cols-4">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          )}
        </div>
      </div>
    </div>
  );
}
