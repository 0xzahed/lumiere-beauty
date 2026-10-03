import { products } from "@/data/products";
import { taka } from "@/lib/utils";

export default function InventoryPage() {
  const low = products.filter((p) => p.stock < 100);
  return (
    <div>
      <h1 className="font-serif text-3xl">Inventory</h1>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-line bg-ivory p-5"><p className="font-serif text-3xl">{products.reduce((s, p) => s + p.stock, 0)}</p><p className="text-xs uppercase tracking-widest text-muted">Total units</p></div>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5"><p className="font-serif text-3xl text-red-700">{low.length}</p><p className="text-xs uppercase tracking-widest text-red-500">Low stock</p></div>
        <div className="rounded-2xl border border-line bg-ivory p-5"><p className="font-serif text-3xl">0</p><p className="text-xs uppercase tracking-widest text-muted">Out of stock</p></div>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead><tr className="border-b border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-4 py-3">Product</th><th className="px-4 py-3">SKU</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Reserved</th><th className="px-4 py-3">Status</th></tr></thead><tbody>{products.map((p) => <tr key={p.id} className={`border-b border-line/60 ${p.stock < 80 ? "bg-red-50/50" : ""}`}><td className="px-4 py-3 font-medium">{p.name}</td><td className="px-4 py-3 font-mono text-xs text-muted">{p.sku}</td><td className="px-4 py-3 font-bold">{p.stock}</td><td className="px-4 py-3 text-muted">{Math.round(p.stock * 0.08)}</td><td className="px-4 py-3">{p.stock < 80 ? <span className="rounded-full bg-red-100 px-2.5 py-1 text-[11px] text-red-700">Low stock</span> : <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] text-emerald-700">Healthy</span>}</td></tr>)}</tbody></table></div></div>
    </div>
  );
}
