"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { coupons as initial } from "@/data/extras";
import { useStore } from "@/lib/store";

export default function AdminCoupons() {
  const { toast } = useStore();
  const [list, setList] = useState(initial);
  const [code, setCode] = useState("");
  const [val, setVal] = useState(10);
  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="font-serif text-3xl">Coupons</h1><span className="text-sm text-muted">{list.filter((c) => c.active).length} active</span></div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-line bg-ivory p-4">
        <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="CODE" className="input-luxe !w-40" aria-label="Code" />
        <input value={val} onChange={(e) => setVal(+e.target.value)} type="number" className="input-luxe !w-28" aria-label="Value" />
        <button onClick={() => { if (!code) return toast("Enter a code", "error"); setList([{ code, type: "percent", value: val, minOrder: 1000, expiry: "2026-12-31", usageLimit: 500, used: 0, active: true }, ...list]); setCode(""); toast(`Coupon ${code} created`); }} className="inline-flex items-center gap-1 rounded-full bg-cocoa px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ivory"><Plus size={14} /> Create</button>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead><tr className="border-b border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-4 py-3">Code</th><th className="px-4 py-3">Discount</th><th className="px-4 py-3">Min Order</th><th className="px-4 py-3">Usage</th><th className="px-4 py-3">Expiry</th><th className="px-4 py-3">Status</th></tr></thead><tbody>{list.map((c) => <tr key={c.code} className="border-b border-line/60"><td className="px-4 py-3 font-mono font-bold">{c.code}</td><td className="px-4 py-3">{c.type === "percent" ? `${c.value}%` : `৳${c.value}`}</td><td className="px-4 py-3">৳{c.minOrder}</td><td className="px-4 py-3">{c.used}/{c.usageLimit}</td><td className="px-4 py-3 text-muted">{c.expiry}</td><td className="px-4 py-3"><button onClick={() => { setList(list.map((x) => x.code === c.code ? { ...x, active: !x.active } : x)); toast("Coupon status toggled"); }} className={`rounded-full px-3 py-1 text-xs font-medium ${c.active ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>{c.active ? "Active" : "Inactive"}</button></td></tr>)}</tbody></table></div></div>
    </div>
  );
}
